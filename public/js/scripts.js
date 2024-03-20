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
};

// function about() {
//     window.scrollTo(0, document.getElementById("about").offsetTop-115);
// } 

// function music() {
//     window.scrollTo(0, document.getElementById("music").offsetTop-115);
// }

// function press() {
//     window.scrollTo(0, document.getElementById("press").offsetTop-115);
// }

// function video() {
//     window.scrollTo(0, document.getElementById("video").offsetTop-115);
// }

// function shows() {
//     window.scrollTo(0, document.getElementById("shows").offsetTop-115);
// }

// function contact() {
//     window.scrollTo(0, document.getElementById("contact").offsetTop-115);
// }

// function subscribe() {
//     window.scrollTo(0, document.getElementById("subscribe").offsetTop-115);
// }