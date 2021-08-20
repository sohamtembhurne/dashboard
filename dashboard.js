$("#menu").click(function () {
  console.log("clicked");
  if ($(".side").hasClass("side_menu")) {
    $('#menu').removeClass('selected');
    $(".side").removeClass("side_menu");
    $(".ham").removeClass("fa-times").addClass("fa-bars");
  } else {
    $(".side").addClass("side_menu");
    $('#menu').addClass('selected');
    $(".ham").addClass("fa-times").removeClass("fa-bars");
  }
});
