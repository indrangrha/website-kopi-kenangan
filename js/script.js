//klik hamburger menu diklik
const hamburgerMenu = document.querySelector("#hamburger-menu");

const navbarNav = document.querySelector(".navbar-nav");

hamburgerMenu.addEventListener("click", function () {
  navbarNav.classList.toggle("active");
});

//Klik diluar sidebar untuk menghilangkan nav
document.addEventListener("click", function (e) {
  if (!hamburgerMenu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
