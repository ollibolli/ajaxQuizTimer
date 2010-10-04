<?php
session_start();
if (isset($_GET['team-0'])){
	
	$newPoints = array();
	
	for ($i = 0; $i < 10; $i++) {
		$newPoints[$i] = $_GET["team-" . $i];
	}
	
	$_SESSION['lastResult'] = $newPoints;
	$_SESSION['result'][] = $newPoints;
	
};

