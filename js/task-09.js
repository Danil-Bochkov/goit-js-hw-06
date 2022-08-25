function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.body;
const btnEl = document.querySelector('.change-color');
const colorTextEl = document.querySelector('.color');

btnEl.addEventListener('click', () => {
  const color = getRandomHexColor();
  body.style.backgroundColor = color;
  colorTextEl.textContent = color;
});