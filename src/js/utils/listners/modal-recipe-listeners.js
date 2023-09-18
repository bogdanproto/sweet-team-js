import { refs } from '../../refs/refs.js';
import { modalRecipeFavClick } from '../../partials/modal-recipe.js';

// Присвоение Listeners
export function modalRecipeListeners() {
  const listeners = {
    modalRecipeFavorite: document.querySelector('.modal-recipe-favorite-btn'),
    modalRecipeCloseButton: document.querySelector('.js-modal-recipe-close'),
    modalRecipeBackdrop: document.querySelector('.modal-recipe-backdrop'),
  };

  listeners.modalRecipeFavorite.addEventListener('click', modalRecipeFavClick);

  if (listeners.modalRecipeCloseButton || listeners.modalRecipeBackdrop) {
    listeners.modalRecipeCloseButton.addEventListener(
      'click',
      modalRecipeClose
    );

    listeners.modalRecipeBackdrop.addEventListener('click', evt => {
      if (evt.target === listeners.modalRecipeBackdrop) {
        modalRecipeClose();
      }
    });

    document.addEventListener('keydown', evt => {
      if (
        evt.key === 'Escape' &&
        !refs.modalRecipe.classList.contains('is-hidden')
      ) {
        modalRecipeClose();
      }
    });
  }
}

// Закрытие модального окна + удаление Listeners
function modalRecipeClose() {
  const listeners = {
    modalRecipeCloseButton: document.querySelector('.js-modal-recipe-close'),
    modalRecipeFavorite: document.querySelector('.modal-recipe-favorite-btn'),
    modalRecipeBackdrop: document.querySelector('.modal-recipe-backdrop'),
  };

  listeners.modalRecipeBackdrop.removeEventListener('click', evt => {
    if (evt.target === listeners.modalRecipeBackdrop) {
      modalRecipeClose();
    }
  });

  listeners.modalRecipeCloseButton.removeEventListener(
    'click',
    modalRecipeClose
  );

  listeners.modalRecipeFavorite.removeEventListener(
    'click',
    modalRecipeFavClick
  );

  document.removeEventListener('keydown', evt => {
    if (
      evt.key === 'Escape' &&
      !refs.modalRecipe.classList.contains('is-hidden')
    ) {
      modalRecipeClose();
    }
  });

  refs.modalRecipe.classList.toggle('is-hidden');
  refs.modalRecipe.innerHTML = '';
}
