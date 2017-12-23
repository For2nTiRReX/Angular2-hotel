<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
    "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
<head>
<meta http-equiv="content-type" content="text/html" charset="utf-8">
<link rel="stylesheet"   href="register.css">
<title>Tur.ua</title>
</head>
<body>
<?php //require_once ("register-base.php");?>
<div class="bg-bot">
    <div class="karkas">
        <?php //require_once "../lib/header.php";?>
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
               <p>На этой странице вам необходимо заполнить паспортные данные всех туристов, для которых будет бронироваться тур. Поля Имя и Фамилию необходимо заполнять латиницей.</p>
               <p>
        Если вы не хотите заполнять форму на сайте, вы можете позвонить непосредственно менеджеру отдела онлайн-бронирования по телефонам <span>(050)353-44-89, (067)658-45-61</span> и запросить у него форму в виде таблицы Excel. Менеджер отправит ее на ваш электронный адрес. На основании заполненных данных из этой таблицы менеджер сможет забронировать тур в системе. Вы так же можете скачать форму по <a href="">ссылке</a> и отправить ее на наш электронный адрес  <span>online@tyrist.ua</span></p> 
           </div>
           <form action="../regist-done/register-done.php" method="get">

           <div class="single-tyrist">
               <h2>Информация о туристе <?php echo $i;?></h2>
               <div class="input-box">
               <input type="text" name="surname<?php echo $i;?>" placeholder="Surname">
               <input type="text" name="name<?php echo $i;?>" placeholder="Name">
               <input type="text" name="document<?php echo $i;?>" placeholder="Серия и номер загранпаспорта">
               <p>Годен до</p>
               <input type="date" name="document_date<?php echo $i;?>" placeholder="Год-месяц-число"><br>
                <p>Дата рождения</p>
               <input type="date" name="age<?php echo $i;?>" placeholder="Год-месяц-число">
               </div>
               <div class="info-box">
                   <b>Обратите внимание</b> <br>
        <p>Имя и Фамилию необходимо заполнять латинскими буквами, как в загранпаспорте</p>
               </div>
           </div>

           <div class="turist-foot">
               <h1>Дополнительная информация</h1>
               <input type="text"  name="contact" placeholder="Контактный телефон">
               <input type="label" name="hum" value="<?php echo $hum; ?>" style="display:none">
               <input type="label" name="id_order" value="<?php echo $id_order; ?>" style="display:none">
               <input type="submit" name="submitData" value="Забронировать">
           </div>
           </form>      
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
        <?php //require_once "../lib/footer.php";?>
    </div>
</div>
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>
<script src="../lib/search.js"></script> 
</body>
</html>