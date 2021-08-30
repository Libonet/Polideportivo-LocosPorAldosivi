
$(function() {
    console.log('JQuery is Working');
   
    // Es medio quilombo, pero básicamente tiene que ver con el objeto Date. Parece ser muy poderoso.
    // En este caso además de obtener la fecha actual lo utilizo para pasar de milisigundos al formato de Date.
    // Obtengo el mes, le sumo uno, lo reemplazo en la fecha actual, lo paso al formato de Date, y lo termino 
    // dejando con el formato que entiende max, o eso es lo que entiendo xd.
    date = new Date
    fecha.min = date.toISOString().split("T")[0];
    fecha.max = new Date(date.setMonth((date).getMonth()+2)).toISOString().split("T")[0];

    // Que capture cuando se hace un submit desde el form ReservaDeCancha (esto lo hace el botón Enviar)
    $("#ReservaDeCancha").submit(function(e) {
        // let nombre = $('#nombre').val()
        // let nombre = $('#nombre').val()
        var campos = $(this).serializeArray(); // Captura los valores ingresados con sus respectivos campos separados por "&&"
        console.log(campos);
        $.ajax({
            url: 'formulario.php',
            type: 'POST',
            data: { campos }, // aparentemente esto es lo mismo que {nombre : nombre}. Lo que está pasando es que estás enviando una propiedad (nombre) con el valor nombre
            success: function(res) {
                console.log(res);
                // if (res == -1)
                //     alert('Cliente ya registrado');
                // $(':input').val('');
            },
            error: function(respuesta) {
                console.log('Existe un problema en el archivo "formulario.php"');
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


// Prueba del plugin de JQuery
// $("#ReservaDeCancha").validate({
//     rules: {
//         nombre: {required: true}
//     },
//     messages : {
//         nombre: {
//             required : "Por favor ingrese su nombre"
//         }
//     }
// });