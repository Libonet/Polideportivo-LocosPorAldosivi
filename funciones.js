
$(function() {
    console.log("JQuery is Working");

    // Ver nota JavaScript.2 - Luca
    date = new Date
    fecha.min = date.toISOString().split("T")[0];
    fecha.max = new Date(date.setMonth((date).getMonth()+2)).toISOString().split("T")[0];

    // Que capture cuando se hace un submit desde el form ReservaDeCancha (esto lo hace el botón Enviar)
    $('#ReservaDeCancha').submit(function(e) {
        // var campos2 = $(this).serialize(); // Ver nota JavaScript.1a - Luca
        // console.log( campos2 );
        const data = new FormData(ReservaDeCancha); // Ver nota JavaScript.1b - Luca
        const datos = JSON.stringify( Object.fromEntries(data.entries()) );
        $.ajax({
            url: 'grabar_datos.php',
            type: 'POST',
            data: { datos }, // aparentemente esto es lo mismo que {nombre : nombre}. Lo que está pasando es que estás enviando una propiedad (nombre) con el valor nombre
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
        e.preventDefault(); // Esto permite que la página no vuelva a la landing page, acción que ocurre por default
    });
});

// $(document).ready(function(){
    
    //     // Registro Email
    //     $("#ReservaDeCancha").submit(function(e) {
        //         e.preventDefault();
        //         var data = new FormData(this);
        //         $.ajax({
            //             url: 'datos.php',
            //             type: 'POST',
            //             data: data,
            //             contentType: false,
            //             processData: false,
            //             success: function(res) {
                //                 if (res == -1)
                //                     alert('Cliente ya registrado');
                //                 $(':input').val('');
                //             }
                //         });
                //     })
// })
