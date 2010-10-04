$(document).ready(function() {

	var timeLeft=getTimer();
	//window.setTimeout("getTimer();", 1000);

});

function getTimer(){
	var res = 0;
	$.ajax( {
		url : "ajax/getTimer.php",
		success : function(result) {
			res = result;	
			// 
			setNextQuestion(res['state']);
			$('#countdown').html(res['data']);
			console.log(res);
		},
		dataType : "json"
	});
	
}

function getResult(){
	setNextQuestion("getTimer");
}

function getPoints(){
	setNextQuestion("getTimer");	
	console.log("getPoints");
}

function setNextQuestion(state){
	if (state = "getTimer"){
		window.setTimeout("getTimer();", 1000);
	}
	if (state = "getResult"){
		//window.setTimeout("getResult();", 1000);
	}
}