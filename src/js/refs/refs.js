export const refs = {
  body: document.querySelector('body'),

  //hero
  swiperWrapperHero: document.querySelector('.swiper-wrapper-hero'),
  heroBtn: document.querySelector('.hero-btn'),

  // All Categories
  allCategoriesBtn: document.querySelector('.all-categories-btn'),
  allCategoriesList: document.querySelector('.all-categories-list'),
  // Recipes
  searchInput: document.querySelector('.js-search-recipe'),
  filterForm: document.querySelector('.filter-form'),
  timeFilter: document.querySelector('.time-select'),
  areaFilter: document.querySelector('.area-select'),
  ingredientFilter: document.querySelector('.ingredient-select'),
  resetFiltersBtn: document.querySelector('.js-reset-filters-btn'),
  recipesSection: document.querySelector('.recipes'),
  recipesList: document.querySelector('.recipe-list'),
  recipesGuard: document.querySelector('.recipes-guard'),

  //favorites page
  filterFavorites: document.querySelector('.favorites-cards-filter'),
  recipesContainerFavorites: document.querySelector(
    '.favorites-cards-container'
  ),
  emptyContainerFavorites: document.querySelector('.favorites-empty-container'),
  heroContainerFavorites: document.querySelector('.favorites-hero'),

  //modal window
  openModalBtn: document.querySelector('[data-modal-open]'),
  closeModalBtn: document.querySelector('[data-modal-close]'),
  modal: document.querySelector('[data-modal]'),
};
