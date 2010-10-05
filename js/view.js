$(document).ready(function() {
	
getTimer();
});
	
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
			$('#countdown').html(res['data']);				
			
			
			//console.log(res);
		},
		dataType : "json"
	});
	
}

function getTeams() {
	$.ajax({
		url : "ajax/getTeams.php",
		success : function(result) {
			for (var teamId in result){
				var row = $("<tr>");
				$("<td>").html(result[teamId]['name']).appendTo(row);
				var input = $("<input>").attr("type", "text").attr("value", 0).attr("name", "team-" + teamId).addClass("addPoints");
				$("<td>").append(input).appendTo(row);
				$("<td>").html(result[teamId]['points']).addClass("totalScore").appendTo(row);
				$("#teams tbody").append(row);
			}
		},
		dataType : "json"
	})
}


function getResult(){
	$.ajax( {
		url : "ajax/getResult.php",
		success : function(result) {
			setNextQuestion(result['state']);
			$('#countdown, #points, #result').hide();
			$('#result').show();
			var teams = $("<div>");
			for (var lag in result['data']){
				//uppdatera poängen obs!
				var div = $("<div>").addClass("team");
				$("<h2>").addClass("teamName").html(lag).appendTo(div);
				$("<p>").addClass("teamPoints").html(result['data'][lag]).appendTo(div);
				teams.append(div);
			}
			$("#result .teams").html(teams);
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
		window.setTimeout("getResult();", 2000);
	}
	if (state == "getTimer"){
		window.setTimeout("getTimer();", 1000);
	}
	if (state == "getPoints"){
		window.setTimeout("getPoints();", 750);
	}
}

