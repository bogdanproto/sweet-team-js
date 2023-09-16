import { getAllIngredients } from '../../api/api-service';
import {}

// Функция отрисовки элементов карточки
export function modalRecipeCard(
  title,
  youtube,
  tags,
  rating,
  ingredients,
  instructions
) {
  const recipeTags = tags
    .map(itemName => `<li class="modal-recipe-tags-item">${itemName}</li>`)
    .join('');

  const recipeIngredients = ingredients
    .map(({ id, measure }) => {
      const iteamName = ingredientsSearch(id);
      return `<li class="modal-recipe-ing-item">
    <p class="modal-recipe-ing-name">${iteamName}</p> 
    <p class="modal-recipe-ing-measure">${measure}</p>
</li>`;
    })
    .join('');

  return `<button class="js-modal-recipe-close modal-recipe-close" type="button"><svg width="24px" height="24px">
  <use href="../../../img/sprite.svg#icon-close"></use>
</svg></button>
  <iframe class="modal-recipe-video" width="295" height="295" src="${youtube}" title="${title}" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  <h2 class="modal-recipe-title">${title}</h2>
  <p class="modal-recipe-rating">${rating}</p>
  <ul class="modal-recipe-ingredients">${recipeIngredients}</ul>
  <ul class="modal-recipe-tags">${recipeTags}</ul>
<p class="modal-recipe-text">${instructions}</p>
<button class="recipe-card-btn modal-recipe-favorite-btn" type="button">Add to favotiry</button>`;
}

// Функция для нахождения названия ингредиентов
async function ingredientsSearch(id) {
    const searchItem = await 
}
