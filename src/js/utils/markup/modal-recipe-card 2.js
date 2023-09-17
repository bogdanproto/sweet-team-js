import { getAllIngredients } from '../../api/api-service';

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
    .map(iteamName => `<li class="modal-recipe-tags-item">${iteamName}</li>`)
    .join('');

  const recipeIngredients = ingredients
    .map(({ id, measure }) => {
      const iteamName = ingredientsSearch(id);
      return `<li class="modal-recipe-ingredients-item">
    <p>${iteamName}</p>
    <p>${measure}</p>
</li>`;
    })
    .join('');

  return `<svg class="modal-recipe-close js-modal-recipe-close" width="24px" height="24px">
  <use href="../../../img/sprite.svg#icon-close"></use>
</svg>
<h2 class="modal-recipe-title">${title}</h2>
  <iframe class="modal-recipe-video" width="467" height="315" src="${youtube}" title="${title}" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  <ul class="modal-recipe-tags">${recipeTags}</ul>
  <p class="modal-recipe-rating">${rating}</p>
  <ul class="modal-recipe-ingredients">${recipeIngredients}</ul>
<p>${instructions}</p>
<button class="recipe-card-btn modal-recipe-favorite-btn" type="button">Add to favotiry</button>`;
}

// Функция для нахождения названия ингредиентов
function ingredientsSearch(id) {
  const obj = {
    _id: id,
  };
  console.log(obj._id);
  getAllIngredients(obj)
    .then(({ _id, name }) => {
      console.log(_id);
      if (_id === id) {
        return name;
      }
    })
    .catch(err => console.log(err));
}
