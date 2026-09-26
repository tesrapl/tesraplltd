// =====================================================
// 1. PHONE MENU: open and close the menu with the button
// =====================================================
var menuButton = document.getElementById("menuButton");
var menu = document.getElementById("menu");

menuButton.addEventListener("click", function () {
  menu.classList.toggle("open");   // adds "open" if missing, removes it if present
});

// close the menu after clicking a link inside it
var menuLinks = menu.querySelectorAll("a");

menuLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    menu.classList.remove("open");
  });
});


// =====================================================
// 2. HEADER SHADOW: add a shadow when the page is scrolled
// =====================================================
var header = document.getElementById("header");

window.addEventListener("scroll", function () {
  if (window.scrollY > 20) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});


// =====================================================
// 3. SCROLL ANIMATION: show elements when they come into view
// =====================================================
var revealItems = document.querySelectorAll(".reveal");

var observer = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");   // CSS does the fade-in
      observer.unobserve(entry.target);     // do it only once
    }
  });
}, { threshold: 0.15 });                    // 15% of the element must be visible

revealItems.forEach(function (item) {
  observer.observe(item);
});
