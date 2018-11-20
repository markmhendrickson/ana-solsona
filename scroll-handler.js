$(document).scroll(function() {
  $('body').toggleClass('scrolled', $(this).scrollTop() > 50);
});