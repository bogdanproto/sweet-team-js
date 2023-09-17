import { getFavRec } from '../utils/localestorage/local-storage-service';
import { addListenerOnElement } from '../utils/listners/recipe-list-listener';
import { onClickHandle } from '../utils/listners/recipe-list-listener';
import { toMarkUpFilterFavorites } from '../utils/markup/favorites/favorites-filter-markup';
import { createRecipeMarkup } from '../utils/markup/recipe-markup';
import { refs } from '../refs/refs';

import { onLikeClickAsync } from '../utils/localestorage/local-storage-service';

// Listeners-----------------------------
function onKitListnerFavorites() {
  refs.filterFavorites.addEventListener('click', toFilterRecipes);
}

//main function for favorites-------------------
export function loadFavoritesData() {
  const arrayRecipes = getFavRec();

  if (!arrayRecipes.length) {
    if (window.innerWidth <= 768) {
      refs.heroContainerFavorites.classList.add('hidden-empty');
    }
    refs.recipesContainerFavorites.classList.add('hidden-empty');
    refs.emptyContainerFavorites.classList.remove('hidden-empty');
    return;
  }

  const recipesList = createRecipeMarkup(arrayRecipes);
  refs.recipesContainerFavorites.insertAdjacentHTML('beforeend', recipesList);

  getFilterBtn(arrayRecipes);

  onKitListnerFavorites(); //switch listner kit for page
  addListenerOnElement(
    refs.recipesContainerFavorites,
    'click',
    handleRecipesFavorites
  );

  refs.recipesContainerFavorites.classList.remove('hidden-empty');
}

//get filter button
function getFilterBtn(arr) {
  if (!arr.length) {
    refs.filterFavorites.innerHTML = '';
    return;
  }

  // const recipesList =
  //   refs.recipesContainerFavorites.querySelectorAll('.js-recipe');
  // console.log([...recipesList]);
  // const isAviable = [...recipesList].some(recipe =>
  //   recipe.classList.contains('hidden-empty')
  // );

  // console.log(isAviable);

  refs.filterFavorites.innerHTML = '';

  const buttonList = toMarkUpFilterFavorites(arr);
  refs.filterFavorites.insertAdjacentHTML('beforeend', buttonList);
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

async function handleRecipesFavorites(evt) {
  if (
    evt.target.classList.contains('recipe-heart-checkbox') ||
    evt.target.classList.contains('recipe-heart-icon') ||
    evt.target.classList.contains('recipe-heart-label')
  ) {
    const currentRecipes = evt.target.closest('.js-recipe');
    const id = currentRecipes.dataset.id;
    const heartCheckbox = evt.target.querySelector('.recipe-heart-checkbox');
    const isHeartChecked = heartCheckbox ? heartCheckbox.checked : false;

    await onLikeClickAsync(id, isHeartChecked);
    const arr = await getFavRec();
    getFilterBtn(arr);
    currentRecipes.remove();
    if (!arr.length) {
      refs.emptyContainerFavorites.classList.remove('hidden-empty');
    }
  } else {
    onClickHandle(evt);
  }
}
