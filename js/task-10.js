function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputNum = document.querySelector('#controls input');
const btnCreate = document.querySelector('[data-create]');
const btnDestroy = document.querySelector('[data-destroy]');

const boxesElements = document.querySelector('#boxes');

function createBoxes(amount) { 
  let size = 30;
  const boxes = [];
  for (let i = 0; i < amount; i++) {
    const color = getRandomHexColor();
    const element = `<div style="background-color: ${color}; width:${size}px; height:${size}px;"></div>`

    boxes.push(element);
    size += 10;
  }
  boxesElements.insertAdjacentHTML("beforeend", boxes.join(""));
  console.log(boxes);
}

btnCreate.addEventListener('click', () => {
  createBoxes(inputNum.value)
});

btnDestroy.addEventListener('click', () => {
  destroyBoxes()
});

function destroyBoxes() {
  boxesElements.innerHTML = "";
}