$("#show-menu").click(function (e) {
  e.preventDefault();
  $("body").removeClass("show-more");
  $("body").addClass("show-menu");

  $("#show-more").hide();
  $("#show-menu").hide();
  $("#hide-menu").show();
  $("#logo").hide();
});

$("#hide-menu").click(function (e) {
  e.preventDefault();
  $("body").removeClass("show-menu");
  $("body").removeClass("show-more");

  $("#show-more").show();
  $("#show-menu").show();
  $("#hide-menu").hide();
  $("#logo").show();
});

$("#show-more").click(function (e) {
  e.preventDefault();
  $("body").removeClass("show-menu");
  $("body").addClass("show-more");

  $("#show-menu").hide();
  $("#show-more").hide();
  $("#hide-more").show();
  $("#logo").hide();
});

$("#hide-more").click(function (e) {
  e.preventDefault();
  $("body").removeClass("show-menu");
  $("body").removeClass("show-more");

  $("#show-menu").show();
  $("#show-more").show();
  $("#hide-more").hide();
  $("#logo").show();
});
