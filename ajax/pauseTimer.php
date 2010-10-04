<?php 
session_start();
		$_SESSION['pause'] = !$_SESSION['pause'];  
	if($_SESSION['pause']){
		$_SESSION['left'] = $_SESSION['time'] - time();	
	}else {
		$_SESSION['time'] = time() + $_SESSION['left'];
	}
	
	
	
?>