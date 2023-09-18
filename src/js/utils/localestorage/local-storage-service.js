import { getResipesById } from '../../api/api-service';
import { Notify } from 'notiflix';

function onLikeClick(id, status) {
  getResipesById(id).then(data => {
    const favRecData = JSON.parse(localStorage.getItem('favRecData')) || [];
    if (status === true) {
      favRecData.push(data);
      localStorage.setItem('favRecData', JSON.stringify(favRecData));
    } else if (status === false) {
      const objToRemove = favRecData.findIndex(recData => recData._id === id);
      favRecData.splice(objToRemove, 1);
    }
    localStorage.setItem('favRecData', JSON.stringify(favRecData));
  });
};

//переписав твою функцію під асінхрон
async function onLikeClickAsync(id, status) {
  const data = await getResipesById(id);
try {
  const favRecData = JSON.parse(localStorage.getItem('favRecData')) || [];
  if (status === true) {
    favRecData.push(data);
    localStorage.setItem('favRecData', JSON.stringify(favRecData));
  } else if (status === false) {
    const objToRemove = favRecData.findIndex(recData => recData._id === id);
    favRecData.splice(objToRemove, 1);
  }
  localStorage.setItem('favRecData', JSON.stringify(favRecData));
  }
catch {
Notify.failure(`Oops! Something went wrong! Try reloading the page!`);
}
};

function getFavRec() {
  return JSON.parse(localStorage.getItem('favRecData')) || [];
}

export { onLikeClick, getFavRec, onLikeClickAsync };
