import { refs } from '../refs/refs';
import { addOrder } from '../api/api-service';
import { Notify } from 'notiflix';

const form = document.querySelector('.callback-form');

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

  try {
    const result = await addOrder(data);
    Notify.success("Thank you for your order! We'll be in touch shortly.");
    console.log(result);
    console.log(data);
    toggleModal();
    form.reset();
  } catch (error) {
    console.error('Error while adding order:', error.message);
    console.log('Server response:', error.response.data);
    Notify.failure('Oops, something went wrong. Please reloade the page');
  }
};

const onEscKeyPress = function (event) {
  if (event.code === 'Escape') {
    toggleModal();
  }
};

const onBackdropClick = event => {
  if (event.target === event.currentTarget) {
    toggleModal();
  }
};

export function onShowOrderForm() {
  refs.modal.classList.toggle('is-hidden');
  refs.closeModalBtn.addEventListener('click', toggleModal);
  document.addEventListener('keydown', onEscKeyPress);
  form.addEventListener('submit', handleSubmit);
  refs.modal.addEventListener('click', onBackdropClick);
}

const toggleModal = () => {
  refs.modal.classList.toggle('is-hidden');
  document.body.classList.toggle('no-scroll');
  document.removeEventListener('keydown', onEscKeyPress);
  refs.closeModalBtn.removeEventListener('click', toggleModal);
  form.removeEventListener('submit', handleSubmit);
  refs.modal.removeEventListener('click', onBackdropClick);
};
