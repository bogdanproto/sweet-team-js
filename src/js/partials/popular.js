import { getAllPopularResipes } from '../api/api-service';
import { createPopularMarkup } from '../utils/markup/popular-markup';
import { refs } from '../refs/refs';

export async function showPopularRecipes() {
  try {
    refs.popularRecipesContainer.classList.remove('is-hidden');
    const popularData = await getAllPopularResipes();

    const popularMarkup = createPopularMarkup(popularData);
    console.log(refs.popularRecipesList);

    refs.popularRecipesList.insertAdjacentHTML('beforeend', popularMarkup);
  } catch (error) {
    refs.popularRecipesContainer.classList.add('is-hidden');
    console.error('Error fetching or displaying popular recipes:', error);
  }
}

refs.popularRecipesList.addEventListener('click', onPopularClick);

function onPopularClick(evt) {
  const popularId = evt.target.closest('.popular-item').dataset.id;
  console.log(popularId);
}
