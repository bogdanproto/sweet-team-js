import { refs } from '../refs/refs.js';
import { getResipesById } from '../api/api-service.js';
import { modalRecipeCard } from '../utils/markup/modal-recipe-card.js';
import { modalRecipeAddStars } from '../utils/markup/modal-recipe-stars.js';
import { modalRecipeListeners } from '../utils/listners/modal-recipe-listeners.js';
import { onLikeClick } from '../utils/localestorage/local-storage-service.js';
import { getCurrentPage } from '../utils/current-page.js';
import { toUpdateListFavorits } from './favorites-recipes.js';

let dataId = null;

// Открытие или закрытие окна с рецептом
async function modalRecipeOpen(cardId) {
  refs.modalRecipe.classList.toggle('is-hidden');

  const data = await getResipesById(cardId);
  refs.modalRecipe.innerHTML = modalRecipeCard(data);
  modalRecipeAddStars(data._id, data.rating);

  dataId = data._id;

  modalRecipeListeners();
}

// Действие кнопки "Add to favorite" / "Remove from favorite"
function modalRecipeFavClick(evt) {
  const currentPage = getCurrentPage();
  console.log(currentPage);
  const recipeHeartCheckbox = document.querySelector(
    `[data-id="${dataId}"] .recipe-heart-checkbox`
  );
  const currentRecipe = recipeHeartCheckbox.closest('.js-recipe');

  console.log(currentRecipe);
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
    if (currentPage.endsWith('favorites.html')) {
      toUpdateListFavorits(dataId, currentRecipe, false);
    }

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

export { modalRecipeOpen, modalRecipeFavClick };
