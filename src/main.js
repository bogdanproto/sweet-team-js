import './js/utils/theme/theme';
import './js/api/api-service';
import './js/partials/modal-recipe';
import './js/partials/all-categories';
import './js/partials/favorites-recipes';
import './js/partials/recipes';
import { loadFavoritesData } from './js/partials/favorites-recipes';
import './js/partials/hero';
import './js/partials/popular';
import { loadAllCategories } from './js/partials/all-categories';
import { showPopularRecipes } from './js/partials/popular';
import { loadRecipes } from './js/partials/recipes';
import './js/partials/search&filters';
import './js/utils/listners/recipe-list-listener';
import { switchOnRecipeCardsListner } from './js/utils/listners/recipe-list-listener';
import { loadHeroData } from './js/partials/hero';
import './js/partials/order-now';
import { onSwitchHomeListners } from './js/utils/listners/listeners';

window.addEventListener('DOMContentLoaded', function () {
  if (document.URL.endsWith('favorites.html')) {
    loadDataOnFavoritesPage();
    return;
  }
  loadDataOnHomePage();
});

function loadDataOnHomePage() {
  console.log('Data Home was loaded');
  loadHeroData();
  loadAllCategories();
  showPopularRecipes();
  loadRecipes();
  switchOnRecipeCardsListner();
  onSwitchHomeListners();
}

function loadDataOnFavoritesPage() {
  console.log('Data Favorites was loaded');
  loadFavoritesData();
}

// const currentPage = window.location.href;
// console.table(currentPage.endsWith('index.html'));
