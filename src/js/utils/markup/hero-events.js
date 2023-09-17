export function createMarkupHeroEvents(arr) {
  return arr
    .map(
      ({ cook, topic }) => `
                <div class="swiper-slide hero-event">
                    <div class="hero-event">
                        <div class="hero-block-cook">
                            <picture>
                                <source srcset="${cook.imgWebpUrl}" type="image/webp" />
                                <img class="hero-block-cook-img" src="${cook.imgUrl}" alt="${cook.name}" loading="lazy" />
                            </picture>
                        </div>
                        <div class="hero-block-event">
                            <div class="hero-block-event-thumb">
                                <picture>
                                    <source srcset="${topic.previewWebpUrl}" type="image/webp" />
                                    <img class="hero-block-event-img" src="${topic.previewUrl}" alt="${topic.name}" loading="lazy" />
                                </picture>
                                <p class="hero-block-event-title">${topic.name}</p>
                                <p class="hero-block-event-text">${topic.area}</p>
                            </div>
                        </div>
                        <div class="hero-block-meal">
                            <picture>
                                <source srcset="${topic.imgWebpUrl}" type="image/webp" />
                                <img class="hero-block-meal-img" src="${topic.imgUrl}" alt="${topic.name}" loading="lazy" />
                            </picture>
                        </div>
                    </div>
                </div>`
    )
    .join('');
}
