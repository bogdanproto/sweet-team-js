import debounce from 'lodash.debounce';
import SlimSelect from 'slim-select';

import { params } from '../refs/params';
import { refs } from '../refs/refs';
import { loadRecipes, clearRecipes } from './recipes';

import { getAllAreas, getAllIngredients } from '../api/api-service';
import {
  createTimeOptionsMarkup,
  createAreaOptionsMarkup,
  createIngredientOptionsMarkup,
} from '../utils/markup/filters-markup';

// =============================================

function onKitListenerSearchAndFilters() {
  refs.searchInput.addEventListener('focus', onSearchFocus);
  refs.searchInput.addEventListener('focusout', onSearchFocusout);
  refs.searchInput.addEventListener('input', debounce(onSearchInput, 300));
  refs.timeFilter.addEventListener('change', onTimeChange);
  refs.areaFilter.addEventListener('change', onAreaChange);
  refs.ingredientFilter.addEventListener('change', onIngredientChange);
  refs.resetFiltersBtn.addEventListener('click', onResetFiltersBtn);
}

function onSearchFocus() {
  refs.searchIcon.classList.add('search-icon-active');
}

function onSearchFocusout() {
  refs.searchIcon.classList.remove('search-icon-active');
}

function onSearchInput(evt) {
  refs.searchInput.classList.add('search-recipe-focus');
  const searchQuery = evt.target.value.trim();
  params.title = searchQuery ?? '';

  clearRecipes();
  loadRecipes();

  refs.resetSearchBtn.classList.remove('is-hidden');
  refs.resetSearchBtn.addEventListener('click', onResetSearchBtn);
}


function onResetSearchBtn() {
  refs.resetSearchBtn.classList.add('is-hidden');
  refs.resetSearchBtn.removeEventListener('click', onResetSearchBtn);
  refs.filterForm.reset();
  params.title = '';
  clearRecipes();
  loadRecipes();
}

function onResetFiltersBtn() {
  params.title = '';
  params.time = '';
  params.area = '';
  params.ingredient = '';
  refs.filterForm.reset();
  clearRecipes();
  loadRecipes();
}

function onTimeChange(evt) {
  clearRecipes();
  params.time = isNaN(Number.parseInt(evt.target.value))
    ? ''
    : Number.parseInt(evt.target.value) ?? '';
  loadRecipes();
}

function onAreaChange(evt) {
  clearRecipes();
  params.area = evt.target.value === '-' ? '' : evt.target.value;
  loadRecipes();
}

function onIngredientChange(evt) {
  clearRecipes();
  console.dir(evt.target.value);

  params.ingredient = evt.target.value === '-' ? '' : evt.target.value;
  loadRecipes();
}

function loadFiltersOption() {
  loadTimeOptions();
  loadAreaOptions();
  loadIngredientsOptions();
  onKitListenerSearchAndFilters();
}
export { loadFiltersOption };

// Загрузка опцій для вибору часу, регіону, інгредіенту
function loadTimeOptions() {
  refs.timeFilter.innerHTML = createTimeOptionsMarkup();

  const timeSelect = new SlimSelect({
    select: '.time-select',
    settings: {
      showSearch: false,
      placeholderText: '40 min',
    },
  });
}

async function loadAreaOptions() {
  try {
    const allAreas = await getAllAreas();
    refs.areaFilter.innerHTML = createAreaOptionsMarkup(allAreas);

    const areaSelect = new SlimSelect({
      select: '.area-select',
      settings: {
        showSearch: false,
        placeholderText: 'Italian',
      },
    });
  } catch (error) {
    console.log(error);
  }
}

async function loadIngredientsOptions() {
  try {
    const allIngredients = await getAllIngredients();
    console.log(allIngredients);
    refs.ingredientFilter.innerHTML =
      createIngredientOptionsMarkup(allIngredients);

    const ingredientSelect = new SlimSelect({
      select: '.ingredient-select',
      settings: {
        showSearch: false,
        placeholderText: 'Tomato',
      },
    });
  } catch (error) {
    console.log(error);
  }
}
