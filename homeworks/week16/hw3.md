## hw3：Hoisting

```js
var a = 1
function fn(){
  console.log(a)
  var a = 5
  console.log(a)
  a++
  var a //6
  fn2()
  console.log(a)
  function fn2(){
    console.log(a)
    a = 20
    b = 100
  }
}
fn()
console.log(a)
a = 10
console.log(a)
console.log(b)
```

目前主流 JS 引擎內部皆有"編譯"階段，Hoisting 其實就是在編譯階段處理，將上面的程式碼分成編譯及執行兩個階段，步驟如下：

編譯階段（含宣告先不賦值）：
```
Line 1 : global scope，宣告一個變數叫 a
Line 2 : gloabl scope，宣告一個函式叫 fn
Line 3 : 無任何變數宣告，不做事
Line 4 : fn scope，宣告一個變數叫 a
Line 5 : 無任何變數宣告，不做事
Line 6 : 無任何變數宣告，不做事
Line 7 : fn scope，宣告一個變數叫 a
Line 8 : 無任何變數宣告，不做事
Line 9 : 無任何變數宣告，不做事
Line 10 : fn scope，宣告一個函式叫 fn2
Line 11 to Line 20 : 無任何變數宣告，不做事
```

處理後結果如下：
```
globalScope : {
  a : undefined,
  fn : function
}

fnScope: {
  a : undefined
  fn2 : function
}
```

接下來是執行階段：

```
Line 1 : var a = 1，JS 引擎在 global scope 中找到變數 a 並賦值為 1
```
global scope 有所變動:

```
globalScope : {
  a : 1,
  fn : function
}
```
```
Line 16 : fn()，JS 引擎在 global scope 中找到函式 fn 並呼叫 function
Line 3 : 第一個 console.log(a)，JS 引擎在 fn scope 中找變數 a，此時值為 undefined
Line 4 : var a = 5，JS 引擎在 fn scope 中找到變數 a 並賦值為 5
```
fn scope 有所變動:
```
fnScope: {
  a : 5
  fn2 : function
}
```

```
Line 5 : 第二個 console.log(a)，JS 引擎在 fn scope 中找到變數 a，成功回傳 a 的值並呼叫 console.log
Line 6 : a++，JS 引擎在 fn scope 中找到變數 a 並加上 1，因此 a 的值為 6
```
fn scope 有所變動:
```
fnScope: {
  a : 5
  fn2 : function
}
```
```
Line 7 : 宣告變數 a 但並無賦值，a 的值依舊是 6
Line 8 : fn2()，JS 引擎在 global scope 中找到函式 fn2 並呼叫 function
Line 11 : 第三個 console.log(a)，JS 引擎在 fn2 scope 並無找到變數 a，因此到上一層 fn scope 尋找，找到 a 的值為 6，成功回傳 a 的值並呼叫 console.log
Line 12 : a = 20，如同上一步，JS 引擎在 fn scope 找到 a 並賦值為 20
```
fn scope 有所變動:
```
fnScope: {
  a : 20
  fn2 : function
}
```
```
Line 13 : b = 100，JS 引擎在 fn2 scope 並無找到變數 a，因此到上一層 fn scope 尋找，還是找不到，到再上一層的 global scope 尋找，但仍然沒有。我們目前假設不在嚴格模式底下（use strict），因此 global scope 會把 b 加上去並賦值為 100
```
global scope 有所變動:
```
globalScope : {
  a : 1,
  fn : function,
  b : 100
}
```
```
Line 9 : console.log(a)，fn2() 結束，來到第四個 console.log(a)，JS 引擎在 fn scope 中找到變數 a，成功回傳 a 的值 (20)，並呼叫 console.log
Line 17 : console.log(a)，fn scope 結束，來到第五個 console.log(a)，JS 引擎在 global scope 中找到變數 a，成功回傳 a 的值 (1)，並呼叫 console.log
Line 18 : a = 10，JS 引擎在 global scope 找到 a 並賦值為 10
```
global scope 有所變動:
```
globalScope : {
  a : 10,
  fn : function,
  b : 100
}
```
```
Line 19 : console.log(a)，來到第六個 console.log(a)，JS 引擎在 global scope 中找到變數 a，成功回傳 a 的值 (10)，並呼叫 console.log
Line 20 : console.log(b)，JS 引擎在 global scope 中找到變數 b，成功回傳 b 的值 (100)，並呼叫 console.log
```
因此，結果為：
```
undefined
console.log(5)
console.log(6)
console.log(20)
console.log(1)
console.log(10)
console.log(100)
```