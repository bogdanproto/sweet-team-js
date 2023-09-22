export function getCurrentPage() {
  return window.location.href;
  // console.table(currentPage.endsWith('index.html'));
}

const currentPageUrl = window.location.href;


const homeLink = document.getElementById('Home-header');
const favoritesLink = document.getElementById('Favs-header');


if (currentPageUrl.includes('index.html')) {
  homeLink.classList.add('active');
} else if (currentPageUrl.includes('favorites.html')) {
  favoritesLink.classList.add('active');
}
