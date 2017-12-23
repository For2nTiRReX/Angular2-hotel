$(document).ready(function(){
    $("#s-btn").click(function(){
        var pole = $("#search-field");
        $(".search-bascet").show();
        //console.log(pole.val().length);
        if (pole.val().length >= 3){
            $.ajax({
                type: 'POST',
                    url: '../lib/search.php',
                    data: {"textarea": pole.val()},
                    cache: false,
                    success: function (data){ 
                        $(".search-bascet").append().html(data);
                    },
                    error: function (){
                        alert("Some error");
                    }
            });
        }
    });
    $(".search-bascet").mouseleave(function(){
        $(".search-bascet").hide();
    });
});