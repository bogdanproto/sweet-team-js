import { getResipesById } from '../api/api-service';

function onLikeClick(id,status) {
  getResipesById(id)
    .then (
      (data) => {
        const favRecData = JSON.parse(localStorage.getItem('favRecData')) || [];
        if (status === true) {
        favRecData.push(data);
        localStorage.setItem('favRecData', JSON.stringify(favRecData))
      } else if (status === false) {
        const objToRemove = favRecData.findIndex(recData => recData._id === id);
          favRecData.splice(objToRemove, 1);
        }
        localStorage.setItem('favRecData', JSON.stringify(favRecData));
      })
}

function getFavRec() {
  return JSON.parse(localStorage.getItem('favRecData')) || [];
}

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Перевірка статусу чекбоксу фейворіт <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
// let favRecData = getFavRec();
// console.log(favRecData);

// console.log(refs.inputRecipe.children);

// function makeItChecked(arrayli,arrayLS) {
//   for (const li of arrayli) {
//     if ((arrayLS.findIndex(RecData => RecData._id === li.dataset.id)) >= 0 ) {
//       li.children[0].checked = true
//     }
    

//   }
// }

// if (favRecData.length === 0 || favRecData === null) {
//   // change the ref
//   refs.input.checked = false;
  
// } else if (favRecData.length > 0) {
//     // change the ref
//   makeItChecked(refs.inputRecipe.children, favRecData);
// }


export { onLikeClick, getFavRec };