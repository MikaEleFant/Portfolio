let headerNav = document.getElementsByClassName("header-nav");

function openNav() {
  headerNav[0].style.width = "250px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  document.section.style.backgroundColor = "rgba(0,0,0,0.4)"
  document.footer.style.backgroundColor = "rgba(0,0,0,0.4)"
}

function closeNav() {
  headerNav[0].style.width = "0";
  document.body.style.backgroundColor = "rgba(0,0,0,0)";
  document.section.style.backgroundColor = "rgba(0,0,0,0)"
  document.footer.style.backgroundColor = "rgba(0,0,0,0)"
}
