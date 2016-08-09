<?php
$servername = "db4free.net";
$username = "d217710";
$password = "csf30816";
$dbname = "d217710";
$name=$_POST["name"];
$pass=$_POST["pass"];
$reason=$_POST["reason"];
$fname=$_POST["fname"];
$email=$_POST["email"];

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
$result = $conn->query("SELECT id FROM scratch WHERE user = '$name'");
$userexists = $conn->query("SELECT id FROM users WHERE user = '$name'");
// Check connection
if ($conn->connect_error) {
	die("Connection failed: " . $conn->connect_error);
}
if ($pass != 'password') {
	if (strlen($name) >= 3) {
		if (strlen($pass) >= 6) {
			if ($name != '') { //Makes sure the name is not empty
				if ($pass != '') { //Makes sure the password is not empty
					if ($pass != $name) { //makes sure the username is not the password
						if ($result->num_rows == 0 || $userexists->num_rows == 0) { //Makes sure the user does not already exist
							$sql = "INSERT INTO users (username, password, fullname, email, reason)
VALUES ('$name', '$pass', '$fname', '$email', '$reason')";
							if ($conn->query($sql) === TRUE) {
								echo "The account <b>" . $name . "</b> has been created with the password length of <b>" . strlen($pass) . "</b>. Have a nice day!";
								echo "You will recieve an email with your information shortly.";
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
		} else {
			echo "Sorry, but your password can not be shorter than 6 chars";
			echo "<br><a href='./'>Go Home?</a>";
		}
	} else {
		echo "Sorry, but your username can not be shorter than 3 chars";
		echo "<br><a href='./'>Go Home?</a>";
	}
} else {
	echo "Really, 'password' as your password? Are you trying to get hacked?";
	echo "<br><a href='./'>Go Home?</a>";
}
$conn->close();
?>
