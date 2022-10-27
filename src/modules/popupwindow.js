function showPopup(element) {
    const popupwindow = document.createElement('div');
    popupwindow.innerHTML = `
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
    document.body.appendChild(popupwindow);
  }

  export default showPopup;