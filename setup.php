<?php
require_once("init.php");

?>
<!DOCTYPE HTML>
<html>
  <head>
    <title>Fyll i lagnamn</title>
		
		<script type="text/javascript" src="js/jquery-1.4.2.min.js"></script>
		<script type="text/javascript" src="js/setup.js"></script>

    <link href="css/core.css" media="screen" rel="stylesheet" type="text/css" />
		<link href="css/setup.css" media="screen" rel="stylesheet" type="text/css" />
		
  </head>
  <body>
	
		<section id="setup">
			<h1>Fyll i lagnamn</h1>
			<p>Fyll i alla lag som är med i tävlingen. Ett tomt fält betyder inget lag. Tryck sedan på Starta tävlingen.</p>
			<p>Var god fyll i lagen i tur och ordning, inga tomma fält mitt mellan två lag.</p>
	   	<form action = "initTeams.php" method="post">
		<?php for ($i = 0 ; $i<10 ; $i++){ 
			if (isset($_SESSION['teams'][$i]) && !isset($_GET['reset'])) {
				$value = $_SESSION['teams'][$i]['name'];
			} else {
				$value = "";
			}
			echo "<div>";
	  	echo "<label for='team-$i'>Lag " . ($i+1) . "</label>";
	  	echo "<input type='text' value='$value' name='team-$i' />";
			echo "</div>";
		} ?>
			<input type="submit" value="Starta tävlingen" />
		</form>
	
		<a class="reset" href="reset.php">Nollställ lagen</a>
	
	</section>
	
</body>
</html>