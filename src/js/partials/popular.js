import { getAllPopularResipes } from '../api/api-service';
import { createPopularMarkup } from '../utils/markup/popular-markup';

async function showPopularRecipes() {
  try {
    const popularData = await getAllPopularResipes();

    const popularMarkup = createPopularMarkup(popularData);

    const popularList = document.querySelector('.popular-lists');

    popularList.insertAdjacentHTML('beforeend', popularMarkup);
  } catch (error) {
    console.error('Error fetching or displaying popular recipes:', error);
  }
}

showPopularRecipes();
