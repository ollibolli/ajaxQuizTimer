<?php
start_session();

$data['state'] = $_SESSION['state'];
$data['data']= array('LAG1'=>0,'Lag 2'=> 0,'LAG3'=>0,'Lag 4'=> 0);

echo json_enncode($data);