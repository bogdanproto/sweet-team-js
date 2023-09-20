import './js/utils/theme/theme';
import './js/api/api-service';
import './js/partials/modal-recipe';
import './js/partials/all-categories';
import './js/partials/favorites-recipes';
import './js/partials/recipes';
import './js/partials/search&filters';
import './js/partials/hero';
import './js/partials/popular';
import './js/utils/listners/recipe-list-listener';
import './js/partials/modal-rating';
import './js/utils/listners/scroll-up-listeners';
import { loadFavoritesData } from './js/partials/favorites-recipes';
import { loadAllCategories } from './js/partials/all-categories';
import { showPopularRecipes } from './js/partials/popular';
import { loadRecipes } from './js/partials/recipes';
import { loadFiltersOption } from './js/partials/search&filters';
import { switchOnRecipeCardsListner } from './js/utils/listners/recipe-list-listener';
import { loadHeroData } from './js/partials/hero';
import './js/partials/order-now';
import { onSwitchHeroListners } from './js/utils/listners/listeners';
import './js/partials/burger-menu';
import { onSwitchHeaderListners } from './js/utils/listners/listeners';
import './js/utils/theme/theme-changer';
import { stylesAfterReload } from './js/utils/theme/theme-changer';

window.addEventListener('DOMContentLoaded', function () {
  if (document.URL.endsWith('favorites.html')) {
    loadDataOnFavoritesPage();
    return;
  }
  loadDataOnHomePage();
});

function loadDataOnHomePage() {
  loadHeroData();
  loadAllCategories();
  showPopularRecipes();
  loadRecipes();
  loadFiltersOption();
  switchOnRecipeCardsListner();
  onSwitchHeroListners();
  onSwitchHeaderListners();
  stylesAfterReload();
}

function loadDataOnFavoritesPage() {
  loadFavoritesData();
  onSwitchHeaderListners();
  stylesAfterReload();
}
