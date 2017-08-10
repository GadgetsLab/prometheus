<?php
$cabeceras  = 'MIME-Version: 1.0' . "\r\n";
$cabeceras .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
$post = (object)$_POST;
$correo_envio = "juuanduuke@gmail.com";
$mensaje = "<h3>Nuevo mensaje</h3>
            <h4>Asunto: $post->asunto.</h4>
            <p>Mail: $post->email </p>
            <p>Mensaje: $post->mensaje</p>
            <hr>
            <p>Fecha: ".date('F j, Y, g:i a')."</p>";

if (mail($correo_envio, $post->asunto, $mensaje, $cabeceras)) {
    echo "Correo enviado correctamente";
} else {
    echo "Correo no enviado correctamente, inténtalo más tarde.";
}
