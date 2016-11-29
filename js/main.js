$(document).ready(function(){
    $("div").delegate("p", "click",function(){
        $("p").css("background-color", "#6E6E6E");
    });
});
//al darle click al input se cambia de color una parte de la pagina
$(document).ready(function(){
    $("div").on("click", "input", function(event){
        $(event.delegateTarget).css("background-color", "#210B61");
    });
});
//Hover en el menu
$(document).ready(function(){
    $(".mennu").hover(function(){
        $(this).css("background-color", "#210B61");
        }, function(){
        $(this).css("background-color", "#0000");
    });
});
//al darle clic a los parrafos se hace mas grande la letra evento one()
$(document).ready(function(){
    $("p").one("click", function(){
        $(this).animate({fontSize: "+=6px"});
    });
});

