<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
    "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
<head>
<meta http-equiv="content-type" content="text/html" charset="utf-8">
<link rel="stylesheet"   href="register-done.css">
<title>Tur.ua</title>
</head>
<body>
<?php require_once "register-base-done.php";?>
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
        <div class="center">
        <ul>
           <li><a href="">Выбор тура</a></li>
           <li><a href="">Результаты поиска</a></li>
           <li><a href="">Детальная информация о туре</a></li>
           <li><p>Бронирование тура</p></li>
        </ul>
        <div class="info-holder">
           <h1>Бронирование тура</h1>
           <div class="info-tur">
               <h1>Готово</h1>
           </div>
        </div>
        <div class="info-basket-holder">
               <div class="basket-title">Как проходит процесс бронирования</div>
               <em>Вы выбираете тур и нажимаете кнопку «Забронировать»</em>
               <div class="basket-single">
                   <div class="basket-single-l">1</div> 
                   <div class="basket-single-r">
                       <p> Оформление бронировки</p>
        Укажите данные туристов и дополнительную информацию
                   </div>    
               </div>    
               <div class="basket-single">
                   <div class="basket-single-l">2</div> 
                   <div class="basket-single-r">
                      <p> Контактные данные</p>

        Укажите ваши контакнтые данные, по которым с вами свяжется менеджер
                   </div> 
               </div>    
               <div class="basket-single">
                   <div class="basket-single-l">3</div> 
                   <div class="basket-single-r">
                       <p>Подтверждение брониl</p>
        В ближайшее время с вами свяжется сотрудник офиса, согласует детали и начнет процесс оформления документов
                   </div> 
               </div>    
        </div> 
        </div>
        <?php require_once "../lib/footer.php";?>
    </div>
</div>
  <script src="http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>
  <script src="../lib/search.js"></script>
</body>
</html>