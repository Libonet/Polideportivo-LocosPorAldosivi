$(function() {
    console.log("JQuery is Working");

    $('#reserva').click(function verificar(e) {
        // Ver nota JavaScript.2 - Luca
        date = new Date
        fecha_min = date.toISOString().split("T")[0];
        fecha_max = new Date(date.setMonth((date).getMonth()+2)).toISOString().split("T")[0];

        // Forma abreviada de Ajax:
        $.post("verificar_horario.php",{fecha_min, fecha_max}, function(response) {
            console.log(response);
        })
        e.preventDefault(); // Esto permite que la página no vuelva a la landing page, acción que ocurre por default
    });

    // Que capture cuando se hace un submit desde el form RegistroSocio (esto lo hace el botón Enviar)
    $('#RegistroSocio').submit(function(e) {
        // var campos2 = $(this).serialize(); // Ver nota JavaScript.1a - Luca
        // console.log( campos2 );
        const data = new FormData(RegistroSocio); // Ver nota JavaScript.1b - Luca
        const datos = JSON.stringify( Object.fromEntries(data.entries()) );
        // console.log(datos)
        $.ajax({
            url: 'registro.php',
            type: 'POST',
            data: { datos }, // aparentemente esto es lo mismo que {nombre : nombre}. Lo que está pasando es que estás enviando una propiedad (nombre) con el valor nombre
            // dataType: "JSON",
            success: function(res) {
                console.log(res);
                // if (res == -1)
                //     alert('Cliente ya registrado');
                // $(':input').val('');
            },
            error: function(respuesta) {
                console.log("Existe un problema en el archivo 'grabar_datos.php'");
                alert(respuesta);
            }
        })
        e.preventDefault();
    });

    $('#Logeo').submit(function(e) {
        // Método JQuery
        let correo = $('#login_correo').val()
        let contraseña = $('#login_contraseña').val()
        $.post('login.php', {correo, contraseña}, function(respuesta) {
            console.log(respuesta)
            if (respuesta == "true") {
                console.log("Nice")
            }
            else
                alert("Introdujo mal alguno de los campos, por favor, vuelva a intentarlo")
        })
        e.preventDefault();
    });
});

