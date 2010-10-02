$(document).ready(function() {

	var timeLeft = 1;
	getTimer();
	var timeId = window.setInterval("timeLeft = getTimer();", 500);
	if (timeLeft == 0) {
		window.clearInterval(timeId);
	}

})

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