import { getAllEvents } from '../api/api-service';
import { createMarkupHeroEvents } from '../utils/markup/hero-events';
import { refs } from '../refs/refs';

import Swiper from 'swiper/bundle';

export async function loadHeroData() {
  try {
    const events = await getAllEvents();
    const markup = createMarkupHeroEvents(events);
    refs.swiperWrapperHero.insertAdjacentHTML('beforeend', markup);

    const heroSwiper = new Swiper('.swiper-hero', {
      slidesPerView: 1,
      spaceBetween: 40,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  } catch (err) {
    console.log(err);
  }
}
