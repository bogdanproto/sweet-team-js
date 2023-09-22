import { refs } from '../refs/refs';

export const toggleMenu = () => {
  refs.closeMenuBtn.addEventListener('click', closeMenu);
  const isMenuOpen =
    refs.openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
  refs.openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
  refs.mobileMenu.classList.toggle('is-open');

  // const scrollLockMethod = !isMenuOpen
  //   ? 'disableBodyScroll'
  //   : 'enableBodyScroll';
  // bodyScrollLock[scrollLockMethod](document.body);
};

const closeMenu = () => {
  refs.mobileMenu.classList.remove('is-open');
  refs.openMenuBtn.setAttribute('aria-expanded', false);
  // bodyScrollLock.enableBodyScroll(document.body);

  refs.closeMenuBtn.removeEventListener('click', closeMenu);
};



