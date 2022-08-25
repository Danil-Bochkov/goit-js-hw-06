const valueEl = document.querySelector('#value');
const btnPlus = document.querySelector('button[data-action="increment"]');
const btnMinus = document.querySelector('button[data-action="decrement"]');

let counterValue = 0;

btnPlus.addEventListener('click', () => {
    counterValue += 1;
    valueEl.textContent = counterValue;
});

btnMinus.addEventListener('click', () => {
    counterValue -= 1;
    valueEl.textContent = counterValue;
});