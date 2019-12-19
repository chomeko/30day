# gulp導入
- npm init -y
- npm install -D gulp
- 各プラグインインストール
```
npm install gulp-sass gulp-plumber gulp-notify gulp-sass-glob browser-sync gulp-postcss autoprefixer css-declaration-sorter gulp-imagemin imagemin-pngquant imagemin-mozjpeg gulp-ejs gulp-rename gulp-uglify gulp-pug  --save-dev
```
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
