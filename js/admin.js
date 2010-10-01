$(document).ready(function() {
	$("#start_timer").submit(function() {
		$.ajax( {
			url : $(this).attr("action"),
			data : $(this).serialize(),
			success : function(result) {
				console.log(result);
				$("#countdown").html(result);
			},
			dataType : "json"
		});
		return false;
	})

})