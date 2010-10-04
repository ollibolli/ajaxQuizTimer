<?php
session_start();
if (isset($_GET['state'])){
	$_SESSION['state'] = $_GET['state'];
}

?>