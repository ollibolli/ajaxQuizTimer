<?php
	session_start();
	
	if (!isset($_SESSION['teams'])) {
		$_SESSION['teams'] = array();
	}
	
	if (!isset($_SESSION['pause'])) {
		$_SESSION['pause'] = false;
	}
	
	if (!isset($_SESSION['state'])) {
		$_SESSION['state'] = "getTimer";
	}
	
	if (!isset($_SESSION['RESULT'])) {
		$_SESSION['RESULT'] = 0;
	}
	
?>