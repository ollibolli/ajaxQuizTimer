<?php 
	session_start();

?>
<!DOCTYPE HTML>
<html>
  <head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>Administrera frågesporten</title>
		
		<script type="text/javascript" src="js/jquery-1.4.2.min.js"></script>
		<script type="text/javascript" src="js/teamClass.js"></script>
		<script type="text/javascript" src="js/admin.js"></script>

    <link href="css/core.css" media="screen" rel="stylesheet" type="text/css" />
		<link href="css/admin.css" media="screen" rel="stylesheet" type="text/css" />
		
  </head>
  <body>
		
		<section id="timer">
			<h2>Nedräkning</h2>
			<div class="start_timer">
				<form id="start_timer" action="ajax/setTimer.php" method="get">
					
					<div id="timeMinWrapper">
						<label for="timeMin">Minuter</label>
						<select name="timeMin" id="timeMin">
							<?php for($i = 0; $i <= 10; $i++) {
								echo "<option value='$i'>$i</input>";
							} ?>
						</select>
					</div>
					
					<div id="timeSecWrapper">
						<label for="timeSec">Sekunder</label>
						<select name="timeSec" id="timeSec">
							<?php for($i = 0; $i < 60; $i++) {
								echo "<option value='$i'>$i</input>";
							} ?>
						</select>
					</div>
					
					<input type="submit" value="Starta" name="submit"/>
				</form>
			</div>
			
			<div id="manage_timer">
				<button id="pause_timer">Pause</button>
			</div>		
			<div id="countdown">[Ingen timer igång]</div>	
			<div id="links">
				<a class="view" href="view.php" target="_blank">Öppna projektor-vyn</a>
				<a class="setup" href="setup.php">Gå tillbaka och lägg till nya lag</a>
			</div>
		</section>
			
		</section>
		
		<section id="teams">
			<h2>Lag</h2>
			<form id="setResult" action="ajax/setResult.php" method="get">
			<table>
				
				<thead>
					<tr>
						<th>Lag</th>
						<th class="newScore">Ny poäng</th>
						<th class="latestScore">Senaste poängen</th>
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
						<td class="latestScore"></td>
						<td class="totalScore"></td>
				</tfoot>
				
			</table>
			</form>
			
		</section>
		
		<section id="state">
			<h2>Byt vy för projektorn</h2>
			<form  action="ajax/setState.php" method="post" id="state_form">
				<input type="radio" name="state" value="getTimer" id="state_timer"/><label for="state_timer">Räknare</label> 
				<input type="radio" name="state" value="getResult" id="state_result"/><label for="state_result">Resultat</label>
				<input type="radio" name="state" value="getPoints" id="state_points"/><label for="state_points">Total poängställning</label>
			</form>
		
		</section>
		
				
  </body>
</html>