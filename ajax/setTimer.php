<?php 
session_start();

if (isset($_GET['time'])){
		$_SESSION['pause']= false; 
		$_SESSION['time'] = time() + $_GET['time'];
}
$_SESSION['state'] = "getTimer";  

?>