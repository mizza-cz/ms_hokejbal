$(document).ready(function () {
  $("#show-menu").click(function (e) {
    e.preventDefault();
    $("body").removeClass("show-more").addClass("show-menu");

    $("#show-more, #show-menu, #logo").hide();
    $("#hide-menu").show().addClass("flex-display");
  });

  $("#hide-menu").click(function (e) {
    e.preventDefault();
    $("body").removeClass("show-menu show-more");

    $("#show-more, #show-menu, #logo").show();
    $("#hide-menu").hide().removeClass("flex-display");
  });

  $("#show-more").click(function (e) {
    e.preventDefault();
    $("body").removeClass("show-menu").addClass("show-more");

    $("#show-menu, #show-more, #logo").hide();
    $("#hide-more").show().addClass("flex-display");
  });

  $("#hide-more").click(function (e) {
    e.preventDefault();
    $("body").removeClass("show-menu show-more");

    $("#show-menu, #show-more, #logo").show();
    $("#hide-more").hide().removeClass("flex-display");
  });
});
