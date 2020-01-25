$('.question-list-item').click(function() {
  var $answer = $(this).find('.answer');

  if($answer.hasClass('open')) {
    $answer.removeClass('open');
    // slideUpメソッドで$answerを隠す
    $answer.slideUp();
    // 子要素のspanタグの中身をtextメソッドで書き換え
    $(this).find('.qs-a').text('＋');
  } else {
    $answer.addClass('open');
    // slideDownメソッドで$answerを表示
    $answer.slideDown();
    // 子要素のspanタグの中身をtextメソッド書き換え
    $(this).find('.qs-a').text(' ー ');
  }
});