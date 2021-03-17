let headerNav = document.getElementsByClassName("header-nav");
let navCover = document.getElementsByClassName("header-nav-cover");

function openNav() {
  headerNav[0].style.width = "250px";
  navCover[0].style.height = "100%";
  navCover[0].style.width = "100%";
}

function closeNav() {
  headerNav[0].style.width = "0";
  navCover[0].style.height = "0";
  navCover[0].style.width = "0";
}
