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
			$('.c1').hide('slow');
			$('.c2').show('slow');
			$('.c3').hide('slow');
		} else if ($(this).is('#sites')) {
			$('.c1').show('slow');
			$('.c2').hide('slow');
			$('.c3').hide('slow');
		} else if ($(this).is('#logos')) {
			$('.c1').hide('slow');
			$('.c2').hide('slow');
			$('.c3').show('slow');
		}
	});

});