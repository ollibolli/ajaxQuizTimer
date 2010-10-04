<?php 
session_start();

$state = $_SESSION['state'];

echo json_encode($state)
?>