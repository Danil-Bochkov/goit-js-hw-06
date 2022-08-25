function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputNum = document.querySelector('#controls input');
const btnCreate = document.querySelector('[data-create]');
const btnDestroy = document.querySelector('[data-destroy]');

const boxesElements = document.querySelector('#boxes');

function createBoxes(amount) { 
  let size = 30;
  for (let i = 0; i < amount; i++) {
    let color = getRandomHexColor();
    let element = document.createElement('div');
    
    element.style.width = size + "px";
    element.style.height = size + "px";
    element.style.backgroundColor = color;

    boxesElements.appendChild(element);
    size += 10;
  }
}

btnCreate.addEventListener('click', () => {
  createBoxes(inputNum.value)
});

btnDestroy.addEventListener('click', () => {
  destroyBoxes()
});

function destroyBoxes() {
  boxesElements.textContent = "";
}