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