    function enviar() {
        let nombre = $('#nombre').val();
        let correo = /[\w-\.]{2,}@([\w-]{2,}\.)*([\w-]{2,}\.)[\w-]{2,4}/;
        let mensaje = $('#message').val();
        let telefono = $('#tel').val();

        let name = "";
        let tel = "";
        let email = "";
        let message = "";
        
        if ($('#name').val() != "") {
            name = $('#name').val();

        } else {
            alert('Invalid Name');
        }

        if ($('#email').val() != "") {
            email = $('#email').val();
        } else {
            alert('Invalid EMail');
        }
        
        if ($('#tel').val() != "") {
            tel = $('#tel').val();
        }

        if ($('#message').val() != "") {
            message = $('#message').val();

        } else {
            alert('Invalid Message');
        }

        if(name != "" && email != "" && message != ""){
            let data = {
                "name": name,
                "tel": tel,
                "email": email,
                "msg": message
            }

            $.ajax({
                url: 'send.php',
                data: data,
                type: 'post',
                success: function (resp){
                    console.log(resp);
                    if(resp == "Send OK!!!"){
                        alert(resp);
                        location.href = '/';
                    }else{
                        alert("Error sending message... Try again later!!!");
                    }
                }
            });
        }
        return false;
    }