export function toMarkUpFilterFavorites(arr) {
  if (!arr.length) {
    return;
  }
  const markup = arr
    .map(({ category }) => category)
    .filter((category, index, arr) => arr.indexOf(category) === index)
    .map(
      category =>
        `<button class="btn-favorites-filter btn">${category}</button>`
    )
    .join('');

  return (
    `<button class="btn-favorites-filter btn">All categories</button>` + markup
  );
}
