## 這週學了一大堆以前搞不懂的東西，你有變得更懂了嗎？請寫下你的心得。

[week16 筆記](https://hackmd.io/sJ49hhLfQC2VarRnWTsgRg)

week 16 筆記及心得放於上方的 hackMD，以下簡略分享心得。
### Event Loop 

如其名，不斷執行的 Event，會不斷偵測 Call Stack 是否為空，如果是空的話就把 Callback Queue 裡面的東西丟到 Call Stack。大神影片 "What the heck is the event loop anyway?"，影片中的動畫很醒目，看完大概知道有三個主要區塊（Call Stack, Callback Queue 及 Web APIs），並且講述程式碼有分同步跟非同步（一開始沒發現老師文章有講 Event loop，在做完 hw 1 跟 hw 2 後才看到！QQ）。觀看老師的影片後才得知出錯時會印出的程式碼，就是 stack ，同時知道鼎鼎大名的 stack overflow，它名字背後意思科科。

影片中提到的測試網頁 [loupe](http://latentflip.com/loupe/?code=!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D) 可以拿來驗證也是很讚。

### Scope
作用域，一個變數的所在範圍，一旦離開這個範圍，就無法存取這個變數。在 ES6 以前，唯一產生作用域的方法就是 function，而每個 function 都是獨立的作用域。有一句比喻很適合形容作用域：外面的看不到裡面的，但裡面的看得到外面的。意思是什麼呢？是說你的 function 裡可以存取外面（上方層級）的變數，但外面的作用域卻無法存取 function 裡的變數。在 ES 6 開始，作用域分為 Global scope 與 Block scope，Global scope 也就是全域、全域變數，在任何地方都能存取到。Block scope 可以是函式、for 迴圈、if else 等。若在 Block scope 裡"僅賦值"變數而"沒宣告"，JS 會將這個變數宣告在 Global scope 中。最後也認識到 Scope 有分靜態 (static) 與動態 (dynanmic)，

### Hoisting
"提升"，理論上程式碼是由上到下來執行，但若對一個尚未宣告的變數取值，系統會回傳 `__ is not defined`。凡宣告的（函式/變數）都會被提升，賦值不會。函式裡有傳進來的參數會影響提升的行為。

### Closure
Closure 就是 function 裡再 return function。當我們執行完 function，它會將其所有的資源給釋放掉，意思是裡面的變數或其他東西都不會存在了（bye bye 消失了），而 closure 的作用就是用於保存它的資源，透過 closure 將該函式的值給保存起來。

### Prototype in JavaScript
物件導向以前上課有學過，但那時是選修課而已，大致印象就是有 Class 跟 Object。而 Class 類似藍圖、樣板模型，而 Object 則是一個依照 Class 去建構的實體。透過 week 16 得知在 JS 的原生語法中，並無 Class 這個語法存在，因此使用上會以 function 做為 Constructor。JS 使用 Constructor（建構子）特殊函式，來定義物件與功能。而在 ES6 的 Class 中，其實也隱藏著 Constructor。雖說 ES6 能使用 Class，但其實底層仍然是原生的寫法，ES6 只是把它弄得比較好看。最後也了解 prototype chain 的原理。

// 54 mins

### THIS in JS
認識在 JS 裡，this 的四種情形：
1. EventListener 中的指向值
2. 物件導向中的 this
3. 單純的 this
4. Object 中的 this

得知透過 call, apply 跟 bind 能改變 this 的值，並且 this 的值是在被 call 的那瞬間才被決定。