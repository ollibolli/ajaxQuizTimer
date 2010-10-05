$(document).ready(function() {
	
	var timeLeft = getTimer();
	
	$('#state_form input[type=radio]').click(function(){
			$("#state_form").submit()
	});
	
	$("#state_form").submit(function() {
		$.ajax( {
			url : $(this).attr("action"),
			data : $(this).serialize(),
			success : function(result) {
			//console.log(result);
		},
		dataType : "json"
		});
		return false;
	})
});

