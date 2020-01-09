# gulp導入
- npm init -y
- npm install -D gulp
- 各プラグインインストール
```
npm install gulp-sass gulp-plumber gulp-notify gulp-sass-glob browser-sync gulp-postcss autoprefixer css-declaration-sorter gulp-imagemin imagemin-pngquant imagemin-mozjpeg gulp-ejs gulp-rename gulp-uglify gulp-pug  --save-dev
```
# スペニット
- hea
>header-left トグル付き
- heaR
>header-right ul li
- in
>section#  inner込み
- whc
>左右上下センター
- hc
>上下センター
- wc
>左右センター
- flat
>display: flexで両端
- toguru
>トグルのCSS調整
## 1day メモ
### ヘッダー
- ヘッダーをメイン画像の上にする
```
position: fixed
z-index: 100
```
- 両端にする
```
justify-content: space-between
```
- 縦方向中央にする
```
align-items: center
```
- トグルボタン
```
button(type="button").toguru
  span.fa.fa-bars(title="MENU")
```
- トグルボタンCSS
```
.toguru
  margin-right: 20px
  font-size: 30px
  color: $whit
  border: none
  outline: none
  background: none
  font-size: 28px
  opacity: 0.5
  padding: 0
```
- 親要素の最初の子要素以外にCSS当てる
```
li:not(first-child)
```
# 2dayのcard部分
- 下線
```
.title-line
  height: 4.5px
  width: 85px
  background-color: $blue
  margin: auto
  margin-bottom: 48px
```
- カラム落ち
>flex-wrap: wrap
- 3枚並び
>width: calc(100%/3 - 20px )でもやれるけど
>今回はflex: 1 1 300pxにした
- nの倍数を指定できる
>&:nth-child(3n)
>レスポンシブでうまくできなかった為
>今回は使いませんでした
- テキスト部分の高さを統一する
>articleにもdisplay: flexを当てて
>a要素をflex: 1とする
- 画像には基本これ
```
background-position: center
background-size: cover
```
# 見出し
>position: relative
>position: absolute
>content: " "
>top
>left
>width
>height
>background: linear-gradient(transparent 50%, #ece811 0%)
>background: repeating-linear-gradient(-45deg,
>z-index: -1
#ボタン
- htmlバージョン
```
a.btn2-html(href="#")
  p htmlはこちら2
  img(src="../img/arrow.svg", alt="")
```
- 擬似要素バージョン
```
&::after
  position: absolute
  content: ''
  top: 50%
  right: 5%
  width: 16px
  height: 16px
  transform: translateY(-50%)
  background-image: url("/img/arrow.svg")
```
- 背景画像バージョン
```
background-color: #3F51B5
background: url("/img/arrow.svg") no-repeat center right 12px/14px 14px
```
# day7のcontact
- formのlabelの縦位置中央
>fzが20pxのとき
>lhが2なら、文字ブロックの余白は10
>lhが1.5なら、文字ブロックの余白は5
>文字のサイズが20だと、lhが1のとき文字ブロックのサイズは20で、余白は0
>lhが1.5だと文字ブロックの高さが20*1.5で30になるので、20を引いて半分にして5
>lhが2だと文字ブロックのサイズは40。文字そのものを抜いて上下がそれぞれ10
- selectボックスにはpressholderが効かないからoptionにStyleの設定をする
```
select(id="type" name="type")
  option.op(value="" style="display:none;") ーーー
  option セレクト１
  option セレクトB
  option セレクトC
```
>CSSでfocusしてない時は文字色を変えることができる
```
select:not(:focus)
  color: #cccccc
```
# gulp
- 画像が読み込めないエラー解決
>build にimageminの追加をし
>タスクをbuildより上で定義する必要があった。
