<?php 
	if (isset($_GET['time'])){
		$_SESSION['time']=26;
		
		echo json_encode(print_r($_GET)); 
	}



?>