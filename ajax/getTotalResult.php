<?php
session_start();

$data['state'] = $_SESSION['state'];

$data['data'] = $_SESSION['result'];

echo json_encode($data);