function openNav() {
  document.getElementById("header-nav").style.width = "250px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
  document.getElementById("header-nav").style.width = "0";
  document.body.style.backgroundColor = "rgba(0,0,0,0)";
}

function selectNavElement(i) {
  let selectedElement = ["intro", "skills", "achievements", "contact"][i];

  document.getElementById(selectedElement).style.borderStyle = "ridge";
  document.getElementById(selectedElement).style.boxShadow = "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)";
  closeNav();
  setTimeout(deselectNavElement(selectedElement), 3000);
}

function deselectNavElement(selectedElement) {
  document.getElementById(selectedElement).style.borderStyle = "none";
  document.getElementById(selectedElement).style.boxShadow = "none";
}