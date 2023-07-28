var posY = 0;
var qtyUPDOWN = 0;

window.onload = function() {
	loadElementsQty();

    // add eventListener for keydown
    document.addEventListener('keydown', function(e) {
    	switch (e.keyCode) {
    	case 10009: //RETURN button
    	case 37: //LEFT arrow
    		window.location.reload();
    		break;
    	case 38: //UP arrow
    		navigationUpDownRemoteControl(1);
    		break;
    	case 40: //DOWN arrow
    		navigationUpDownRemoteControl(0);
    		break;
    	case 39: //RIGHT arrow
    		break;
    	case 403: //Color red
    	    tizen.application.launch("RN1MCdNq8t.Netflix", onSuccess("Netflix"), onError);
    		break;
    	case 405: //Color yellow
    	    tizen.application.launch("of2NNL1lpu.TestPlatform7", onSuccess("TestPlatform7"), onError);
    		break;
    	case 404: //Color green
    	    tizen.application.launch("MtylLZUC5W.AnalogWatch", onSuccess("AnalogWatch"), onError);
    	    //var app = tizen.application.getCurrentApplication();
    	    //console.log("Current application's app id is " + app.appInfo.id);
    		//alert("Hola " + app.appInfo.id);
    		break;
    	case 13: //OK button
    		break;
    	default:
    		console.log('Key code : ' + e.keyCode);
			//tizen.application.getCurrentApplication().exit();
    		break;
    	}
    });
};

function loadElementsQty(){
	qtyUPDOWN = $(".btn-controller").length;
	//console.log(qtyUPDOWN);
}

function navigationUpDownRemoteControl(isUp){
	if(isUp === 0 && posY >= 0 && posY < qtyUPDOWN - 1){
		posY = posY + 1;
	}else if(isUp === 1 && posY <= qtyUPDOWN - 1 && posY > 0){
		posY = posY - 1;
	}

	//console.log(posY);
	$(".btn-controller")[posY].focus();
}

function btnCarrusel(){
	$("body").load("./pages/carrusel.html");
}

function btnStreaming(){
	$("body").load("./pages/streaming.html");
}

function onSuccess (appName) {
    console.log("App Launched");
	alert(appName + " Launch " );
}

function onError () {
    console.log("Cannot Launch");
	alert("Cannot Launch " );
}