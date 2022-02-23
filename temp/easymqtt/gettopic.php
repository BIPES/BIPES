<?php
header('Content-Type: application/json');
header("Access-Control-Allow-Origin: *");
if(!isset($_GET['session']) || empty($_GET['session']) || !isset($_GET['topic']) || empty($_GET['topic']))
{
    echo(json_encode(array("success" => False, "result" => "Invalid Parameters")));
    die();
}

require("vendor/autoload.php");

$client = new MongoDB\Client("mongodb://localhost:27017");
$session = htmlspecialchars($_GET["session"]);
$topic = htmlspecialchars($_GET["topic"]);

$db = $client->selectDatabase($session);
$collection = $db->selectCollection($topic);

if (isset($_GET["since"]) && !empty($_GET["since"])){
    $since = htmlspecialchars($_GET["since"]);
    $results = $collection->find(['timestamp' => ['$gte' => intval($since)]]);
}else{
    $results = $collection->find();
}

$values = array();
foreach ($results as $item) {
    $values[] = array("timestamp" => $item['timestamp'], "data" => $item['data']);
}
$return = array("success" => True, "result" => $values);

echo(json_encode($return));
?>
