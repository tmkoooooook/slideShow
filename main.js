$(document).ready(function(){
  $(".slick").on("init", function(){
      $(".slideShow").addClass("initialized");
  });
  $(".slick").slick({
      autoplay: true,
      autoplaySpeed: 4000,
      dots: true,
  });
});