function webglPixels(){
	
	var canvas = document.createElement('canvas');
	var gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
	
	if(!gl)
		return false;
		
	gl.clearColor(0, 1, 0, 1);
	gl.clear(gl.COLOR_BUFFER_BIT);
	
	var pixels = new Uint8Array(gl.drawingBufferWidth * gl.drawingBufferHeight * 4);
	gl.readPixels(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight, gl.RGBA, gl.UNSIGNED_BYTE, pixels);
	
	var pc=0;
	
	for(var i=0; i<pixels.length; ++i){
		
		if(pixels[i]==255)
			++pc;
	}
	
	return (pc*2 == pixels.length);

}



function checkFakeUa(){
	
	  var ua = uaHttpUa.length>0 ? uaHttpUa.toLowerCase() : getBrowserInfo()[0].toLowerCase();
	    
	  var mobileDevice
      if (('ontouchstart' in window) ||
           (navigator.maxTouchPoints > 0) ||
           (navigator.msMaxTouchPoints > 0)) {
        mobileDevice = true
      } else {
        mobileDevice = false
      }
	    var is_ = false;
	    
	    if(ua=="chrome"){
		    
		    is_ = (!!window.chrome && !!window.chrome.webstore) || (!!window.chrome && !!mobileDevice) || navigator.userAgent.indexOf('CriOS')>0;
		    
		    return !is_;
	    }
	    
	    if(ua=="firefox"){
		    
		    is_ = typeof InstallTrigger !== 'undefined';
		    
		    return !is_;
	    }
	    
	    if(ua=="safari"){
		    
		    is_ = ("webkitConvertPointFromPageToNode" in window) || /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || safari.pushNotification);
		    
		    return !is_;
	    }
	    
	    if(ua=="opera"){
		    
		    is_ = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
		    
		    return !is_;
	    }
	    
	    if(ua=="ie"){
		    
		    is_ = /*@cc_on!@*/false || !!document.documentMode;
		    
		    return !is_;
	    }
	    
	    return is_;
	    
}


function canvas_test(){
	    
	    "use strict";
	    
	    var is_danger = false, ua_dec = 0;
	    var info = [];
	    
	    var ie = navigator.userAgent.match(/(msie|trident(?=\/))\/?\s*(\d+)/i);
	    
	    if (CanvasRenderingContext2D.prototype.getImageData.length !== 4 
	    	|| !CanvasRenderingContext2D.prototype.getImageData.toString().match(/^\s*function getImageData\s*\(\)\s*\{\s*\[native code\]\s*\}\s*$/) 
	    	|| (CanvasRenderingContext2D.prototype.getImageData.name !== "getImageData" && !ie)){
		    
		    ua_dec+=5;
		    
		    is_danger=true;
		    
		    info.push(["Detected fake canvas","Some tests shows that your canvas change default browser functionality of getImageData method"]);
		    
		
		}
		
		if(!cBlocker(0,0) || !cBlocker(1, 1) || !cBlocker2()){
			
			ua_dec+=10;
		    
		    is_danger=true;
		    
		    info.push(["Detected fake canvas","Failed to pass error test of canvas image"]);
		}
		
		if(!cKnownPixels(1) || !cKnownPixels(10)){
			
			ua_dec+=15;
		    
		    is_danger=true;
		    
		    info.push(["Detected fake canvas","Failed to pass read out test with known pixels"]);
		}
		
		if(!cReadOut() || !cDoubleReadOut()){
			
			ua_dec+=20;
		    
		    is_danger=true;
		    
		    info.push(["Detected fake canvas","Failed to pass double read out test with known pixels"]);
			
		}
		
		if(canvasProb > 16){
			
			info.push(["Detected fake canvas","Detected some salt in canvas output."]);
			
			ua_dec += 30;
			is_danger=true;
		}
	
		setDanger("canvas", is_danger, ua_dec, 0, info);
    }
    
    function cBlocker(x, y){
	    
	    "use strict";
	    
	    var canvas = document.createElement("canvas");
		var ctx = canvas.getContext("2d");
		
		if(!ctx)
			return false;

	try{
		ctx.getImageData(0, 0, x, y);
	}catch (err){
		try {
			err.name;
			err.toString();
		}
		catch (e){
			
			return false;
		}
	}
	
	
	return true;
    }
    
    function cBlocker2(){
	    
	"use strict";
	    
	try{
		CanvasRenderingContext2D.prototype.getImageData.apply(undefined, [0, 0, 1, 1]);
	}catch (err){
		try {
			err.name;
			err.toString();
		}
		catch (e){
			return false;
		}
	}
	
	return true;
    }
    
    function cKnownPixels(size){
	    
	    	"use strict";
	
			var canvas = document.createElement("canvas");
			canvas.height = size;
			canvas.width = size;
			var context = canvas.getContext("2d");
			if(!context)
				return false;
				
	context.fillStyle = "rgba(0, 127, 255, 1)";
	var pixelValues = [0, 127, 255, 255];
	context.fillRect(0, 0, canvas.width, canvas.height);
	var p = context.getImageData(0, 0, canvas.width, canvas.height).data;
	for (var i = 0; i < p.length; i += 1){
		if (p[i] !== pixelValues[i%4]){
			return false;
		}
	}
	return true;
    }
    
    function cReadOut(){
	    
	"use strict";
	
	var canvas = document.createElement("canvas");
	var context = canvas.getContext("2d");
	
	if(!context)
		return false;
		
	var imageData = context.getImageData(0, 0, canvas.width, canvas.height);
	for (let i = 0; i < imageData.data.length; i += 1){
		if (i % 4 !== 3){
			imageData.data[i] = Math.floor(256 * Math.random());
		}
		else {
			imageData.data[i] = 255;
		}
	}
	context.putImageData(imageData, 0, 0);
	
	var imageData1 = context.getImageData(0, 0, canvas.width, canvas.height);
	var imageData2 = context.getImageData(0, 0, canvas.width, canvas.height);
	for (let i = 0; i < imageData2.data.length; i += 1){
		if (imageData1.data[i] !== imageData2.data[i]){
			return false;
		}
	}
	return true;
    }
    
    
function cDoubleReadOut(){
	    
	"use strict";
	
	var canvas = document.createElement("canvas");
	var context = canvas.getContext("2d");
	
	if(!context)
		return false;
	
	var imageData = context.getImageData(0, 0, canvas.width, canvas.height);
	for (let i = 0; i < imageData.data.length; i += 1){
		if (i % 4 !== 3){
			imageData.data[i] = Math.floor(256 * Math.random());
		}
		else {
			imageData.data[i] = 255;
		}
	}

	var imageData1 = context.getImageData(0, 0, canvas.width, canvas.height);

	
	var canvas2 = document.createElement("canvas");
	var context2 = canvas2.getContext("2d");
	context2.putImageData(imageData1, 0, 0);
	var imageData2 = context2.getImageData(0, 0, canvas.width, canvas.height);

	for (let i = 0; i < imageData2.data.length; i += 1){
		if (imageData1.data[i] !== imageData2.data[i]){
		
			return false;
		}
	}
	return true;
	
}
