const mobileMenu = document.querySelector('.js-header-menu-container');
const openMenuBtn = document.querySelector('.js-header-open-menu');
const closeMenuBtn = document.querySelector('.js-header-close-menu');

const toggleMenu = () => {
  const isMenuOpen =
    openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
  openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
  mobileMenu.classList.toggle('is-open');

  const scrollLockMethod = !isMenuOpen
    ? 'disableBodyScroll'
    : 'enableBodyScroll';
  bodyScrollLock[scrollLockMethod](document.body);
};

const closeMenu = () => {
  mobileMenu.classList.remove('is-open');
  openMenuBtn.setAttribute('aria-expanded', false);
  bodyScrollLock.enableBodyScroll(document.body);

  openMenuBtn.removeEventListener('click', toggleMenu);
  closeMenuBtn.removeEventListener('click', closeMenu);
};

openMenuBtn.addEventListener('click', toggleMenu);
closeMenuBtn.addEventListener('click', closeMenu);

const mediaQueryHandler = e => {
  if (!e.matches) return;
  mobileMenu.classList.remove('is-open');
  openMenuBtn.setAttribute('aria-expanded', false);
  bodyScrollLock.enableBodyScroll(document.body);
};
