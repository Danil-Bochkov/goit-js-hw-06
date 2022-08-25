const numOfCategories = document.querySelectorAll('.item');
console.log(`Number of categories: `, numOfCategories.length);

for (const item of numOfCategories) {
    const titleEl = item.querySelector('h2');
    console.log(`Category: `, titleEl.textContent);
 
    const listEl = item.querySelectorAll('li');
    console.log(`Elements: `, listEl.length);
} 

//  1. Найти все айтэмы и вывести длину массива +
//  2. Разбить найденый массив айтэмов на отдельные объекты
//  3. В каждом из этих объектов найти: Тайтл и Кол - во елементов
