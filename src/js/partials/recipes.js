import { Notify } from 'notiflix';

import { refs } from '../refs/refs';
import { params } from '../refs/params';
import { getAllRecipes } from '../api/api-service';
import { createRecipeMarkup } from '../utils/markup/recipe-markup';
import { addStarRating } from '../utils/markup/star-rating';
// =====================================================================

const observer = new IntersectionObserver(loadMoreRecipes, {
  rootMargin: '300px',
});

async function loadRecipes() {
  try {
    const { results: allRecipes, totalPages } = await getAllRecipes(params);
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
  params.category = '';
}

// //  EXTRA FILTERS
// import SlimSelect from 'slim-select';

// const elements = {
//   timeSelect: document.querySelector('.time-select'),
//   areaSelect: document.querySelector('.area-select'),
//   ingredientsSelect: document.querySelector('.ingridients-select'),
// };

// const timeSelect = new SlimSelect({
//   select: '.time-select',
// });

// const areaSelect = new SlimSelect({
//   select: '.area-select',
// });

// const ingredientsSelect = new SlimSelect({
//   select: '.ingredients-select',
// });

export { loadRecipes, clearRecipes };
