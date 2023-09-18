import { refs } from '../../refs/refs';
import { Notify } from 'notiflix';

refs.themeSwitch.addEventListener('click', themeChangerTolocalStorage); // <<<<<<<< need to change the ref

async function themeChangerTolocalStorage(event) {
  try {
    event.target.checked
      ? localStorage.setItem('themeColor', 'dark')
      : localStorage.setItem('themeColor', 'white');
    let theme = localStorage.getItem('themeColor');
    if (theme === 'white') {
      // Add here class with dark design to elemtnts
      refs.body.removeAttribute('dark', '');
    } else if (theme === 'dark') {
      // Add here class with dark design to elemtnts
      refs.body.setAttribute('dark', '');
    }
  } catch {
    Notify.failure(`Oops! Something went wrong! Try reloading the page!`);
  }
}

async function stylesAfterReload() {
  try {
    let currentStyle = localStorage.getItem('themeColor');

    if (currentStyle === 'white' || currentStyle === null) {
      // change the ref
      refs.themeSwitch.checked = false;
      refs.body.removeAttribute('dark', '');
    } else if (currentStyle === 'dark') {
      // change the ref
      refs.themeSwitch.checked = true;
      refs.body.setAttribute('dark', '');
    }
  } catch {
    Notify.failure(`Oops! Something went wrong! Try reloading the page!`);
  }
}

export { themeChangerTolocalStorage, stylesAfterReload };
