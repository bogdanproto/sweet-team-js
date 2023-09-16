import { refs } from '../refs/refs.js';
import { getAllRecipes } from '../api/api-service.js';
import { modalRecipeCard } from '../utils/markup/modal-recipe-card.js';

// refs.modalRecipeOpen.addEventListener('click', modalRecipeOpen);

// Функция открытия или закрытия окна с рецептом
function modalRecipeOpen(evt) {
  refs.modalRecipe.classList.toggle('is-hidden');

  refs.modalRecipeOpen.removeEventListener('click', modalRecipeOpen);
  // refs.modalRecipeClose.addEventListener('click', modalRecipeClose);

  getAllRecipes().then(data => {
    const { title, youtube, tags, rating, ingredients, instructions } =
      data.results[0];

    return (refs.modalRecipe.innerHTML = modalRecipeCard(
      title,
      youtube,
      tags,
      rating,
      ingredients,
      instructions
    ));
  });
}

function modalRecipeClose() {
  refs.modalRecipe.classList.toggle('is-hidden');
}
