<?php 
session_start();

if (isset($_GET['time'])){
		$_SESSION['time'] = time() + $_GET['time'];
	
}


?>