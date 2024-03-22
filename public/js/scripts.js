const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menu-item");
const menuIcon = document.querySelector(".hburgmenu .fa-bars");

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    menuIcon.style.display = "none";
  }
};

window.onscroll = function removeMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    menuIcon.style.display = "block";
  }
}