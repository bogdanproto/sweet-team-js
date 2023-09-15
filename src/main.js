import './js/utils/theme/theme';
import './js/api/api-service';
import './js/partials/all-categories';
import './js/partials/favorites-recipes';
import './js/partials/recipes';
import { loadFavoritesData } from './js/partials/favorites-recipes';
import './js/partials/popular';
import { showPopularRecipes } from './js/partials/popular';

window.addEventListener('DOMContentLoaded', function () {
  if (document.URL.endsWith('favorites.html')) {
    loadDataOnFavoritesPage();
    return;
  }
  loadDataOnHomePage();
});

function loadDataOnHomePage() {
  console.log('Data Home was loaded');
  showPopularRecipes();
}

function loadDataOnFavoritesPage() {
  console.log('Data Favorites was loaded');
  loadFavoritesData();
}

// const currentPage = window.location.href;
// console.table(currentPage.endsWith('index.html'));
