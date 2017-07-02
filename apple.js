$('.menu_btn').on("click", function() {
  $(".mobile_nav").slideToggle("slow");
});

$(window).resize(function() {
  $(".mobile_nav").slideUp("slow");
});

$('.footer_flex h3').on("click", function() {
   $(this).nextAll(" a").slideToggle("down");
});
