$(".sliderPartners__inner").slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  variableWidth: true,
  arrows: true,
  infinite: false,
  prevArrow:
    ' <button class="slider__btn  slider__btnprev"><img src="/images/ico/arrow-left.svg" alt = "" ></button>',
  nextArrow:
    ' <button class="slider__btn  slider__btnnext"><img src="/images/ico/arrow-right.svg" alt = "" ></button>',
  responsive: [
    {
      breakpoint: 640,
      settings: {
        slidesToScroll: 1,
        slidesToShow: 2,
        variableWidth: false,
      },
    },
  ],
});
