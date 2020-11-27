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

$db = $client->selectDatabase($session);
$results = $db->listCollections();

$topics = array();
foreach ($results as $collection) {
    $topics[] = $collection['name'];
}
if (count($topics)>0)
    $return = array("success" => True, "result" => $topics);
else
    $return = array("success" => False, "result" => "Session '" . $session . "' is empty.<br /><span>As soon as something reaches the broker, it will be displayed here!</span>");

echo(json_encode($return));
?>
