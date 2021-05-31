## 什麼是 DOM？

DOM (Document Object Model)，可想像成把 Document 轉換成 Object 的格式，從最上層的 document，到下一層的 `<html>、<body>` 到 `<footer>` 等，猶如 Object 的包裝形式。


## 事件傳遞機制的順序是什麼；什麼是冒泡，什麼又是捕獲？

意指當點擊事件發生後，DOM 的執行流程。
以 [w3網頁的 DOM event flow](https://www.w3.org/TR/DOM-Level-3-Events/#event-flow) 為例子
當 Target Phase : `<td>` 被點擊後，事件從 Window 開始發生，一直傳到 Document、`<html>、<body>、<table>、<tbody>、<tr>` ，此時為 `<tr>` 為目標 `<td>` 前一個 element，上述從 Window 到 `<tr>` 的路段，都稱為捕獲。
之後事件會從 Target phase : `<td>` 傳回 window，與上述的路段大同小異，只是順序不同，從 `<td>` 回傳到 window 的這段叫做冒泡。
因此 DOM Event flow 理論上是先捕獲，再冒泡。 


## 什麼是 event delegation，為什麼我們需要它？

事件代理機制，透過共同的 parent，來監聽底下的元素，並可設定一次性指令，底下的 child 可以依據該指令做設定，好處是 child 無需新增重複指令。

## event.preventDefault() 跟 event.stopPropagation() 差在哪裡，可以舉個範例嗎？

- event.peventDefault() 是取消瀏覽器預設行為
例如 button 的 submit 屬性，瀏覽器的預設行為是點擊後重刷頁面，但加入`event.peventDefault()`後，則會阻止其重刷頁面的動作
 
- event.stopPropagation() 是指取消冒泡行為
延續上面的 button 點擊事件，假設點擊後，捕獲時間開始，從 Window 開始發生，一直傳到 Target phase，點擊後又從 Target phase 開始執行冒泡行為，當我們不需要冒泡這段的事件，就可以使用 `event.stopPropagation`。

- 所以，差別在於：
`event.peventDefault()` 是取消瀏覽器的預設行為，但其實整個 DOM 事件還是會繼續執行，並不會受影響；而`event.stopPropagation` 則是指整個 DOM 的行為中，取消後半段的冒泡事件，也是跟瀏覽器的預設行為無關。