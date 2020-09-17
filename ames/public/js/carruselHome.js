
    $("#homeSlider1").css('left','0%');
    $("#homeSlider2").css('left','100%');
    $("#homeSlider3").css('left','100%');

    var carruselHomeActual = 1;

    function carruselHome(){
        let nuevo = carruselHomeActual + 1;
        if(nuevo == 4){
            nuevo = 1;
        }
        $("#homeSlider"+carruselHomeActual).animate({
            left: '-100%'
        }, 800, () => {

            for(i=1;i<=4;i++){
                if(i != carruselHomeActual){
                    $("#homeSlider"+i).css('left','100%');
                }                
            }
            
        });
        $("#homeSlider"+nuevo).animate({
            left: '0%'
        }, 780);
        
        $("#homeSliderStatus1").css('background-color','white');
        $("#homeSliderStatus2").css('background-color','white');
        $("#homeSliderStatus3").css('background-color','white');
        
        $("#homeSliderStatus"+nuevo).css('background-color','blue');
        
        carruselHomeActual = nuevo;
    }

    var carruselHomeInterval = setInterval(() => {
        carruselHome();
    }, 5000);

    function carruselHomeStatus(nuevo){   
        clearInterval(carruselHomeInterval);
        carruselHomeActual = nuevo;
        
        $("#homeSlider1").css('left','100%');
        $("#homeSlider2").css('left','100%');
        $("#homeSlider3").css('left','100%');
        
        $("#homeSlider"+nuevo).css('left','0%');
        
        $("#homeSliderStatus1").css('background-color','white');
        $("#homeSliderStatus2").css('background-color','white');
        $("#homeSliderStatus3").css('background-color','white');
        
        $("#homeSliderStatus"+nuevo).css('background-color','blue');

        carruselHomeInterval = setInterval(() => {
            carruselHome();
        }, 5000);
    }
