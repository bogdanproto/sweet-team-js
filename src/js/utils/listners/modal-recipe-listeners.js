import { refs } from '../../refs/refs.js';
import { modalRecipeFavClick } from '../../partials/modal-recipe.js';

// Присвоение Listeners на кнопки
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
  }
}

// Закрытие модального окна
function modalRecipeClose() {
  const listeners = {
    modalRecipeCloseButton: document.querySelector('.js-modal-recipe-close'),
    modalRecipeFavorite: document.querySelector('.modal-recipe-favorite-btn'),
    modalRecipeBackdrop: document.querySelector('.modal-recipe-backdrop'),
  };

  listeners.modalRecipeCloseButton.removeEventListener(
    'click',
    modalRecipeClose
  );
  listeners.modalRecipeFavorite.removeEventListener(
    'click',
    modalRecipeFavClick
  );
  listeners.modalRecipeBackdrop.removeEventListener('click', evt => {
    if (evt.target === listeners.modalRecipeBackdrop) {
      modalRecipeClose();
    }
  });

  refs.modalRecipe.classList.toggle('is-hidden');
  refs.modalRecipe.innerHTML = '';
}
