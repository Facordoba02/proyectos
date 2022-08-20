$(document).ready(function () {
  var h = $(".nav").offset().top;
  $(window).on("scroll", function () {
    if ($(window).scrollTop() > h) {
      $(".nav").addClass("nav__fixed");
      document.getElementsByClassName("nav__list")[0].style.top = "70px";
    } else {
      document.getElementsByClassName("nav__list")[0].style.top = "95px";
      $(".nav").removeClass("nav__fixed");
    }
  });
});
