import './style.css';

const items = async () => {
  try {
    fetch(
      'https://www.themealdb.com/api/json/v1/1/search.php?f=e',
    ).then((res) => res.json()).then((data) => {
      data.meals.forEach((element) => {
        document.getElementById(
          'recipe-section',
        ).innerHTML += `<div class="card">
            <h1 class="title">${element.strMeal}</h1>
            <img src=${element.strMealThumb} alt="img" class="images">
            <button class='comment-btn' type='button'>Comments</button>
         </div>`;
      });
    }); return 1;
  } catch (error) {
    return error;
  }
};

items();