import { Notify } from 'notiflix';

import { refs } from '../refs/refs';
import { params } from '../refs/params';
import { getAllRecipes } from '../api/api-service';
import { createRecipeMarkup, noRecipes} from '../utils/markup/recipe-markup';
import { addStarRating } from '../utils/markup/star-rating';

// =====================================================================

const observer = new IntersectionObserver(loadMoreRecipes, {
  rootMargin: '300px',
});

async function loadRecipes() {
  try {
    const { results: allRecipes, totalPages } = await getAllRecipes(params);

    if (!allRecipes.length) {

      refs.recipesList.innerHTML = noRecipes();
      return;
    }

    refs.recipesList.insertAdjacentHTML(
      'beforeend',
      createRecipeMarkup(allRecipes)
    );

    // Raiting
    addStarRating(allRecipes);

    if (params.page < totalPages) {
      observer.observe(refs.recipesGuard);
    } else {
      observer.unobserve(refs.recipesGuard);
    }

    params.page += 1;
  } catch (error) {
    Notify.failure(`Oops! Something went wrong! Try reloading the page!`);
  }
}
function loadMoreRecipes(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      loadRecipes();
    }
  });
}

function clearRecipes() {
  observer.unobserve(refs.recipesGuard);
  refs.recipesList.innerHTML = '';
  params.page = 1;
}

export { loadRecipes, clearRecipes };
