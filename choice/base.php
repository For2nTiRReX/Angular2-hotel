<?php
require_once "../lib/db_conn.php";
$query = "";
$args = [];
if (isset($_GET['countryS'])) $country = $_GET['countryS'] ? $_GET['countryS'] : '';
if (isset($_GET['komfS'])) $komf = $_GET['komfS'] ? $_GET['komfS'] : 5;
if (isset($_GET['in1'])) $price1 = $_GET['in1'] ? $_GET['in1'] : '';
if (isset($_GET['in2'])) $price2 = $_GET['in2'] ? $_GET['in2'] : '';
if (isset($_GET['Поиск'])){
    if ($price1 == ""){
        $price1 = "0";
    }
    if ($price2 == ""){
        $price2 = "1000000";
    }  
    $query = "SELECT * FROM hotels 
              WHERE country LIKE '%?%' 
              AND comfort LIKE '%?%'
              AND price BETWEEN '?' AND '?' LIMIT 4";
    $args = [$country,$komf,$price1,$price2];
}
else {
    $query = "SELECT * FROM hotels LIMIT 4";
}
$result = $DB->query($query,$args);
var_dump($result);

$DB->CloseConnection;