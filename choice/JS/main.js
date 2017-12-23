
$(document).ready(function () {
    for (var j= 0;j<=5;j++){
        kolZv = ($("p.get-comf:eq(" +j+ ")").text());
        if (kolZv == 1){
            $("div.single-hot:eq("+ j +") > img.hide").hide();
        }
        else if (kolZv == 2){
            $("div.single-hot:eq("+ j +") > img.hide:eq(3)").hide();
            $("div.single-hot:eq("+ j +") > img.hide:eq(2)").hide();
            $("div.single-hot:eq("+ j +") > img.hide:eq(1)").hide();
        }
        else if (kolZv == 3){
            $("div.single-hot:eq("+ j +") > img.hide:odd").hide();
        }
        else if (kolZv == 4){
            $("div.single-hot:eq("+ j +") > img.hide:eq(3)").hide();
        }
    }
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
    cifri($("#input1")[0]);
    cifri($("#input2")[0]);
    console.log(document.getElementById('input2'));
    console.log($("#input2").val());
});