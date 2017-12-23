<?
require_once "db_conn.php";
require_once "Clean.php";
if (isset($_POST["textarea"])) $value = clean($_POST["textarea"]);
$query = "SELECT * FROM hotels WHERE name LIKE '%$value%'";
$res = $mysqli->query($query);
if (!$res) die("Ошибка при выполнении запроса в MySQL: ".mysqli_error());
while ($row = $res->fetch_assoc()){
    $result .= "<div class='single-hotel'><a href='http://tyrist.ua/Ful-info/ful-info.php?id_hotel=".$row['id']."'>".$row['name']."</a></div>";
}
$mysqli->close();
    echo $result;
?>