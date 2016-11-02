$(document).ready(function($) {
	$('header').addClass('animacao');


	var num = 50; // tanto de scroll que vai precisar para a barra ficar fixa.

	$(window).bind('scroll', function () {
		if ($(window).scrollTop() > num) {
			$('.navbar-fixed-top').addClass('navbar-scroll');
		} else {
	       //Quando o menu ficar fixo
	       $('.navbar-fixed-top').removeClass('navbar-scroll'); 
	   }
	});
});