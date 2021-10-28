<?php  

require('database.php');

$correo = $_POST['correo'];
$contraseña = $_POST['contraseña'];

if (!empty($correo) && !empty($contraseña)) {
    $query = " SELECT (Correo) FROM clientes_internos WHERE Correo = '$correo' AND Contraseña = '$contraseña' ";
    $result = mysqli_query($connection, $query);

    if ($result->num_rows > 0) {
        setcookie("Correo", $correo, time() + 60, '/');
        
        // Basado, AJAX lo que retorna es un string del server, por ello no sirve el return. Es por eso que tuve que sacar
        // el cartel de la database.php
        echo "true";
        return true;
    }
    echo "false";
    return false;
}

?>