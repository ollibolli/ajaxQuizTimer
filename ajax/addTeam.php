<?php 
session_start();

if (isset($_GET['teamName'])){
	$name = $_GET['teamName'];
}
	
	$newTeam = array('name' => $name, 'points' => 0);
	
	return array_push($_SESSION['teams'], $newTeam);

?>