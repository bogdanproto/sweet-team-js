let perPage = 6;

if (window.innerWidth > 1280) {
  perPage = 9;
} else if (window.innerWidth > 768) {
  perPage = 8;
} else {
  perPage = 6;
}

const params = {
  category: '',
  title: '',
  page: 1,
  limit: perPage,
  time: '',
  area: '',
  ingredient: '',
};

export { params };
