<?php

$host="sql202.byethost3.com"; // Host name 
$username="b3_18601113"; // Mysql username 
$password="csf30816"; // Mysql password 
$db_name="b3_18601113_signup"; // Database name 
$tbl_name="s_users"; // Table name 

// Connect to server and select database.
mysql_connect("$host", "$username", "$password")or die("cannot connect"); 
mysql_select_db("$db_name")or die("cannot select DB");

// Get values from form 
$name=$_POST['scratchname'];
$pass=$_POST['password'];
$reason=$_POST['reason'];

// Insert data into mysql 
$sql="INSERT INTO $tbl_name(s_name, pass, why)VALUES('$scratchname', '$pass', '$reason')";
$result=mysql_query($sql);

// if successfully insert data into database, displays message "Successful". 
if($result){
echo "Your account has been created";
echo "<BR>";
echo "<a href='./'>Back to main page</a>";
}

else {
echo "ERROR";
}
?> 

<?php 
// close connection 
mysql_close();
?>
