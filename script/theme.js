let currentTheme = localStorage.getItem("theme") ?? "dark";

document.onreadystatechange = function checkTheme() {
  if (currentTheme == "light") {
    document.getElementById("checkbox").checked = false;
  }
  else {
    document.getElementById("checkbox").checked = true;
  }
  switchTheme();
}

function switchTheme() {
  let themeCheck = document.getElementById("checkbox");
  let containerElements = document.querySelectorAll("h1, h2, h3, h6, p, a, li, span.theme-icon, #header-nav-close");
  let dividers = document.querySelectorAll("div.separator01, div.separator02");
  let containers = document.querySelectorAll("div.modal-main, nav.header-nav, #header-nav-close");

  if (themeCheck.checked) {
    document.documentElement.style.backgroundImage = "url('../resources/backgrounds/StarlitSky.png')";
    containerElements.forEach(containerElement => containerElement.style.color = "white");
    dividers.forEach(divider => divider.className = "separator01");
    containers.forEach(container => container.style.backgroundColor = "black");

    localStorage.setItem("theme", "dark");
  }
  else {
    document.documentElement.style.backgroundImage = "url('../resources/backgrounds/BlueSky.png')";
    containerElements.forEach(containerElement => containerElement.style.color = "black");
    dividers.forEach(divider => divider.className = "separator02");
    containers.forEach(container => container.style.backgroundColor = "white");

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