export function createAllCategoriesMarkup(array) {
  return array
    .map(
      ({ name }) =>
        `<li class="all-categories-item" data-value=${name}>${name}</li>`
    )
    .join('');
}

// По ТЗ повинні бути кнопки, але простими li зручніше
