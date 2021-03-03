document.addEventListener("DOMContentLoaded", function(){
  let d = new Date();
  let currentTimeString = d.toLocaleTimeString();
  let currentTimeArray = currentTimeString.split(" ");
  let currentTimeSuffix = currentTimeArray[1];
  let currentTimeHour = currentTimeArray[0].split(":")[0];
  let docHTML = document.documentElement;

  if (currentTimeSuffix == "AM") {
    if (parseInt(currentTimeHour) < 5) {
      docHTML.style.backgroundImage = 'url("/resources/backgrounds/Mountains3.png")';
    }
    else if (parseInt(currentTimeHour) < 7) {
      docHTML.style.backgroundImage = 'url("/resources/backgrounds/Mountains2.png")';
    }
    else {
      docHTML.style.backgroundImage = 'url("/resources/backgrounds/Mountains1.png")';
    }
  }
  else {
    if (parseInt(currentTimeHour) > 5) {
      docHTML.style.backgroundImage = 'url("/resources/backgrounds/Mountains2.png")';
    }
    else if (parseInt(currentTimeHour) > 7) {
      docHTML.style.backgroundImage = 'url("/resources/backgrounds/Mountains3.png")';
    }
    else {
      docHTML.style.backgroundImage = 'url("/resources/backgrounds/Mountains1.png")';
    }
  }
});