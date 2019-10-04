import React, { Component } from 'react';
import { connect } from 'react-redux';
import { injectIntl, intlShape } from 'react-intl';
import PropTypes from 'prop-types';
import xhr from 'xhr';
import pify from 'pify';
import Helmet from 'react-helmet';
import FormContainer from '@starbucks/pattern-library/lib/components/form-container/';

import { parseXhrResponseOrThrow } from 'shared/app/utils/fetch-utils';
import {
  addNotification as addNotificationAction,
  configSelector,
  showOverlay as showOverlayAction
} from 'shared/app/shell';
import {
  signalSignIn,
  signalSignInError as signalSignInErrorAction,
  signalSignInSuccess
} from '../../state/action-creators';
import { configBffBaseUrlSelector } from 'shared/app/state/selectors/config';
import {
  currentCountryCodeSelector,
  defaultSigninRedirectSelector
} from 'shared/app/state/selectors/locales';
import { persistSessionStarCode as persistSessionStarCodeAction } from 'shared/app/bundles/account-settings';
import { platformSelector } from 'shared/app/state/selectors/risk';
import SignInColumn from '../signin-column';
import AccountCreateCTA from '../account-create-cta';
import MarketRedirectOverlay from '../market-redirect-overlay';
import Iovation from 'shared/app/components/iovation';
import { trackEvent } from 'shared/app/utils/uo-tracking';
import {
  storeCredential,
  attemptAutoSignin
} from 'shared/app/utils/credential-management';
import { getJoinUrl } from '../../utils/get-join-url';

import messages from './messages';
import getReturnUrlFromWindow from 'shared/app/utils/get-return-url-from-window';
import getWindow from 'shared/app/utils/get-window';
import IS_BROWSER from 'shared/app/shell/utils/is-browser';
import {
  isChaseCreditRequestSelector,
  isChasePrepaidRequestSelector
} from 'shared/app/state/selectors/chase-cards-selectors';
import { get } from 'lodash';
import { showEnterCodeOverlayForLogin as showEnterCodeOverlayForLoginAction } from 'shared/app/bundles/mfa/state/show-overlay-action-creators';

import config from 'config';
const OAUTH_MFA_CHALLENGE_ERROR_CODE = config.get(
  'universal.oauthMfaChallengeErrorCode'
);

const promisedXhr = pify(xhr);
const uoCategory = 'Sign In';

const fields = {
  username: {},
  password: {},
  rememberMe: {
    required: false,
    input: {
      checked: true
    }
  }
};

const win = IS_BROWSER ? getWindow() : null;

export class SignIn extends Component {
  constructor(props) {
    super(props);
    this.handleSubmitError = this.handleSubmitError.bind(this);
    this.checkForMFAChallenge = this.checkForMFAChallenge.bind(this);
    this.postForm = this.postForm.bind(this);

    this.state = {
      errorMessageId: null,
      isFetching: false,
      username: null,
      password: null,
      returnUrl: getReturnUrlFromWindow()
    };
  }

  componentDidMount() {
    const { market } = this.props;
    this.getReputationInformation()
      .then(reputation => attemptAutoSignin({ market, reputation }))
      .then(() => {
        trackEvent(uoCategory, 'Autosignin - success');
        win.location.href = this.getRedirectUrl();
      })
      .catch(() => {
        /* Swallow errors since autoSignin is a progressive enhancement */
      });
  }

  componentWillUnmount() {
    this.props.signalSignInSuccess();
  }

  getReputationInformation() {
    return this.$iovation.getBlackBoxValue().then(deviceFingerprint => ({
      reputation: {
        deviceFingerprint
      }
    }));
  }

  getRedirectUrl() {
    return this.state.returnUrl || this.props.defaultRedirectUrl;
  }

  handleJoinClick() {
    win.location.href = getJoinUrl(win.location.search);
  }

  handleSubmit({ username, password, rememberMe }) {
    const { market } = this.props;

    this.setState({
      errorMessageId: null,
      isFetching: true,
      username,
      password
    });
    this.props.signalSignIn();

    trackEvent(uoCategory, 'Sign In Frap Button - click');

    return this.getReputationInformation()
      .then(reputation => {
        return Object.assign(
          {},
          {
            username,
            password,
            rememberMe
          },
          { market },
          reputation
        );
      })
      .then(this.postForm)
      .then(() =>
        Promise.all([
          storeCredential({
            username,
            password
          }),
          trackEvent(uoCategory, 'Sign In Form - submit success')
        ])
      )
      .then(this.props.persistSessionStarCode)
      .then(() => {
        this.setState({ isFetching: false });
        win.location.href = this.getRedirectUrl();
      })
      .catch(this.checkForMFAChallenge)
      .catch(this.handleSubmitError);
  }

