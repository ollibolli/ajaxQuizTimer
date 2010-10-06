var isTeamFetched = false;

$(document).ready(function() {	
	getTimer();
});
	
function getTimer(){
	var res = 0;
	$.ajax( {
		url : "ajax/getTimer.php",
		success : function(result) {
			setNextQuestion(result['state']);
			$('#counter, #points, #result').hide();
			isTeamFetched = false;
			$('#counter').show();
			var timer = result['data'];
			if (timer <= 0){
				timer = 0;
			}
			if (timer > 60) {
				timer = Math.floor(timer/60) + ":" + timer%60;
			}
			$('#countdown').html(timer);
		},
		dataType : "json"
	});
	
}

function getTeams() {
	$.ajax({
		url : "ajax/getTeams.php",
		success : function(result) {
			var teams = $("<div>").addClass("teams").append("<h1>Resultat</h1>");
			for (var teamId in result['data']){
				isTeamFetched = true;
				var div = $("<div>").addClass("team");
				$("<h2>").addClass("teamName").html(result['data'][teamId]['name']).appendTo(div);
				$("<p>").addClass("teamPoints").html("...").appendTo(div);
				div.appendTo(teams);
			}
			$("#result").html(teams);
		},
		dataType : "json"
	})
}


function getResult(){
	$.ajax( {
		url : "ajax/getResult.php",
		success : function(result) {
			setNextQuestion(result['state']);
			$('#counter, #points, #result').hide();
			$('#result').show();
			if (isTeamFetched == false) {
				getTeams();
			}
			for (var teamId in result['data']){
				$(".team:eq("+teamId+")").find(".teamPoints").html(result['data'][teamId]);
			}
		},
		dataType : "json"
	});
}

function getPoints(){
	$.ajax({
		url : "ajax/getTeams.php",
		success : function(result) {
			setNextQuestion(result['state']);
			
			$('#counter, #points, #result').hide();
			isTeamFetched = false;
			$('#points').show();
			
			var teams = $("<div>").addClass("teams");
			teams.append("<h1>Total poängställning</h1>");
			for (var teamId in result['data']){
				var div = $("<div>").addClass("team");
				$("<h2>").addClass("teamName").html(result['data'][teamId]['name']).appendTo(div);
				$("<p>").addClass("teamPoints").html(result['data'][teamId]['points']).appendTo(div);
				teams.append(div);
			}
			$("#points").html(teams);
		},
		dataType : "json"
	})
}

function setNextQuestion(state){
	if (state == "getResult"){
		window.setTimeout("getResult();", 2500);
	}
	if (state == "getTimer"){
		window.setTimeout("getTimer();", 500);
	}
	if (state == "getPoints"){
		window.setTimeout("getPoints();", 2500);
	}
}

