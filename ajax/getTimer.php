<?php
session_start();


if ($_SESSION['pause']){			
		$time = $_SESSION['left'];
	}else { 
		$time = $_SESSION['time'] - time(); 
	}

echo json_encode($time);
	
?>