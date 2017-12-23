<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
    "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
<head>
<meta http-equiv="content-type" content="text/html" charset="utf-8">
<link rel="stylesheet"   href="ful-info.css">
<title>Tur.ua</title>
</head>
<body>
<?php //require_once ("info-base.php");?>
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
            <h2>Name<br><span>Country</span></h2>
            <div class="info-holder">
              <div class="hotel-img">
                  <a href=""><img src="<?php echo $row['img_big']?>" alt=""></a>
              </div>
               <div class="hotel-info">
                   <div class="hotel-info-l">
                       Клас отеля <br>
                        <img src="Img/star-small.png" alt="">
                        <img src="Img/star-small.png" alt="">
                        <img src="Img/star-small.png" alt="">
                        <img src="Img/star-small.png" alt="">
                        <img src="Img/star-small.png" alt="">
                   </div>
                   <div class="hotel-info-r">
                       <span>от</span> <?php echo $row['price']?> грн.
                   </div>
                   <p><?php echo $row['about']?></p> 
                   <span id="comfort"><?php echo $row['comfort']?></span>
               </div>
            </div>
            <div class="info-basket-holder">
                <div class="basket-title">Бронирование туров на сайте – это удобно</div>
                <em>Достаточно кликнуть на стоимость</em>
                <div class="basket-single">
                    <div class="basket-single-l">1</div> 
                    <div class="basket-single-r">
                        <p> Экономия времени</p>
                        Вы сами выбираете отель, даты вылета и продолжительность отдыха
                    </div>    
                </div>    
                <div class="basket-single">
                <div class="basket-single-l">2</div> 
                <div class="basket-single-r">
                <p> Бронирование  <br>дополнительных услуг</p>

                Индивидуальный трансфер, страховка, экскурсии
                </div> 
                </div>    
                <div class="basket-single">
                <div class="basket-single-l">3</div> 
                <div class="basket-single-r">
                <p>Подтверждение на e-mail</p>
                Уведомление на e-mail с полной информацией о забронированном туре
                </div> 
                </div>    
            </div>
            <div class="choice-tur">
            <form action="../register/register.php" method="get" >
            <div class="choice-tur-top">
            <p>Город вылета</p>
            <input type="text" name="country" placeholder="Киев"  value="">
            <input type="submit"  value="Выбрать">    
            </div>
            <ul class="choice-tur-bot">
            <li>
            <p>Кто поедет</p>
            <select name="hum" id="komfS">
            <option value="1">1 человек</option>
            <option value="2">2 человека</option>
            <option value="3">3 человека</option>
            <option value="4">4 человека</option>
            <option value="5">5 человек</option>
            </select>  
            </li>
            <li>
            <p>Дата вылета</p>
            <input type="date" name="date_off" placeholder="год-месяц-число" value="">
            </li> 
            <li>
            <p>Количество дней</p>
            <input type="text" name="days" placeholder="7" value="">
            <input type="label" name="id_hotel" value="<?php echo $row['id']?>" style="display:none" >
            </li>    
            </ul>
            </form>
            </div>   
            <div class="coment">
            <h1>Оставте отзыв</h1>
            <textarea name="coment" id="coment" cols="60" rows="8"></textarea><br>
            Введите имя<br>
            <input type="text" name="name-user">
            <input type="submit" id="sub-com"><br>
            </div> 
            <div class="vivod-base">
            <?/*
            while($row2 = $result2->fetch_assoc()){
            echo('<p><span>'.$row2['date'].'</span><span class="user">'.$row2['id_user'].'</span>'.$row2['text'].'</p>');
            }*/
            ?>
            </div>
        </div>
        <?php //require_once "../lib/footer.php";?>
    </div>
</div>
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>
<script src="../lib/search.js"></script>
<script src="JS/info.js"></script>    
</body>
</html>