// Loader
window.onload = function () {
	var div = document.getElementById('load');
	preload(div, 30);
};

//Declarações de funções
// Função para opacidade sumir com o load quando for carregado
function preload(el, interval) {
	var op = 1;
	var timer = setInterval(function () {
		if (op <= 0.05) {
			clearInterval(timer);
			el.style.display = 'none';
			el.className = '';
		}
		el.style.opacity = op;
		op -= op * 0.10;
	}, interval);
}

// Ao fechar o menu
function menuOff() {
	$('.nav-animacao').removeClass('active');
	$('nav ul li').removeClass('ativo');
	$('.hamburguer').removeClass('active');
	$('nav img').css('filter', 'invert(0)');
	$('.social-copy').removeClass('.footernav');
}

// Ao abrir o menu
function menuOn() {
	$('.nav-animacao').addClass('active');
	$('.hamburguer').addClass('active');
	$('nav ul li').addClass('ativo');
	$('nav img').css('filter', 'invert(45%)');
	$('.social-copy').addClass('.footernav');
}

// Retorna a diferença de altura do elemento ao topo
function getSectionInicio(el) {
	return $(el).offset().top - 50;
}

// Retorna a diferença de altura do elemento ao topo + o tamanho do elemento
function getSectionFim(el) {
	return $(el).offset().top + $(el).innerHeight() - 50;
}

// Verifica se o scroll está em cima de tal elemento
function isOnEl(el) {
	var posicaoScroll = $(document).scrollTop();
	return getSectionInicio(el) <= posicaoScroll && getSectionFim(el) >= posicaoScroll;
}

// Pega o valor de Z do html e utiliza para calcular o quanto pra baixo irá
function parallax() {
	posicaoScroll = $(document).scrollTop();

	$('.parallax').each(function () {
		var z = parseInt($(this).data("z"));
		$(this).css('transform', 'translateY(' + (posicaoScroll * (z * 0.05)) + 'px)');
	});
}

// Quando o site for carregado
$(document).ready(function ($) {
	// Alteração da cor do logo ao mudar o background
	$(window).scroll(function () {
		parallax();
		if (isOnEl('header')) {
			$('.logo svg').css('fill', '#c4c4c4');
		} else if (isOnEl('#sobre')) {
			$('.logo svg').css('fill', '#2a2a2a');
		} else if (isOnEl('#servicos')) {
			$('.logo svg').css('fill', '#c4c4c4');
		} else if (isOnEl('footer')) {
			$('.logo svg').css('fill', '#c4c4c4');
		} else {
			$('.logo svg').css('fill', '#2a2a2a');
		}
	});

	// Ativação do menu Hamburguer
	$('.hamburguer').click(function () {
		if ($('.nav-animacao').hasClass('active')) {
			menuOff();
		} else {
			menuOn();
		}
	});
	$('nav ul li a').click(function () {
		menuOff();
	});

	// Scroll suave no navbar
	$('nav a').click(function () {
		var target = $(this).attr('class');
		$('html,body').animate({
			scrollTop: $("#" + target).offset().top - 60
		}, 1000);
	});

	// Esconder e mostrar as fotos do portfolio
	$('#portfolio').find('.content ul li a').click(function (event) {
		if ($(this).is('#fotos')) {
			$('.site').removeClass('active');
			$('.site').addClass('hide');
			$('.fotos').addClass('active');
			$('.fotos').removeClass('hide');
		} else if ($(this).is('#sites')) {
			$('.site').addClass('active');
			$('.site').removeClass('hide');
			$('.fotos').removeClass('active');
			$('.fotos').addClass('hide');
		}
	});



	// Efeito Material Design no formulario
	$('.formulario input, .formulario textarea').keyup(function () {
		var msg = $(this).val();
		if (msg != "") {
			$(this).next().addClass('active');
		} else {
			$(this).next().removeClass('active');
		}
	});
});
