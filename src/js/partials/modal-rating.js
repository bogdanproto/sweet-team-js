import rater from 'rater-js';
import { Notify } from 'notiflix';
import { addResipesRatting } from '../api/api-service';

let cardId = null;
let isOpenCard = false;
let raterObj = null;
let elm = null;

export function getIdForRating(id) {
  cardId = id;
  isOpenCard = true;
}

export function toShowModalRating() {
  elm = {
    modalRating: document.querySelector('.modal-rating'),
    modalRatingForm: document.querySelector('.modal-form-rating'),
    modalTextRatingElm: document.querySelector('#textrating'),
    modalRatingClose: document.querySelector('.js-modal-rating-btn-close'),
    addRatingElm: document.querySelector('#addrating'),
  };

  elm.modalRating.classList.add('is-open-rating');
  onKitModalRatingListener();

  if (isOpenCard) {
    raterObj = null;
    toSetRatingModal();
    isOpenCard = false;
  }
}

function toCloseModalRating() {
  elm.modalRating.classList.remove('is-open-rating');

  elm.modalRatingForm.removeEventListener('submit', toSendRating);
  elm.modalRatingClose.removeEventListener('click', toCloseModalRating);
}

function onKitModalRatingListener() {
  elm.modalRatingForm.addEventListener('submit', toSendRating);
  elm.modalRatingClose.addEventListener('click', toCloseModalRating);
}

function toSetRatingModal() {
  if (raterObj) {
    return;
  }
  raterObj = rater({
    element: elm.addRatingElm,
    starSize: 24,
    max: 5,
    rateCallback: function rateCallback(rating, done) {
      this.setRating(rating);
      done();
    },
    onHover: function (currentIndex, currentRating) {
      elm.modalTextRatingElm.textContent = currentIndex
        .toString()
        .padEnd(3, '.0');
    },
    onLeave: function (currentIndex, currentRating) {
      elm.modalTextRatingElm.textContent = currentRating
        .toString()
        .padEnd(3, '.0');
    },
  });
}

async function toSendRating(evt) {
  evt.preventDefault();

  const { email } = evt.currentTarget.elements;
  const obj = {
    email: email.value,
    rate: parseFloat(elm.modalTextRatingElm.textContent),
  };

  if (!obj.rate) {
    Notify.failure(`Please indicate rating`);
    return;
  }
  try {
    const response = await addResipesRatting(cardId, obj);
    toCloseModalRating();
    Notify.success(`Feedback submitted`);
  } catch (error) {
    switch (error.response.status) {
      case 409:
        Notify.failure('You have already sent a review');
        break;
      case 400:
        Notify.failure('Please, check your email');
        break;
      default:
        Notify.failure(`Oops! Something went wrong! Try reloading the page!`);
    }
  }
}
