<?php
require_once("init.php");

?>
<!DOCTYPE HTML>
<html>
  <head>
    <title>Quiz - Setup</title>
		
		<script type="text/javascript" src="js/jquery-1.4.2.min.js"></script>
		<script type="text/javascript" src="js/setup.js"></script>

    <link href="css/core.css" media="screen" rel="stylesheet" type="text/css" />
		<link href="css/setup.css" media="screen" rel="stylesheet" type="text/css" />
		
  </head>
  <body>
   	<form action = "admin.php">
	<?php for ($i = 0 ; $i<10 ; $i++){ 
  		echo "<label for='team-$i'  >Lag {$i}</label>";
  		echo "<input type='text' name='team-$i' />";
	} ?>
	<input type="submit" value="starta" />
	</form>
	
</body>
</html>