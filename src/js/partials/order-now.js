import { refs } from '../refs/refs';
import { addOrder } from '../api/api-service';

const toggleModal = () => {
  refs.modal.classList.toggle('is-hidden');
  document.body.classList.toggle('no-scroll');
};

export function onShowOrderForm() {
  refs.modal.classList.toggle('is-hidden');
  refs.closeModalBtn.addEventListener('click', toggleModal);
  sendForm();
}

async function sendForm() {
  const form = document.querySelector('.callback-form');

  try {
    form.addEventListener('submit', async function (event) {
      event.preventDefault();

      const name = document.getElementById('buyer-name').value;
      const phone = document.getElementById('buyer-phone').value;
      const email = document.getElementById('buyer-email').value;
      const comments = document.getElementById('buyer-comment').value;

      const data = {
        name: name,
        phone: phone,
        email: email,
        comments: comments,
      };

      console.log('Sending request to:', 'https://tasty-treats-backend.p.goit.global/api/orders');

      const response = await fetch('https://tasty-treats-backend.p.goit.global/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(data).toString()
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log('Success:', result);

      // Clear form
      form.reset();

    });
  } catch (error) {
    console.error('Error:', error);
  }

  const onEscKeyPress = function (event) {
    if (event.code === 'Escape') {
      toggleModal();
      // Remove event listener
      document.removeEventListener('keydown', onEscKeyPress);
      refs.closeModalBtn.removeEventListener('click', toggleModal);
    }
  };

  document.addEventListener('keydown', onEscKeyPress);
}
