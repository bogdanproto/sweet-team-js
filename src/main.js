import './js/utils/theme/theme';
import './js/api/api-service';
import './js/partials/all-categories';
import './js/partials/favorites-recipes';
import './js/partials/recipes';
import { loadFavoritesData } from './js/partials/favorites-recipes';
import './js/partials/popular';
import { loadAllCategories } from './js/partials/all-categories';
import { showPopularRecipes } from './js/partials/popular';
import { loadRecipes } from './js/partials/recipes';

window.addEventListener('DOMContentLoaded', function () {
  if (document.URL.endsWith('favorites.html')) {
    loadDataOnFavoritesPage();
    return;
  }
  loadDataOnHomePage();
});

function loadDataOnHomePage() {
  console.log('Data Home was loaded');
  loadAllCategories();
  showPopularRecipes();
  loadRecipes();
}

function loadDataOnFavoritesPage() {
  console.log('Data Favorites was loaded');
  loadFavoritesData();
}

// const currentPage = window.location.href;
// console.table(currentPage.endsWith('index.html'));
