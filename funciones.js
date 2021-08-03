
$(function() {
    console.log('JQuery is Working');
    
    // Que capture cuando se hace un submit desde el form ReservaDeCancha (esto lo hace el botón Enviar)
    $("#ReservaDeCancha").submit(function(e) {
        let nombre = $('#nombre').val() // Desde ese mismo elemento (u objeto?) quiero obtener el valor
        var str = $(this).serialize(); // Captura los valores ingresados con sus respectivos campos separados por "&&"
        console.log(str);
        $.ajax({
            url: 'formulario.php',
            type: 'POST',
            data: { nombre }, // aparentemente esto es lo mismo que {nombre : nombre}. Lo que está pasando es que estás enviando una propiedad (nombre) con el valor nombre
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
