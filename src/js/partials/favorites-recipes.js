import { getAllRecipes } from '../api/api-service';
import { toMarkUpFilterFavorites } from '../utils/markup/favorites/favorites-filter-markup';
import { refs } from '../refs/refs';

const testObj = {
  page: 3,
  limit: 20,
};

function onKitListnerFavorites() {
  refs.filterFavorites.addEventListener('click', toFilterCards);
}

function offKitListnerFavorites() {
  refs.filterFavorites.removeEventListener('click', toFilterCards);
}

//main function for favorites
export async function loadFavoritesData() {
  const response = await getAllRecipes(testObj);
  const arrayMeal = response.results;

  if (!arrayMeal.length) {
    refs.recipesContainerFavorites.classList.add('visually-hidden');
    refs.emptyContainerFavorites.classList.remove('visually-hidden');
    return;
  }

  const buttonList = toMarkUpFilterFavorites(arrayMeal);
  refs.filterFavorites.insertAdjacentHTML('beforeend', buttonList);
  onKitListnerFavorites(); //switch listner kit for page

  refs.recipesContainerFavorites.classList.remove('visually-hidden');
}
