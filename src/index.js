import showPopup from './modules/popupwindow.js';
import './style.css';


const items = async () => {
  try {
    fetch(
      'https://www.themealdb.com/api/json/v1/1/search.php?f=e',
    ).then((res) => res.json()).then((data) => {
      data.meals.forEach((element) => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <h1 class="title">${element.strMeal}</h1>
            <img src=${element.strMealThumb} alt="img" class="images">
         `;
         const button = document.createElement('button');
         button.classList.add('comment-btn');
         button.innerText = 'Comments';
         card.appendChild(button)
         button.addEventListener('click', () => {
            showPopup(element);
          });
          document.getElementById(
            'recipe-section',
          ).appendChild(card);
      });
    }); return 1;
  } catch (error) {
    return error;
  }
};

items();