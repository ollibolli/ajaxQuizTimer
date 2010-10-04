$(document).ready(function() {

	var timeLeft=getTimer();
	//window.setTimeout("getTimer();", 1000);

})

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
	setNextQuestion("getTimer");	
	console.log("getPoints");
}

function setNextQuestion(state){
	if (state == "getResult"){
		window.setTimeout("getResult();", 1500);
	}
	if (state == "getTimer"){
		window.setTimeout("getTimer();", 750);
	}
	if (state == "getPoints"){
		window.setTimeout("getResult();", 750);
	}
}


function displayResult(result){
	for (var team in result['data']){
		row = $("<tr>");
		var name = ($("<td></td>")).addClass("name").html(result[team]['name']);
		var point = ($("<td></td>")).addClass("point").html(result[team]['points']);
		row.append(name).append(point);
	}
	$("# tbody").append(row);

}