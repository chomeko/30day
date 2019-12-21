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
# gulp
- 画像が読み込めないエラー解決
>build にimageminの追加をし
>タスクをbuildより上で定義する必要があった。
