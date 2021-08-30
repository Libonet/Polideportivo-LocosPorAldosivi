<?php
    
    include('database.php');

    // $campos = $_POST['campos']; // Almacenar en la variable $nombre lo que se está recibiendo con el protocolo POST con el nombre "nombre"
    // $campos2 = $_POST['campos2'];
    // $xd = preg_split('*&*', $campos2, -1);
    // print_r($xd);
    // // Recoger los valores codificados en un string a través de expresiones regulares:
    // // De acá obtuve la info: https://stackoverflow.com/questions/5696412/how-to-get-a-substring-between-two-strings-in-php
    // // https://www.php.net/manual/es/function.preg-match.php
    // preg_match('/nombre=(.*?)&/',$campos2, $xd2);
    // preg_match('/apellido=(.*?)&/',$campos2, $xd2);
    // // preg_match('/option=(.*?)&/',$campos2, $xd2);
    // $lol == ($xd2[1]);
    // echo $campos[1];

    echo $_POST['nombre'];
    exit();

    // Si nombre no está vacio, procedo hacer una búsqueda en la base de datos
    if(!empty($nombre)) {
        // $query = ("INSERT INTO clientes (Nombre) VALUES ('$nombre')"); // Acá establecemos la consulta, pero no la ejecutamos, entonces...
        $query = ("SELECT * FROM clientes WHERE Nombre LIKE '$nombre%' "); // Acá establecemos la consulta, pero no la ejecutamos, entonces...
        $result = mysqli_query($connection, $query); // Con la función mysqli_query, al que le envio las credenciales y la consulta, devuelve el resultado y lo guarda en $result
        
        // echo $result; Nota: No se puede mostrar el objeto de esta manera, hay que descomponerlo como figura abajo

        // Si no se obtuvo nada tira error
        if(!$result) {
            die('Query Error: '. mysqli_error($connection));
        }

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
    }
?>