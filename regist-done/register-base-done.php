<?php
require_once "../lib/db_conn.php";
require_once "../lib/Clean.php";
if (isset($_GET['hum'])) $hum = $_GET['hum']; //koli4estvo klientov
if (isset($_GET['id_order'])) $id_order = $_GET['id_order'];  //id последнего заказа
if (isset($_GET['contact'])) $contact = clean($_GET['contact']); //номер телефона заказа
for ($i=1;$i<=$hum;$i++){
    $take_surname = clean($_GET[name.$i]);
    $take_name = clean($_GET[surname.$i]);
    $take_document = clean($_GET[document.$i]);
    $take_document_date = $_GET[document_date.$i];
    $take_age = $_GET[age.$i];
    
    $query = "SELECT id FROM peoples ORDER BY id DESC LIMIT 1";
    $test_hum=$mysqli->query($query);
    $id_mass_hum=$test_hum->fetch_assoc();
    $id_hum=($id_mass_hum[id]+1);
    
    $query = "INSERT INTO peoples
                   (id,name,surname,document,date_doc,age)
                   VALUES
             ('$id_hum','$take_name','$take_surname','$take_document','$take_document_date','$take_age')";
    $mysqli->query($query); 
    
    $id_hum_masiv=$id_hum_masiv.$id_hum." ";
}
$query = "UPDATE orders SET
                    id_client='$id_hum_masiv' , contact='$contact' 
                    WHERE id='$id_order'
                    ";
$mysqli->query($query);
$mysqli->close();
?>