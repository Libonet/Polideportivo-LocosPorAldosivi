<?php
// include "variables.ini";

// $connection = mysqli_connect(
//     "localhost",
//     "nuevenue",
//     "nueve990",
//     "nueve"
// );

// if ($connection) {
//     echo "Database is connected";
// }
// else {
//     die('Could not connect: ' . $connection -> connect_error); // Esto aparece, pero no muestra nada, por lo que no hay error???
// }

$mysqli = new mysqli("3.130.9.8","nuevenue","nueve990", "nueve");

// Check connection
if ($mysqli -> connect_error) {
  echo "Failed to connect to MySQL: " . $mysqli -> connect_error;
  exit();
}
else {
  echo "Se conectó correctamente a la base de datos???";
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