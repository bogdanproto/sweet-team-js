import { Notify } from 'notiflix';

import { refs } from '../refs/refs';
import { getAllCategories } from '../api/api-service';
import { createAllCategoriesMarkup } from '../utils/markup/all-categories-markup';

// =====================================================

// Значення ID категорії для фільтрації рецептів.
let nextSelectedCategoryId = null;

// Завантажує перелік категорій.
async function loadAllCategories() {
  try {
    const allCategories = await getAllCategories();
    refs.allCategoriesList.innerHTML = createAllCategoriesMarkup(allCategories);
  } catch (error) {
    Notify.failure(`Oops! Something went wrong! Try reloading the page!`);
  }
}

// "Тимчасовий" виклик функції. Потім буде перенесений в main.js на подію load
loadAllCategories();

refs.allCategoriesList.addEventListener('click', onSelectCategory);
refs.allCategoriesBtn.addEventListener('click', onResetCategory);

function onSelectCategory(evt) {
  onResetCategory();

  const nextSelectedCategory = evt.target;
  nextSelectedCategory.classList.add('all-categories-selected');

  nextSelectedCategoryId = nextSelectedCategory.id;
}

function onResetCategory() {
  const currentSelectedCategory = document.querySelector(
    '.all-categories-selected'
  );

  currentSelectedCategory?.classList.remove('all-categories-selected');
  nextSelectedCategoryId = null;
}

export { nextSelectedCategoryId };
