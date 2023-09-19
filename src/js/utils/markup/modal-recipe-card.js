import { getFavRec } from '../localestorage/local-storage-service';

// get from Local Storage favorite recipes and create array of IDs

// Функция отрисовки элементов карточки
export function modalRecipeCard(recipeItem) {
  const favoriteRecipes = getFavRec();
  const favoriteIds = favoriteRecipes.map(favorite => favorite._id);

  const { _id, title, rating, instructions, thumb, time, youtube } = recipeItem;
  const isFavorite = favoriteIds.includes(_id);

  const youtubeInsert = youtube.replace('https://www.youtube.com/watch?v=', '');
  const youtubeFrame = `<iframe class="modal-recipe-image" src="https://www.youtube.com/embed/${youtubeInsert}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>`;

  const imgDesktopFrame = `<img class="modal-recipe-image" src="${thumb}" alt="${title}" width="295px" height="295px"></img>`;
  const imgMobileFrame = `<img class="modal-recipe-image" src="${thumb}" alt="${title}">`;

  const recipeTags = recipeItem.tags
    .map(tag => `<li class="modal-recipe-tags-item">${tag}</li>`)
    .join('');

  const recipeIngredients = recipeItem.ingredients
    .map(({ name, measure }) => {
      return `<li class="modal-recipe-ing-item">
    <p class="modal-recipe-ing-name">${name}</p>
    <p class="modal-recipe-ing-measure">${measure}</p>
</li>`;
    })
    .join('');

  if (window.innerWidth < 768) {
    return `<div class="modal-recipe">
    <button class="js-modal-recipe-close modal-recipe-close-btn" type="button">
    <svg class="modal-recipe-svg" width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M5.626 5.045a1.68 1.68 0 0 0-.583.59.864.864 0 0 0 .001.737c.056.112.985 1.07 2.809 2.898L10.579 12l-2.726 2.73c-1.824 1.828-2.753 2.786-2.809 2.898-.176.352-.085.733.255 1.073.34.34.721.431 1.073.255.112-.056 1.07-.985 2.898-2.809L12 13.421l2.73 2.726c1.828 1.824 2.786 2.753 2.898 2.809.352.176.733.085 1.073-.255.34-.34.431-.721.255-1.073-.056-.112-.985-1.07-2.809-2.898L13.421 12l2.726-2.73c1.824-1.828 2.753-2.786 2.809-2.898.176-.352.085-.733-.255-1.073-.34-.34-.721-.431-1.073-.255-.112.056-1.07.985-2.898 2.809L12 10.579 9.27 7.853C7.442 6.029 6.484 5.1 6.372 5.044a.884.884 0 0 0-.746.001" fill-rule="evenodd""/></svg>
</button>
${youtubeInsert ? youtubeFrame : imgMobileFrame}
<h2 class="modal-recipe-title">${title}</h2>
  <div class="modal-recipe-info-rating">
  <p class="modal-recipe-rating">${parseFloat(rating).toFixed(1)}</p>
  <div class="modal-recipe-stars" data-rating="${rating}" id="modal-recipe-rating-${_id}"></div>
  <p class="modal-recipe-time">${time} min</p>
  </div>
  <ul>${recipeIngredients}</ul>
  <ul class="modal-recipe-tags">${
    recipeItem.tags[0] === '' ? '' : recipeTags
  }</ul>
<p class="modal-recipe-text">${instructions}</p>
<button class="recipe-card-btn modal-recipe-favorite-btn" type="button">${
      isFavorite ? 'Remove from' : 'Add to'
    } favotiry</button></div>`;
  } else {
    return `<div class="modal-recipe">
    <button class="js-modal-recipe-close modal-recipe-close-btn" type="button">
    <svg class="modal-recipe-svg" width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M5.626 5.045a1.68 1.68 0 0 0-.583.59.864.864 0 0 0 .001.737c.056.112.985 1.07 2.809 2.898L10.579 12l-2.726 2.73c-1.824 1.828-2.753 2.786-2.809 2.898-.176.352-.085.733.255 1.073.34.34.721.431 1.073.255.112-.056 1.07-.985 2.898-2.809L12 13.421l2.73 2.726c1.828 1.824 2.786 2.753 2.898 2.809.352.176.733.085 1.073-.255.34-.34.431-.721.255-1.073-.056-.112-.985-1.07-2.809-2.898L13.421 12l2.726-2.73c1.824-1.828 2.753-2.786 2.809-2.898.176-.352.085-.733-.255-1.073-.34-.34-.721-.431-1.073-.255-.112.056-1.07.985-2.898 2.809L12 10.579 9.27 7.853C7.442 6.029 6.484 5.1 6.372 5.044a.884.884 0 0 0-.746.001" fill-rule="evenodd"/></svg>
</button>
<h2 class="modal-recipe-title">${title}</h2>
${youtubeInsert ? youtubeFrame : imgDesktopFrame}
<div class="modal-recipe-infos">
<ul class="modal-recipe-tags">${
      recipeItem.tags[0] === '' ? '' : recipeTags
    }</ul> 
<div class="modal-recipe-info-rating desktop">
  <p class="modal-recipe-rating">${parseFloat(rating).toFixed(1)}</p>
  <div class="modal-recipe-stars" data-rating="${rating}" id="modal-recipe-rating-${_id}"></div>
  <p class="modal-recipe-time">${time} min</p>
  </div>
  </div>
  <ul class="modal-recipe-ingredients">${recipeIngredients}</ul>
<p class="modal-recipe-text">${instructions}</p>
<button class="recipe-card-btn modal-recipe-favorite-btn" type="button">${
      isFavorite ? 'Remove from' : 'Add to'
    } favorite</button></div>`;
  }
}
