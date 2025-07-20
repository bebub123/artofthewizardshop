import { productBanners, createBannerHtml } from './products.js';

const container = document.querySelector('#banner-container');

productBanners.forEach(banner => {
  container.innerHTML += createBannerHtml(banner);
});
