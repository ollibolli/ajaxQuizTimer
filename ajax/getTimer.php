<?php
	session_start();
	$_SESSION['time'] = 26;
	
	$time = $_SESSION['time'];
	echo json_encode($time);
	
?>