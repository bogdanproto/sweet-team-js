import { refs } from '../refs/refs.js';
import { getResipesById } from '../api/api-service.js';
import { modalRecipeCard } from '../utils/markup/modal-recipe-card.js';
import { onLikeClick } from '../utils/localestorage/local-storage-service.js';
import rater from 'rater-js';

// Функция открытия или закрытия окна с рецептом
export function modalRecipeOpen(cardId) {
  refs.modalRecipe.classList.toggle('is-hidden');

  getResipesById(cardId).then(data => {
    refs.modalRecipe.innerHTML = modalRecipeCard(data);
    modalRecipeCloseListener();
    addStarRating(data._id, data.rating);

    const modalRecipeFavorite = document.querySelector(
      '.modal-recipe-favorite-btn'
    );

    modalRecipeFavorite.addEventListener('click', function () {
      const recipeHeartCheckbox = document.querySelector(
        `[data-id="${data._id}"] .recipe-heart-checkbox`
      );
      if (this.textContent === 'Add to favorite') {
        onLikeClick(data._id, true);
        if (recipeHeartCheckbox && this.textContent === 'Add to favorite') {
          this.textContent = 'Remove from favorite';
          recipeHeartCheckbox.checked = true;
        }
      } else {
        onLikeClick(data._id, false);
        if (
          recipeHeartCheckbox &&
          this.textContent === 'Remove from favorite'
        ) {
          this.textContent = 'Add to favorite';
          recipeHeartCheckbox.checked = false;
        }
      }
    });
  });

  function modalRecipeCloseListener() {
    const closeButton = document.querySelector('.js-modal-recipe-close');
    if (closeButton) {
      closeButton.addEventListener('click', modalRecipeClose);
    }
  }

  function modalRecipeClose() {
    refs.modalRecipe.classList.toggle('is-hidden');
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
}
