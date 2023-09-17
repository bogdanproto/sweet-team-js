import { refs } from '../../refs/refs';

console.dir(refs.themeSwitch);

refs.themeSwitch.addEventListener('click', themeChangerTolocalStorage); // <<<<<<<< need to change the ref

function themeChangerTolocalStorage(event) {
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
}

function stylesAfterReload() {
  let currentStyle = localStorage.getItem('themeColor');

  if (currentStyle === 'white' || currentStyle === null) {
    // change the ref
    refs.input.checked = false;
    // Add here class with dark design to elemtnts
    document.querySelector('body').style.backgroundColor = 'red';
  } else if (currentStyle === 'dark') {
    // change the ref
    refs.input.checked = true;
    // Add here class with dark design to elemtnts
    document.querySelector('body').style.backgroundColor = 'black';
  }
}

export { themeChangerTolocalStorage, stylesAfterReload };
