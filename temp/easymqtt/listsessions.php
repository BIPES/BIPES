<?php
header('Content-Type: application/json');
header("Access-Control-Allow-Origin: *");

require("vendor/autoload.php");

$client = new MongoDB\Client("mongodb://localhost:27017");

$result= array();

foreach ($client->listDatabaseNames() as $databaseName) {
    $db = $client->selectDatabase($databaseName);
    $totalMessages = 0;
    $totalTopics = 0;
    foreach ($db->listCollectionNames() as $collectionName) {
	    $totalTopics += 1;
	    $collection = $db->selectCollection($collectionName);
	    $totalMessages += $collection->count();
    }
    $result[] = array("session" => $databaseName, "topicsCount" => $totalTopics, "messagesCount" => $totalMessages);
}

$return = array("success" => True, "result" => $result);

echo(json_encode($return));
?>
