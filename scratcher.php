<?php
include_once(dirname(__FILE__) . "/cdynconfig.php");
include_once(dirname(__FILE__) . "/cdyn_includes/db.php");
include_once(dirname(__FILE__) ."/cdyn_includes/phputil.php");
include_once(dirname(__FILE__) ."/cdyn_includes/printform.php");
$pageName="formpage.php";
$datastorage="insert";$error="";
$arr["E1textbox_name"]=(isset($_POST["E1textbox_name"]) && trim($_POST["E1textbox_name"])!="")?trim($_POST["E1textbox_name"]):"";
$arr["E2textbox_pass"]=(isset($_POST["E2textbox_pass"]) && trim($_POST["E2textbox_pass"])!="")?trim($_POST["E2textbox_pass"]):"";
$arr["E3radiooptions_reason"]=(isset($_POST["E3radiooptions_reason"]) && trim($_POST["E3radiooptions_reason"])!="")?trim($_POST["E3radiooptions_reason"]):"";
if($error=="") {

$print_emailobj=new CDYNprintEmailFormData();
$print_emailobj->textbox("E1textbox_name","Scratch Username:");
$print_emailobj->textbox("E2textbox_pass","Password");
$print_emailobj->radioChoice("E3radiooptions_reason","What will you be using the site for?");

$cdyn_emaildata=$print_emailobj->printFormData();
/* //Print Form data
echo $cdyn_emaildata;*/

if($datastorage=="insert"){
if($db->insert($arr,"formstore165"))
echo "Data Inserted"; }
}
else {include_once($pageName);} ?>
