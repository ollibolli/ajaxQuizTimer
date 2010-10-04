$(document).ready(function() {
	getTimer();
	
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
				console.log("Pause: " + result);
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
			for (var team in result){
				/*
				var row = $("<tr>");
				var name = ($("<td></td>")).addClass("name").html(result[team]['name']);
				var point = ($("<td></td>")).addClass("point").html(result[team]['points']);
				row.append(name).append(point);
				$("#teams tbody").append(row);
				*/
				$("<td>").html(result[team]['name']).appendTo("#teams thead");
				
			}
		},
		dataType : "json"
	})
}

function getLastTeam() {
	var row;
	$.ajax({
		url : "ajax/getTeams.php",
		success : function(result) {
			for (var team in result){
				row = $("<tr>");
				var name = ($("<td></td>")).addClass("name").html(result[team]['name']);
				var point = ($("<td></td>")).addClass("point").html(result[team]['points']);
				row.append(name).append(point);
			}
			$("#teams tbody").append(row);
		},
		dataType : "json"
	})
}

function getTimer(){
	var res = 0;
	$.ajax( {
		url : "ajax/getTimer.php",
		success : function(result) {
			res = result;	
			// 
			window.setTimeout("getTimer();", 1000);
			$('#countdown').html(res['data']);
			console.log(res);
		},
		dataType : "json"
	});
	
}
