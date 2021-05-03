let currentTheme = localStorage.getItem("theme") ?? "light";

document.onreadystatechange = function checkTheme() {
  if (currentTheme == "light") {
    localStorage.setItem("theme", "dark");
  }
  else {
    localStorage.setItem("theme", "light");
  }
  switchTheme();
}
 
function switchTheme() {
  let root = document.documentElement;
  let themeCheck = localStorage.getItem("theme");
  let containerElements = document.querySelectorAll("h1, h2, h3, h6, p, a, li, #header-nav-close, span.star-tooltip");
  let dividers = document.querySelectorAll("div.separator01, div.separator02");
  let containers = document.querySelectorAll("div.modal-main, nav.header-nav, #header-nav-close, div.hover-img");
  let yinyang = document.querySelector("div.yin-yang");
  let yinyangBorder = document.querySelector("div.yin-yang-border");
  let icons = document.getElementsByClassName("contact-icon");

  if (themeCheck == "light") {
    root.style.backgroundImage = "url('../resources/backgrounds/StarlitSky.png')";
    containerElements.forEach(containerElement => containerElement.style.color = "white");
    dividers.forEach(divider => divider.className = "separator01");
    containers.forEach(container => container.style.backgroundColor = "black");
    root.style.setProperty("--highlight1", "rgba(255, 255, 255, 0.4)");
    root.style.setProperty("--highlight2", "rgba(255, 255, 255, 0.3)");
    yinyang.style.transform = "rotate(540deg)";
    yinyangBorder.style.borderColor = "white";
    for (let icon of icons) {
      icon.style.color = "white";
    }
 
    localStorage.setItem("theme", "dark");
  }
  else {
    root.style.backgroundImage = "url('../resources/backgrounds/BlueSky.png')";
    containerElements.forEach(containerElement => containerElement.style.color = "black");
    dividers.forEach(divider => divider.className = "separator02");
    containers.forEach(container => container.style.backgroundColor = "white");
    root.style.setProperty("--highlight1", "rgba(0, 0, 0, 0.4)");
    root.style.setProperty("--highlight2", "rgba(0, 0, 0, 0.3)");
    yinyang.style.transform = "rotate(0deg)";
    yinyangBorder.style.borderColor = "black";
    for (let icon of icons) {
      icon.style.color = "black";
    }

    localStorage.setItem("theme", "light");
  }    
}

function revealThemeToggle() {
  let themeToggle = document.querySelector("div.theme-hider");
  let themeWrapper = document.querySelector("div.theme-switch-wrapper");

  themeToggle.style.display = "flex";
  themeWrapper.classList.remove("hidden");
  foundStar(1);
}