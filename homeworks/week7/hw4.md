## 什麼是 DOM？

DOM (Document Object Model)，中文翻譯為 文件物件模型，是 HTML 的程式界面，並提供一個樹狀式的結構。可想像成把 Document 轉換成 Object 的格式，從最上層的 document，到下一層的 `<html>、<body>` 到 `<footer>` 等，猶如 Object 的包裝形式。
界面中會表示屬性與函式間的節點與物件組成的結構，將 HTML 的各標籤，像`<div>`、`<h1>` 等定義成物件，我們可以透過 DOM 大致看到該網頁的架構，例如其父子關係（Parent and Child），上層為 Parent Node，而下層為 Child Node；兄弟關係（Siblings），意指同一層節點的關係，分為 Previous 及 Next 兩種。
最後要補充說明即使我們常用 JavaScript 來存取 DOM，但 DOM 並非 JavaScript 的一部分，


## 事件傳遞機制的順序是什麼；什麼是冒泡，什麼又是捕獲？

意指當點擊事件發生後，DOM 的執行流程。
以 [w3網頁的 DOM event flow](https://www.w3.org/TR/DOM-Level-3-Events/#event-flow) 為例子
當 Target Phase : `<td>` 被點擊後，事件從 Window 開始發生，一直傳到 Document、`<html>、<body>、<table>、<tbody>、<tr>` ，此時為 `<tr>` 為目標 `<td>` 前一個 element，上述從 Window 到 `<tr>` 的路段，都稱為捕獲。
之後事件會從 Target phase : `<td>` 傳回 window，與上述的路段一樣，只是順序不同，從 `<td>` 回傳到 window 的這段叫做冒泡。
因此 DOM Event flow 理論上是先捕獲，再冒泡。 


## 什麼是 event delegation，為什麼我們需要它？

事件代理機制，透過共同的 parent，來監聽底下的元素，並可設定一次性指令，底下的 child 可以依據該指令做設定，好處是 child 無需新增重複指令。
例子：
```
<div class="parent">
	<input class="child">1</input>
	<input class="child">2</input>
	<input class="child">3</input>
	<input class="total">6</input>
</div>
```
若我們要透過點擊事件，來取得每個 child 的 input.value，可以直接使用 Parent class 來綁定事件，一次取得它底下的值，而省略綁定每個 child 的值，不然就要執行該動作四次。
因此，使用 `event.delegation` 的優點是可以減少監聽事件的次數，缺點是若要選擇特定 element，則需要做判斷。例如，若只需取 child 元素中，class name 為 child 的值，就需要加上判斷，否則會連 total 的值也會拿到。



## event.preventDefault() 跟 event.stopPropagation() 差在哪裡，可以舉個範例嗎？

- event.peventDefault() 是取消瀏覽器預設行為
例如 button 的 submit 屬性，瀏覽器的預設行為是點擊後重刷頁面，但加入`event.peventDefault()`後，則會阻止其重刷頁面的動作
 
- event.stopPropagation() 是指取消後續的 DOM 行為
延續上面的 button 點擊事件，假設點擊後，捕獲時間開始，從 Window 開始發生，一直傳到 Target phase，點擊後又從 Target phase 開始執行冒泡行為，若我們不需要冒泡這段的事件，就可以使用 `event.stopPropagation`。
同樣地，若直接把 `event.stopPropagation()` 加在 windows 捕獲階段，那所有事件都不會往下傳遞。

- 所以，差別在於：
`event.peventDefault()` 是取消瀏覽器的預設行為，但其實整個 DOM 事件還是會繼續執行，並不會受影響；而`event.stopPropagation` 則是指取消整個後續的 DOM 行為，也是跟瀏覽器的預設行為無關。