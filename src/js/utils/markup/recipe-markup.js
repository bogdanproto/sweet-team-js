function createRecipeMarkup(arr) {
  return arr
    .map(
      ({
        _id,
        title,
        description,
        preview,
        rating,
      }) => `<li class="recipe-list-item recipe-card" data-id="${_id}">
  <img src="${preview}" alt="${title}">

<label class="recipe-heart-label">
  <input type="checkbox" class="recipe-heart-checkbox">
  <svg class="recipe-heart-icon" width="22" height="22">
    <use href="./img/sprite.svg#icon-heart"></use>
  </svg>
</label>

<div class="recipe-info">
    <h2 class="recipe-title">${title}</h2>
    <p class="recipe-description">${description}</p>
    <div class="recipe-rating-btn-cover">
    <p class="recipe-rating">${rating}</p>
    <button class="recipe-card-btn">See recipe</button>
    </div>
</div>
</li>`
    )
    .join('');
}

export { createRecipeMarkup };
