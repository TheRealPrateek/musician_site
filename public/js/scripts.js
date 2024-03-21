const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menu-item");
const menuIcon = document.querySelector(".hburgmenu .fa-bars");

window.onSpotifyIframeApiReady = (IFrameAPI) => {
  const element = document.getElementById('embed-iframe');
  const options = {
      width: '100%',
      height: '500',
      uri: 'spotify:album:0ldTZ7gtbDR7x2Nxhm4E8z'
    };
  const callback = (EmbedController) => {};
  IFrameAPI.createController(element, options, callback);
};

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