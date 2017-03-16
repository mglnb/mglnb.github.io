// Loader
window.onload = function () {
	var div = document.getElementById('load');
	preload(div, 30);
    animateLoad();
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
	var posicaoScroll = $(document).scrollTop();

	$('.parallax').each(function () {
		var z = parseInt($(this).data("z"));
		$(this).css('transform', 'translateY(' + (posicaoScroll * (z * 0.05)) + 'px)');
		$(this).css('opacity', (posicaoScroll * -0.0015) +1);
	});
}

function animateLoad() {
	$('header .shape, header .stroke, header .fill').addClass('animate');
}
function animateHeader () {
    var mouseX, mouseY;
    var ww = $( window ).width();
    var wh = $( window ).height();
    var traX, traY;
    $(document).mousemove(function(e){
        mouseX = e.pageX;
        mouseY = e.pageY;
        traX = ((4 * mouseX) / 470) + 70;
        traY = ((4 * mouseY) / 470) + 70;
        console.log(traX);
        $(".title pattern image").css({"x": traX * -1 });
        $(".title pattern image").css({"y": traY * -1});

    });
}

// Quando o site for carregado
$(document).ready(function ($) {
    // var draw = document.querySelector('.shape');
    // console.log(draw.getTotalLength());
	// Alteração da cor do logo ao mudar o background
	$(window).scroll(function () {
		parallax();
		if (isOnEl('header') || isOnEl('#servicos') || isOnEl('footer')) {
			$('.logo svg').css('fill', '#c4c4c4');
		} else {
			$('.logo svg').css('fill', '#2a2a2a');
		}
	});
	animateHeader();

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
        var target;
        target = $(this).attr('class');
		$('html,body').animate({
			scrollTop: $("#" + target).offset().top - 60
		}, 1000);
	});

	// Esconder e mostrar as fotos do portfolio
	$('#portfolio').find('.content ul li a').click(function () {
		if ($(this).is('#fotos')) {
			$('.site').addClass('hide').removeClass('active');
			$('.fotos').addClass('active').removeClass('hide');
		} else if ($(this).is('#sites')) {
			$('.site').addClass('active').removeClass('hide');
			$('.fotos').addClass('hide').removeClass('active');
		}
	});



	// Efeito Material Design no formulario
	$('.formulario input, .formulario textarea').keyup(function () {
        var msg;
        msg = $(this).val();
        if (msg == "") {
            $(this).next().removeClass('active');
        } else {
            $(this).next().addClass('active');
        }
	});
});
