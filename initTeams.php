<?php

	session_start();
	//require_once "init.php";
	for ($i=0; $i<10;$i++){
		if (isset($_POST["team-$i"]) && $_POST["team-$i"] != "") {
			$_SESSION['teams'][] = array( "name" => $_POST["team-$i"] , "points" => 0 );
		}
	}

	header('Location: admin.php');