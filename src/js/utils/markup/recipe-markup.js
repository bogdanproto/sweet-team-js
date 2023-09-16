import { getFavRec } from '../localestorage/local-storage-service';

// get from Local Storage favorite recipes and create array of IDs
const favoriteRecipes = getFavRec();
const favoriteIds = favoriteRecipes.map(favorite => favorite._id);

// create recipe markup based on favorite recipes info
function createRecipeMarkup(arr) {
  return arr
    .map(({ _id, title, category, description, preview, rating }) => {
      const isFavorite = favoriteIds.includes(_id);
      return `<li class="recipe-list-item recipe-card js-recipe" data-id="${_id}" data-category="${category.toLowerCase()}">
          <img src="${preview}" alt="${title}">
          <label class="recipe-heart-label">
            <input type="checkbox" class="recipe-heart-checkbox" ${
              isFavorite ? 'checked' : ''
            }>
  
  <svg class="recipe-heart-icon" width="22" height="20" viewBox="0 0 22 20" xmlns="http://www.w3.org/2000/svg">
    <path opacity="0.9" fill-rule="evenodd" clip-rule="evenodd" d="M10.9934 3.70783C9.16066 1.5652 6.10444 0.988839 3.80814 2.95085C1.51185 4.91285 1.18856 8.19323 2.99186 10.5137C4.49117 12.443 9.02863 16.5121 10.5158 17.8291C10.6821 17.9764 10.7653 18.0501 10.8624 18.0791C10.9471 18.1043 11.0397 18.1043 11.1244 18.0791C11.2215 18.0501 11.3046 17.9764 11.471 17.8291C12.9582 16.5121 17.4956 12.443 18.9949 10.5137C20.7982 8.19323 20.5144 4.89221 18.1786 2.95085C15.8429 1.00948 12.8261 1.5652 10.9934 3.70783Z"/>
</svg>

</label>

<div class="recipe-info">
    <h2 class="recipe-title">${title}</h2>
    <p class="recipe-description">${description}</p>
    <div class="recipe-rating-btn-cover">
    <p class="recipe-rating">${parseFloat(rating).toFixed(2)}</p>
    <div class="recipe-rating-stars" data-rating="${rating}" id="rating-${_id}"></div>
    <button class="recipe-card-btn js-modal-recipe-open">See recipe</button>
    </div>
</div>
</li>`;
    })
    .join('');
}

export { createRecipeMarkup };
