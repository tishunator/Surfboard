var MySwiper = new Swiper('.swiper-container.preview', {
    spaceBetween: 50,
    observer: true,
    observeParents: true,
    keyboard: {
      enabled: true
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      type: 'custom',
      bulletClass: 'swiper_pagination_img'
    },
    navigation: {
      nextEl: '.swiper-button-next.btn_n',
      prevEl: '.swiper-button-prev.btn_p'
    }
  });
