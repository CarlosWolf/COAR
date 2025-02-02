$(document).ready(function(){

// Scroll Elementos Menu
	var acercaDe = $('#acerca-de').offset().top,
		menu = $('#servicios').offset().top,
		galeria = $('#galeria').offset().top,
		ubicacion = $('#ubicacion').offset().top;

// Boton Acerca de
	$('#btn-acerca-de').on('click', function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: 380
		}, 500);
	});

	$('#btn-menu').on('click', function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: menu - 40
		});
	});

	$('#btn-galeria').on('click', function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: galeria - 40
		});
	});

	$('#btn-ubicacion').on('click', function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: ubicacion - 40
		});
	});

// Efecto Menu
	$('.menu a').each(function(index, elemento){
		$(this).css({
			'top': '-200px'
		});

		$(this).animate({
			top: '0'
		},2000 + (index * 500));
	});

// Efecto Header
	if ($(window).width() > 100){
		$('header .textos').css({
			opacity: 0,
			marginTop: 0
		});

		$('header .textos').animate({
			opacity: 1,
			marginTop: '-500px'
		},1500);
	}
	

});

document.addEventListener('DOMContentLoaded', () => {
	const toggleButton = document.querySelector('.menu-toggle'); // Selecciona el botón de menú
	const menu = document.querySelector('.menu'); // Selecciona el contenedor con clase 'menu'

	toggleButton.addEventListener('click', () => {
		// Alternar la clase 'column' en el menú
		menu.classList.toggle('column');

		// Mostrar/Ocultar los elementos del menú
		const menuItems = document.querySelector('.menu-items');
		menuItems.classList.toggle('active');

		// Actualizar el atributo aria-expanded para accesibilidad
		const expanded = toggleButton.getAttribute('aria-expanded') === 'true';
		toggleButton.setAttribute('aria-expanded', !expanded);
	});
});