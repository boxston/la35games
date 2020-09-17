<?php
    require 'PHPMailer/Exception.php';
    require 'PHPMailer/PHPMailer.php';
    require 'PHPMailer/SMTP.php';
    
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    $msgs = '';

    if(isset($_POST['name']))
    {
        $name = $_POST['name'];
        $msgs .= "Name: ".$name."<br>\n";
    }
    if(isset($_POST['tel']))
    {
        $tel = $_POST['tel'];
        $msgs .= "Tel: ".$tel."<br>\n";
    }
    if(isset($_POST['email']))
    {
        $email = $_POST['email'];
        $msgs .= "Email: ".$email."<br>\n";
    }
    if(isset($_POST['msg']))
    {
        $msg = $_POST['msg'];
        $msgs .= "Message: ".$msg."<br>\n";
    }

    if(isset($_POST['name']) and isset($_POST['email']))
    {
        if($_POST['name'] != "" AND $_POST['email'] != "")
        {

            $mail = new PHPMailer();
            $mail->SMTPSecure = "ssl";  
            $mail->Host='smtp.gmail.com';  // PONER LA DIRECCION DEL SMTP, EN ESTE CASO DEJO DE EJEMPLO GMAIL
            $mail->Port='465';   // PONER EL PUERTO DEL SMTP, EN ESTE CASO DEJO DE EJEMPLO PARA GMAIL
            $mail->Username = 'cuenta@gmail.com'; // PONER LA CUENTA DE MAIL DESDE DONDE VA A ENVIAR
            $mail->Password = '1234';  // PONER LA CONTRASEÑA DE MAIL DESDE DONDE VA A ENVIAR
            $mail->SMTPKeepAlive = true;  
            $mail->Mailer = "smtp"; 
            $mail->IsSMTP();
            $mail->SMTPAuth = true; 
            $mail->CharSet = 'utf-8';  
            $mail->SMTPDebug  = 0;  
            $mail->setFrom("asd@gmail.com", "Web Contact"); // PONER EN PRIMER SECTOR EL MAIL DESDE DONDE VAS A ENVIAR, EN EL SEGUNDO EL NOMBRE QUE QUERES QUE LE APAREZCA AL QUE RECIBA
            $mail->Subject="Web Contact"; // EL ASUNTO DEL MAIL 
            $mail->addAddress("sarasa@hotmail.com"); // ACA PONES LA CUENTA DE MAIL A DONDE TIENEN QUE LLEGAR LOS CONTACTOS WEB
            $mail->msgHTML($msgs);
              
            if(!$mail->send()){
                echo $mail->ErrorInfo;
            }else{
                echo "Send OK!!!";
            }
        }
        

    }else{
        echo "ERROR";
    }
    
?>