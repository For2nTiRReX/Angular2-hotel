$(document).ready(function(){
    $("form").submit(function(){
        var my_c=$("[name=hum]").val();
        var my_switch=false;
        for (var i=1;i<=my_c;i++){
        if ($("[name=surname"+ i +"]").val()!="" &&
            $("[name=name"+ i +"]").val()!="" &&
            $("[name=document"+ i +"]").val()!="" &&
            $("[name=document_date"+ i +"]").val()!="" &&
            $("[name=age"+ i +"]").val()!="")
         {  
            my_switch=true;    
         }
        else { 
            my_switch=false;
            alert ("Заполните все поля");  
            return my_switch;
        }
        }
        if ($("[name=contact]").val()==""){
            my_switch=false;     
        }
        if (!my_switch){
            alert ("Заполните все поля");    
        }
        return my_switch;
    })
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
    cifri($("[name=contact]")[0]);
});
 