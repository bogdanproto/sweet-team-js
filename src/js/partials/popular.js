import { refs } from '../refs/refs';
import { getAllPopularResipes } from '../api/api-service';
import { createPopularMarkup } from '../utils/markup/popular-markup';
import {modalRecipeOpen} from './modal-recipe'

export async function showPopularRecipes() {
  try {
    refs.popularRecipesContainer.classList.remove('is-hidden');
    const popularData = await getAllPopularResipes();

    const popularMarkup = createPopularMarkup(popularData);
    refs.popularRecipesList.addEventListener('click', onPopularClick);

    refs.popularRecipesList.insertAdjacentHTML('beforeend', popularMarkup);
  } catch (error) {
    refs.popularRecipesContainer.classList.add('is-hidden');
    console.error('Error fetching or displaying popular recipes:', error);
  }
}

function onPopularClick(evt) {
  const popularId = evt.target.closest('.popular-item').dataset.id;
modalRecipeOpen(popularId)
}
