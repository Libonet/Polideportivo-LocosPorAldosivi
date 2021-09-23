<?php  

require('database.php');

$correo = $_POST['correo'];
$contraseña = $_POST['contraseña'];

if(!empty($correo) && !empty($contraseña)) {
    $query = 'SELECT FROM ';
}
else 

?>

<!-- <!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>

    <link rel="stylesheet" href="login.css">

</head>

<body>
    <form action="login.php" method="GET">
        <input type="email" name="correo" id="" placeholder="Ingrese su correo">
        <input type="password" name="contraseña" id="" placeholder="Ingrese su contraseña">
        <button type="submit">Enviar</button>
        <!-- https://stackoverflow.com/questions/41904199/whats-the-point-of-button-type-button 
        https://dev.to/clairecodes/why-its-important-to-give-your-html-button-a-type-58k9
    </form>
</body>
</html> -->