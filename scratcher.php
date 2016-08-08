<?php
/* Connect to a MySQL database using driver invocation */
$dsn = 'mysql:dbname=d217710;host=db4free.net';
$user = 'd217710';
$password = 'csf30816';

$name=$_POST["name"];
$pass=$_POST["pass"];
$type=$_POST["reason"];

try {
    $dbh = new PDO($dsn, $user, $password);
	$sql = 'INSERT INTO `scratch`(`user`, `pass`, `type`) VALUES ($name,$pass,$site)';
} catch (PDOException $e) {
    echo 'Connection failed: ' . $e->getMessage();
}

?>
