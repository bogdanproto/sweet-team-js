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

  toRenderRecipes(arrayRecipes);
  toRenderFilterBtn(arrayRecipes);
  onKitListnerFavorites(); //switch listner kit for page
  refs.recipesContainerFavorites.classList.remove('hidden-empty');
}

function toRenderFilterBtn(arr) {
  const buttonList = toMarkUpFilterFavorites(arr);
  refs.filterFavorites.insertAdjacentHTML('beforeend', buttonList);
}

function toRenderRecipes(arr) {
  const recipesList = createRecipeMarkup(arr);
  refs.recipesContainerFavorites.insertAdjacentHTML('beforeend', recipesList);
  addStarRating(arr);
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
  if (evt.target.classList.contains('recipe-heart-checkbox')) {
    const currentRecipe = evt.target.closest('.js-recipe');
    const id = currentRecipe.dataset.id;

    await toUpdateListFavorits({
      id: id,
      currentRecipe: currentRecipe,
      isChecked: false,
    });
  } else {
    onClickHandle(evt);
  }
}

export async function toUpdateListFavorits(objOption) {
  const { id, currentRecipe, isChecked } = objOption;

  await onLikeClickAsync(id, isChecked);
  const arr = getFavRec();

  if (!isChecked) {
    currentRecipe.remove();
  } else {
    const recipeObjbyId = arr.find(item => item._id === id);
    toRenderRecipes([recipeObjbyId]);
  }

  toUpdateFilterBtn(arr);

  if (!arr.length) {
    refs.emptyContainerFavorites.classList.remove('hidden-empty');
  } else {
    refs.emptyContainerFavorites.classList.add('hidden-empty');
  }
}
