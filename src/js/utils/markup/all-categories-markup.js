export function createAllCategoriesMarkup(array) {
  return array
    .map(
      ({ _id, name }) =>
        `<li class="all-categories-item" id=${_id}>${name}</li>`
    )
    .join('');
}

// По ТЗ повинні бути кнопки, але простими li зручніше
