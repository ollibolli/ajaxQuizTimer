<?php 
session_start();

if (isset($_GET['time'])){
		$_SESSION['time']=$_GET['time'];
		
		echo true; 
	}



?>