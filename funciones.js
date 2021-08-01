
$(function() {
    console.log('JQuery is Working');
    
    // Que capture el imput con el nombre search, y que cuando se escriba arranque la función
    $('#nombre').keyup( function() { 
        let nombre = $('#nombre').val() // Desde ese mismo elemento (u objeto?) quiero obtener el valor
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
    })
});

// $(document).ready(function(){
    
//     // Registro Email
//     $("#registro").submit(function(e) {
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
