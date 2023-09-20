import { getAllEvents } from '../api/api-service';
import { createMarkupHeroEvents } from '../utils/markup/hero-events';
import { refs } from '../refs/refs';

import Swiper from 'swiper/bundle';

export async function loadHeroData() {
  try {
    const events = await getAllEvents();
    console.log(events);
    const markup = createMarkupHeroEvents(events);
    refs.heroSwiperWrapper.insertAdjacentHTML('beforeend', markup);

    const heroSwiper = new Swiper('.hero-swiper', {
      slidesPerView: 1,
      spaceBetween: 32,
      pagination: {
        el: '.hero-swiper-pagination',
        clickable: true,
      },
    });
  } catch (err) {
    console.log(err);
  }
}

loadHeroData()
