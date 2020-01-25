$(function () {
  var set = 150;//ウインドウ上部からどれぐらいの位置で変化させるか
  var boxTop = new Array;
  var current = -1;
  //各要素の位置
  //position-nowは場所を取得したい対象の要素に付ける
  $('.position-now').each(function (i) {
    boxTop[i] = $(this).offset().top;
  });
  //最初の要素にclass="positiion-now"をつける
  changeBox(0);
  //スクロールした時の処理
  $(window).scroll(function () {
    scrollPosition = $(window).scrollTop();
    for (var i = boxTop.length - 1; i >= 0; i--) {
      if ($(window).scrollTop() > boxTop[i] - set) {
        changeBox(i);
        break;
      }
    };
  });
  //ナビの処理
  function changeBox(secNum) {
    if (secNum != current) {
      current = secNum;
      secNum2 = secNum + 1;//以下にクラス付与したい要素名と付与したいクラス名
      $('.nav-global li a').removeClass('link-current');

      //位置によって個別に処理をしたい場合
      if (current == 0) {
        $('#card_js').addClass('link-current');
        // 現在地がsection1の場合の処理
      } else if (current == 1) {
        $('#news_js').addClass('link-current');
        // 現在地がsection2の場合の処理
      } else if (current == 2) {
        // 現在地がsection3の場合の処理
        $('#price_js').addClass('link-current');
      }
      else if (current == 3) {
        // 現在地がsection4の場合の処理
        $('#access_js').addClass('link-current');
      }
      else if (current == 4) {
        // 現在地がsection4の場合の処理
        $('#contact_js').addClass('link-current');
      }

    }
  };
});
$(function () {
  /* aタグをクリックしたら*/
  $('a[href^="#"]').click(function () {
    /* ヘッダーの高さ*/
    var adjust = -90;
    var speed = 500;
    /*クリックしたaタグのhref属性の値を取得*/
    var href = $(this).attr("href");
    /*hrefが'#'または空白の場合'html'をそれ以外なら変数idを代入*/
    var target = $(href == "#" || href == "" ? 'html' : href);
    /*変数ターゲットの位置をoffset().topで上から何pxか取得*/
    var position = target.offset().top + adjust;
    /* html,bodyはブラウザ毎に違うから*/
    /* アニメーション（{scrollTopに変数positionの位置},数値ミリ秒）*/
    $("html, body").animate({ scrollTop: position }, speed, "swing");
    /* リンク内ページのURLに＃をつけない設定*/
    return false;
  });
});