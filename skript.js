fetch("products.json")
  .then(response => response.json())
  .then(items => {
    const wrapper = document.getElementById("swiperWrapper");

    items.forEach(item => {
      const slide = document.createElement("div");
      slide.className = "swiper-slide";
      slide.innerHTML = `
        <div class="banner-item image-zoom-effect">
          <div class="image-holder">
            <a href="${item.link}">
              <img src="${item.img}" alt="product" class="img-fluid">
            </a>
          </div>
          <div class="banner-content py-4">
            <h5 class="element-title text-uppercase">
              <a href="${item.link}" class="item-anchor">${item.title}</a>
            </h5>
            <p>${item.description}</p>
            <div class="btn-left">
              <a href="${item.link}" class="btn-link fs-6 text-uppercase item-anchor text-decoration-none">Discover Now</a>
            </div>
          </div>
        </div>
      `;
      wrapper.appendChild(slide);
    });

    // Initialize Swiper after content is loaded
    new Swiper(".main-swiper", {
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      navigation: {
        nextEl: ".icon-arrow-right",
        prevEl: ".icon-arrow-left"
      },
      slidesPerView: 1,
      spaceBetween: 20,
      breakpoints: {
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 }
      }
    });
  })
  .catch(error => {
    console.error("Error loading product data:", error);
  });

  const swiper = new Swiper('.swiper-container', {
  slidesPerView: 3,     // 3 Produkte nebeneinander
  spaceBetween: 20,     // Abstand zwischen Slides in px (Steuert Abstand und Swipe-Fläche)
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
