import { refs } from '../../refs/refs';

const observer = new IntersectionObserver(handleBtnVisibilityChange, {
  rootMargin: '500px',
});

function handleBtnVisibilityChange(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      refs.scrollToTopButton.classList.remove('btn-visible');
    } else {
      refs.scrollToTopButton.classList.add('btn-visible');
    }
  });
}

observer.observe(refs.headerElem);

refs.scrollToTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});
