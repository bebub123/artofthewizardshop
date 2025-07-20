// products.js
export const productBanners = [
  {
    id: 'banner001',
    image: 'images/banner-image-2.jpg',
    title: 'Painting 1',
    description: 'JOOOO Scelerisque duis aliquam qui lorem ipsum dolor amet, consectetur adipiscing elit.',
    link: 'index.html'
  },
  {
    id: 'banner002',
    image: 'images/banner-image-3.jpg',
    title: 'Stylish Summer Dresses',
    description: 'Discover our new collection of light and airy summer dresses.',
    link: 'index.html'
  },
  {
    id: 'banner003',
    image: 'images/banner-image-1.jpg',
    title: 'Painting 3',
    description: 'JOOOO Scelerisque duis aliquam qui lorem ipsum dolor amet, consectetur adipiscing elit.',
    link: 'index.html'
  }
];

export function createBannerHtml(banner) {
  return `
    <div class="swiper-slide">
      <div class="banner-item">
        <a href="${banner.link}">
          <img src="${banner.image}" alt="${banner.title}" />
        </a>
        <h5>${banner.title}</h5>
        <p>${banner.description}</p>
      </div>
    </div>
  `;
}
