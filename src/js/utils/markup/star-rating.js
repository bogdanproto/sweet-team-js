import rater from 'rater-js';

function addStarRating(recipes) {
  recipes.forEach(({ _id, rating }) => {
    const raterElement = document.querySelector(`#rating-${_id}`);
    if (raterElement) {
      rater({
        element: raterElement,
        max: 5,
        rating: rating,
        readOnly: true,
      });
    }
  });
}

export { addStarRating };
