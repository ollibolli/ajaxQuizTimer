<?php session_start() ?>
<!DOCTYPE HTML>
<html>
  <head>
    <title>Quiz - Admin (Ändra mig sen)</title>
		
		<script type="text/javascript" src="js/jquery-1.4.2.min.js"></script>
		<script type="text/javascript" src="js/admin.js"></script>

    <link href="css/core.css" media="screen" rel="stylesheet" type="text/css" />
		<link href="css/admin.css" media="screen" rel="stylesheet" type="text/css" />
		
  </head>
  <body>
		
		<section id="timer">
			
			<div class="start_timer">
				<form id="start_timer" action="ajax/setTimer.php" method="get">
					<label for="time">Tid</label>
					<input type="text" name="time" id="time" />
					<input type="submit" value="Starta" name="submit"/>
				</form>
			</div>
			
			<div id="manage_timer">
				<button id="pause_timer">Pause</button>
				<button id="stop_timer">Stop</button>				
				<label for="admin_countdown">Tid kvar</label>
				<input type="text" id="admin_countdown" name="admin_countdown" />
			</div>
			
			<div>
				<h1 id="#countdown"></h1>
				
			</div>
		</section>
					
  </body>
</html>