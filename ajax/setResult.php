<?php
session_start();
if (isset($_GET['submit'])){
	$_SESSION['result'][] = $_GET;
	
};

