<?php session_start(); ?>
<!DOCTYPE HTML>
<html>
  <head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>Frågesport</title>
		
		<script type="text/javascript" src="js/jquery-1.4.2.min.js"></script>
		<script type="text/javascript" src="js/view.js"></script>

    <link href="css/core.css" media="screen" rel="stylesheet" type="text/css" />
		<link href="css/view.css" media="screen" rel="stylesheet" type="text/css" />
		
  </head>
  <body>
	
		<div id="counter">
			<h1>Tid kvar</h1>
			<p id="countdown"></p>
		</div>
	
		<div id="result">
			<h1>Resultat</h1>
			
			<div class="teams">
			</div>
		
		</div>

		<div id="points">
			<h1>Poängställning</h1>
			
			<div class="teams">
			</div>
		
		</div>
	
  </body>
</html>