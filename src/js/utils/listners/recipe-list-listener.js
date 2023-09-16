import { refs } from '../../refs/refs';
import { modalRecipeOpen } from '../../partials/modal-recipe';

function addListenerOnElement(element, eventType, callback) {
  element.addEventListener(eventType, callback);
}

function switchOnRecipeCardsListner() {
  addListenerOnElement(refs.recipesList, 'click', onClickHandle);
}

// Залежно від того на що клікнув користувач сердечко чи кномку викликає відповідну коллбек ф-ю handleHeartClick або handleSeeRecipeClick
function onClickHandle(event) {
  const clickedElement = event.target;
  const cardElement = findParentWithClass(clickedElement, 'js-recipe');
  if (!cardElement) return;

  const cardId = cardElement.dataset.id;

  if (
    clickedElement.classList.contains('recipe-heart-checkbox') ||
    clickedElement.classList.contains('recipe-heart-icon') ||
    clickedElement.classList.contains('recipe-heart-label')
  ) {
    handleHeartClick(cardId);
    return;
  }

  if (clickedElement.classList.contains('recipe-card-btn')) {
    handleSeeRecipeClick(cardId);
    return;
  }
}

function findParentWithClass(element, className) {
  while (element && !element.classList.contains(className)) {
    element = element.parentElement;
  }
  return element;
}

function handleHeartClick(cardId) {
  console.log(`Heart clicked for card with ID: ${cardId}`);
}

function handleSeeRecipeClick(cardId) {
  console.log(`See Recipe button clicked for card with ID: ${cardId}`);
  modalRecipeOpen(cardId);
}

export { onClickHandle, switchOnRecipeCardsListner, handleSeeRecipeClick };
