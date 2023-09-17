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
  refs.searchInput.addEventListener('input', debounce(onSearchInput, 300));
  refs.timeFilter.addEventListener('change', onTimeChange);
  refs.areaFilter.addEventListener('change', onAreaChange);
  refs.ingredientFilter.addEventListener('change', onIngredientChange);
  // refs.resetFiltersBtn.addEventListener('click', resetFilters);
}

function onSearchInput(evt) {
  const searchQuery = evt.target.value.trim();
  params.title = searchQuery ?? '';

  clearRecipes();
  loadRecipes();
}

// =========================================================================

function loadTimeOptions() {
  refs.timeFilter.innerHTML = createTimeOptionsMarkup();

  const timeSelect = new SlimSelect({
    select: '.time-select',
    settings: {
      showSearch: false,
      placeholderText: 'Choose time',
    },
  });
}

// =========================================================================

async function loadAreaOptions() {
  try {
    const allAreas = await getAllAreas();
    refs.areaFilter.innerHTML = createAreaOptionsMarkup(allAreas);

    const areaSelect = new SlimSelect({
      select: '.area-select',
      settings: {
        showSearch: false,
        placeholderText: 'Choose Area',
      },
    });
  } catch (error) {
    console.log(error);
  }
}

// =========================================================================

async function loadIngredientsOptions() {
  try {
    const allIngredients = await getAllIngredients();
    refs.ingredientFilter.innerHTML =
      createIngredientOptionsMarkup(allIngredients);

    const ingredientSelect = new SlimSelect({
      select: '.ingredient-select',
      settings: {
        showSearch: false,
        placeholderText: 'Choose ingredient',
      },
    });
  } catch (error) {
    console.log(error);
  }
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
  params.area = evt.target.value;
  loadRecipes();
}

function onIngredientChange(evt) {
  clearRecipes();
  // console.dir(evt.target.attribute)
  console.dir(evt.target);
  params.ingredient = evt.currentTarget.value;
  loadRecipes();
}

// function resetFilters(evt) {
//   evt.preventDefault();

//   refs.filterForm.reset();
// }

function loadFiltersOption() {
  loadTimeOptions();
  loadAreaOptions();
  loadIngredientsOptions();
  onKitListenerSearchAndFilters()
}
export { loadFiltersOption };
