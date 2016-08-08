<?php
$servername = "db4free.net";
$username = "d217710";
$password = "csf30816";
$dbname = "d217710";
$name=$_POST["name"];
$pass=$_POST["pass"];
$type=$_POST["reason"];
// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
	die("Connection failed: " . $conn->connect_error);
}
if ($pass != $name) {
	$sql = "INSERT INTO scratch (user, pass, type)
VALUES ('$name', '$pass', '$type')";
	if ($conn->query($sql) === TRUE) {
		echo "The account <b>" . $name . "</b> has been created with the password <b>" . $pass . "</b>. Have a nice day!";
		echo "<br><a href='./'>Go Home?</a>";
	} else {
		echo "Error: " . $sql . "<br>" . $conn->error;
	}
} else {
	echo "Sorry, but your username and password can not be the same";
		echo "<br><a href='./'>Go Home?</a>";
}
$conn->close();
?>
