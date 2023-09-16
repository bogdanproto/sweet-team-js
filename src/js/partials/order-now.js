import refs from './refs.js';

const toggleModal = () => {
  refs.modal.classList.toggle('is-hidden');
  document.body.classList.toggle('no-scroll');
}

refs.openModalBtn.addEventListener('click', toggleModal);
refs.closeModalBtn.addEventListener('click', toggleModal);

function sendForm() {
  const form = document.querySelector('.callback-form');

  form.addEventListener('submit', function(event) {
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

    fetch('https://tasty-treats-backend.p.goit.global/api/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);

      // Clear form
      form.reset();

    })
    .catch(error => {
      console.error('Error:', error);
      // Error message
    });
  });
}

sendForm(); // Call the function to activate the form submission


