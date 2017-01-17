window.onload = function(){
	var div = document.getElementById('load');
	preload(div, 30);
};
function preload(el, interval){
	var op = 1;
	var timer = setInterval(function () {
		if (op <= 0.05){
			clearInterval(timer);
			el.style.display = 'none';
			el.className = '';
		}
		el.style.opacity = op;
		op -= op * 0.10;
	}, interval);
}

$(document).ready(function($) {
	$(window).bind('scroll', function () {
		if ($(window).scrollTop() > 50) {
			$('.navbar-fixed-top').addClass('navbar-scroll');
		} else {
	       //Quando o menu ficar fixo
	       $('.navbar-fixed-top').removeClass('navbar-scroll'); 
	   }
	});


	$('nav a').click(function() {
		var target = $(this.hash);
		$('html,body').animate({
			scrollTop: target.offset().top - 60
		}, 1000);
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
		if (msg != "") {
			$(this).next().addClass('active');
		} else {
			$(this).next().removeClass('active');
		}	
	});
	$('.formulario textarea').keyup(function() {
		var msg = $(this).val();
		if (msg != "") {
			$(this).next().addClass('active');
		} else {
			$(this).next().removeClass('active');
		}	
	});


});