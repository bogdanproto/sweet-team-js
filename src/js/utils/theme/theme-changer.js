import { refs } from '../../refs/refs';

console.dir(refs.themeSwitch);

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
  }
  catch {
    
  }
}

async function stylesAfterReload() {
  
  try{ 
    let currentStyle = localStorage.getItem('themeColor');
    console.log(currentStyle);

  if (currentStyle === 'white' || currentStyle === null) {
    // change the ref
    refs.themeSwitch.checked = false;
    // Add here class with dark design to elemtnts
    document.querySelector('body').style.backgroundColor = 'red';
  } else if (currentStyle === 'dark') {
    // change the ref
    refs.themeSwitch.checked = true;
    // Add here class with dark design to elemtnts
    document.querySelector('body').style.backgroundColor = 'black';
    }
  }
  catch {

  }
}

export { themeChangerTolocalStorage, stylesAfterReload };
