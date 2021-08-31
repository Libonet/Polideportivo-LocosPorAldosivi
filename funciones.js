
$(function() {
    console.log("JQuery is Working");

    // Ver nota JavaScript.2 - Luca
    date = new Date
    fecha.min = date.toISOString().split("T")[0];
    fecha.max = new Date(date.setMonth((date).getMonth()+2)).toISOString().split("T")[0];

    // Que capture cuando se hace un submit desde el form ReservaDeCancha (esto lo hace el botón Enviar)
    $('#ReservaDeCancha').submit(function(e) {
        // let nombre = $('#nombre').val()
        // let nombre = $('#nombre').val()
        // var campos = JSON.parse($(this)); // Captura los valores ingresados con sus respectivos campos separados por "&&"
        
        // var campos2 = $(this).serialize(); // Ver nota JavaScript.1a - Luca
        // console.log( campos2 );
        const data = new FormData(ReservaDeCancha); // Ver nota JavaScript.1b - Luca
        // console.log(data);
        const vamos = JSON.stringify( Object.fromEntries(data.entries()) );
        console.log(vamos);
        const obj2 = {name: "John", age: 30, city: "New York"};
        console.log(obj2);
        const myJSON = JSON.stringify(obj2);
        console.log(myJSON);
        var campos = $(this).serializeArray();
        console.log(campos);
        var json2 = JSON.stringify( campos );
        console.log(json2)
        obj = {
            "1" : {
                "1" : "hey",
                "2" : "hay"
                },              
            "2" : {
                "1" : "hey",
                "2" : "hay"
                }
        }
        console.log(obj)
        var json = JSON.stringify( obj );
        console.log(json)

        $.ajax({
            url: 'formulario.php',
            type: 'POST',
            data: { vamos }, // aparentemente esto es lo mismo que {nombre : nombre}. Lo que está pasando es que estás enviando una propiedad (nombre) con el valor nombre
            success: function(res) {
                console.log(res);
                // if (res == -1)
                //     alert('Cliente ya registrado');
                // $(':input').val('');
            },
            error: function(respuesta) {
                console.log("Existe un problema en el archivo 'formulario.php'");
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