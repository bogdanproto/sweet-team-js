import axios from 'axios';
import Notiflix from 'notiflix';

const GET_ALL_RECIPES = '/recipes';
const GET_ALL_POPULAR_RECIPES = '/recipes/popular';
const GET_RECIPES_BY_ID = '/recipes/{id}';
const ADD_RESIPES_RATING = '/recipes/{id}/rating';
const GET_ALL_AREAS = '/areas';
const GET_ALL_CATEGORIES = '/categories';
const GET_ALL_EVENTS = '/events';
const GET_ALL_INGREDIENTS = '/ingredients';
const ADD_ORDER = '/orders/add';

const ID = `{id}`;

axios.defaults.baseURL = 'https://tasty-treats-backend.p.goit.global/api';
axios.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    Notiflix.Notify.failure('Something went wrong. Please try again later.');
    return Promise.reject(error);
  },
);

async function getAllRecipes(title, category, area, ingredient, time, page = 1, limit = 6) {
  const response = await axios.get(
    `${GET_ALL_RECIPES}?title=${title}&category=${category}&page=${page}&limit=${limit}&time=${time}&ingredient=${ingredient}&area=${area}`,
  );
  return response.data;
}

async function getAllPopularResipes() {
  const response = await axios.get(
    `${GET_ALL_POPULAR_RECIPES}}`,
  );
  return response.data;
}

async function getResipesById(id) {
  const response = await axios.get(
    `${ GET_RECIPES_BY_ID}`.replace(ID, id),
  );
  return response.data;
}

async function addResipesRatting(id, obj) {
  const response = await axios.patch(
    `${ADD_RESIPES_RATING}`.replace(ID, id),
    obj
  );
  return response.data;
}

async function getAllAreas() {
  const response = await axios.get(
    `${GET_ALL_AREAS}}`,
  );
  return response.data;
}

async function getAllCategories() {
  const response = await axios.get(
    `${GET_ALL_CATEGORIES}}`,
  );
  return response.data;
}

async function getAllEvents() {
  const response = await axios.get(
    `${GET_ALL_EVENTS}}`,
  );
  return response.data;
}

async function getAllIngredients() {
  const response = await axios.get(
    `${GET_ALL_INGREDIENTS}}`,
  );
  return response.data;
}

async function addOrder(order) {
  const response = await axios.post(
    `${ADD_ORDER}}`,
    order
  );
  return response.data;
}

export { getAllRecipes };
export { getAllPopularResipes};
export { getResipesById };
export { getAllAreas };
export { getAllCategories };
export { getAllEvents };
export { getAllIngredients };
export { addResipesRatting };
export { addOrder };