import { Notify } from 'notiflix';

import { refs } from '../refs/refs';
import { getAllCategories } from '../api/api-service';
import { createAllCategoriesMarkup } from '../utils/markup/all-categories-markup';

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
  refs.allCategoriesBtn.addEventListener('click', onResetCategory);
}

// Дає вибрати лише 1 категорію
function onSelectCategory(evt) {
  onResetCategory();

  const nextSelectedCategory = evt.target;
  nextSelectedCategory.classList.add('all-categories-selected');
}

function onResetCategory() {
  const currentSelectedCategory = document.querySelector(
    '.all-categories-selected'
  );

  currentSelectedCategory?.classList.remove('all-categories-selected');
  nextSelectedCategory = null;
}

export { loadAllCategories };
