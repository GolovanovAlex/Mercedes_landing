$(function () {
  $('.design-slider').slick({
    slidesToShow: 4,
    variableWidth: true,
    prevArrow:
      '<button type="button" class="slick-prev"><img class="arrow arrow-prev" src="images/icon/arrow-prev.svg" alt="arrow-prev"></button>',
    nextArrow:
      '<button type="button" class="slick-next"><img class="arrow arrow-next" src="images/icon/arrow-next.svg" alt="arrow-next"></button>',
  });
});
