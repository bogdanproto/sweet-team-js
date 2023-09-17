import { refs } from '../../refs/refs';

export function setTheme(obj) {
  const isObj = obj instanceof Object;
  if (!isObj) {
    return;
  }

  const isEmptyObj = Object.keys(obj).length;
  if (!isEmptyObj || obj.theme === 'white') {
    refs.body.removeAttribute('dark', '');
    return;
  }

  refs.body.setAttribute('dark', '');
}

//add locale storage
export function switchTheme(isCheked) {
  if (!isCheked) {
    refs.body.removeAttribute('dark', '');
    return;
  }
  refs.body.setAttribute('dark', '');
}
