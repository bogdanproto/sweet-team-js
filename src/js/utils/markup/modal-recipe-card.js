import { getFavRec } from '../localestorage/local-storage-service';

// get from Local Storage favorite recipes and create array of IDs

// Функция отрисовки элементов карточки
export function modalRecipeCard(recipeItem) {
  const favoriteRecipes = getFavRec();
  const favoriteIds = favoriteRecipes.map(favorite => favorite._id);

  const { _id, title, rating, instructions, thumb, time } = recipeItem;
  const isFavorite = favoriteIds.includes(_id);

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
  <use href="./img/sprite.svg#icon-close"></use>
</svg></button>
<img class="modal-recipe-image" src="${thumb}" alt="${title}" width="295px" height="295px"></img>
<h2 class="modal-recipe-title">${title}</h2>
  <div class="modal-recipe-info-rating">
  <p class="modal-recipe-rating">${parseFloat(rating).toFixed(1)}</p>
  <div class="modal-recipe-stars" data-rating="${rating}" id="modal-recipe-rating-${_id}"></div>
  <p class="modal-recipe-time">${time} min</p>
  </div>
  <ul>${recipeIngredients}</ul>
  <ul class="modal-recipe-tags">${
    recipeItem.tags[0] === '' ? '' : recipeTags
  }</ul>
<p class="modal-recipe-text">${instructions}</p>
<button class="recipe-card-btn modal-recipe-favorite-btn" type="button">${
      isFavorite ? 'Remove from' : 'Add to'
    } favotiry</button></div>`;
  } else {
    return `<div class="modal-recipe"><button class="js-modal-recipe-close modal-recipe-close-btn" type="button"><svg class="modal-recipe-svg" width="24px" height="24px">
  <use href="./img/sprite.svg#icon-close"></use>
</svg></button>
<h2 class="modal-recipe-title">${title}</h2>
<img class="modal-recipe-image" src="${thumb}" alt="${title}">
<div class="modal-recipe-infos">
<ul class="modal-recipe-tags">${
      recipeItem.tags[0] === '' ? '' : recipeTags
    }</ul> 
<div class="modal-recipe-info-rating desktop">
  <p class="modal-recipe-rating">${parseFloat(rating).toFixed(1)}</p>
  <div class="modal-recipe-stars" data-rating="${rating}" id="modal-recipe-rating-${_id}"></div>
  <p class="modal-recipe-time">${time} min</p>
  </div>
  </div>
  <ul class="modal-recipe-ingredients">${recipeIngredients}</ul>
<p class="modal-recipe-text">${instructions}</p>
<button class="recipe-card-btn modal-recipe-favorite-btn" type="button">${
      isFavorite ? 'Remove from' : 'Add to'
    } favorite</button></div>`;
  }
}
