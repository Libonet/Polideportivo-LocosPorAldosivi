<?php
    
    include('database.php');

    $datos = json_decode($_POST['datos']);

    // Nota: La consulta debe ir con doble comillas, con comillas simples no funca
    $query = "INSERT INTO clientes (Nombre, Apellido, Telefono, Email) VALUES
    ('$datos->nombre', '$datos->apellido', '$datos->telefono', '$datos->email') "; // Acá establecemos la consulta, pero no la ejecutamos, entonces...
    $result = mysqli_query($connection, $query); // Con la función mysqli_query, al que le envio las credenciales y la consulta, 
    // devuelve el resultado y lo guarda en $result
    
    $query2 = "INSERT INTO cancha (Partidario, Rival, Tipo, Cant.jugadores, FechaReserva) VALUES 
    ('$datos->partidario', '$datos->rival', '$datos->cancha', '$datos->can.jugadores', '$datos->fecha')"; // Grabo en la tabla 'cancha'
    $result2 = mysqli_query($connection, $query2);

    // echo $result; Nota: No se puede mostrar el objeto de esta manera, hay que descomponerlo como figura abajo

    // Convierto el resultado en un array con mysqli_fetch_array
    $json = array();
    while($row = mysqli_fetch_array($result)) {
        $json[] = array(
            'nombre' => $row['Nombre'],
            'apellido' => $row['Apellido'],
            'telefono' => $row['Telefono'],
            'email' => $row['Email']
        );
    }
    $jsonstring = json_encode($json);
    echo $jsonstring;
?>