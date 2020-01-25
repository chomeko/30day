$(function () {
  $('#privacy-btn').click(function () {
    $('.privacy__modal').fadeIn();
  });
  $('.privacy--close').click(function () {
    $('.privacy__modal').fadeOut();
  });
});