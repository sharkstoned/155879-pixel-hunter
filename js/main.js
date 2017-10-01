const templates = Array.from(document.querySelectorAll(`template`));
const mainContainer = document.querySelector(`main.central`);
const loadingScreen = mainContainer.innerHTML;
let currentScreen = 0;

function changeScreen(screenNumber) {
  if (screenNumber < templates.length && screenNumber >= 0) {
    mainContainer.innerHTML = templates[screenNumber].innerHTML;
    currentScreen = screenNumber;
  }
}

document.addEventListener(`keydown`, function (e) {
  if (e.altKey) {
    switch (e.keyCode) {
      case 37:
        e.preventDefault();
        changeScreen(currentScreen - 1);
        break;
      case 39:
        e.preventDefault();
        changeScreen(currentScreen + 1);
        break;
    }
  }
});

changeScreen(0);
