## Event Loop 
Event Loop 執行時，會牽涉幾個過程：

- Call Stack：程式碼會先進入此區塊，直接執行同步的事件/動作，非同步的話（如 setTimeout、ajax）則丟到 Web APIs 中處理。

- Web APIs：瀏覽器提供的方法，運作於瀏覽器端，可以與其他 function 同步運行，事件完成後會丟到 Callback Queue

- Callback Queue：先進來的事件會先移除，等待 Call Stack 區塊清空，無其他任務後，再依序放回 Call Stack 執行。

Event Loop 執行：
```js
console.log(1)
setTimeout(() => {
  console.log(2)
}, 0)
console.log(3)
setTimeout(() => {
  console.log(4)
}, 0)
console.log(5)
```
執行順序：

0. 首先進入 stack 的是該檔案的全域環境程式
1. `console.log(1)` 進入 Call Stack 執行，完成後移出
2. 第一個 setTimeout 進入 Call Stack，為非同步時間，叫瀏覽器設定一個計時器，0ms 之後會觸發
3. `console.log(3)` 進入 Call Stack 執行，完成後移出
4. 第二個 setTimeout 進入 Call Stack，為非同步時間，叫瀏覽器設定一個計時器，0ms 之後會觸發
5. `console.log(5)` 進入 Call Stack 執行，完成後移出。
6. 經過 0 秒後，第一個 setTimeout 執行完成，將第一個參數 (`() => { console.log(2) }`) 放入 Callback Queue
7. Call Stack 為空，將 Callback Queue 的 setTimeout callback 放入 Call Stack 執行
8. `console.log(2)`執行完成並移出 。 
9. 經過 0 秒後，第二個 setTimeout 執行完成，將第一個參數 (`() => { console.log(4) }`) 放入 Callback Queue
10. Call Stack 為空，將 Callback Queue 的 setTimeout callback 放入 Call Stack 執行 
11. `console.log(4)`執行完成並移出 。 

因此，輸出結果會是：
```
console.log(1)
console.log(3)
console.log(5)
console.log(2)
console.log(4)
```

結論：同步事件會優先在 Call Stack 中執行並清空，而非同步的事件先會放入 WebAPIs 中，等時間到再將 callback 放到 Callback Queue 中，待 Call Stack 的任務都完成清空後，才會立刻執行該 callback。因此即便 setTimout 是 0 秒，但一樣會先將其 callback 放到 WebAPIs 中，待 Call Stack 中的事件清空，才會開始執行。