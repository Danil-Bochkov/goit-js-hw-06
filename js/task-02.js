const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsListEl = document.querySelector('#ingredients');

const textOfItemEl = ingredients.forEach(ingredient => {
  const itemEl = document.createElement('li')
  
  itemEl.classList.add('item');
  
  itemEl.textContent = ingredient;
  
  ingredientsListEl.append(itemEl);
});