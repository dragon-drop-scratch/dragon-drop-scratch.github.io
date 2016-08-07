<?php
$link = mysql_connect('b3_18601113_signup', 'b3_18601113', 'csf30816');
if (!$link) {
    die('Could not connect: ' . mysql_error());
}
echo 'Connected successfully';
mysql_close($link);
?>
