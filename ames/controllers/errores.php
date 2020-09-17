<?php
    /*
        Rodriguez Alan Nahuel
        alan.rodriguez@bue.edu.ar
        11 5705 1550
    */
    
    class Errores extends Controller{
        function __construct(){
            parent::__construct();
            $this->view->render('errores/index');
        }
    }
?>