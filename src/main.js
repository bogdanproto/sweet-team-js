import './js/utils/theme/theme';
import './js/api/api-service';
import './js/partials/all-categories';
import './js/partials/favorites-recipes';
import './js/partials/recipes';

window.addEventListener('DOMContentLoaded', function () {
  if (document.URL.endsWith('favorites.html')) {
    loadDataOnFavoritesPage();
    return;
  }
  loadDataOnHomePage();
});

function loadDataOnHomePage() {
  console.log('Data Home was loaded');
}

function loadDataOnFavoritesPage() {
  console.log('Data Favorites was loaded');
}

// const currentPage = window.location.href;
// console.table(currentPage.endsWith('index.html'));
