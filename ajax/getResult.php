<?php
session_start();

$data['state'] = $_SESSION['state'];

// 
/*fråga		LAG 1 	LAG2	Lag3
 * 1		8		0		9
 * 2		9		0		0
 * 
 * teams	33		44		44
 */



$data['data']= array('LAG1'=>4,'Lag 2'=> 6,'LAG3'=>7,'Lag 4'=> 7);

echo json_encode($data);