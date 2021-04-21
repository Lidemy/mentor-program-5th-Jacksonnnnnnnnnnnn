## 請解釋後端與前端的差異。

> 大方向解釋：你用電腦看到的畫面就是前端，而後端則是畫面背後處理會用到的東西。

- 前端：網頁的架構（HTTP）、網頁的美編（CSS）、頁面上的操作指令（Javascript）、並發送資訊（request）到後台（Server、Database）做聯動，請後台提供相關資訊。
- 後端：蘊藏着不同資訊的伺服器及資料庫，接收前端的 reqeust 後，發送 前台需要的相關資訊（response）回去。


## 假設我今天去 Google 首頁搜尋框打上：JavaScript 並且按下 Enter，請說出從這一刻開始到我看到搜尋結果為止發生在背後的事情。

- 首先，Request 產生，將 "JavaScript" 這個 keyword 丟到 Google 的後台，請它將含有 keyword 相關資訊的連結拿出來，後台收到後給出 HTML檔 response，經過瀏覽器解析後加上美編功能（CSS），搜尋結果頁面出現在你眼前。


## 請列舉出 3 個「課程沒有提到」的 command line 指令並且說明功用

1. `cat`：將文件印在 Terminal 上
2. `start`：開啟特定檔案、目錄、程式，例如：`start "" C:\lidemy.pdf`，直接從 CLI 開啟 GUI，也是蠻有趣的操作。
3. `crontab`：循環執行指令，可循環的時間為分鐘、小時、每週、每月或每年等。