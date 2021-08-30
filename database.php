<?php

// Conexión a la base de datos
$connection = new mysqli("localhost","nuevenue","nueve990","nueve");

// Comprobar conexión
if ($connection -> connect_errnor) {
  echo "Error al conectarse a la base de datos: " . $connection -> connect_error;
  exit();
}
else {
  // Nota: Solo se puede poner \n con doble comillas
  echo "Se conectó correctamente a la base de datos\n";
}

// // Verificación de la existencia (o no) del email ingresado
// $res = mysqli->query("SELECT Orden FROM clientes WHERE Email = '".$_POST['email']."' ");
// if($res->num_rows)
//     echo -1;
// else{
//     mysqli->query("INSERT INTO clientes (Nombre, Apellido, Telefono, Email) VALUES 
//     ('".$_POST['nombre']."', '".$_POST['apellido']."', '".$_POST['telefono']."', '".$_POST['email']."') ");
// }

?>