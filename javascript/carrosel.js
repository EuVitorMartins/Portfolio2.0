const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    breakpoints: {
        450: {
          slidesPerView: 2,
        },
        640: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
    },
    spaceBetween: 30,
    loop: true,
    centeredSlides: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
