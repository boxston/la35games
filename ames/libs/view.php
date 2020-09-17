<?php
    /*
        Rodriguez Alan Nahuel
        alan.rodriguez@bue.edu.ar
        11 5705 1550
    */
    
    class View{
        function __construct(){
        }

        function render($vista){
            require 'views/'.$vista.'.php';
        }
    }

?>