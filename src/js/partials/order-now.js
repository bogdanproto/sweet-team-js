import { refs } from '../refs/refs';
import { addOrder } from '../api/api-service';

const toggleModal = () => {
  refs.modal.classList.toggle('is-hidden');
  document.body.classList.toggle('no-scroll');
}
  
  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

function sendForm() {
  const form = document.querySelector('.callback-form');

  const handleSubmit = async function(event) {
    event.preventDefault();

    const name = document.getElementById('buyer-name').value;
    const phone = document.getElementById('buyer-phone').value;
    const email = document.getElementById('buyer-email').value;
    const comments = document.getElementById('buyer-comment').value;

    const data = {
      name: name,
      phone: phone,
      email: email,
      comments: comments
    };


      const result = await addOrder(data);

  }

  form.addEventListener('submit', handleSubmit);

  const onEscKeyPress = function(event) {
    if (event.code === 'Escape') {
      toggleModal();
      // Remove event listener
      document.removeEventListener('keydown', onEscKeyPress);
    }
  }

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  document.addEventListener('keydown', onEscKeyPress);
}

sendForm(); // Call the function to activate the form submission
