<?php
include "variables.inc";
$mysqli = new $mysqli($HOST, $USER, $PASS, $BASE) // El server

// Verificación de la existencia (o no) del email ingresado
$res = $mysqli->query("SELECT Orden FROM clientes WHERE Email = '".$_POST['email']."' ");
if($res->num_rows)
    echo -1;
else{
    $mysqli->query("INSERT INTO clientes (Nombre, Apellido, Telefono, Email) VALUES 
    ('".$_POST['nombre']."', '".$_POST['apellido']."', '".$_POST['telefono']."', '".$_POST['email']."') ");
}

?>