$(document).ready(function($) {
	$('header').addClass('animacao');



	$(window).bind('scroll', function () {
		if ($(window).scrollTop() > 50) {
			$('.navbar-fixed-top').addClass('navbar-scroll');
		} else {
	       //Quando o menu ficar fixo
	       $('.navbar-fixed-top').removeClass('navbar-scroll'); 
	   }
	});

	$('#portfolio .content ul li a').click(function(event) {
		if ($(this).is('#fotos')) {
			$('.sites').hide('slow');
			$('.fotos').show('slow');
		} else if ($(this).is('#sites')) {
			$('.sites').show('slow');
			$('.fotos').hide('slow');
		}
	});

	$('.formulario input').keyup(function() {
		var msg = $(this).val();
		console.log(msg);
		if (msg != "") {
			$(this).next().addClass('active');
		} else {
			$(this).next().removeClass('active');
		}	
	});
	$('.formulario textarea').keyup(function() {
		var msg = $(this).val();
		console.log(msg);
		if (msg != "") {
			$(this).next().addClass('active');
		} else {
			$(this).next().removeClass('active');
		}	
	});


});