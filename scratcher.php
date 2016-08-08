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
$result = $conn->query("SELECT id FROM scratch WHERE user = '$name'");
// Check connection
if ($conn->connect_error) {
	die("Connection failed: " . $conn->connect_error);
}
if ($name != '') { //Makes sure the name is not empty
	if ($pass != '') { //Makes sure the password is not empty
		if ($pass != $name) { //makes sure the username is not the password
			if ($result->num_rows == 0) { //Makes sure the user does not already exist
				$sql = "INSERT INTO scratch (user, pass, type)
VALUES ('$name', '$pass', '$type')";
				if ($conn->query($sql) === TRUE) {
					echo "The account <b>" . $name . "</b> has been created with the password <b>" . $pass . "</b>. Have a nice day!";
				} else {
					echo "Error: " . $sql . "<br>" . $conn->error;
				}
			} else {
				echo "Sorry, but that user already exists";
				echo "<br><a href='./'>Go Home?</a>";
			}
		} else {
			echo "Sorry, but your username and password can not be the same";
			echo "<br><a href='./'>Go Home?</a>";
		}
	} else {
		echo "Sorry, but your password can not be blank";
		echo "<br><a href='./'>Go Home?</a>";
	}
} else {
	echo "Sorry, but your password can not be blank";
	echo "<br><a href='./'>Go Home?</a>";
}
$conn->close();
?>
