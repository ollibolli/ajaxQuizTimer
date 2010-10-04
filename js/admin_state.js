$(document).ready(function() {
	
	var timeLeft = getTimer();
	
	$("#start_timer").submit(function() {
		$.ajax( {
			url : $(this).attr("action"),
			data : $(this).serialize(),
			success : function(result) {
			console.log(result);
		},
		dataType : "json"
		});
		getTimer();
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
	});	
});

function getTimer(){
	var res = 0;
	$.ajax( {
		url : "ajax/getTimer.php",
		success : function(result) {
			$('#countdown').html(result);
			return res;
		},
		dataType : "json"
	});
	console.log(res);
	window.setTimeout("getTimer();", 1000);
	return res;
}
