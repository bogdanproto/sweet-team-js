import { refs } from '../refs/refs.js';
import { getResipesById } from '../api/api-service.js';
import { modalRecipeCard } from '../utils/markup/modal-recipe-card.js';

// Функция открытия или закрытия окна с рецептом
export function modalRecipeOpen(cardId) {
  refs.modalRecipe.classList.toggle('is-hidden');

  // refs.modalRecipeClose.addEventListener('click', modalRecipeClosed);
  // function modalRecipeClosed() {
  //   refs.modalRecipe.classList.toggle('is-hidden');
  // }
  getResipesById(cardId).then(
    data => (refs.modalRecipe.innerHTML = modalRecipeCard(data))
  );
}
