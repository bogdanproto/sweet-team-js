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

const idArr = [];
let timeSelect = {};
let areaSelect = {};
let ingredientSelect = {};

function onKitListenerSearchAndFilters() {
  refs.searchInput.addEventListener('focus', onSearchFocus);
  refs.searchInput.addEventListener('focusout', onSearchFocusout);
  refs.searchInput.addEventListener('input', onClose);
  refs.searchInput.addEventListener('input', debounce(onSearchInput, 300));
  refs.timeFilter.addEventListener('change', onTimeChange);
  refs.areaFilter.addEventListener('change', onAreaChange);
  refs.ingredientFilter.addEventListener('change', onIngredientChange);
  refs.resetFiltersBtn.addEventListener('click', onResetFiltersBtn);
}

function onClose(evt) {
  if (evt.currentTarget.value) {
    refs.resetSearchBtn.classList.remove('is-hidden');
    return;
  }
  refs.resetSearchBtn.classList.add('is-hidden');
}

function onSearchFocus(evt) {
  refs.searchIcon.classList.add('search-icon-active');
  if (!evt.currentTarget.value) {
  }
}

function onSearchFocusout(evt) {
  refs.searchIcon.classList.remove('search-icon-active');
  if (!evt.currentTarget.value) {
    onResetSearchBtn();
  }
}

function onSearchInput(evt) {
  refs.searchInput.classList.add('search-recipe-focus');
  const searchQuery = evt.target.value.trim();
  params.title = searchQuery ?? '';

  clearRecipes();
  loadRecipes();

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
  refs.searchInput.removeEventListener('input', onSearchInput);
  refs.timeFilter.removeEventListener('change', onTimeChange);
  refs.areaFilter.removeEventListener('change', onAreaChange);
  refs.ingredientFilter.removeEventListener('change', onIngredientChange);
  params.title = '';
  params.time = '';
  params.area = '';
  params.ingredient = '';
  refs.filterForm.reset();
  clearRecipes();
  loadRecipes();
  timeSelect.setSelected();
  areaSelect.setSelected();
  ingredientSelect.setSelected();
  onKitListenerSearchAndFilters();
  refs.resetSearchBtn.classList.add('is-hidden');
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
  const ingredientForSearch = idArr.find(
    item => item.value === evt.target.value
  );
  params.ingredient = ingredientForSearch?.id ?? '';
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

  timeSelect = new SlimSelect({
    select: '.time-select',
    settings: {
      showSearch: false,
      placeholderText: '-',
    },
  });
}

async function loadAreaOptions() {
  try {
    const allAreas = await getAllAreas();
    refs.areaFilter.innerHTML = createAreaOptionsMarkup(allAreas);

    areaSelect = new SlimSelect({
      select: '.area-select',
      settings: {
        showSearch: false,
        placeholderText: '-',
      },
    });
  } catch (error) {
    console.log(refs.areaFilter);
    refs.areaFilter.disabled = true;
    console.log(error);
  }
}

async function loadIngredientsOptions() {
  try {
    const allIngredients = await getAllIngredients();
    allIngredients.map(({ _id, name }) => idArr.push({ value: name, id: _id }));
    refs.ingredientFilter.innerHTML =
      createIngredientOptionsMarkup(allIngredients);

    ingredientSelect = new SlimSelect({
      select: '.ingredient-select',
      settings: {
        showSearch: true,
        placeholderText: '-',
      },
    });
  } catch (error) {
    refs.ingredientFilter.disabled = true;
    console.log(error);
  }
}