  postForm(data) {
    const { bffBaseUrl } = this.props;
    return promisedXhr({
      url: `${bffBaseUrl}/bff/account/signin`,
      json: data,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST'
    }).then(parseXhrResponseOrThrow);
  }

  checkForMFAChallenge(error) {
    const { signalSignInError, showEnterCodeOverlayForLogin } = this.props;
    signalSignInError(error.response.body);
    this.setState({ isFetching: false });

    const code = get(error, 'response.body.error');
    if (code === OAUTH_MFA_CHALLENGE_ERROR_CODE) {
      const { id: phoneId, phoneNumber, phoneSmsState } = get(
        error,
        'response.body.mfaChallengeMethods',
        {}
      );
      const { username, password } = this.state;

      showEnterCodeOverlayForLogin({
        username,
        password,
        phoneId,
        phoneNumber,
        phoneSmsState,
        onCodeSuccess: () => {
          this.setState({ isFetching: false });
          win.location.href = this.getRedirectUrl();
        }
      });
    } else {
      throw error;
    }
  }

  handleSubmitError(error) {
    const {
      intl: { formatMessage },
      showOverlay,
      addNotification
    } = this.props;
    const messageId = get(error, 'response.body.messageId');

    trackEvent(uoCategory, 'Sign In Form - submit error', {
      errorDescription: messages.errorMessage.defaultMessage
    });

    if (messageId === 'invalidMarketError') {
      showOverlay({
        content: MarketRedirectOverlay,
        name: 'market-redirect'
      });
    } else if (messageId) {
      this.setState({ errorMessageId: messageId });
      this.$formContainer.focusOnFirstInvalid(['username']);
    } else {
      addNotification(formatMessage(messages.errorMessage), {
        autoClose: false,
        title: formatMessage(messages.errorHeading)
      });
    }
  }

  render() {
    const {
      intl: { formatMessage },
      updatedTermsOfUseUrl,
      onSubmit
    } = this.props;
    const submitHandler = onSubmit || this.handleSubmit.bind(this);
    const { isChaseCreditRequest, isChasePrepaidRequest } = this.props;

    return (
      <div>
        <Helmet title={formatMessage(messages.title)} />

        <FormContainer
          focusOnSubmitError
          fields={fields}
          onSubmit={submitHandler}
          ref={el => (this.$formContainer = el)}
        >
          <SignInColumn
            showErrorMessage={Boolean(this.state.errorMessageId)}
            errorHeading={formatMessage(messages.errorHeading)}
            errorMessage={formatMessage(messages.invalidCredentialsError)}
            isChaseCreditRequest={isChaseCreditRequest}
            isChasePrepaidRequest={isChasePrepaidRequest}
            isFetching={this.state.isFetching}
            updatedTermsOfUseUrl={updatedTermsOfUseUrl}
          />
        </FormContainer>

        <AccountCreateCTA
          onJoinClick={this.handleJoinClick}
          useSimplifiedCta={isChaseCreditRequest || isChasePrepaidRequest}
        />
        <Iovation ref={el => (this.$iovation = el)} />
      </div>
    );
  }
}

SignIn.propTypes = {
  intl: intlShape.isRequired,
  onSubmit: PropTypes.func
};

const select = state => ({
  bffBaseUrl: configBffBaseUrlSelector(state),
  isChaseCreditRequest: isChaseCreditRequestSelector(state),
  isChasePrepaidRequest: isChasePrepaidRequestSelector(state),
  market: currentCountryCodeSelector(state),
  platform: platformSelector(state),
  defaultRedirectUrl: defaultSigninRedirectSelector(state),
  updatedTermsOfUseUrl: configSelector(state).updatedTermsOfUseUrl
});

const actions = {
  addNotification: addNotificationAction,
  signalSignIn,
  signalSignInError: signalSignInErrorAction,
  signalSignInSuccess,
  showOverlay: showOverlayAction,
  showEnterCodeOverlayForLogin: showEnterCodeOverlayForLoginAction,
  persistSessionStarCode: persistSessionStarCodeAction
};

export default injectIntl(
  connect(
    select,
    actions
  )(SignIn)
);
