import { getAllPopularResipes } from '../api/api-service';
import { createPopularMarkup } from '../utils/markup/popular-markup';

async function showPopularRecipes() {
  try {
    const POPULAR_DATA = await getAllPopularResipes();

    const POPULAR_MARKUP = createPopularMarkup(POPULAR_DATA);

    const POPULAR_LIST = document.querySelector('.popular-lists');

    POPULAR_LIST.insertAdjacentHTML('beforeend', POPULAR_MARKUP);
  } catch (error) {
    console.error('Error fetching or displaying popular recipes:', error);
  }
}

showPopularRecipes();
