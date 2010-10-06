$(document).ready(function(){
	
	$("input[type=text]").blur(function() {
		if ($(this).attr("value").length >= 2 ){
			$(this).parents("div").addClass("ok");
		} else {
			$(this).parents("div").removeClass("ok");
		}
	})

});	