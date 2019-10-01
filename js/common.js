$(document).ready(function () {

  function headerSticky() {
    if ($(window).scrollTop() > 0) {
      $('.navbar.fixed-top').addClass("sticky");
    } else {
      $('.navbar.fixed-top').removeClass("sticky");
    }
  };

  $(window).scroll(function() {
    headerSticky();
  });
  headerSticky();

  AOS.init({
    duration: 1200,
  });

  Waves.attach('.btn', ['waves-light']);
  Waves.init();

  $(window).enllax();
  
});

$(".closer").on("click", function() {
  $("body").toggleClass("menubar");
});