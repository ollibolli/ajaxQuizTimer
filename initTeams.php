<?php

	session_start();
	
	// bugg där lag bara läggs på varandra om man skulle få för sig att lägga till fler lag, nu nollställs det när det initialiseras
	$_SESSION['teams'] = array();
	
	// om lagen rebootas ska senaste poängen göra det också!
	$latestResult = array();
	
	for ($i=0; $i<10;$i++){
		if (isset($_POST["team-$i"]) && $_POST["team-$i"] != "") {
			$_SESSION['teams'][] = array( "name" => $_POST["team-$i"] , "points" => 0 );
			$latestResult[$i] = 0;
		}
	}
	
	$_SESSION['lastResult'] = $latestResult;
	
	//en timer måste vara igång, den sätts till time direkt när en tävling körs igång
	$_SESSION['time'] = time();

	header('Location: admin.php');