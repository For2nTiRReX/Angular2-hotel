<?php
require_once "../lib/db_conn.php";
require_once "../lib/Clean.php";
if (isset($_GET['hum'])) $hum = $_GET['hum']; // кол людей для заказа 
if (isset($_GET['country'])) $country = $_GET['country']; 
if (isset($_GET['date_off'])) $date_off = $_GET['date_off'];
if (isset($_GET['days'])) $days = $_GET['days'];
if (isset($_GET['id_hotel'])) $id = $_GET['id_hotel'];
$query = ("SELECT id FROM orders ORDER BY id DESC LIMIT 1");
$id_order = $mysqli->query($query);
$id_order = $id_order->fetch_assoc();
$id_order = $id_order[id]+1;

$query = "INSERT INTO orders 
                    (id,country,data_off,days,id_hotel) 
                    VALUES
                    ('$test_go','$country','$date_off','$days','$id')";
$mysqli->query($query);  
$mysqli->close();
/*
$result = $mysqli->query("SELECT * FROM hotels WHERE id='$id'");
$row = $result->fetch_assoc();*/
?>