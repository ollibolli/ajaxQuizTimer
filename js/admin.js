$(document).ready(function() {
	
	
	
	var timeLeft = 1;
	getTimer();
	var timeId = window.setInterval("timeLeft = getTimer();", 5000);
	$('#countdown').html(timeLeft);
	$("#countdown").val(timeLeft);
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
	
	
	

})

function getTimer(){
		var res = 100;
		$.ajax( {
			url : "ajax/getTimer.php",
			success : function(result) {
				res = result;
			},
			dataType : "json"
		});
		return res;
	}