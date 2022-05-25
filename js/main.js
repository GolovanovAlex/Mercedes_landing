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
  $('.menu').on('click', 'a', function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 1200);
  });
});

// ---- scrollUpTop ---- //

let offset = 500;
let scrollUp = document.querySelector('.scroll-up');
let scrollUpSvgPath = document.querySelector('.scroll-up__svg-path');
let pathLength = scrollUpSvgPath.getTotalLength();
scrollUpSvgPath.style.strokeDasharray = `${pathLength} ${pathLength}`;
scrollUpSvgPath.style.transition = 'stroke-dashoffset 20ms';
let getTop = () => window.pageYOffset || document.documentElement.scrollTop;

scrollUp.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});

let updateDashoffset = () => {
  let height = document.documentElement.scrollHeight - window.innerHeight;
  let dashoffset = pathLength - (getTop() * pathLength) / height;
  scrollUpSvgPath.style.strokeDashoffset = dashoffset;
};

window.addEventListener('scroll', () => {
  updateDashoffset();
  if (getTop() > offset) {
    scrollUp.classList.add('scroll-up--active');
  } else {
    scrollUp.classList.remove('scroll-up--active');
  }
});
