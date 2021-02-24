// Modal Controls

let modal = document.getElementsByClassName("modal");

function openModal() {
  modal[0].style.display = "block"
}

function closeModal() {
  modal[0].style.display = "none"
}

window.onclick = function(event) {
  if (event.target == modal[0]) {
    modal[0].style.display = "none";
  }
}

// Modal Form Controls

