const templates = Array.from(document.querySelectorAll(`template`));
const mainContainer = document.querySelector(`main.central`);
const loadingScreen = mainContainer.innerHTML;
const keyCodes = {
  leftArrow: 37,
  rightArrow: 39
};

let currentScreen = 0;

function changeScreen(screenNumber) {
  if (screenNumber < templates.length && screenNumber >= 0) {
    mainContainer.innerHTML = templates[screenNumber].innerHTML;
    currentScreen = screenNumber;
  }
}

document.addEventListener(`keydown`, (e) => {
  if (e.altKey) {
    switch (e.keyCode) {
      case keyCodes.leftArrow:
        e.preventDefault();
        changeScreen(currentScreen - 1);
        break;
      case keyCodes.rightArrow:
        e.preventDefault();
        changeScreen(currentScreen + 1);
        break;
    }
  }
});

changeScreen(0);
