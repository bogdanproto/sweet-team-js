import { getResipesById } from '../../api/api-service';

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
}

function getFavRec() {
  return JSON.parse(localStorage.getItem('favRecData')) || [];
}

export { onLikeClick, getFavRec };
