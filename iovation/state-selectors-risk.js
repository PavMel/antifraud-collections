import { createSelector } from 'reselect';
import { configSelector } from './config';
import { currentCountryCodeSelector } from './locales';

export const platformSelector = createSelector(
  configSelector,
  config => config.universal.risk.platform
);

export const ccAgentNameSelector = createSelector(
  configSelector,
  config => config.universal.risk.ccAgentName
);

export const riskInformationSelector = createSelector(
  platformSelector,
  currentCountryCodeSelector,
  ccAgentNameSelector,
  (platform, market, ccAgentName) => ({ platform, market, ccAgentName })
);

// Iovation(device fingerprinting) variables
export const iovationGlobalNameSelector = createSelector(
  configSelector,
  config => config.universal.risk.deviceFingerprinting.iovationGlobalName
);

export const iovationMaxDelaySelector = createSelector(
  configSelector,
  config => config.universal.risk.deviceFingerprinting.maxDelay
);
