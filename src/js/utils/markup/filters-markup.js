function createTimeOptionsMarkup() {
  const timesArr = [];
  const min = 5;
  const max = 120;
  for (let i = min; i <= max; i += 5) {
    timesArr.push(i);
  }
  const markup = '<option data-placeholder="true"></option>' + timesArr.map(value => `<option>${value} min</option>`).join('');
  return markup;
};

function createAreaOptionsMarkup(arr) {
  const markup = '<option data-placeholder="true"></option>' + arr.map(({name}) => `<option>${name}</option>`).join('');;
  return markup;
}

function createIngredientOptionsMarkup(arr) {
  const markup = '<option data-placeholder="true"></option>' + arr.map(({_id, name}) => `<option data-id="${_id}">${name}</option>`).join('');
  return markup;
}

export { createTimeOptionsMarkup, createAreaOptionsMarkup, createIngredientOptionsMarkup };
