$(function () {
  /* スクロール位置を入れる変数を宣言 */
  var winScrollTop;
  $('#privacy-btn').click(function () {
    /*スクロールの位置を取得できて、変数に代入*/
    winScrollTop = $(window).scrollTop();
    $('.privacy__modal').fadeIn();
  });
  $('.privacy--close').click(function () {
    $('.privacy__modal').fadeOut();
    /* closeボタンを押したら取得した位置まで戻る*/
    $('body,html').stop().animate({scrollTop:winScrollTop}, 100);
  });
});