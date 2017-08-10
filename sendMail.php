<?php

$post = $_POST;
$correo_envio = "juuanduuke@gmail.com";
$mensaje = "<h3>Nuevo mensaje</h3>
            <h4>Asunto: $post->asunto.</h4><br>
            <p>Mail: $post->email </p>
            <p>Mensaje: $post->mensaje</p>
            <hr>
            <p>Fecha: ".date('F j, Y, g:i a')."</p>";

if (mail($correo_envio, $post->asunto, $mensaje)) {
    echo "Correo enviado correctamente";
} else {
    echo "Correo no enviado correctamente, inténtalo más tarde.";
}
