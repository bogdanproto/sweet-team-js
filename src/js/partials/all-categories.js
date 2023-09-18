import { Notify } from 'notiflix';

import { refs } from '../refs/refs';
import { params } from '../refs/params';
import { getAllCategories } from '../api/api-service';
import { createAllCategoriesMarkup } from '../utils/markup/all-categories-markup';
import { loadRecipes, clearRecipes } from './recipes';

// =====================================================

// Значення ID категорії для фільтрації рецептів.
let nextSelectedCategory = null;

// Завантажує перелік категорій.
async function loadAllCategories() {
  try {
    const allCategories = await getAllCategories();
    refs.allCategoriesList.innerHTML = createAllCategoriesMarkup(allCategories);
    onKitListenerAllCategories();
  } catch (error) {
    Notify.failure(`Oops! Something went wrong! Try reloading the page!`);
  }
}

function onKitListenerAllCategories() {
  refs.allCategoriesList.addEventListener('click', onSelectCategory);
  refs.allCategoriesBtn.addEventListener('click', onAllCategories);
}

// Дає вибрати лише 1 категорію
function onSelectCategory(evt) {
  resetCategory();
  clearRecipes();

  const nextSelectedCategory = evt.target;
  nextSelectedCategory.classList.add('selected-category');
  const nameOfCategory = nextSelectedCategory.textContent;
  params.category = nameOfCategory;
  loadRecipes();
}

function onAllCategories() {
  clearRecipes();
  resetCategory();
  loadRecipes();
}

function resetCategory() {
  params.category = '';
  const currentSelectedCategory = document.querySelector('.selected-category');
  currentSelectedCategory?.classList.remove('selected-category');
  nextSelectedCategory = null;
}

export { loadAllCategories, nextSelectedCategory };
