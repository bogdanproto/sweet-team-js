import { Notify } from 'notiflix';

import { refs } from '../refs/refs';
import { getAllRecipes } from '../api/api-service';
import { createRecipeMarkup } from '../utils/markup/recipe-markup';

// =====================================================================

const observer = new IntersectionObserver(loadMoreRecipes, {rootMargin: '600px'});



async function loadRecipes() {
  const params = {
    category: '',
    title: '',
    page: 1,
    limit: 6,
    time: '',
    area: '',
    ingredient: '',
  };

  try {
    const { results: allRecipes, totalPages } = await getAllRecipes(params);
    refs.recipesList.insertAdjacentHTML(
      'beforeend',
      createRecipeMarkup(allRecipes)
    );

    if (params.page < totalPages) {
      observer.observe(refs.recipesGuard);
    } else {
      observer.unobserve
    }

    params.page += 1;
  } catch (error) {
    Notify.failure(`Oops! Something went wrong! Try reloading the page!`);
  }
}

// function updateParams() {

// }

function loadMoreRecipes(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      loadRecipes();
    }
  });
}

//  EXTRA FILTERS
// import SlimSelect from 'slim-select';

// // const elements = {
// //   timeSelect: document.querySelector('.time-select'),
// //   areaSelect: document.querySelector('.area-select'),
// //   ingridientsSelect: document.querySelector('.ingridients-select'),
// // };

// const timeSelect = new SlimSelect({
//   select: '.time-select',
// });

// const areaSelect = new SlimSelect({
//   select: '.area-select',
// });

// const ingridientsSelect = new SlimSelect({
//   select: '.ingridients-select',
// });

export { loadRecipes };
