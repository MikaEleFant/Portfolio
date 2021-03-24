let stars = document.getElementsByClassName("stars");
let tooltips = document.getElementsByClassName("star-tooltip");

let tooltipsAfter = [
  "You just got RICKROLLED!",
  "...and dark to light!",
  "You are a true gamer!"
]

function foundStar(i) {
  let star = stars[i];
  let tooltip = tooltips[i];

  star.classList.add("found");
  star.style.filter = "grayscale(0)";
  tooltip.innerHTML = tooltipsAfter[i];
}

window.onmousemove = function (e) {
  let x = (e.clientX - 25) + "px";
  let y = (e.clientY - 25) + "px";

  for (let i = 0; i < tooltips.length; i++) {
    tooltips[i].style.top = y;
    tooltips[i].style.left = x;
    tooltips[i].style.opacity = '1';
  }
}