$(document).ready(function() {
	//getTimer();
	
	$("#start_timer").submit(function() {
		$.ajax( {
			url : $(this).attr("action"),
			data : $(this).serialize(),
			success : function(result) {
			//console.log(result);
		},
		dataType : "json"
		});
		//getTimer();
		return false;
	})
	
	/* PAUSE FUNCTION */
	var pause = false;
	var clicks = 0;
	$("#pause_timer").click(function() {
		$.ajax({
			url : "ajax/pauseTimer.php",
			data : !pause,
			success : function(result) {
				clicks++;
				if (clicks %2 == 1) {
					$("#pause_timer").text("Play");
				} else {
					$("#pause_timer").text("Pause");
				}
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
	
	$("#setResult").submit(function() {
		$.ajax( {
			url : $(this).attr("action"),
			data : $(this).serialize(),
			success : function(result) {
				$.ajax({
					url : "ajax/getResult.php",
					success : function(data) {
						$(".addPoints").attr("value", 0);
						$("#teams tbody tr").each(function() {
							var i = $(this).index();
							if (parseInt(data["data"][i]) > 0) {
								$(this).hide().fadeIn(500);
								$(this).children(".totalScore").text( parseInt($(this).children(".totalScore").text()) + parseInt(data["data"][i]) );
							}
						})
					},
					dataType : "json"
				})
			}
		});
		return false;
	})
	
	
	$("#state_timer").click();
	
});

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

function getLastTeam() {
	var row;
	$.ajax({
		url : "ajax/getTeams.php",
		success : function(result) {
			for (var team in result['data']){
				row = $("<tr>");
				var name = $("<td>").html(result[team]['name']);
				var numberOfTeams = $(".addPoints").length;
				var input = $("<input>").attr("type", "text").attr("value", 0).attr("name", "team-" + 1).addClass("addPoints");
				var point = $("<td>").html(result[team]['points']).addClass("totalScore");
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
			window.setTimeout("getTimer();", 1000);
			$('#countdown').html(result['data']);
			//console.log(result);
		},
		dataType : "json"
	});
	
}