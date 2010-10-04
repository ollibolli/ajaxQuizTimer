$(document).ready(function() {
	
	var timeLeft = 1;
	getTimer();
	var timeId = window.setInterval("timeLeft = getTimer();", 2000);
	if (timeLeft == 0) {
		window.clearInterval(timeId);
	}
	
	
	$("#start_timer").submit(function() {
		$.ajax( {
			url : $(this).attr("action"),
			data : $(this).serialize(),
			success : function(result) {
				console.log(result);
			},
			dataType : "json"
		});
		return false;
	})
	
	
	/* PAUSE FUNCTION */
	var pause = false;
	$("#pause_timer").click(function() {
		$.ajax({
			url : "ajax/pauseTimer.php",
			data : !pause,
			success : function(result) {
				console.log("Pause: " + result);
			}
		})
	})
	
	
	
	
	/* TEAMS */
	$("a.addTeam").click(function() {
		$("#addTeam").toggle();
	});
	$("#addTeam form").submit(function() {
		$.ajax( {
			url : $(this).attr("action"),
			data : $(this).serialize(),
			success : function(result) {
				console.log(result);
			}
		});
		return false;
	})
	
	//localStorage.setItem("teams", jQuery.parseJSON('{ "name": "Lag 1", "points": 0 }'));
	localStorage.teams = new Team("Lag 1");
	myTeam = new Team("Lightnings");
	console.log(myTeam);
	localStorage.time = 0;
	var timmmer = window.setInterval("localStorage.time++", 1000);
	var getTeamTimer = window.setInterval("console.log(localStorage.time)", 2000);

})


	//localStorage.teams = 
	// console.log());


function getTimer(){
	var res = 100;
	$.ajax( {
		url : "ajax/getTimer.php",
		success : function(result) {
			res = result;
			$('#countdown').html(result);
		},
		dataType : "json"
	});
	return res;
}