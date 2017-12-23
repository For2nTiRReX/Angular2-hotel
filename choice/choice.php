<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
    "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
<head>
<meta http-equiv="content-type" content="text/html" charset="utf-8">
<link rel="stylesheet"   href="choice.css">
<title>Tur.ua</title>
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>
<script src="JS/main.js"></script>   
</head>
<body>
<?php require_once ("base.php");?>
<div class="bg-bot">
<div class="karkas">
    <?php require_once "../lib/header.php";?>
    <div class="menu-main">
       <table border="0" cellpadding="0" cellspacing="0" >
        <tbody>
           <tr>
            <td><a id="last" href="/choice/choice.php">Выбор тура</a></td>
            <td><a href="/Maps/map.php" >Страны и направления</a></td>
            <td><a href="http://tyrist.ua/404/error.php" >Авиабилеты</a></td> 
            <td><a href="http://tyrist.ua/404/error.php" >Услуги</a></td> 
            <td><a href="http://tyrist.ua/404/error.php" >О компании</a></td>
            <td><a href="http://tyrist.ua/404/error.php" >Вопросы и ответы</a></td>
            <td><a href="http://tyrist.ua/404/error.php" >Где купить</a></td>   
           </tr>
    </tbody>
    </table>
    </div>
    <div class="after-head">
    <h1>Поиск тура</h1>
    <hr>
    <div class="find-holder">
       <div class="find-holder-left">
       <form action="" method="get">
        <p>Страна/курорт:</p>
        <select name="countryS" id="countryS" >
            <option value="">Все</option>
            <option value="Россия" >Россия</option>
            <option value="Украина">Украина</option>
            <option value="Австрия">Австрия</option>
            <option value="Испания">Испания</option>
            <option value="ОАЭ">ОАЭ</option>
            <option value="Турция">Турция</option>
            <option value="Италия">Италия</option>
            <option value="Черногория">Черногория</option>
            <option value="Чехия">Чехия</option>
        </select>
        <p>Вид отдыха:</p>
        <select name="typeS" id="typeS">
            <option value="">Все</option>
            <option value="Пляжный отдых">Пляжный отдых</option>
            <option value="Горнолыжные туры">Горнолыжные туры</option>
            <option value="Экскурсионные туры">Экскурсионные туры</option>
            <option value="Экстрим">Экстрим</option>
            <option value="Все включено">Все включено</option>
        </select>
        <p>Клас отеля:</p>
        <select name="komfS" id="komfS">
            <option value="">Все</option>
            <option value="1">1 звезда</option>
            <option value="2">2 звезды</option>
            <option value="3">3 звезды</option>
            <option value="4">4 звезды</option>
            <option value="5">5 звезд</option>  
        </select>
        </div>
        <div class="find-holder-center">

        <p>Цена:</p>
        <span>от</span>
        <input id="input1" type="text" style="width: 90px;" value="" name="in1">
        <span>до</span>
        <input id="input2" type="text" style="width: 90px;" value="" name="in2">
        <span>Грн.</span>
        </div>
        <input type="submit" name="Поиск" value=""  >
        </form>
    </div>
    </div>
    <div class="hotel-holder">
            <h2>Найдено: <?php  echo  count($result);
            if (count($result) == 0){echo $skl = " туров";}
            else if (count($result) == 1){echo $skl = " тур";}
            else if (count($result) == 2){echo $skl = " тура";}
            else if (count($result) > 2){echo $skl = " туров";}
            ?> </h2>
            <?php
            foreach($result as $row){
            ?>
         <div class='single-hot' > 
         <a href='<?php echo "/Ful-info/ful-info.php?id_hotel=".$row["id"];?>' >
         <img src='<?php echo $row["thumbnail"];?>'></a>
         <a href='/Maps/map.php' id='countryA'><?php echo $row["country"];?></a>
         <a href='#' id='countryB'><?php echo $row["whereabout"];?></a>          <br>
         <a href="<?php echo "/Ful-info/ful-info.php?id_hotel=".$row["id"];?>" class="single-a">
         <?php echo $row["title"];?></a>
         <span class="sp-m">Клас отеля</span>
         <img src="Img/star-small.png" alt="">
         <img src="Img/star-small.png" alt="" class="hide">
         <img src="Img/star-small.png" alt="" class="hide">
         <img src="Img/star-small.png" alt="" class="hide">
          <img src="Img/star-small.png" alt="" class="hide">
         <br>
         <p class="display"><?php echo $row["content"];?></p>
         <div class="cena-d">
             от<span><?php echo $row["price"];?> </span> грн.
             <p>За номер</p>
             <p class="get-comf"><?php echo $row["comfort"];?></p>
         </div>     
         </div> 
         <?php } ?>
    </div>
    <?php require_once "../lib/footer.php"; ?>
    <script src="../lib/search.js"></script>
</div>
</div>
</body>
</html>