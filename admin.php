<?php 
	session_start();

?>
<!DOCTYPE HTML>
<html>
  <head>
    <title>Quiz - Admin (Ändra mig sen)</title>
		
		<script type="text/javascript" src="js/jquery-1.4.2.min.js"></script>
		<script type="text/javascript" src="js/teamClass.js"></script>
		<script type="text/javascript" src="js/admin.js"></script>
		<script type="text/javascript" src="js/admin_state.js"></script>

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
			
			<form id="setResult" action="ajax/setResult.php" method="get">
			<table>
				
				<thead>
					<tr>
						<th>Lag</th>
						<th class="newScore">Ny poäng</th>
						<th class="totalScore">Total poäng</th>
					</tr>
				</thead>
				<tbody>

					<!-- TR FÖR VARJE LAG -->
					
				</tbody>
				<tfoot>
					<tr>
						<td></td>
						<td><input type="submit" value="Spara" /></td>
						<td></td>
				</tfoot>
				
			</table>
			</form>
			
			<a href="#" class="addTeam">Lägg till ett lag</a>
			<div id="addTeam">
				<form action="ajax/addTeam.php" method="get">
					<label for="teamName">Fyll i lagnamn</label>
					<input type="text" id="teamName" name="teamName" placeholder="Lagnamn" />
					<input type="submit" value="Spara" />
				</form>
			</div>
		</section>
		
		<section id="state">
			<form  action="ajax/setState.php" method="post" id="state_form">
				<input type="radio" name="state" value="getTimer" id="state_timer"/><label for="state_timer"> VISA RÄKNARE</label> 
				<input type="radio" name="state" value="getResult" id="state_result"/><label for="state_result">VISA RESULTAT</label>
				<input type="radio" name="state" value="getPoints" id="state_points"/><label for="state_points">VISA  POÄNGSTÄLLNING</label>
			</form>
		
		</section>
		
				
  </body>
</html>