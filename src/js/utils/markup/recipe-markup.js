const favorites = [
  {
    _id: '6462a8f74c3d0ddd28897fc1',
    title: 'Chocolate Gateau',
    category: 'Dessert',
    area: 'French',
    instructions:
      'Preheat the oven to 180°C/350°F/Gas Mark 4. Grease and line the base of an 8 in round spring form cake tin with baking parchment\r\nBreak the chocolate into a heatproof bowl and place over a saucepan of gently simmering water and stir until it melts. (or melt in the microwave for 2-3 mins stirring occasionally)\r\nPlace the butter and sugar in a mixing bowl and cream together with a wooden spoon until light and fluffy. Gradually beat in the eggs, adding a little flour if the mixture begins to curdle. Fold in the remaining flour with the cooled, melted chocolate and milk. Mix until smooth.\r\nSpread the mixture into the cake tin and bake for 50-55 mins or until firm in the centre and a skewer comes out cleanly. Cool for 10 minutes, then turn out and cool completely.',
    description:
      'A French dessert consisting of layers of chocolate sponge cake and chocolate ganache, typically topped with chocolate glaze and chocolate decorations.',
    thumb: 'https://www.themealdb.com/images/media/meals/tqtywx1468317395.jpg',
    preview:
      'https://www.themealdb.com/images/media/meals/tqtywx1468317395.jpg',
    time: '75',
    youtube: 'https://www.youtube.com/watch?v=dsJtgmAhFF4',
    tags: ['Cake', 'Chocolate', 'Desert', 'Pudding'],
    ingredients: [
      { id: '640c2dd963a319ea671e3742', measure: '250g' },
      { id: '640c2dd963a319ea671e367e', measure: '175g' },
      { id: '640c2dd963a319ea671e371f', measure: '2 tablespoons' },
      { id: '640c2dd963a319ea671e36ca', measure: '5' },
      { id: '640c2dd963a319ea671e36ee', measure: '175g' },
      { id: '640c2dd963a319ea671e36d7', measure: '125g' },
    ],
    rating: 4.28,
  },
  {
    _id: '6462a8f74c3d0ddd28897fbc',
    title: 'Irish stew',
    category: 'Beef',
    area: 'Irish',
    instructions:
      "Heat the oven to 180C/350F/gas mark 4. Drain and rinse the soaked wheat, put it in a medium pan with lots of water, bring to a boil and simmer for an hour, until cooked. Drain and set aside.\r\n\r\nSeason the lamb with a teaspoon of salt and some black pepper. Put one tablespoon of oil in a large, deep sauté pan for which you have a lid; place on a medium-high heat. Add some of the lamb – don't overcrowd the pan – and sear for four minutes on all sides. Transfer to a bowl, and repeat with the remaining lamb, adding oil as needed.\r\n\r\nLower the heat to medium and add a tablespoon of oil to the pan. Add the shallots and fry for four minutes, until caramelised. Tip these into the lamb bowl, and repeat with the remaining vegetables until they are all nice and brown, adding more oil as you need it.\r\n\r\nOnce all the vegetables are seared and removed from the pan, add the wine along with the sugar, herbs, a teaspoon of salt and a good grind of black pepper. Boil on a high heat for about three minutes.\r\n\r\nTip the lamb, vegetables and whole wheat back into the pot, and add the stock. Cover and boil for five minutes, then transfer to the oven for an hour and a half.\r\n\r\nRemove the stew from the oven and check the liquid; if there is a lot, remove the lid and boil for a few minutes.",
    description:
      'A traditional Irish dish made with lamb, potatoes, carrots, onions, and herbs, cooked in a broth or gravy.',
    thumb: 'https://www.themealdb.com/images/media/meals/sxxpst1468569714.jpg',
    preview:
      'https://www.themealdb.com/images/media/meals/sxxpst1468569714.jpg',
    time: '160',
    youtube: 'https://www.youtube.com/watch?v=kYH2qJXnSMo',
    tags: ['Stew', 'Meat'],
    ingredients: [
      {
        id: '640c2dd963a319ea671e3796',
        measure: '300g soaked overnight in water',
      },
      { id: '640c2dd963a319ea671e370c', measure: '2kg cut into 3cm cubes' },
      { id: '640c2dd963a319ea671e372c', measure: '120ml' },
      { id: '640c2dd963a319ea671e3765', measure: '24 Skinned' },
      { id: '640c2dd963a319ea671e3684', measure: '4 large' },
      { id: '640c2dd963a319ea671e3784', measure: '2' },
      { id: '640c2dd963a319ea671e3689', measure: '1' },
      { id: '640c2dd963a319ea671e368d', measure: '350g' },
      { id: '640c2dd963a319ea671e3794', measure: '150ml' },
      { id: '640c2dd963a319ea671e3687', measure: '1 tsp' },
      { id: '640c2dd963a319ea671e36de', measure: '4 sprigs' },
      { id: '640c2dd963a319ea671e3731', measure: '4 sprigs' },
      { id: '640c2dd963a319ea671e3696', measure: '450ml' },
    ],
    rating: 4.46,
  },
];

const favoriteIds = favorites.map(favorite => favorite._id);

function createRecipeMarkup(arr) {
  return arr
    .map(({ _id, title, category, description, preview, rating }) => {
      const isFavorite = favoriteIds.includes(_id);
      return `<li class="recipe-list-item recipe-card js-recipe" data-id="${_id}" data-category="${category.toLowerCase()}">
          <img src="${preview}" alt="${title}">
          <label class="recipe-heart-label">
            <input type="checkbox" class="recipe-heart-checkbox" ${
              isFavorite ? 'checked' : ''
            }>
  
  <svg class="recipe-heart-icon" width="22" height="20" viewBox="0 0 22 20" xmlns="http://www.w3.org/2000/svg">
    <path opacity="0.9" fill-rule="evenodd" clip-rule="evenodd" d="M10.9934 3.70783C9.16066 1.5652 6.10444 0.988839 3.80814 2.95085C1.51185 4.91285 1.18856 8.19323 2.99186 10.5137C4.49117 12.443 9.02863 16.5121 10.5158 17.8291C10.6821 17.9764 10.7653 18.0501 10.8624 18.0791C10.9471 18.1043 11.0397 18.1043 11.1244 18.0791C11.2215 18.0501 11.3046 17.9764 11.471 17.8291C12.9582 16.5121 17.4956 12.443 18.9949 10.5137C20.7982 8.19323 20.5144 4.89221 18.1786 2.95085C15.8429 1.00948 12.8261 1.5652 10.9934 3.70783Z"/>
</svg>

</label>

<div class="recipe-info">
    <h2 class="recipe-title">${title}</h2>
    <p class="recipe-description">${description}</p>
    <div class="recipe-rating-btn-cover">
    <p class="recipe-rating">${rating}</p>
    <div class="recipe-rating-stars" data-rating="${rating}" id="rating-${_id}"></div>
    <button class="recipe-card-btn js-modal-recipe-open">See recipe</button>
    </div>
</div>
</li>`;
    })
    .join('');
}

export { createRecipeMarkup };
