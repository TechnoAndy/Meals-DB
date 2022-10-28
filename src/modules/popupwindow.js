function showPopup(element) {
  const popupwindow = document.createElement('div');
  popupwindow.innerHTML = `
    <div class="popup-window">
      <div class="popup-images">
        <img src="${element.strMealThumb}" alt="popup-image" />
      </div>
      <div class="item-info">
        <h2 class="dish-name">Dish name: ${element.strMeal}</h2>
        <h2 class="origin">Origin: ${element.strArea}</h2>
        <h2 class="Category">Category:${element.strCategory}</h2>
        </div>
        <div class="item-info-1">
        <h2>Instructions</h2>
        <p class="recipe">${element.strInstructions}</p>
        </div>
      <div class="comments-container">
        <h2 class="cmt-heading">Add a comment</h2>
        <input type="text" class="comment-name" placeholder="Your Name"><br>
        <input type="text" class="comment-content" placeholder="Your Comment"><br>
        <button class="add-comment">Submit</button>
        </div>
        <span id="comments-spinner" class="spinner">Comments</span>
        <div class="comment-holder">
      </div>
    </div>
  `;
  const closeBtn = document.createElement('div');
  closeBtn.innerHTML = `<i id="close" class="fa-solid fa-xmark"></i>`;
  closeBtn.classList.add('close-btn');
  closeBtn.addEventListener('click', () => {
    popupwindow.remove();
  });

  popupwindow.firstElementChild.prepend(closeBtn);
  document.body.appendChild(popupwindow);
}


export default showPopup;
