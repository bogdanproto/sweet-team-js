export function createAllCategoriesMarkup(array) {
  return array
    .map(
      ({ name }) =>
        `<button class="all-categories-item" aria-label="category ${name}" data-value="${name}">${name}</button>`
    )
    .join('');
}

// По ТЗ повинні бути кнопки, але простими li зручніше
