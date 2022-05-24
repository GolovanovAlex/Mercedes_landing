$(function () {
  $('.design-slider').slick({
    slidesToShow: 4,
    variableWidth: true,
    prevArrow:
      '<button type="button" class="slick-prev"><img class="arrow arrow-prev" src="images/icon/arrow-prev.svg" alt="arrow-prev"></button>',
    nextArrow:
      '<button type="button" class="slick-next"><img class="arrow arrow-next" src="images/icon/arrow-next.svg" alt="arrow-next"></button>',
    responsive: [
      {
        breakpoint: 1001,
        settings: {
          slidesToShow: 2,
          variableWidth: false,
          dots: true,
        },
      },
      {
        breakpoint: 656,
        settings: {
          slidesToShow: 1,
          variableWidth: false,
          dots: true,
        },
      },
    ],
  });
  $('.menu-burger').on('click', function () {
    $('.menu__list').toggleClass('active');
    $('.menu-burger').toggleClass('active');
  });
});
