## Event Loop + Scope

```js
for(var i=0; i<5; i++) {
  console.log('i: ' + i)
  setTimeout(() => {
    console.log(i)
  }, i * 1000)
}
```
執行順序：

0. 首先進入 stack 的是該檔案的全域環境程式
1. `console.log('i: ' + 0)` 進入 Call Stack 執行，完成後移出
2. 第一次的 setTimeout 進入 Call Stack，setTimeout 為 Web APIs 的一種，setTimeout 會呼叫瀏覽器幫忙設定一個 0 ms 後到期的定時器，到期後丟入 Callback Queue 中
3. `console.log('i: ' + 1)` 進入 Call Stack 執行，完成後移出
4. 第二次的 setTimeout 進入 Call Stack，setTimeout 為 Web APIs 的一種，setTimeout 會呼叫瀏覽器幫忙設定一個 1 ms 後到期的定時器，到期後丟入 Callback Queue 中
5. `console.log('i: ' + 2)` 進入 Call Stack 執行，完成後移出
6. 第三次的 setTimeout 進入 Call Stack，setTimeout 為 Web APIs 的一種，setTimeout 會呼叫瀏覽器幫忙設定一個 2 ms 後到期的定時器，到期後丟入 Callback Queue 中
7. `console.log('i: ' + 3)` 進入 Call Stack 執行，完成後移出
8. 第四次的 setTimeout 進入 Call Stack，setTimeout 為 Web APIs 的一種，setTimeout 會呼叫瀏覽器幫忙設定一個 3 ms 後到期的定時器，到期後丟入 Callback Queue 中
9. `console.log('i: ' + 4)` 進入 Call Stack 執行，完成後移出
10. 第五次的 setTimeout 進入 Call Stack，setTimeout 為 Web APIs 的一種，setTimeout 會呼叫瀏覽器幫忙設定一個 4 ms 後到期的定時器，到期後丟入 Callback Queue 中
11. 此時 i 為 5，迴圈結束
12. Call Stack 為空，將 Callback Queue 的 setTimeout callback 放入 Call Stack 執行
13. `console.log(5)`執行完成並移出 
14. Call Stack 為空，將 Callback Queue 的 setTimeout callback 放入 Call Stack 執行
15. `console.log(5)`執行完成並移出 
16. Call Stack 為空，將 Callback Queue 的 setTimeout callback 放入 Call Stack 執行
17. `console.log(5)`執行完成並移出 
18. Call Stack 為空，將 Callback Queue 的 setTimeout callback 放入 Call Stack 執行
19. `console.log(5)`執行完成並移出
20. Call Stack 為空，將 Callback Queue 的 setTimeout callback 放入 Call Stack 執行
21. `console.log(5)`執行完成並移出 

輸出為：
```
i: 0
i: 1
i: 2
i: 3
i: 4
console.log(5)
console.log(5)
console.log(5)
console.log(5)
console.log(5)
```