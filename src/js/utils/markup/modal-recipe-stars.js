import rater from 'rater-js';

export function modalRecipeAddStars(_id, rating) {
  const raterElement = document.querySelector(`#modal-recipe-rating-${_id}`);

  if (raterElement) {
    rater({
      element: raterElement,
      max: 5,
      rating: rating,
      readOnly: true,
    });
  }
}
