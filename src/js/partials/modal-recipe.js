import { refs } from '../refs/refs.js';
import { getResipesById } from '../api/api-service.js';
import { modalRecipeCard } from '../utils/markup/modal-recipe-card.js';

import rater from 'rater-js';

// Функция открытия или закрытия окна с рецептом
export function modalRecipeOpen(cardId) {
  refs.modalRecipe.classList.toggle('is-hidden');

  // refs.modalRecipeFavority.addEventListener('click', handlerFavority);

  // getResipesById(cardId)
  //   .then(data => (refs.modalRecipe.innerHTML = modalRecipeCard(data)))

  getResipesById(cardId).then(data => {
    refs.modalRecipe.innerHTML = modalRecipeCard(data);
    console.log(data.rating);
    addEventListeners();
    addStarRating(data._id, data.rating);
  });

  function addEventListeners() {
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
