<?php
session_start();

$data['state'] = $_SESSION['state'];
//$data['data']= array('LAG1'=>4,'Lag 2'=> 6,'LAG3'=>7,'Lag 4'=> 7);
$data['data']= $_SESSION['lastResult'];


echo json_encode($data);