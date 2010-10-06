<?php 
session_start();

if (isset($_GET['timeMin']) && isset($_GET['timeSec'])){
		$_SESSION['pause'] = false; 
		$_SESSION['time'] = time() + ($_GET['timeMin']*60) + $_GET['timeSec'];
}
$_SESSION['state'] = "getTimer";  

?>