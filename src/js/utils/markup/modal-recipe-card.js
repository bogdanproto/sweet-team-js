// import { addStarRating } from '../../utils/markup/star-rating';

// Функция отрисовки элементов карточки
export function modalRecipeCard(recipeItem) {
  const { _id, title, rating, instructions, thumb, time } = recipeItem;

  // addStarRating(recipeItem);

  const recipeTags = recipeItem.tags
    .map(tag => `<li class="modal-recipe-tags-item">${tag}</li>`)
    .join('');

  const recipeIngredients = recipeItem.ingredients
    .map(({ name, measure }) => {
      return `<li class="modal-recipe-ing-item">
    <p class="modal-recipe-ing-name">${name}</p>
    <p class="modal-recipe-ing-measure">${measure}</p>
</li>`;
    })
    .join('');

  if (window.innerWidth < 768) {
    return `<div class="modal-recipe"><button class="js-modal-recipe-close modal-recipe-close-btn" type="button"><svg class="modal-recipe-svg" width="24px" height="24px">
  <use href="../../../img/sprite.svg#icon-close"></use>
</svg></button>
<img class="modal-recipe-image" src="${thumb}" alt="${title}" width="295px" height="295px">
<h2 class="modal-recipe-title">${title}</h2>
  <div class="modal-recipe-info-rating">
  <p class="modal-recipe-rating">${rating}</p>
  <div class="recipe-rating-stars" data-rating="${rating}" id="rating-${_id}"></div>
  <p class="modal-recipe-time">${time} min</p>
  </div>
  <ul class="modal-recipe-ingredients">${recipeIngredients}</ul>
  <ul class="modal-recipe-tags">${recipeTags}</ul>
<p class="modal-recipe-text">${instructions}</p>
<button class="recipe-card-btn modal-recipe-favorite-btn" type="button">Add to favotiry</button></div>`;
  } else {
    return `<div class="modal-recipe"><button class="js-modal-recipe-close modal-recipe-close-btn" type="button"><svg class="modal-recipe-svg" width="24px" height="24px">
  <use href="../../../img/sprite.svg#icon-close"></use>
</svg></button>
<h2 class="modal-recipe-title">${title}</h2>
<img class="modal-recipe-image" src="${thumb}" alt="${title}" width="467px" height="250px">
<div class="modal-recipe-info-rating">
<ul class="modal-recipe-tags">${recipeTags}</ul> 
  <p class="modal-recipe-rating">${rating}</p>
  <div class="recipe-rating-stars" data-rating="${rating}" id="rating-${_id}"></div>
  <p class="modal-recipe-time">${time} min</p>
  </div>
  <ul class="modal-recipe-ingredients">${recipeIngredients}</ul>
<p class="modal-recipe-text">${instructions}</p>
<button class="recipe-card-btn modal-recipe-favorite-btn" type="button">Add to favotiry</button></div>`;
  }
}
