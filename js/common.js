$(document).ready(function () {

  function headerSticky() {
    if ($(window).scrollTop() > 0) {
      $('#scroll-top').fadeIn();
      $('.navbar.fixed-top').addClass("sticky");
    } else {
      $('#scroll-top').fadeOut();
      $('.navbar.fixed-top').removeClass("sticky");
    }
  };

  $('#scroll-top').on("click", function() {
    $('body, html').animate({
      scrollTop: 0
    }, 700);
  });

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

  $('[data-fancybox*="gallery"]').fancybox({
    transitionEffect: "circular",
  });
  
});

$(".closer").on("click", function() {
  $("body").toggleClass("menubar");
});