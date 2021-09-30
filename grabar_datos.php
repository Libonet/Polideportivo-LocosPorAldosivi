<?php
    
    require('database.php');

    $datos = json_decode($_POST['datos']);

    // Nota: La consulta debe ir con doble comillas, con comillas simples no funca. Además para hacer una consulta múltiple 
    // se tiene que incluir ';' al final del comando SQL, para que se pueda ejecutar uno tras otro.
    $query = "INSERT INTO clientes_externos (Nombre, Apellido, Telefono, Email) VALUES
    ('$datos->nombre', '$datos->apellido', '$datos->telefono', '$datos->email');"; // Acá establecemos la consulta, pero no la ejecutamos, entonces...
    
    $query .= "INSERT INTO cancha (Partidario, Rival, Tipo, Cant_jugadores, FechaReserva) VALUES 
    ('$datos->partidario', '$datos->rival', '$datos->cancha', '$datos->cant_jugadores', '$datos->fecha')"; // Grabo en la tabla 'cancha'

    echo $query;
    $result = mysqli_multi_query($connection, $query); // Con la función mysqli_multi_query, al que le envio las credenciales y las consultas, 
    // devuelve el resultado y lo guarda en $result

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