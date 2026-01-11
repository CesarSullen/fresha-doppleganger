// Nav Bar Toggle
const navToggle = document.getElementById("nav-toggle");
const navMenu = document.getElementById("nav-menu"); // Usamos #nav-menu en lugar de #bottom-panel

// 1. Alternar Menú y Rotación de Barras al hacer clic
navToggle.addEventListener("click", () => {
	// Aplica/Remueve la clase de rotación (para la cruz)
	navToggle.classList.toggle("toggled");

	// Aplica/Remueve la clase de visibilidad (para el menú completo)
	navMenu.classList.toggle("show-menu");
});

// 2. Cerrar Menú al hacer clic en un enlace
document.querySelectorAll(".nav-menu a").forEach((link) => {
	link.addEventListener("click", () => {
		// Remueve las clases para ocultar el menú y deshacer la cruz
		navMenu.classList.remove("show-menu");
		navToggle.classList.remove("toggled");
	});
});
