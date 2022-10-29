/* eslint-disable linebreak-style */
import countComments from './commentsCounter.js';

function getComments(mealId) {
  const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/5hFJTXkmLpqq6UU5RxAd/comments?item_id=${mealId}`;
  return fetch(url).then((response) => response.json());
}

function setComments(Obj) {
  const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/5hFJTXkmLpqq6UU5RxAd/comments';
  return fetch(url, {
    method: 'POST',
    headers: { 'Content-type': 'application/json; charset=UTF-8' },
    body: JSON.stringify(Obj),
  })
    .then((response) => response.text());
}

async function showPopup(element) {
  let comments = [];
  await getComments(element.idMeal).then((fetchedComments) => {
    if (!fetchedComments.error) {
      comments = fetchedComments;
    }
  });
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
  const commentsCotainer = popupwindow.querySelector('.comment-holder');
  const commentOwnerinput = popupwindow.querySelector('.comment-name');
  const commentContentinput = popupwindow.querySelector('.comment-content');
  const commentAddBtn = popupwindow.querySelector('.add-comment');
  const commentsHeader = popupwindow.querySelector('#comments-spinner');
  commentAddBtn.addEventListener('click', () => {
    const newComment = {
      item_id: element.idMeal,
      username: commentOwnerinput.value,
      comment: commentContentinput.value,
    };
    setComments(newComment);
  });

  comments.forEach((comment) => {
    commentsCotainer.innerHTML += `<div class="comment">
      <span>[${comment.creation_date}]</span>
      <span>${comment.username}: </span>
      <span>${comment.comment}</span>
      </div>`;
  });
  commentsHeader.innerHTML += `(${countComments(commentsCotainer)})`;
  const closeBtn = document.createElement('div');
  closeBtn.innerHTML = '<i id="close" class="fa-solid fa-xmark"></i>';
  closeBtn.classList.add('close-btn');
  closeBtn.addEventListener('click', () => {
    popupwindow.remove();
  });
  popupwindow.firstElementChild.prepend(closeBtn);
  document.body.appendChild(popupwindow);
}

export default showPopup;
