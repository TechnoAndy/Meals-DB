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
         </div>
         <div class="popup-window">
<div class="close-btn">
  <i id="close" class="fa-solid fa-xmark"></i>
</div>
<div class="popup-images">
  <img src="${element.strMealThumb}" alt="popup-image" />
</div>
<div class="item-info">
  <h2 class="dish-name">Dish name: ${element.strMeal}</h2>
  <h2 class="origin">Origin: ${element.strArea}</h2>
  <h2 class="Category">Category:${element.strCategory}</h2>
  <h2 class="recipe">Instructions${element.strInstructions}</h2>
</div>
<div class="comments-container">
  <h4 class="cmt-heading">Add a comment</h4>
  <input type="text" class="comment-name" placeholder="Your Name"><br>
  <input type="text" class="comment-content" placeholder="Your Comment"><br>
  <button class="add-comment">Submit</button>
  </div>
  <span id="comments-spinner" class="spinner">Comments</span>
  <div class="comment-holder">
  </div>
</div>
         `;
      });
    }); return 1;
  } catch (error) {
    return error;
  }
};

items();