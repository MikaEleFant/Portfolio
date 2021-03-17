let stars = document.getElementsByClassName("stars");

function foundStar(i) {
  let star = stars[i];

  star.classList.add("found");
  star.style.filter = "grayscale(0)";
}