export const refs = {
  body: document.querySelector('body'),

  //hero
  swiperWrapperHero: document.querySelector('.swiper-wrapper-hero'),
  heroBtn: document.querySelector('.hero-btn'),

  // All Categories
  allCategoriesBtn: document.querySelector('.all-categories-btn'),
  allCategoriesList: document.querySelector('.all-categories-list'),
  // Recipes
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

  // Modal recipe
  modalRecipe: document.querySelector('.js-modal-recipe'),
  modalRecipeOpenBtn: document.querySelector('.js-modal-recipe-open'),
  modalRecipeCloseBtn: document.querySelector('.js-modal-recipe-close'),

  //modal window
  openModalBtn: document.querySelector('[data-modal-open]'),
  closeModalBtn: document.querySelector('[data-modal-close]'),
  modal: document.querySelector('[data-modal]'),
};
