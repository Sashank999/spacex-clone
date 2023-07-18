alert(`
	This website is a responsive clone of the official SpaceX website(www.spacex.com).
	All images used are copyrighted to their respective owners.
	This project is made for educational purposes only.
	No copyright infringement intended.
`);

const ANIMATION_KEYFRAMES = [
	{ opacity: "0%", transform: "translateY(100px)" },
	{ opacity: "100%", transform: "translateY(0)" }
];
const ANIMATION_OPTIONS = { duration: 500, iterations: 1 };

history.scrollRestoration = "manual";

document.querySelector("header .hamburger").addEventListener("click", () => {
	document.querySelector("#menu-open #menu-btn").classList.toggle("open");
	document.querySelector("#menu-open .hamburger").classList.toggle("open");
});

let lastScrollPosition = 0;

window.addEventListener("scroll", (e) => {
	if (window.scrollY < 50) {
		document.body.classList.remove("scroll-up");
	} else if (window.scrollY < lastScrollPosition) {
		document.body.classList.add("scroll-up");
	}

	lastScrollPosition = window.scrollY;
});

window.addEventListener("load", () => {
	document.body.classList.add("loaded");

	const observer = new IntersectionObserver((intersections) => {
		// console.log(intersections);
		intersections
			.filter(x => x.intersectionRatio > 0)
			.forEach((intersection) => {
				intersection.target.classList.add("visited");
				intersection.target.animate(
					ANIMATION_KEYFRAMES,
					ANIMATION_OPTIONS
				);
				observer.unobserve(intersection.target);
			});
	}, {
		threshold: 0.5
	});
	document.querySelectorAll("section .details").forEach((section) => {
		observer.observe(section);
	});
});
