$('.nav-global li a').click(function () {
  $('.nav-global li a').removeClass('link-current');
  $(this).addClass('link-current');
});