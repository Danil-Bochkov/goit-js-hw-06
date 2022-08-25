const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const imagesEl = document.querySelector('.gallery');

  imagesEl.style.display = "flex";
  imagesEl.style.justifyContent = "space-evenly";
  imagesEl.style.listStyleType = "none";

  const widthEl = 300;
  const heightEl = 200;

const imageOfItemEl = images
  .map((element) => `<li><img src="${element.url}" alt="${element.alt}" width="${widthEl}" height="${heightEl}"></li>`)
  .join("");
          
  imagesEl.insertAdjacentHTML("beforeend", imageOfItemEl);