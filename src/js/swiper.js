$( function() {
  var swiper = new Swiper('.swiper-container', {
      speed: 400,
      autoplay:true,
      loop: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
  } );
} );