$(document).ready(function() {
	//getTimer();
	
	$("#start_timer").submit(function() {
		$.ajax( {
			url : $(this).attr("action"),
			data : $(this).serialize(),
			success : function(result) {
			console.log(result);
		},
		dataType : "json"
		});
		//getTimer();
		return false;
	})
	
	/* PAUSE FUNCTION */
	var pause = false;
	$("#pause_timer").click(function() {
		$.ajax({
			url : "ajax/pauseTimer.php",
			data : !pause,
			success : function(result) {
				//console.log("Pause: " + result);
			}
		})
	})
	
	/* TEAMS */
	getTeams();
	
	$("a.addTeam").click(function() {
		$("#addTeam").toggle();
	});
	$("#addTeam form").submit(function() {
		$.ajax( {
			url : $(this).attr("action"),
			data : $(this).serialize(),
			success : function(result) {
				getLastTeam();
			}
		});
		return false;
	})
});

function getTeams() {
	$.ajax({
		url : "ajax/getTeams.php",
		success : function(result) {
			//var form = $("<form>").attr("action","ajax/setResult.php").prependTo("#teams table");
			for (var teamId in result){
				var row = $("<tr>");
				$("<td>").html(result[teamId]['name']).appendTo(row);
				var input = $("<input>").attr("type", "text").attr("value", 0).attr("name", "team-" + teamId).addClass("addPoints");
				$("<td>").append(input).appendTo(row);
				$("<td>").html(result[teamId]['points']).appendTo(row);
				$("#teams tbody").append(row);
			}
			//$("<input>").attr("type", "submit").attr("name", "submit").attr("value", "Spara").appendTo(form);
		},
		dataType : "json"
	})
}

function getLastTeam() {
	var row;
	$.ajax({
		url : "ajax/getTeams.php",
		success : function(result) {
			for (var team in result['data']){
				row = $("<tr>");
				var name = ($("<td></td>")).addClass("name").html(result[team]['name']);
				var point = ($("<td></td>")).addClass("point").html(result[team]['points']);
				row.append(name).append(point);
			}
			$("#result_tabel tbody").append(row);
		},
		dataType : "json"
	})
}

function getTimer(){
	var res = 0;
	$.ajax( {
		url : "ajax/getTimer.php",
		success : function(result) {
			window.setTimeout("getTimer();", 1000);
			$('#countdown').html(result['data']);
			//console.log(result);
		},
		dataType : "json"
	});
	
}
