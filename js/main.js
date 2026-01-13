const navToggle = document.getElementById("nav-toggle");
const navMenu = document.getElementById("nav-menu");
const toggleIcon = document.getElementById("toggle-icon");

navToggle.addEventListener("click", () => {
	const isOpen = navMenu.classList.toggle("show-menu");

	if (isOpen) {
		toggleIcon.src = "../assets/icons/x.svg";
		document.body.style.overflow = "hidden";
	} else {
		toggleIcon.src = "../assets/icons/menu.svg";
		document.body.style.overflow = "auto";
	}
});

document.querySelectorAll(".overlay-item").forEach((link) => {
	link.addEventListener("click", () => {
		navMenu.classList.remove("show-menu");
		toggleIcon.src = "../assets/icons/menu.svg";
		document.body.style.overflow = "auto";
	});
});
