$('.menu_btn').on("click", function() {
  $(".mobile_nav").slideToggle("slow");
});

$(window).resize(function() {
   if ($(window).width() > 700) {
  $(".mobile_nav").slideUp("slow");
}
});

$('.footer_flex h3').on("click", function() {
   $(this).nextAll(" a").slideToggle("down");
});
