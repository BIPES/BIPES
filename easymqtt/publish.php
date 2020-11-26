<?php
header('Content-Type: application/json');
header("Access-Control-Allow-Origin: *");
if(!isset($_GET['session']) || empty($_GET['session']) || !isset($_GET['topic']) || empty($_GET['topic']) || !isset($_GET['value']))
{
    echo(json_encode(array("success" => False, "result" => "Invalid Parameters")));
    die();
}

$session = htmlspecialchars($_GET["session"]);
$topic = htmlspecialchars($_GET["topic"]);
$value = htmlspecialchars($_GET["value"]);

if (!is_numeric($value)){
	$return = array("success" => False, "result" => "Error publishing value '".$value."' to topic '".$topic."'. Non-numeric input value!");

}else{
	$ret;
	$out;

	$err=exec("python3 server/publish.py ".$session."/".$topic." ".$value,$out,$ret);
	if ($ret == 0)
		$return = array("success" => True, "result" => "Value '".$value."' published to topic '".$topic."' successfully!");
	else
		$return = array("success" => False, "result" => "Error publishing value '".$value."' to topic '".$topic."'. ".$err);
}

echo(json_encode($return));
?>
