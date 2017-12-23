
$(document).ready(function(){
    console.log($(".choice-tur input:text:eq(1)").val());
    console.log($("[name=date_off]").val());
    var comfort=$("#comfort").text();
    for(var i = 0; i < comfort; i++){
    $(".hotel-info-l img:eq("+ i +") ").show();
    }   // звезды
    
$("form").submit(function(){
        if ($(".choice-tur input:text:eq(0)").val()!="" &&                                                                       $(".choice-tur input:text:eq(1)").val()!="" &&
            $("[name=date_off]").val()!="")
         {  
            return true;    
         }
        else {  
            alert ("Пожалуйста заполните все поля");
            return false; 
        }
})  // проверка заполнения всех полей
  function cifri(obj) {
      obj.onkeypress = function(e) {
         e = e || event;
        if (e.ctrlKey || e.altKey || e.metaKey) return;
        var chr = getChar(e);
      // с null надо осторожно в неравенствах,
      // т.к. например null >= '0' => true
      // на всякий случай лучше вынести проверку chr == null отдельно
        if (chr == null) return;
        if (chr < '0' || chr > '9') {
        return false;
        }
      }
      function getChar(event) {
          if (event.which != 0 && event.charCode != 0) {
            if (event.which < 32) return null;
            return String.fromCharCode(event.which) // остальные
          }
          return null; // специальная клавиша
      }
  }
    cifri($("[name=days]")[0]); 
$("#sub-com").click(function(){
    var textarea = $("#coment").val();
    var user = $("[name=name-user]").val();
    var hotel = $("[name=id_hotel]").val();
    if (textarea !="" && user !="" && hotel !=""){
     $.ajax({
                    type: 'POST',
                    url: 'coment.php',
                    data: {"textarea": textarea , 
                           "user": user,
                           "hotel": hotel
                          },
                    success: function (dataM){ 
                        $('<p><span>'+dataM+'</span><span class="user">'+user+'</span>'+textarea+'</p>').prependTo("div.vivod-base");
                        $("#coment").val("");
                    },
                    error: function (){
                        alert("Some error");
                    } 
                });
        }
    else {
        alert("Заполните все поля")
    }
   
    //$("[name=name-user]").val("");
});
    
});

   
 