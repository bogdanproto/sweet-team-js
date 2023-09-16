import { getAllRecipes } from '../api/api-service';
import { toMarkUpFilterFavorites } from '../utils/markup/favorites/favorites-filter-markup';
import { createRecipeMarkup } from '../utils/markup/recipe-markup';
import { refs } from '../refs/refs';

const testObj = {
  page: 3,
  limit: 20,
};

// Listeners-----------------------------
function onKitListnerFavorites() {
  refs.filterFavorites.addEventListener('click', toFilterRecipes);
}

function offKitListnerFavorites() {
  refs.filterFavorites.removeEventListener('click', toFilterRecipes);
}

//main function for favorites-------------------
export async function loadFavoritesData() {
  const response = await getAllRecipes(testObj);
  const arrayRecipes = response.results;

  if (!arrayRecipes.length) {
    if (window.innerWidth <= 768) {
      refs.heroContainerFavorites.classList.add('hidden-empty');
    }
    refs.recipesContainerFavorites.classList.add('hidden-empty');
    refs.emptyContainerFavorites.classList.remove('hidden-empty');
    return;
  }

  const buttonList = toMarkUpFilterFavorites(arrayRecipes);
  const recipesList = createRecipeMarkup(arrayRecipes);

  refs.filterFavorites.insertAdjacentHTML('beforeend', buttonList);
  refs.recipesContainerFavorites.insertAdjacentHTML('beforeend', recipesList);

  onKitListnerFavorites(); //switch listner kit for page

  refs.recipesContainerFavorites.classList.remove('hidden-empty');
}

// filter cards function--------------------------
function toFilterRecipes(evt) {
  if (!evt.target.classList.contains('btn')) {
    return;
  }
  //change active
  clearBtnFilter();

  evt.target.classList.add('btn-favorites-filter-active');

  const currentFilter = evt.target.dataset.category;
  const recipesList =
    refs.recipesContainerFavorites.querySelectorAll('.js-recipe');

  recipesList.forEach(recipe => {
    recipe.classList.remove('hidden-empty');
    if (recipe.dataset.category !== currentFilter && currentFilter !== 'all') {
      recipe.classList.add('hidden-empty');
    }
  });
}

//clearButtonFilter-------------------------
function clearBtnFilter(evt) {
  const listBtn = refs.filterFavorites.querySelectorAll(
    '.btn-favorites-filter '
  );

  listBtn.forEach(btn => btn.classList.remove('btn-favorites-filter-active'));
}
