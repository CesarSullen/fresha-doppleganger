const navToggle = document.getElementById("nav-toggle");
const navMenu = document.getElementById("nav-menu");
const toggleIcon = document.getElementById("toggle-icon");

navToggle.addEventListener("click", () => {
	const isOpen = navMenu.classList.toggle("show-menu");

	if (isOpen) {
		toggleIcon.src = "./assets/icons/x.svg";
		document.body.style.overflow = "hidden";
	} else {
		toggleIcon.src = "./assets/icons/menu.svg";
		document.body.style.overflow = "auto";
	}
});

document.querySelectorAll(".overlay-item").forEach((link) => {
	link.addEventListener("click", () => {
		navMenu.classList.remove("show-menu");
		toggleIcon.src = "./assets/icons/menu.svg";
		document.body.style.overflow = "auto";
	});
});

// Carousels
const carouselButtons = document.querySelectorAll(".ctrl-btn");

carouselButtons.forEach((button) => {
	button.addEventListener("click", () => {
		const carouselId = button.getAttribute("data-carousel");
		const direction = parseInt(button.getAttribute("data-dir"));
		const carousel = document.getElementById(carouselId);

		if (carousel) {
			carousel.scrollBy({
				left: 300 * direction,
				behavior: "smooth",
			});
		}
	});
});
