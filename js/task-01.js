const numOfCategories = document.querySelectorAll('.item');
console.log("Number of categories: ", numOfCategories.length);

for (const item of numOfCategories) {
    const titleEl = item.querySelector('h2');
    console.log("Category: ", titleEl.textContent);
 
    const listEl = item.querySelectorAll('li');
    console.log("Elements: ", listEl.length);
}