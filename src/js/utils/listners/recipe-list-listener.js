import { refs } from '../../refs/refs';
import { onLikeClickAsync } from '../localestorage/local-storage-service';
import { modalRecipeOpen } from '../../partials/modal-recipe';

export function addListenerOnElement(element, eventType, callback) {
  element.addEventListener(eventType, callback);
}

function switchOnRecipeCardsListner() {
  addListenerOnElement(refs.recipesList, 'click', onClickHandle);
}

// Залежно від того на що клікнув користувач сердечко чи кнопку викликає відповідну коллбек ф-ю handleHeartClick або handleSeeRecipeClick
async function onClickHandle(event) {
  const clickedElement = event.target;
  const cardElement = findParentWithClass(clickedElement, 'js-recipe');
  if (!cardElement) return;

  const cardId = cardElement.dataset.id;

  if (clickedElement.classList.contains('recipe-heart-checkbox')) {
    // Отримуємо стан чекбокса
    const heartCheckbox = cardElement.querySelector('.recipe-heart-checkbox');
    const isHeartChecked = heartCheckbox ? heartCheckbox.checked : false;

    await onLikeClickAsync(cardId, isHeartChecked);
    return;
  }

  if (clickedElement.classList.contains('recipe-card-btn')) {
    modalRecipeOpen(cardId);
    return;
  }
}

function findParentWithClass(element, className) {
  while (element && !element.classList.contains(className)) {
    element = element.parentElement;
  }
  return element;
}

export { onClickHandle, switchOnRecipeCardsListner };
