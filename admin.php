<?php 
	require_once "init.php";

?>
<!DOCTYPE HTML>
<html>
  <head>
    <title>Quiz - Admin (Ändra mig sen)</title>
		
		<script type="text/javascript" src="js/jquery-1.4.2.min.js"></script>
		<script type="text/javascript" src="js/teamClass.js"></script>
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
				<div id="countdown">jag vill bytas ut</div>

			</div>			
		</section>
		
		
		<section id="teams">
			
			<table>
				<thead>
					<tr>
						<!--
							<th>Lag</th>
						-->
					</tr>
				</thead>
				<tbody>
					<tr class="newScore">
					<!--
						<td>input för poäng per lag</td>
					-->
					</tr>
					<tr class="totalScore">
						<!--
							<td>Total poäng per lag</td>
						-->
					</tr>
				</tbody>
			</table>
			<a href="#" class="addTeam">Lägg till ett lag</a>
			<div id="addTeam">
				<form action="ajax/addTeam.php" method="get">
					<label for="teamName">Fyll i lagnamn</label>
					<input type="text" id="teamName" name="teamName" placeholder="Lagnamn" />
					<input type="submit" value="Spara" />
				</form>
			</div>
		</section>
				
  </body>
</html>