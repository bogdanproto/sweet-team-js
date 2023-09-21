export function createMarkupHeroEvents(arr) {
  return arr
    .map(
      ({ cook, topic }) => `
    <div class="swiper-slide">
        <div class="slide-cook">
            <picture>
                <source srcset="${cook.imgWebpUrl}" type="image/webp" />
                <img class="slide-cook-img" src="${cook.imgUrl}" alt="${cook.name}" loading="eager" />
            </picture>
        </div>

        <div class="slide-topic">
            <div class="slide-topic-pic">
                <picture>
                    <source srcset="${topic.previewWebpUrl}" type="image/webp" />
                    <img class="slide-topic-img" src="${topic.previewUrl}" alt="${topic.name}" loading="eager" />
                </picture>
            </div>
            <div class="slide-topic-info">
                <h2 class="slide-topic-name">${topic.name}</h2>
                <p class="slide-topic-area">${topic.area}</p>
            </div>
        </div>

        <div class="slide-dish">
            <picture>
                <source srcset="${topic.imgWebpUrl}" type="image/webp" />
                <img class="slide-dish-img" src="${topic.imgUrl}" alt="${topic.name}" height="280" style="border-radius: 15px;" loading="eager" />
            </picture>
        </div>
    </div>`
    )
    .join('');
}
