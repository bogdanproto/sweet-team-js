import axios from 'axios';

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
// Додаємо перехоплювач відповідей
axios.interceptors.response.use(
  response => {
    return response;
  },
  error => {
      return Promise.reject(error);
      console.log(error);
  },
);

// Функція отримує всі рецепти згідно переданих параметрів у obj
export async function getAllRecipes(obj) {
    const params = new URLSearchParams(obj);
    const url = `${GET_ALL_RECIPES}?${params}`;
    const response = await axios.get(url);

    return response.data;
}

// Функція отримує всі популярні рецепти
export async function getAllPopularResipes() {
  const response = await axios.get(
    `${GET_ALL_POPULAR_RECIPES}`
  );

  return response.data;
}

// Функція отримує рецепт по id
export async function getResipesById(id) {
    const response = await axios.get(
    `${ GET_RECIPES_BY_ID}`.replace(ID, id),
  );

  return response.data;
}

// Функція додає рейтинг до рецепту
// id - унікальний ідентифікатор рецепту
// obj - об'єкт, який містить рейтинг та email
// приклад:
// {
//   "rate": 5,
//   "email": "john@gmail.com"
// }
export async function addResipesRatting(id, obj) {
  const response = await axios.patch(
    `${ADD_RESIPES_RATING}`.replace(ID, id),
    obj
  );

  return response.data;
}

// Функція отримує перелік країн походження страви
export async function getAllAreas() {
  const response = await axios.get(
    `${GET_ALL_AREAS}`,
  );

  return response.data;
}

// Функція отримує всі ктегорії
export async function getAllCategories() {
  const response = await axios.get(
    `${GET_ALL_CATEGORIES}`,
  );

  return response.data;
}

// Функція отримує всі події (кухар, який готує певну страву)
export async function getAllEvents() { 
  const response = await axios.get(
    `${GET_ALL_EVENTS}`,
  );

  return response.data;
}

// Функція отримує всі інгредієнти
export async function getAllIngredients() {
  const response = await axios.get(
    `${GET_ALL_INGREDIENTS}`,
  );

  return response.data;
}

// Функція додає нове замовлення
export async function addOrder(order) {
  const response = await axios.post(
    `${ADD_ORDER}`,
    order
  );

  return response.data;
}
