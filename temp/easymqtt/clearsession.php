<?php
header('Content-Type: application/json');
header("Access-Control-Allow-Origin: *");
if(!isset($_GET['session']) || empty($_GET['session']))
{
    echo(json_encode(array("success" => False, "result" => "Invalid Parameters")));
    die();
}
require("vendor/autoload.php");

$client = new MongoDB\Client("mongodb://localhost:27017");
$session = htmlspecialchars($_GET["session"]);

$client->dropDatabase($session);
$return = array("success" => True, "result" => "Session '" . $session . "' cleaned");

echo(json_encode($return));

?>
