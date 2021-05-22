$(document).ready(function () {

	$('#barra_menu').on('click','.barra_menu', function(e) {
		var cual = parseInt(e.target.id.substring(4));
		$('.barra_menu').removeClass('w3-white');
		$(this).addClass('w3-white');
	});
});;