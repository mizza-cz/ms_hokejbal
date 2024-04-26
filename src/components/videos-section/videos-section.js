$(document).ready(function () {
  $(".sliderNews").slick({
    slidesToShow: 2,
    slidesToScroll: 2,
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
        },
      },
    ],
  });

  $(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({
    disableOn: 700,
    type: "iframe",
    mainClass: "mfp-fade",
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false,
  });
});
