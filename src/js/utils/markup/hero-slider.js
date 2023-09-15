// import Swiper JS
import Swiper from 'swiper';
// import Swiper styles
import 'swiper/css';
import 'swiper/css';
import 'swiper/css/pagination';

// ініцілізація слайдеру

const hero_slider = new Swiper(`.js-hero-slider`{
    direction: 'vertical',
    loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Default parameters
  slidesPerView: 1,
  spaceBetween: 16,

});

// функція яка повертає картинки майстерклас

const swiperContainer = document.querySelector('.swiper-slide')

function getAllEvents(slides) {
  const markup = slides.map(({cook.imgWebpUrl, cook.imgUrl,
            topic.imgWebpUrl, topic.imgUrl, topic.previewWebpUrl, topic.previewUrl, topic.name, topic.area} ) => {
        return

        `<div class="swiper-slide">
            <div class="chef">
              <picture>
                <source srcset="${imgWebpUrl}" type="img/webp" />
                <source srcset="${imgUrl}" type="img/png" />
                <img class="chef-photo" alt="" />
              </picture>
            </div>
            <div class="dish">
              <picture>
                <source srcset="${imgWebpUrl}" type="img/webp" />
                <source srcset="${imgUrl}" type="img/png" />
                <img class="dish-photo" alt="" />
              </picture>
              <h2 class="dish-title">${name}</h2>
              <p class="dish-origin">${area}</p>
            </div>
            <div class="card">
              <picture>
                <source srcset="${previewWebpUrl}" type="img/webp" />
                <source srcset="${previewUrl}" type="img/png" />
                <img class="card-img" src="" alt="" />
              </picture>
            </div>
          </div>
        </div>`.join("");
    }
    )
}
    swiperContainer.insertAdjacentHTML('beforeend', markup);


        
        

