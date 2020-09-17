<?php
    /*
        Rodriguez Alan Nahuel
        alan.rodriguez@bue.edu.ar
        11 5705 1550
    */
    
    require_once 'controllers/errores.php';

    class App{
        function __construct(){
            $url = isset($_GET['url']) ? $_GET['url']: null;
            $url = rtrim($url, '/');
            $url = explode('/', $url);

            if(empty($url[0])){

                $fileController = 'controllers/main.php';

                require_once $fileController;

                $controller = new Main();

                return false;

            }

            $fileController = 'controllers/'.$url[0].'.php';

            if(file_exists($fileController)){

                require_once $fileController;

                $controller = new $url[0];

                if(isset($url[1])){
                    $controller->{$url[1]}();
                }

            }else{
                $controller = new Errores();
            }

        }
    }

?>