<?php
session_start();
if (isset($_GET['team-0'])){
	
	$newPoints = array();
	
	for ($i = 0; $i < 10; $i++) {
		if (isset($_GET["team-" . $i])) {
			$newPoints[$i] = $_GET["team-" . $i];
			$_SESSION['teams'][$i]['points'] += $newPoints[$i];
		}
	}
	
	$_SESSION['lastResult'] = $newPoints;
	//array_push($_SESSION['result'], $newPoints);
	$_SESSION['result'][] = $newPoints;
	
};

