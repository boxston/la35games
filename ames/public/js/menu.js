
function rotar(obj,con,lado){
    if(lado == 'izq'){
        if(con <= 180){
            setTimeout(()=>{
                obj.css('transform','rotate3d(0,1,0,'+con+'deg)');
                con++;
                rotar(obj,con,'izq');
            },2);
        }else{
            obj.css('transform','rotate3d(0,1,0,0deg)');
        } 
    }

    if(lado == 'der'){
        if(con <= 180){
            setTimeout(()=>{
                obj.css('transform','rotate3d(0,1,0,'+con+'deg)');
                con++;
                rotar(obj,con,'der');
            },2);
        }else{
            obj.css('transform','rotate3d(0,1,0,0deg)');
        } 
    }
      
}

function menuNormal(){
    let barra1 = $("#menuBarra1");
    let barra2 = $("#menuBarra2");
    let barra3 = $("#menuBarra3");

    $("#navList").css('display','none');

    $("#menu").css('margin-top','0px');
    barra2.css('display','block');
    barra1.css('position','relative');
    barra3.css('position','relative');
    barra1.css('WebkitTransform','rotate(0deg)');
    barra3.css('WebkitTransform','rotate(0deg)');

    rotar($("#menu"),10,'der');
}

function menuCruz(){
    let barra1 = $("#menuBarra1");
    let barra2 = $("#menuBarra2");
    let barra3 = $("#menuBarra3");
    
    $("#navList").css('display','flex');


    $("#menu").css('margin-top','10px');
    barra2.css('display','none');
    barra1.css('position','absolute');
    barra3.css('position','absolute');
    barra1.css('WebkitTransform','rotate(-45deg)');
    barra3.css('WebkitTransform','rotate(45deg)');
    
    rotar($("#menu"),10,'izq');
}

function menu(){
    let estado = $("#navList").css('display');

    if(estado == 'none'){
        menuCruz();
    }else{
        menuNormal();
    }
}

$(window).resize(function() {
    let posicion = $("#navList").css('position');
    let estado = $("#navList").css('display');

    if(estado == 'none' && posicion == 'static'){
        menuCruz();
    }
});




