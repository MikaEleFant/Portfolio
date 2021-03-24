let modals = document.getElementsByClassName("modal");

function openModal0() {
  modals[0].style.display = "block";
}

function openModal1() {
  modals[1].style.display = "block";
}

function closeModal() {
  for (let modal of modals) {
    modal.style.display = "none";
  }
}

window.onclick = function(event) {
  if (event.target == modals[0]) {
    modals[0].style.display = "none";
  } else if (event.target == modals[1]) {
    modals[1].style.display = "none";
  }
}

function validateInput0() {
  let input = document.getElementById("answer0").value.toUpperCase();
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

function validateInput1() {
  let input1 = document.getElementById("answer1-1").value.toUpperCase();
  let input2 = document.getElementById("answer1-2").value.toUpperCase();
  let input3 = document.getElementById("answer1-3").value.toUpperCase();

  if (input1 == "KINGDOMHEARTS" && input2 == "MAPLESTORY" && input3 == "ZELDA") {
    closeModal();
    foundStar(2);
  } else {
    alert("Incorrect answers. Maybe try again? Hint: The last one is only one word.");
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