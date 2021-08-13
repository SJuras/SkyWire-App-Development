// header color change
window.addEventListener("scroll", function(){
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});
// header color change END

// mobile menu toggle
function toggle(){
  var nav = document.querySelector("nav");
  nav.classList.toggle("active");
  var toggle = document.querySelector(".toggle");
  toggle.classList.toggle("active");
}
// mobile menu toggle END

// Smooth Scroll
var scroll = new SmoothScroll('a[href*="#"]', {
	speed: 1000,
	speedAsDuration: true
});

// Smooth Scroll END
