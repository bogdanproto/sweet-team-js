import { refs } from '../refs/refs.js';
import { getResipesById } from '../api/api-service.js';
import { modalRecipeCard } from '../utils/markup/modal-recipe-card.js';
import { onLikeClick } from '../utils/localestorage/local-storage-service.js';
import rater from 'rater-js';

let dataId = null;

// Функция открытия или закрытия окна с рецептом
export async function modalRecipeOpen(cardId) {
  refs.modalRecipe.classList.toggle('is-hidden');

  const data = await getResipesById(cardId);
  refs.modalRecipe.innerHTML = modalRecipeCard(data);
  modalRecipeCloseListener();
  addStarRating(data._id, data.rating);

  dataId = data._id;

  startListener();
}

function startListener() {
  const modalRecipeFavorite = document.querySelector(
    '.modal-recipe-favorite-btn'
  );

  modalRecipeFavorite.addEventListener('click', testClick);
}

function testClick(evt) {
  const recipeHeartCheckbox = document.querySelector(
    `[data-id="${dataId}"] .recipe-heart-checkbox`
  );
  const modalRecipeFavorite = evt.target;

  if (modalRecipeFavorite.textContent === 'Add to favorite') {
    onLikeClick(dataId, true);
    modalRecipeFavorite.textContent = 'Remove from favorite';
    if (
      recipeHeartCheckbox &&
      modalRecipeFavorite.textContent === 'Remove from favorite'
    ) {
      recipeHeartCheckbox.checked = true;
    }
  } else {
    onLikeClick(dataId, false);
    modalRecipeFavorite.textContent = 'Add to favorite';
    if (
      recipeHeartCheckbox &&
      modalRecipeFavorite.textContent === 'Add to favorite'
    ) {
      recipeHeartCheckbox.checked = false;
    }
  }
}

function modalRecipeCloseListener() {
  const closeButton = document.querySelector('.js-modal-recipe-close');
  if (closeButton) {
    closeButton.addEventListener('click', modalRecipeClose);
  }
}

function modalRecipeClose() {
  const modalRecipeFavorite = document.querySelector(
    '.modal-recipe-favorite-btn'
  );

  modalRecipeFavorite.removeEventListener('click', testClick);

  refs.modalRecipe.classList.toggle('is-hidden');
  refs.modalRecipe.innerHTML = '';
}

function addStarRating(_id, rating) {
  const raterElement = document.querySelector(`#modal-recipe-rating-${_id}`);
  if (raterElement) {
    rater({
      element: raterElement,
      max: 5,
      rating: rating,
      readOnly: true,
    });
  }
}
