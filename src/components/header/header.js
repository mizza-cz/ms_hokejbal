// $(document).ready(function () {
//   $("#show-menu").click(function (e) {
//     e.preventDefault();
//     $("body").removeClass("show-more").addClass("show-menu");

//     $("#show-more, #show-menu, #logo").hide();
//     $("#hide-menu").show().addClass("flex-display");
//   });

//   $("#hide-menu").click(function (e) {
//     e.preventDefault();
//     $("body").removeClass("show-menu show-more");

//     $("#show-more, #show-menu, #logo").show();
//     $("#hide-menu").hide().removeClass("flex-display");
//   });

//   $("#show-more").click(function (e) {
//     e.preventDefault();
//     $("body").removeClass("show-menu").addClass("show-more");

//     $("#show-menu, #show-more, #logo").hide();
//     $("#hide-more").show().addClass("flex-display");
//   });

//   $("#hide-more").click(function (e) {
//     e.preventDefault();
//     $("body").removeClass("show-menu show-more");

//     $("#show-menu, #show-more, #logo").show();
//     $("#hide-more").hide().removeClass("flex-display");
//   });
// });
// $(document).ready(function () {
//   var $dateSlider = $(".date-slider-section .filter-menu");
//   var sliderInited = false;
//   var desktopQuery = window.matchMedia("(min-width: 1126px)");

//   // Функция инициализации слайдера
//   function initDateSlider() {
//     $dateSlider.slick({
//       slidesToShow: 4,
//       slidesToScroll: 1,
//       arrows: true,
//       infinite: false,
//       prevArrow:
//         '<button class="slider__btn slider__btnprev"><img src="images/ico/arrow-left.svg" alt=""></button>',
//       nextArrow:
//         '<button class="slider__btn slider__btnnext"><img src="images/ico/arrow-right.svg" alt=""></button>',
//       responsive: [
//         {
//           breakpoint: 350,
//           settings: {
//             slidesToShow: 3,
//           },
//         },
//       ],
//     });
//     sliderInited = true;
//   }

//   // Пересчёт/обновление слайдера
//   function refreshDateSlider() {
//     if (!sliderInited) {
//       initDateSlider();
//     } else {
//       $dateSlider.slick("setPosition");
//     }
//   }

//   // Если мы уже на десктопе и панель видна — сразу инициализируем
//   if (desktopQuery.matches) {
//     initDateSlider();
//   }

//   // Следим за изменением ширины, чтобы «переключаться» между режимами
//   desktopQuery.addListener(function (e) {
//     if (e.matches && !sliderInited) {
//       // перешли на десктоп — инициализируем
//       initDateSlider();
//     }
//     // если вышли на мобильный — ничего не делаем, ждем открытия меню
//   });

//   // === Ваши обработчики кликов по кнопкам меню ===

//   $("#show-menu").on("click", function (e) {
//     e.preventDefault();
//     $("body").removeClass("show-more").addClass("show-menu");
//     $("#show-more, #show-menu, #logo").hide();
//     $("#hide-menu").show().addClass("flex-display");

//     // при мобильном (меню только что стало видимым) — пересчитаем/инициализируем
//     setTimeout(refreshDateSlider, 100);
//   });

//   $("#hide-menu").on("click", function (e) {
//     e.preventDefault();
//     $("body").removeClass("show-menu show-more");
//     $("#show-more, #show-menu, #logo").show();
//     $("#hide-menu").hide().removeClass("flex-display");

//     setTimeout(refreshDateSlider, 100);
//   });

//   $("#show-more").on("click", function (e) {
//     e.preventDefault();
//     $("body").removeClass("show-menu").addClass("show-more");
//     $("#show-menu, #show-more, #logo").hide();
//     $("#hide-more").show().addClass("flex-display");

//     setTimeout(refreshDateSlider, 100);
//   });

//   $("#hide-more").on("click", function (e) {
//     e.preventDefault();
//     $("body").removeClass("show-menu show-more");
//     $("#show-menu, #show-more, #logo").show();
//     $("#hide-more").hide().removeClass("flex-display");

//     setTimeout(refreshDateSlider, 100);
//   });
// });
$(document).ready(function () {
  // 1) Кэшируем селектор слайдера дат
  var $dateSlider = $(".date-slider-section .filter-menu");
  var sliderInitialized = false;

  // 2) Функции показа/скрытия панелей
  function showMatchesPanel() {
    $("body").removeClass("show-more").addClass("show-menu");
    $("#show-more, #show-menu, #logo").hide();
    $("#hide-menu").show().addClass("flex-display");
  }

  function showMorePanel() {
    $("body").removeClass("show-menu").addClass("show-more");
    $("#show-menu, #show-more, #logo").hide();
    $("#hide-more").show().addClass("flex-display");
  }

  function hidePanel() {
    $("body").removeClass("show-menu show-more");
    $("#show-more, #show-menu, #logo").show();
    $("#hide-menu, #hide-more").hide().removeClass("flex-display");
  }

  function initOrRefreshSlider() {
    setTimeout(function () {
      if (!sliderInitialized && $dateSlider.is(":visible")) {
        $dateSlider.slick({
          slidesToShow: 4,
          slidesToScroll: 1,
          arrows: true,
          infinite: false,
          prevArrow:
            '<button class="slider__btn slider__btnprev"><img src="images/ico/arrow-left.svg" alt=""></button>',
          nextArrow:
            '<button class="slider__btn slider__btnnext"><img src="images/ico/arrow-right.svg" alt=""></button>',
          responsive: [
            {
              breakpoint: 350,
              settings: {
                slidesToShow: 3,
              },
            },
          ],
        });
        sliderInitialized = true;
      } else if (sliderInitialized) {
        $dateSlider.slick("refresh");
      }
    }, 50);
  }

  $("#show-menu").on("click", function (e) {
    e.preventDefault();
    showMatchesPanel();
    initOrRefreshSlider();
  });

  $("#show-more").on("click", function (e) {
    e.preventDefault();
    showMorePanel();
    initOrRefreshSlider();
  });

  $("#hide-menu, #hide-more").on("click", function (e) {
    e.preventDefault();
    hidePanel();
  });

  $(".left-nav-toggle, .left-nav-close").on("click", function (e) {
    initOrRefreshSlider();
  });

  // 5) При загрузке, если панель уже видна (десктоп), инициализируем сразу
  if ($dateSlider.is(":visible")) {
    initOrRefreshSlider();
  }
});
