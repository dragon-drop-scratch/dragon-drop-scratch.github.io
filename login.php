<?php
//Make the HTML File
echo "<html>";
echo "<head>";
echo "<link href='https://dragon-drop-scratch.github.io/dragon-drop-www/style.css' rel='stylesheet' type='text/css'>";
echo "<title>Loading...</title>";
//Start the connection
$servername = "db4free.net";
$username = "d217710";
$password = "csf30816";
$dbname = "d217710";
$name='jeff';
$pass='jeff';
$reason='jeff';
$fname='jeff';
$email='jeff';
// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
$result = $conn->query("SELECT id FROM scratch WHERE user = '$name'");
$userexists = $conn->query("SELECT id FROM users WHERE username = '$name'");
// Check connection
if ($conn->connect_error) {
	die("Connection failed: " . $conn->connect_error);
	echo "<title>Connection Error</title>";
}
if ($result->num_rows and $userexists->num_rows != 0) {
	echo "<title>Logging in</title>";
} else {
	echo "<title>Error</title>";
	echo "<div id='nav'><p style='margin-top: 16px;'>That account does not exist</p></div>";
}
$conn->close();
?>
