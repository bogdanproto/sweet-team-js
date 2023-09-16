export function createMarkupHeroEvents(arr) {
  return arr
    .map(
      ({
        cook,
        topic,
      }) => `<div class="swiper-slide hero-event"><div class="hero-event">
      <div class="hero-block-cook">
        <img class="hero-block-cook-img" src="${cook.imgUrl}" alt="">
      </div>
      <div class="hero-block-event">
      <div class ="hero-block-event-thumb">
        <img class="hero-block-event-img" src="${topic.previewUrl}" alt="" />
        <p class="hero-block-event-title">${topic.name}</p>
        <p class="hero-block-event-text">${topic.area}</p>
        </div>
      </div>
      <div class="hero-block-meal">
        <img class="hero-block-meal-img" src="${topic.imgUrl}" alt="">
      </div>
      </div>
    </div>`
    )
    .join('');
}
