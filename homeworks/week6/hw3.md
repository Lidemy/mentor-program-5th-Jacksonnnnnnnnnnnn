## 請找出三個課程裡面沒提到的 HTML 標籤並一一說明作用。

在 [w3schools](w3schools.com) 中隨意查找：
- `<hr>` ：分隔線
- `<legend>`：~~點進去後發現一點都不傳奇~~ 表格中的穿插標題，搭配`<fieldset>`使用，範例如下：
```
<form>
  <fieldset>
    <legend>我是標題</legend>
    <label for="name">Name</lable>
    <input type="text">
  </fieldset>
</form>

<!-- Output -->

---我是標題------
|               |
| Name: []      |
|               |
-----------------
```
- `<dd>`：列表中的缩排，與 `<dl>`(description list) 及 `<dt>`(defines terms) 搭配使用，範例如下：
```
<dl>
  <dt>Coffee</dt>
  <dd>Black hot drink</dd>
  <dt>Milk</dt>
  <dd>White cold drink</dd>
</dl>

<!-- Output -->
Coffee
    Black hot drink
Milk
    White cold drink
```

## 請問什麼是盒模型（box modal）

簡略來說，html 中的每個元素都可以把它想像成是一個盒子，以方形的狀態來呈現，裡面有一些基本的屬性（margin, padding, height, width），可以透過 CSS 去調整盒子裡的屬性。

## 請問 display: inline, block 跟 inline-block 的差別是什麼？

- inline：各元素排在同一 row，自動排列在上一個元素的右邊，根據內容的大小而呈現，調整寬高及上下邊距皆沒用，代表為 `span` 跟 `a`。
- block：每個元素都會撐滿整行，元素會自動換行，所有不會同時有兩個元素在同一行，由上到下來呈現，且什麼都能調整，常見的元素如 `div, h1, p` 等等。
- inline-block：結合 inline 及 block，各元素間會如同 inline 一樣接著顯示在上一個元素的右手邊，是每一個元素裡會如同 bloack 一樣調整各樣的屬性，常見代表如 `button, input, select` 等等。

## 請問 position: static, relative, absolute 跟 fixed 的差別是什麼？

- static: 預設值，無法調整 top、left、right、bottom。
- relative: 從原本的位置，能調整 top、left、right、bottom，不會影響到其他元素，會自行跳脫原有的排版，會自動覆蓋在其他元素上。

- absoulute: 以某個參考點做定位，能調整 top、left、right、bottom。先要找好參考點，並在參考點加入 `position: relative`，它才能在該參考點下進行定位。設定後其 html code 下方的元素，會自動遞補到它原本的位置，而它則會跳脫原本的框架，不會影響到遞補上來的元素。若沒特別設定的話，會照 html 格式往上找“第一個 position 不是 static 的元素”，例如找到 `<body>`，這時參考點會是在 `<body>` 的開端。

- fixed: 以瀏覽器的頁面（viewport）為定位，能調整 top、left、right、bottom，會固定在設定後的位置，滾動頁面也不會影響它的位置，例如往下滑動後，它不會隨著頁面而往下滑，而是繼續定位在原本的位置。

