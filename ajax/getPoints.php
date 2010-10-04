<?php
session_start();
$data['data'] = $_SESSION['teams'];
$data['state'] = $_SESSION['state'];

echo json_encode($data);
?>