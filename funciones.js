$(document).ready(function(){
    
    // Registro Email
    $("#registro").submit(function(e) {
        e.preventDefault();
        var data = new FormData(this);
        $.ajax({
            url: 'datos.php',
            type: 'POST',
            data: data,
            contentType: false,
            processData: false,
            success: function(ans) {
                if (ans == -1)
                    alert('Cliente ya registrado');
                $(':input').val('');
            }
        });
    })
})
