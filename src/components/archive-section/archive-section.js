$(document).ready(function () {
  $(".archive-section-js li").slice(0, 25).show(); // Изначально показать 9 элементов

  $(".moreButton").on("click", function (e) {
    e.preventDefault();
    $(".archive-section-js li:hidden").slice(0, 25).slideDown(); // Показывать еще 9 элементов при каждом клике

    if ($(".archive-section-js li:hidden").length == 0) {
      $(this).hide(); // Скрыть кнопку, если больше нечего показывать
    }
  });
});
