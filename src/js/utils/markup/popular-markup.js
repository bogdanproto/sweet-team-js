function createPopularMarkup(arr) {
  return arr
    .map(
      ({ _id, title, description, preview }) =>
        `<li class="popular-item" data-id="${_id}">
      <img class="popular-image" src="${preview}" alt="${title}" />
      <div class="popular-text">
        <h3 class="popular-recipe-name">${title}</h3>
        <p class="popular-recipe">${description}</p>
      </div>
    </li>`
    )
    .join('');
}

export { createPopularMarkup };
