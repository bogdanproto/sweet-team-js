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
          <img src="${preview}" alt="${title}" loading="lazy">
          <label class="recipe-heart-label">
            <input type="checkbox" data-id="${_id}" class="recipe-heart-checkbox" ${
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
    <p class="recipe-rating">${parseFloat(rating).toFixed(1)}</p>
    <div class="recipe-rating-stars" data-rating="${rating}" id="rating-${_id}"></div>
    <button class="recipe-card-btn js-modal-recipe-open">See recipe</button>
    </div>
</div>
</li>`;
    })
    .join('');
}

function noRecipes() {
  const markup = `<div class="no-recipes-container">
  <svg class="no-recipes-logo" width="68" height="58" viewBox="0 0 97 79" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M19 33H79V79H19V33Z" fill="#9BB537"/>
  <path d="M43 29.5C43 41.3741 33.3741 51 21.5 51C9.62588 51 0 41.3741 0 29.5C0 17.6259 9.62588 8 21.5 8C33.3741 8 43 17.6259 43 29.5Z" fill="#9BB537"/>
  <path d="M70 21.5C70 33.3741 60.3741 43 48.5 43C36.6259 43 27 33.3741 27 21.5C27 9.62588 36.6259 0 48.5 0C60.3741 0 70 9.62588 70 21.5Z" fill="#9BB537"/>
  <path d="M97 29.5C97 41.3741 87.3741 51 75.5 51C63.6259 51 54 41.3741 54 29.5C54 17.6259 63.6259 8 75.5 8C87.3741 8 97 17.6259 97 29.5Z" fill="#9BB537"/>
  <path d="M37 26.8705C37 25.2852 38.1193 24 39.5 24C40.8807 24 42 25.2852 42 26.8705V40.1295C42 41.7148 40.8807 43 39.5 43C38.1193 43 37 41.7148 37 40.1295V26.8705Z" fill="#F8F8F8"/>
  <path d="M45 26.8705C45 25.2852 46.567 24 48.5 24C50.433 24 52 25.2852 52 26.8705V40.1295C52 41.7148 50.433 43 48.5 43C46.567 43 45 41.7148 45 40.1295V26.8705Z" fill="#F8F8F8"/>
  <path d="M55 26.8705C55 25.2852 56.1193 24 57.5 24C58.8807 24 60 25.2852 60 26.8705V40.1295C60 41.7148 58.8807 43 57.5 43C56.1193 43 55 41.7148 55 40.1295V26.8705Z" fill="#F8F8F8"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M73.1035 8.12123C73.8519 8.04342 74.6116 8.00354 75.3806 8.00354C85.0139 8.00354 93.1756 14.2612 95.9703 22.9072C95.2219 22.985 94.4622 23.0248 93.6931 23.0248C84.0599 23.0248 75.8982 16.7672 73.1035 8.12123Z" fill="#050505"/>
  </svg>
 <p class="no-recipes-text">
  It appears that there are no recipes matching your search parametrs. Please try again.
    </p>
    </div>`
  return markup;
}

export { createRecipeMarkup, noRecipes };
