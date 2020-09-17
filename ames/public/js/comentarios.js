var comentario = ['\
<h2>\
    "Muy buena atención, rápido y sencillo sin\
    demasiados tramites te lo otorgan rapidísimo."\
</h2>\
<p>\
    <b>Miguel Isidoro Caceres</b>, 11111111111\
</p>\
'];

comentario[1] = '\
<h2>\
    "Muy buena atención, rápido y sencillo sin\
    demasiados tramites te lo otorgan rapidísimo."\
</h2>\
<p>\
    <b>Miguel Isidoro Caceres</b>, 2222222222222\
</p>\
';

comentario[2] = '\
<h2>\
    "Muy buena atención, rápido y sencillo sin\
    demasiados tramites te lo otorgan rapidísimo."\
</h2>\
<p>\
    <b>Miguel Isidoro Caceres</b>, 33333333333333\
</p>\
';

comentario[3] = '\
<h2>\
    "Muy buena atención, rápido y sencillo sin\
    demasiados tramites te lo otorgan rapidísimo."\
</h2>\
<p>\
    <b>Miguel Isidoro Caceres</b>, 444444444444\
</p>\
';

comentario[4] = '\
<h2>\
    "Muy buena atención, rápido y sencillo sin\
    demasiados tramites te lo otorgan rapidísimo."\
</h2>\
<p>\
    <b>Miguel Isidoro Caceres</b>, 5555555555555\
</p>\
';

$(document).ready(function(){   
    $('.comentariosContainer').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true,
        autoplay: true,
        autoplaySpeed: 2000
    });
  });
