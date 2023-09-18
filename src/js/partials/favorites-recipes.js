import { getFavRec } from '../utils/localestorage/local-storage-service';
import { addListenerOnElement } from '../utils/listners/recipe-list-listener';
import { onClickHandle } from '../utils/listners/recipe-list-listener';
import { toMarkUpFilterFavorites } from '../utils/markup/favorites/favorites-filter-markup';
import { createRecipeMarkup } from '../utils/markup/recipe-markup';
import { refs } from '../refs/refs';

import { onLikeClickAsync } from '../utils/localestorage/local-storage-service';
import { addStarRating } from '../utils/markup/star-rating';

let currentFilter = null;

// Listeners-----------------------------
function onKitListnerFavorites() {
  refs.filterFavorites.addEventListener('click', toFilterRecipes);
  addListenerOnElement(
    refs.recipesContainerFavorites,
    'click',
    handleRecipesFavorites
  );
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
  addStarRating(arrayRecipes);

  toRenderFilterBtn(arrayRecipes);
  onKitListnerFavorites(); //switch listner kit for page
  refs.recipesContainerFavorites.classList.remove('hidden-empty');
}

function toRenderFilterBtn(arr) {
  const buttonList = toMarkUpFilterFavorites(arr);
  refs.filterFavorites.insertAdjacentHTML('beforeend', buttonList);
}

//get filter button
function toUpdateFilterBtn(arr) {
  if (!arr.length) {
    refs.filterFavorites.innerHTML = '';
    return;
  }

  const recipesList =
    refs.recipesContainerFavorites.querySelectorAll('.js-recipe');
  const isShowRecipes = [...recipesList].some(
    recipe =>
      recipe.dataset.category === currentFilter &&
      !recipe.classList.contains('hidden-empty')
  );

  if (isShowRecipes) {
    return;
  }

  refs.filterFavorites.innerHTML = '';
  setDefaultFilterBtn();
  toRenderFilterBtn(arr);
}

// filter cards function--------------------------
function toFilterRecipes(evt) {
  if (!evt.target.classList.contains('btn')) {
    return;
  }
  //change active
  clearBtnFilter();

  evt.target.classList.add('btn-favorites-filter-active');

  currentFilter = evt.target.dataset.category;
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
function clearBtnFilter() {
  const listBtn = refs.filterFavorites.querySelectorAll(
    '.btn-favorites-filter '
  );

  listBtn.forEach(btn => btn.classList.remove('btn-favorites-filter-active'));
}

function setDefaultFilterBtn() {
  clearBtnFilter();
  currentFilter = 'all';
  const recipesList =
    refs.recipesContainerFavorites.querySelectorAll('.js-recipe');

  recipesList.forEach(recipe => {
    recipe.classList.remove('hidden-empty');
    if (recipe.dataset.category !== currentFilter && currentFilter !== 'all') {
      recipe.classList.add('hidden-empty');
    }
  });
}

//handler card recipes
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
    toUpdateListFavorits(id, currentRecipes, isHeartChecked);
  } else {
    onClickHandle(evt);
  }
}

export async function toUpdateListFavorits(
  id,
  currentRecipe = null,
  isChecked = null
) {
  console.log(isChecked);
  await onLikeClickAsync(id, isChecked);
  const arr = getFavRec();
  currentRecipe.remove();
  toUpdateFilterBtn(arr);
  console.log(arr);
  if (!arr.length) {
    refs.emptyContainerFavorites.classList.remove('hidden-empty');
  }
}
