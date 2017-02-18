window.onload = function () {
    var div = document.getElementById('load');
    preload(div, 30);
};
// Declarações de funções
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

function menuOff() {
    $('.ulnav').removeClass('.active');
    $('.ulnav').css('right', '-200vw');
    $('.nav-animacao').css('right', '-200vw');
    $('nav img').css('filter', 'invert(0)');
    $('.social-copy').removeClass('.footernav');
}

function menuOn() {
    $('.ulnav').addClass('.active');
    $('.ulnav').css('right', '0 ');
    $('.nav-animacao').css('right', '0');
    $('nav img').css('filter', 'invert(45%)');
    $('.social-copy').addClass('.footernav');
}

function getSectionInicio(el) {
    return $(el).offset().top;
}

function getSectionFim(el) {
    return $(el).offset().top + $(el).innerHeight();
}
// Quando o site for carregado
$(document).ready(function ($) {
    // Alteração da cor do logo ao mudar o background
    $(window).scroll(function () {
        var posicaoScroll = $(document).scrollTop();
        if (getSectionInicio('header') <= posicaoScroll && getSectionFim('header') >= posicaoScroll) {
            $('.logo img').css('filter', 'invert(100%)');
        }
        else if (getSectionInicio('#sobre') <= posicaoScroll && getSectionFim('#sobre') >= posicaoScroll) {
            $('.logo img').css('filter', 'invert(0%)');
        }
        else if (getSectionInicio('#servicos') <= posicaoScroll && getSectionFim('#servicos') >= posicaoScroll) {
            $('.logo img').css('filter', 'invert(100%)');
        }else if (getSectionInicio('footer') <= posicaoScroll && getSectionFim('footer') >= posicaoScroll) {
            $('.logo img').css('filter', 'invert(100%)');
        }
        else {
            $('.logo img').css('filter', 'invert(0%)');
        }
    });
    // Ativação do menu Hamburguer
    $('.hamburguer').click(function () {
        if ($('.ulnav').hasClass('.active')) {
            menuOff();
        }
        else {
            menuOn();
        }
    });
    $('nav ul li').click(function () {
        menuOff();
    });
    // Scroll suave no navbar
    $('nav a').click(function () {
        var target = $(this.hash);
        $('html,body').animate({
            scrollTop: target.offset().top - 60
        }, 1000);
    });
    // Esconder e mostrar as fotos do portfolio
    $('#portfolio .content ul li a').click(function (event) {
        if ($(this).is('#fotos')) {
            $('.sites').hide('slow');
            $('.fotos').show('slow');
        }
        else if ($(this).is('#sites')) {
            $('.sites').show('slow');
            $('.fotos').hide('slow');
        }
    });
    // Efeito Material Design no formulario
    $('.formulario input').keyup(function () {
        var msg = $(this).val();
        if (msg != "") {
            $(this).next().addClass('active');
        }
        else {
            $(this).next().removeClass('active');
        }
    });
    $('.formulario textarea').keyup(function () {
        var msg = $(this).val();
        if (msg != "") {
            $(this).next().addClass('active');
        }
        else {
            $(this).next().removeClass('active');
        }
    });
});