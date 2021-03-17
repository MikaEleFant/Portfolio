let modal = document.getElementsByClassName("modal");

function openModal() {
  modal[0].style.display = "block";
}

function closeModal() {
  modal[0].style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal[0]) {
    modal[0].style.display = "none";
  }
}

function validateInput() {
  let input = document.getElementById("answer").value.toUpperCase();
  let modalButton = document.getElementById("modal-button");

  if (input == "") {
    alert("Stop! You have violated the law. Pay the court a fine or serve your sentence. Your stolen goods are now forfeit.");
  }
  else if (input == "SKYRIM") {
    closeModal();
    modalButton.style.display = "none";
    window.open("https://youtu.be/dQw4w9WgXcQ");
    foundStar(0);
  }
  else {
    alert("Incorrect answer. Perhaps a hint is necessary?");
  }
}

let hint = document.getElementsByClassName("hint");

function displayHint() {
  closeModal();
  hint[0].style.display = "block";
  setTimeout(closeHint, 10000);
}

function closeHint() {
  hint[0].style.display = "none";
}