import { refs } from '../../refs/refs.js';
import { modalRecipeFavClick } from '../../partials/modal-recipe.js';
import { toShowModalRating } from '../../partials/modal-rating.js';

// Присвоение Listeners
export function modalRecipeListeners() {
  const listeners = {
    modalRecipeCloseButton: document.querySelector('.js-modal-recipe-close'),
    modalRecipeFavorite: document.querySelector('.modal-recipe-favorite-btn'),
    modalRecipeBackdrop: document.querySelector('.modal-recipe-backdrop'),
    modalRecipeGiveRating: document.querySelector('.modal-recipe-rating-btn'),
  };

  listeners.modalRecipeFavorite.addEventListener('click', modalRecipeFavClick);

  if (listeners.modalRecipeCloseButton || listeners.modalRecipeBackdrop) {
    listeners.modalRecipeCloseButton.addEventListener(
      'click',
      modalRecipeClose
    );
  }

  listeners.modalRecipeBackdrop.addEventListener(
    'click',
    modalRecipeBackdropClick
  );

  listeners.modalRecipeGiveRating.addEventListener('click', toShowModalRating);

  document.addEventListener('keydown', modalRecipeEscClick);
}

// Функции Listeners
function modalRecipeBackdropClick(evt) {
  const modalRecipeBackdrop = document.querySelector('.modal-recipe-backdrop');

  if (evt.target === modalRecipeBackdrop) {
    modalRecipeClose();
  }
}

function modalRecipeEscClick(evt) {
  if (
    evt.key === 'Escape' &&
    !refs.modalRecipe.classList.contains('is-hidden')
  ) {
    modalRecipeClose();
  }
}

// Закрытие модального окна + удаление Listeners
function modalRecipeClose() {
  const listeners = {
    modalRecipeCloseButton: document.querySelector('.js-modal-recipe-close'),
    modalRecipeFavorite: document.querySelector('.modal-recipe-favorite-btn'),
    modalRecipeBackdrop: document.querySelector('.modal-recipe-backdrop'),
    modalRecipeGiveRating: document.querySelector('.modal-recipe-rating-btn'),
  };

  if (listeners.modalRecipeCloseButton) {
    listeners.modalRecipeCloseButton.removeEventListener(
      'click',
      modalRecipeClose
    );
  }

  if (listeners.modalRecipeBackdrop) {
    listeners.modalRecipeBackdrop.removeEventListener(
      'click',
      modalRecipeBackdropClick
    );
  }
  if (listeners.modalRecipeFavorite) {
    listeners.modalRecipeFavorite.removeEventListener(
      'click',
      modalRecipeFavClick
    );
  }

  if (listeners.modalRecipeGiveRating) {
    listeners.modalRecipeGiveRating.removeEventListener(
      'click',
      toShowModalRating
    );
  }

  document.removeEventListener('keydown', modalRecipeEscClick);

  refs.modalRecipe.classList.toggle('is-hidden');
  refs.modalRecipe.innerHTML = '';
}
