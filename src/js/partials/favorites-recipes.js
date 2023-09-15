import { getAllRecipes } from '../api/api-service';
import { toMarkUpFilterFavorites } from '../utils/markup/favorites/favorites-filter-markup';
import { refs } from '../refs/refs';

const testObj = {
  page: 3,
  limit: 20,
};

export async function loadFavoritesData() {
  const response = await getAllRecipes(testObj);
  const arrayMeal = response.results;

  if (!arrayMeal.length) {
    refs.recipesContainerFavorites.classList.add('visually-hidden');
    refs.emptyContainerFavorites.classList.remove('visually-hidden');
  }

  const buttonList = toMarkUpFilterFavorites(arrayMeal);
  refs.filterFavorites.insertAdjacentHTML('beforeend', buttonList);

  refs.recipesContainerFavorites.classList.remove('visually-hidden');
}

// loadFavoritesData();
