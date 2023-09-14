import './js/utils/theme/theme';
import './js/api/api-service';
import './js/partials/favorites-recipes';
import './js/partials/recipes';

window.addEventListener('load', function () {
  if (document.URL.endsWith('favorites.html')) {
    loadDataOnFavoritesPage();
  }
});

function loadDataOnFavoritesPage() {
  console.log('Data was loaded');
}

const currentPage = window.location.href;
console.table(currentPage.endsWith('index.html'));
