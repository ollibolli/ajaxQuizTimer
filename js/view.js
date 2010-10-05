var timeId;
var time;
$(document).ready(function() {
	

	checkState();
	getTimer();
});

function checkState(){
	$.ajax( {
		url : "ajax/state.php",
		success : function(result) {
			console.log(result)
			if (result == "getResult"){
				getResult();
			}
			if (result== "getTimer"){
				getTimer();
			}
			if (result== "getPoints"){
				getPoints();
			}
			window.setTimeout("checkState();", 250);
		},
		dataType : "json"
	});
}
	
function getTimer(){
	var res = 0;
	$.ajax( {
		url : "ajax/getTimer.php",
		success : function(result) {
			res = result;	
			setNextQuestion(res['state']);
			$('#countdown').show();
			$('#result').hide();
			$('#points').hide();
			if (res['data']<=0){
				res['data']=0;
			}
			timeId = window.setTimeout('time=time - 1;',1000);
			$('#countdown').html(res['data']);				
			
			
			console.log(res);
		},
		dataType : "json"
	});
	
}

function getResult(){
	$.ajax( {
		url : "ajax/getResult.php",
		success : function(result) {
			res = result;	
			setNextQuestion(res['state']);
			$('#result').show();
			$('#countdown').hide();
			$('#points').hide();			
			$('#result_tabel_head').html('');
			$('#result_tabel_body').html('');
			for (var lag in res['data']){
				$('#result_tabel_head').append('<th>'+ lag + '</th>');
				$('#result_tabel_body').append('<th>'+res['data'][lag] + '</th>');
			}
		},
		dataType : "json"
	});
}

function getPoints(){
	$.ajax( {
		url : "ajax/getPoints.php",
		success : function(result) {
			res = result;	
			setNextQuestion(res['state']);
			$('#points').show();
			$('#result').hide();
			$('#countdown').hide();
			
			$('#points_tabel_head').html('');
			$('#points_tabel_body').html('');
			for (var lag in res['data']){
				$('#points_tabel_head').append('<th>'+ lag + '</th>');
				$('#points_tabel_body').append('<th>'+res['data'][lag] + '</th>');
			}
		},
		dataType : "json"
	});
}

function setNextQuestion(state){
	if (state == "getResult"){
		window.setTimeout("getResult();", 1500);
		window.clearTimeout(timeId);
	}
	if (state == "getTimer"){
		window.setTimeout("getTimer();", 250);
	}
	if (state == "getPoints"){
		window.setTimeout("getPoints();", 750);
		window.clearTimeout(timeID);
	}
}

