<?
require_once "../lib/db_conn.php";
require_once "../lib/Clean.php";
if (isset($_POST["textarea"])) $textarea = clean($_POST["textarea"]); 
if (isset($_POST["user"])) $user = clean($_POST["user"]);
if (isset($_POST["hotel"])) $hotel = $_POST["hotel"];
$now = date('Y-m-d'); 
$query = 'INSERT INTO coments (id_tour, text, id_user, date) 
        VALUES("'.$hotel.'", "'.$textarea.'", "'.$user.'", "'.$now.'")';
$res = $mysqli->query($query);
$mysqli->close();
echo ($now);
?>