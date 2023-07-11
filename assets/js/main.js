/*=============== SHOW/HIDE SCROLL ===============*/
const body = document.querySelector("body");

function toggleScroll() {
	body.classList.toggle("hide-scroll");
}
/*=============== SHOW MENU ===============*/
const showMenu = (toggleId, navId, overlayId) => {
	const toggle = document.getElementById(toggleId),
		nav = document.getElementById(navId),
		overlay = document.getElementById(overlayId);
	// Validate that variables exist
	if (toggle && nav && overlay) {
		toggle.addEventListener("click", () => {
			// We add the show-menu class to the div tag with the nav__menu class
			nav.classList.toggle("show-menu");
			overlay.classList.toggle("show-overlay");
			toggleScroll();
		});
	}
};

showMenu("nav-toggle", "nav-menu", "overlay");

/*=============== CHANGE ICON ===============*/
const changeIcon = (icon) => {
	const navToggle = document.getElementById(icon);

	navToggle.addEventListener("click", () => {
		// We add the show-dropdown class, so that the menu is displayed
		navToggle.classList.toggle("change-icon");
	});
};

changeIcon("nav-toggle");
/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav__link");
const overLay = document.querySelectorAll(".overlay");

function linkAction() {
	const navMenu = document.getElementById("nav-menu");
	const navToggle = document.getElementById("nav-toggle");
	const overlay = document.getElementById("overlay");
	// When we click on each nav__link, we remove the show-menu class
	navMenu.classList.remove("show-menu");
	navToggle.classList.remove("change-icon");
	overlay.classList.remove("show-overlay");
	toggleScroll();
}
navLink.forEach((n) => n.addEventListener("click", linkAction));
overLay.forEach((n) => n.addEventListener("click", linkAction));

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
	const scrollY = window.scrollY;

	sections.forEach((current) => {
		const sectionHeight = current.offsetHeight,
			sectionTop = current.offsetTop - 50,
			sectionId = current.getAttribute("id");

		if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
			document
				.querySelector(".nav__menu a[href*=" + sectionId + "]")
				.classList.add("active-link");
		} else {
			document
				.querySelector(".nav__menu a[href*=" + sectionId + "]")
				.classList.remove("active-link");
		}
	});
}
window.addEventListener("scroll", scrollActive);

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
	const nav = document.getElementById("header");
	// When the scroll is greater than 80 viewport height, add the scroll-header class to the header tag
	if (this.scrollY >= 100) nav.classList.add("scroll-header");
	else nav.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);
/*=============== SHOW SCROLL UP ===============*/
function scrollUp() {
	const scrollUp = document.getElementById("scroll-up");
	// When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
	if (this.scrollY >= 560) scrollUp.classList.add("show-scroll");
	else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);
/*=============== CLICK PLAY FEATURE ===============*/
var videoContainer = document.getElementById("videoContainer");
var video = document.getElementById("video");
var showHideButton = document.getElementById("showHideButton");
var playPauseButton = document.getElementById("playPauseButton");

videoContainer.addEventListener("mouseenter", function () {
	showHideButton.classList.remove("hidden");
});

videoContainer.addEventListener("mouseleave", function () {
	showHideButton.classList.add("hidden");
});

playPauseButton.addEventListener("click", function () {
	togglePlayPause();
});

video.addEventListener("play", function () {
	playPauseButton.classList.replace("bx-play", "bx-pause");
});

video.addEventListener("pause", function () {
	playPauseButton.classList.replace("bx-pause", "bx-play");
});
// Wait for the video to load metadata before checking if it's paused
video.addEventListener("loadedmetadata", function () {
	if (video.paused) {
		playPauseButton.classList.replace("bx-play", "bx-pause");
	}
});
function togglePlayPause() {
	if (video.paused) {
		video.play();
	} else {
		video.pause();
	}
}
/*=============== SWIPER SERVICE ===============*/
var swiper = new Swiper(".swiper", {
	autoplay: {
		delay: 1500,
		disableOnInteraction: false,
		pauseOnMouseEnter: true,
	},
	keyboardcontrol: true,
	loop: true,
	rewind: true,
	id: 3000,
	direction: getDirection(),
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	on: {
		resize: function () {
			swiper.changeDirection(getDirection());
		},
	},
	breakpoints: {
		320: {
			slidesPerView: 1,
			spaceBetween: 45,
		},

		768: {
			slidesPerView: 2,
			spaceBetween: 50,
		},
		1024: {
			slidesPerView: 3,
			spaceBetween: 16,
		},
	},
});

function getDirection() {
	var windowWidth = window.innerWidth;
	var direction = window.innerWidth <= 320 ? "vertical" : "horizontal";

	return direction;
}
// ===================================================
