<?php
session_start();

$time = $_SESSION['time'];
$_SESSION['time']--;
	echo json_encode($time);
	
?>