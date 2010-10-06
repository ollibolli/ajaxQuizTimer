<?php

	$_SESSION['teams'] = array();
	$_SESSION['pause'] = false;
	$_SESSION['state'] = "getTimer";
	$_SESSION['result'] = array();
	$_SESSION['lastResult'] = array();
	$_SESSION['time'] = time();

	header('Location: setup.php?reset=true');