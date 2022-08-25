const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsListEl = document.querySelector('#ingredients');

const ingredientList = ingredients
  .map((element) => `<li class="item">${element}</li>`)
  .join("");

ingredientsListEl.insertAdjacentHTML("beforeend", ingredientList);