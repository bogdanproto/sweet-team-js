import { getAllEvents } from '../api/api-service';

// import Swiper JS
import Swiper from 'swiper';
// import Swiper styles
import 'swiper/css';
import 'swiper/css';
import 'swiper/css/pagination';

// функція яка повертає картинки майстерклас

const swiperContainer = document.querySelector('.swiper-wrapper');

getAllEvents()
  .then(data => {
    if (data.length === 0) {
      return;
    }
    swiperContainer.insertAdjacentHTML('beforeend', displayCardsInfo(data));
  })
  .catch(err => {
    console.log(err);
  });

{
  /* <img class="chef-photo" src="${item.cook.imgWebpUrl}"  /> */
}

function displayCardsInfo(slides) {
  console.log(slides);
  return slides
    .map(
      item =>
        `<div class="swiper-wrapper img-slider-wrapper">
         
    <div class="swiper-slide img-slider-image">
    <div class="img-slider-chef">
              <img
                class="chef-photo"
                src="${item.cook.imgUrl}"
                alt=""
                width="351"
                height="422"
                loading="lazy"
              />
               <img
               class="chef-photo"
              src="${item.cook.imgWebpUrl}"
              alt="img/webp"
              width="412"
               height="588"
              />
            </div>
            <div class="img-slider-dish">
              <img
                class="dish-photo"
                src="${item.topic.imgUrl}"
                alt=""
                width="351"
                height="422"
              />
              <h2 class="dish-title">${item.topic.name}</h2>
              <p class="dish-origin">${item.topic.area}</p>
            </div>
            <div class="img-slider-card">
              <img
                class="card-photo"
                src="${item.topic.previewUrl}"
                alt=""
                width="351"
                height="422"
              />
               <img
                class="card-photo"
                src="${item.topic.previewWebpUrl}"
                alt="img/webp"
               width="412"
                height="588"
               />
            </div>
          </div>
        </div>`
    )
    .join('');
}

//   ініцілізація слайдеру

new Swiper('.hero-slider', {
  direction: 'vertical',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
