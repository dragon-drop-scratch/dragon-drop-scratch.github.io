<?php
$servername = "sql202.byethost3.com";
$username = "b3_18601113";
$password = "csf30816";
$dbname = "b3_18601113_signup";

$name=$_POST['scratchname'];
$pass=$_POST['password'];
$reason=$_POST['reason'];

try {
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    // set the PDO error mode to exception
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $sql = "INSERT INTO s_users (s_name, pass, why)
    VALUES ('$scratchname', '$password', '$reason')";
    // use exec() because no results are returned
    $conn->exec($sql);
    echo "New record created successfully";
    }
catch(PDOException $e)
    {
    echo "User could not be created :(";
    }

$conn = null;
?>
