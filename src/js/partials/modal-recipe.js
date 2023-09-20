import { Notify } from 'notiflix';
import { refs } from '../refs/refs.js';
import { getResipesById } from '../api/api-service.js';
import { modalRecipeCard } from '../utils/markup/modal-recipe-card.js';
import { modalRecipeAddStars } from '../utils/markup/modal-recipe-stars.js';
import { modalRecipeListeners } from '../utils/listners/modal-recipe-listeners.js';
import { onLikeClick } from '../utils/localestorage/local-storage-service.js';
import { getCurrentPage } from '../utils/current-page.js';
import { toUpdateListFavorits } from './favorites-recipes.js';
import { getIdForRating } from './modal-rating.js';

let dataId = null;

// Открытие или закрытие окна с рецептом
async function modalRecipeOpen(cardId) {
  try {
    refs.modalRecipe.classList.toggle('is-hidden');

    const data = await getResipesById(cardId);
    refs.modalRecipe.innerHTML = modalRecipeCard(data);
    modalRecipeAddStars(data._id, data.rating);

    dataId = data._id;

    getIdForRating(dataId);
    modalRecipeListeners();
  } catch (error) {
    Notify.failure(`Oops! Something went wrong! Try reloading the page!`);
  }
}

// Действие кнопки "Add to favorite" / "Remove from favorite"
function modalRecipeFavClick(evt) {
  const currentPage = getCurrentPage();
  const recipeHeartCheckbox = document.querySelector(
    `[data-id="${dataId}"] .recipe-heart-checkbox`
  );

  const modalRecipeFavorite = evt.target;

  if (modalRecipeFavorite.textContent === 'Add to favorite') {
    if (currentPage.endsWith('favorites.html')) {
      toUpdateListFavorits({
        id: dataId,
        currentRecipe: null,
        isChecked: true,
      });
    } else {
      onLikeClick(dataId, true);
    }

    modalRecipeFavorite.textContent = 'Remove from favorite';
    if (
      recipeHeartCheckbox &&
      modalRecipeFavorite.textContent === 'Remove from favorite'
    ) {
      recipeHeartCheckbox.checked = true;
    }
  } else {
    if (currentPage.endsWith('favorites.html')) {
      const currentRecipe = recipeHeartCheckbox.closest('.js-recipe');

      toUpdateListFavorits({
        id: dataId,
        currentRecipe: currentRecipe,
        isChecked: false,
      });
    } else {
      onLikeClick(dataId, false);
    }
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
