export const refs = {
  body: document.querySelector('body'),

  //header

  headerOrder: document.querySelector('.header-icon-svg'),
  mobileMenu: document.querySelector('.js-header-menu-container'),
  openMenuBtn: document.querySelector('.js-header-open-menu'),
  closeMenuBtn: document.querySelector('.js-header-close-menu'),
  themeSwitch: document.querySelector('#themeSwitch'),
  headerElem: document.querySelector('header'),

  //hero
  heroSwiper: document.querySelector('.hero-swiper'),
  heroSwiperWrapper: document.querySelector('.hero-swiper-wrapper'),
  heroBtn: document.querySelector('.hero-btn'),

  // All Categories
  allCategoriesContainer: document.querySelector('.all-categories'),
  allCategoriesBtn: document.querySelector('.all-categories-btn'),
  allCategoriesList: document.querySelector('.all-categories-list'),

  // Recipes
  searchInput: document.querySelector('.js-search-recipe'),
  searchIcon: document.querySelector('.search-icon'),
  resetSearchBtn: document.querySelector('.reset-search-btn'),
  filterForm: document.querySelector('.form-filters'),
  timeFilter: document.querySelector('.time-select'),
  areaWrapper: document.querySelector('.area-wrapper'),
  areaFilter: document.querySelector('.area-select'),
  ingredientWrapper: document.querySelector('.ingredient-wrapper'),
  ingredientFilter: document.querySelector('.ingredient-select'),
  resetFiltersBtn: document.querySelector('.js-reset-filters-btn'),
  recipesSection: document.querySelector('.recipes'),
  recipesList: document.querySelector('.recipe-list'),
  recipesGuard: document.querySelector('.recipes-guard'),
  spinnerLoader: document.querySelector('.spinner-loader'),

  // Popular Recipes
  popularRecipesContainer: document.querySelector('.popular-container'),
  popularRecipesList: document.querySelector('.popular-list'),
  popularRecipesItem: document.querySelector('.popular-item'),

  //favorites page
  filterFavorites: document.querySelector('.favorites-cards-filter'),
  recipesContainerFavorites: document.querySelector(
    '.favorites-cards-container'
  ),
  emptyContainerFavorites: document.querySelector('.favorites-empty-container'),
  heroContainerFavorites: document.querySelector('.favorites-hero'),

  // Modal recipe
  modalRecipe: document.querySelector('.js-modal-recipe'),
  modalRecipeOpenBtn: document.querySelector('.js-modal-recipe-open'),
  modalRecipeCloseBtn: document.querySelector('.js-modal-recipe-close'),

  //modal window
  openModalBtn: document.querySelector('[data-modal-open]'),
  closeModalBtn: document.querySelector('[data-modal-close]'),
  modal: document.querySelector('[data-modal]'),
  form: document.querySelector('.callback-form'),

  //Scroll to top button
  scrollToTopButton: document.querySelector('#scrollToTopButton'),

  backDrop: document.querySelector('.backdrop'),
};
