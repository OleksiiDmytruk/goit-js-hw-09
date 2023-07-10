const bodyEl = document.querySelector('body');
const startBtnEl = document.querySelector('[data-start]');
const stopBtnEl = document.querySelector('[data-stop]');
startBtnEl.addEventListener('click', onStart);
stopBtnEl.addEventListener('click', onStop);
let startId = null;
stopBtnEl.disabled = true;

function onStart() {
  toggleBtnActive(true);
  bodyEl.style.backgroundColor = getRandomHexColor();
  startId = setInterval(() => {
    bodyEl.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

function onStop() {
  toggleBtnActive(false);
  clearInterval(startId);
}
function toggleBtnActive(bool) {
  startBtnEl.disabled = bool;
  stopBtnEl.disabled = !bool;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
