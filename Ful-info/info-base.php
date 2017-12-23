<?php
require_once "../lib/db_conn.php";
if (isset($_GET['id_hotel'])) $id=$_GET['id_hotel'];
$query = "SELECT * FROM hotels WHERE id='$id'";
$result = $mysqli->query($query);
if (!$result) die ("Ошибка при выполнении запроса в MySQL: ".mysqli_error());
$row = $result->fetch_assoc();
$result2 = $mysqli->query("SELECT * FROM coments WHERE id_tour='$id' ORDER BY date DESC");
$mysqli->close();
?>