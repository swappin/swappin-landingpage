(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 48)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 54
  });

  // // Collapse Navbar
  // var navbarCollapse = function() {
  //   if ($("#mainNav").offset().top > 100) {
  //     $("#mainNav").addClass("navbar-shrink");
  //   } else {
  //     $("#mainNav").removeClass("navbar-shrink");
  //   }
  // };
  // // Collapse now if page is not at top
  // navbarCollapse();


  // Collapse Navbar
  var startAnimation = function() {
    if ($("#animationApp").offset().top > 0 && $("#animationApp").offset().top < 775 ) {
      $("#deviceMockup").addClass("animation-top-fixed");
      $("#animationApp").removeClass("animation-1");
      $("#animationApp").removeClass("animation-4");
      $("#animationApp").addClass("animation-default");
    } else if ($("#animationApp").offset().top > 775 && $("#animationApp").offset().top < 1549 ) {
      $("#deviceMockup").removeClass("animation-top-fixed");
      $("#deviceMockup").addClass("animation-top-break");
      $("#animationApp").removeClass("animation-default");
      $("#animationApp").removeClass("animation-2");
      $("#animationApp").removeClass("animation-4");
      $("#animationApp").addClass("animation-1");
    } else if ($("#animationApp").offset().top > 1550 && $("#animationApp").offset().top < 2249) {
      $("#animationApp").removeClass("animation-1");
      $("#animationApp").removeClass("animation-3");
      $("#animationApp").removeClass("animation-4");
      $("#animationApp").addClass("animation-2");
    } else if ($("#animationApp").offset().top > 2250 && $("#animationApp").offset().top < 2999) {
      $("#animationApp").removeClass("animation-2");
      $("#animationApp").removeClass("animation-4");
      $("#animationApp").addClass("animation-3");
    } else{
      $("#animationApp").removeClass("animation-3");
      $("#animationApp").addClass("animation-4");
    }
  };
  // Collapse now if page is not at top
  startAnimation();
  // Collapse the navbar when page is scrolled
  // $(window).scroll(navbarCollapse);
  $(window).scroll(startAnimation);


})(jQuery); // End of use strict
