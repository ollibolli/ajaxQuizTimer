<?php
session_start();


if ($_SESSION['pause']){			
		$time = $_SESSION['left'];
	}else { 
		$time = $_SESSION['time'] - time(); 
	}

$data['state'] = $_SESSION['state'];	
$data['data'] = $time;

echo json_encode($data);
	
?>