import { refs } from '../refs/refs';
import { addOrder } from '../api/api-service';
import { Notify } from 'notiflix';

// Обробник події для надсилання форми
const handleSubmit = async function (event) {
  event.preventDefault();

  const name = document.getElementById('buyer-name').value;
  const phone = document.getElementById('buyer-phone').value;
  const email = document.getElementById('buyer-email').value;
  const comment =
    document.getElementById('buyer-comment').value || 'No comment provided';

  const data = {
    name: name,
    phone: phone,
    email: email,
    comment: comment,
  };

  // Відправка даних з форми на сервер
  try {
    const result = await addOrder(data);
    Notify.success("Thank you for your order! We'll be in touch shortly.");
    toggleModal();
    refs.form.reset();
  } catch (error) {
    Notify.failure('Oops, something went wrong. Please reloade the page');
  }
};

// Закриває модалку при натисненні на клавішу "Escape"
const onEscKeyPress = event => {
  if (event.code === 'Escape') {
    toggleModal();
  }
};

// Закриває модалку при кліці за її межами
const onBackdropClick = event => {
  if (event.target === event.currentTarget) {
    toggleModal();
  }
};

// Відкриває або закриває модальне вікно
export function onShowOrderForm() {
  refs.modal.classList.toggle('is-hidden');
  refs.closeModalBtn.addEventListener('click', toggleModal);
  document.addEventListener('keydown', onEscKeyPress);
  refs.form.addEventListener('submit', handleSubmit);
  refs.modal.addEventListener('click', onBackdropClick);
}

// Перемикач для модального вікна
const toggleModal = () => {
  refs.modal.classList.toggle('is-hidden');
  document.body.classList.toggle('no-scroll');
  document.removeEventListener('keydown', onEscKeyPress);
  refs.closeModalBtn.removeEventListener('click', toggleModal);
  refs.form.removeEventListener('submit', handleSubmit);
  refs.modal.removeEventListener('click', onBackdropClick);
  refs.form.reset();
};
