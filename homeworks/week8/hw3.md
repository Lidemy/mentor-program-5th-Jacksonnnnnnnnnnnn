## 什麼是 Ajax？
全名為 Asynchronous JavaScript And XML，一種在瀏覽器上，使用 JavaScript 與 Server 端溝通的技術，首先的重點是 "A" 字，Asynchronous，非同步，什麼意思呢？簡單來說就是：
> 不須等待前面的程式執行完就能執行。
      
詳細點來說，就要提到 JS 的運作。理論上 JS 是根據程式碼行數由上往下來執行，**但是**，若某一行的程式碼需要處理很久的話（例如發送 request 後，等待 response 的時間很長），整頁的程式都需要等候它，卡多久就等多久，整個瀏覽器都處於“凍結的狀態”；或是某一行程式有問題，瀏覽器因它而 crash 掉，但它底下的其他程式碼其實沒有問題，其他功能仍然可以正常顯示在頁面上。**這就是同步會造成的問題！** 相反地，若以非同步的形式進行，就可以避免上面的問題，若某一行的程式碼需要處理很久的話，沒關係，先跳過，繼續執行下一行；若某一行程式有問題，沒關係，其他行仍然可以執行，頁面仍會出現，除非點擊/連結到有問題的區塊，不然仍然可以正常使用頁面的其他功能。

簡單的流程為：JS 透過瀏覽器發 request 到 Server，Server 再透過瀏覽器回傳 response 到 JS 上，有別於表單直接由瀏覽器渲染出 response 的結果。因此我們可以透過瀏覽器上的 JS，傳送及接收 Server 資料，在不更動整個頁面的情況下做不同操作。最後，"X" 所代表的是 XML，因為早期都是以 XML 作為資料傳輸的格式，然而現在常用的資料格式都以 JSON 居多，但不影響 AJAX 的運作。
> 所以，任何非同步，並透過 JS 來跟伺服器交換的方式都可稱為 AJAX。

## 用 Ajax 與我們用表單送出資料的差別在哪？

與傳統用表單 form 傳輸資料的最大差別，就在於 "A" 字，Asynchronous，非同步，然而表單卻是同步的（synchronous）。表單在每一次的傳送資料，瀏覽器隨即會有換頁的動作，暫時無法執行其他動作。但以現今常見的網頁，使用時其實不需要動到整個頁面，而且 Server 資料眾多，若每個 request 都同步的話，這樣會花費很多時間在等待資料回傳，使用者體驗應該會十分糟糕 ~~oh no~~，這時候 AJAX 就可以大派用場。

## JSONP 是什麼？

在講 JSONP 之前，要先了解同源政策（Same origin policy） 與 跨網域問題，同源也就是同 Domain，指兩份網頁具備相同協定、埠號 (如果有指定) 以及主機位置，詳細可參考 [Mozilla](https://developer.mozilla.org/zh-TW/docs/Web/Security/Same-origin_policy)。基本上若來自不同源的網址，瀏覽器預設會擋掉對它的 response。但怎麼解決被檔的問題呢？
其中一個方法就是使用CORS (跨來源資源共用)，當我們在發 request 的時候，瀏覽器會自動在 Request Headers 裡加上一個 header，名叫 Origin，也就是你現在的 Domain，因此 Server 也是看這個 header 來判斷是否同源。或許你曾經在 Response Headers 中看過 access-control-allow-origin，若 value 為 `*` 則表示所有的 origin 都能存取。但是，若 server 沒有加上此 header，我們是絕對沒辦法拿到 response，這就是瀏覽器提供給你的限制機制。 
上面提到"其中一個方法"，那另一個方法呢？就是這題的主角： JSONP，上述提到的問題（解決被擋），除了使用 CORS 外，另一個方法是使用 JSONP，可以讓一個網頁從其他的網域請求資料。它是利用標籤 (Tag) 來拿資料，原因是這些 Tag（如`<script>、<img>`）是不受同源政策限制，怎麼說呢？記得你曾使用過`<img scr="http://XXXX">`嗎，當中裝的連結，其實就是引用其他 Domain 的網址。同樣地，`<script src="http://XXXX">` 當中`src`中的連結，裝的也會是其他 Domain 的 JavaScript，這些都是為了方便而執行的，省略從 local 端下載圖片，或是需要自己動手打一段程式碼，若它們也受同源政策管理，這樣就真的哭哭了。所以，若 `<script>` 裡有 JavaScript 的物件，我們就可以使用 JavaScript 來做相對應的操作執行。
簡短介紹使用 JSONP 的程序：
  1. 建立一個 `<script src="xxx">` 標籤元素，當中 "xxx" 指向一個跨網域的網址。
  2. 使用 callback function 來拿資料（通常 API 上會附有 `callback` 的參數），只要把這個參數當作 function 名稱，把它的 JavaScript 物件傳到 Function 裡面，你就可以在 Function 裡面拿到資料。或是這樣說，Server 接收 request 後會回傳一個 JavaScript 的檔案，檔案中會執行 function，function 中的參數就是你想要請求的資料結果。
  3. 自行使用請求的資料結果
最後補充，JSONP 也有其限制，它只能使用 GET 的方式去取 API，無法用 POST。另外，JSONP 和 JSON 沒有直接的關係，但確實會在函式中使用，利用其純文字格式方便傳輸且能支援其他的資料交換格式的好處，來想要獲取的資料。

## 要如何存取跨網域的 API？
要嘛就是在同網域下執行，要嘛就是使用上一題提到的access-control-allow-origin，要求 Server 端加上這個 response header，並設定參數為 `*`。或是使用上一題提到的 CORS 及 JSONP。

## 為什麼我們在第四週時沒碰到跨網域的問題，這週卻碰到了？
這要回到所謂 API 傳輸的部分，以圖來簡略說明 ~~(這也算圖嗎喂?)~~
```
        -------(request)------->
Client                             Server
        <------(response)-------
```
以上圖來看，當我們以 Node.js 做為 Client 端，像 Server 發出 request，Server 相對地回傳 response，當中並無任何限制，十分直接地一來一往。
然而，當我們用瀏覽器的 JS 來傳輸時，圖會變為：
```  
        --------------- > Browser ---(request)--->
Client                                             Server
        <---(response)--- Browser <---------------
```
顯而易見，中間多了一個第三者從中作梗！~~(可惡)~~，沒錯，它就是瀏覽器。
此時，我們的傳輸路徑多了瀏覽器這個關卡，這個關卡有兩個主要項目（都是與資訊安全性有關），一是會限制一些操作，二是幫你 Client 加上一些背景資料，讓 Server 知道來者何人。但也是因為這兩個項目，導致你的傳輸受限，無法直接地獲取資訊，並需要額外運用一些功能來傳輸。

