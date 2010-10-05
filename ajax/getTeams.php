<?php
session_start();

$data['state'] = $_SESSION['state'];
$data['data'] = $_SESSION['teams'];

echo json_encode($data);
?>