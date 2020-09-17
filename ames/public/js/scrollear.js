function scrollear(id) {
    $('html, body').animate({
        scrollTop: $("#" + id).offset().top
    }, 2000);
}

$(window).scroll(function() {
    var altura = $(window).scrollTop();
    if(altura >= 100){
        $("nav").css("background-color","rgb(255, 255, 255, 0.9)");
        $("nav").css("position","fixed");
        $("nav").css("top","0px");
        $("nav").css("left","0px");
        $("nav>ul>li").css("color","black");
        $("nav>ul>li>a").css("color","black");
        $("nav>img").attr("src","public/img/Logos/logo_color.svg");
        $("nav").css("z-index","9");
        $("#menuBarra1").css("background-color","black");
        $("#menuBarra2").css("background-color","black");
        $("#menuBarra3").css("background-color","black");
    }else{
        $("nav").css("background-color","rgb(255, 255, 255, 0)");
        $("nav").css("position","absolute");
        $("nav").css("top","30px");
        $("nav").css("left","0px");
        $("nav>ul>li").css("color","white");
        $("nav>ul>li>a").css("color","white");
        $("nav>img").attr("src","public/img/Logos/logo_blanco.svg");
        $("#menuBarra1").css("background-color","white");
        $("#menuBarra2").css("background-color","white");
        $("#menuBarra3").css("background-color","white");
        if($("#menu").css("display") == "flex")
        {
            $("nav>ul>li").css("color","black");
            $("nav>ul>li>a").css("color","black");
        }
    }
});