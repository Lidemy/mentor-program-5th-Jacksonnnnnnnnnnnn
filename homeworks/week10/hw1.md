## 六到十週心得與解題心得
簡介每一週的心得框架，固定部分：
1. 上課心得
2. 解題心得
3. 直播檢討
4. week 10 回顧（回顧時的額外發現）
---
## 第六週

### 1. 上課心得
- 兩篇好文的心得

  [跟著小明一起搞懂技術名詞：MVC、SPA 與 SSR](introduction-mvc-spa-and-ssr-545c941669e9)

  大致了解：<Br>
MVC -> 處理攏長的程式碼，分區塊且易讀<Br>
Ajax -> 處理非同步，不換頁也能跟 Server 溝通<Br>
SPA -> 所有操作只需利用一個頁面來表示 (例子：音樂播放網站)<Br>
MPA -> 所有操作分開數個頁面，頁面間不會互相干擾<Br>
SSR -> 用於解決 SPA 的缺點（影響 SEO）

  [零基礎的小明要如何成為前端工程師？](https://medium.com/hulis-blog/frontend-engineer-guide-297821512f4e)

  ~~這篇是最大的發現是自己兩年前有留言過哈(誤~~ 這篇其實是認識 huli 老師的契機，記得當年 ~~(其實也才兩年前而已)~~ 大四在當前端實習生（命運的安排，原本應徵 SA 實習生，誤打誤撞當上，我 JS 近乎零基礎），所以當時很痛苦，在那樣的狀態下看到這篇文章，簡直就是我眼前一亮，給我打了一隻鎮定劑哈哈哈哈。這次應該是第二次看，同樣地驚艷，除了認識前端的微歷史脈絡外，也特別細看 CSS 的部分，但結論是後半段越看越不懂 XD。

- [FE101]

  SEO 的部分讓我有恍然大悟的感覺，原來身邊的廣告、社群媒體都是透過這些方式去運行！

  在實戰切版上的部分，一開始 html 與 css 無法連結，想說照著做也有錯，沒理由吧！結果是我拼錯了 "class"，打 code 拼錯的部分似乎是 “人類不是完美” 的確據之一，只好隨著自身的進步把錯誤率壓到最低。最後做出類似 FB 的 po 文，感覺不錯，畢竟是第五期課程中第一個 CSS 實作。

  HW 1 的大部分內容是照著老師影片切，照著影片切的部分就放這裡分享。操作時間比預期的久，也難怪老師一開始在影片說已經逃避了接近兩個小時。HTML 分區塊做的方式，也讓我比較好理解，從上到下，每一區塊再做調整。
  1. navbar：感覺 `justify-content: space-between` 會蠻常用的，現在的 UI 蠻常看到這種設計，Lidemy 學習系統也是如此 XD
  2. Zeplin：網站很 user-friendly，content的部分滑鼠點兩下就能複製。
  3. div + div：這個也覺得會很常用
  4. 神奇的反轉：`flex-direction: column-reverse` ，感覺很適用於 footer，或 navbar 也許也會用到吧

  第六週特別補充課程，難得聽到除了 huli 老師以外的聲音 XD 每一 part 至少聽了三遍，才比較搞懂。

- 六角學院 : Chrome 網頁除錯功能大解密

  印象較深刻的部分
  1. codepen：前端 online IDE
  2. Cubic-bezier：視覺效果很夠，但自己亂調一通沒好好研究 XD
  3. 好用的 Plug-in 例如：Type Sample、Dimensions

### 2. 解題心得

- hw 1

  這次花最多的時間在於，把 icon 放到框框中間上方，最終分別使用：
  ```css
  .box {
  posisiton: relative;
  }

  /* img height 為 70px */
  .icon {
  position: absolute;
  top: -35px;
  left: 50%;
  transform: translate(-50%);
  }
  ```

- hw 2

  在 placeholder 上也花了點時間，一開始直接在 css 下  `input ::placeholder { border: solid 1px;}`
  > 竟出現兩個框！

  後來更改為：`input { border: solid 1px;}`
在查找資料時也發現 `:placeholder-shown`，用於在點擊輸入框時，會有何元素改變，例如框的顏色改動。

  助教批改後...我才驚覺 hw 2 是有背景跟 footer ! 我一直以為那是 zeplin 的 default background ==" 而 footer 的部分則是直接沒看到 QQ

- hw 3

  花最多時間在最後一題
  > 請問 position: static, relative, absolute 跟 fixed 的差別是什麼？

  作答時才發現自己似懂非懂，再回看老師、助教及 google 大神的參考資料，才把它完成，CSS 真是比想像中的博大精深啊！

- 繳交作業小插曲
  在要 push 前，發現我的 CSS 跟 Images 都沒一起 commit 到，源自於自己的壞習慣，在開完 branch 後會直接用 git commit -am 'xxx'，但這指令範圍僅限於「已追蹤」的檔案，如果有額外新增檔案的話，還是要拆開，先使用指令 add。


### 3. 直播檢討

- 第五/六週直播檢討（因為第五週為複習週，所以變成 五/六）：

  從同學的提問中也有所學習，像是 nth-child(n) VS nth-of-type(n) 及 text h1 VS h1.test

- 真·第六週直播檢討：
  1. 建議先建立手機排版
  2. 更認識 Padding（上週作業用 margin 次數多於 padding 很多）
  3. 更認識 id vs class vs name
  4. 更認識 capture & bubble
  5. 前端的價值（這個酷，我自己倒是沒特別想過，我覺得透過上面那篇文章，更分別出前端與後端，記得曾有友人問我前後端差異，當時自己沒解釋的很好）
  6. 認識單位的差別（rem vs px）
  沒想對已經有同學對切版產生抗拒 幫QQ（我自己目前為止算是喜歡切版 XD）



### 4. week 10 回顧

- 兩篇好文的心得 
  經過第九週後，更加看得懂文章裡面的東西，依目前的進度，覺得需要用到 CSS preprocessor XD
- 完成兩個小遊戲

  [FLEXBOX FROGGY](http://flexboxfroggy.com/)、
  [CSS Diner](https://flukeout.github.io/)

---
## 第七週

### 1. 上課心得

- [MTR05]
  得知 `setTimeout()` 及 `console` 並非 JS 原生，一直以為是 JS 內建的函式。

### 2. 解題心得
- hw 1
  作業時間比想像中的久，花最多時間在 input 上，原本想一次過取所有 required input，但卡住在 radio 上，最後把 text input 跟 radio input 分開。進行作業的同時會覺得在 week 6 的作業裡，class 或 html 格式沒設定得適當，以致中間有不少時間在修改。但同時也慶幸自己有意識到哪部分需要改、提醒自己是錯誤中學習！當時覺得覺得 Web JS 比 Node JS 難，需要花更多時間去理解。
  > 若在 input 後面 AppendChild 的話，該物件會消失，因為它會自動塞進`</input>` 前 LOL （即便我在  `<input XXXX />` 後加也是一樣）
  ![](https://imgur.com/EGkKi6p.png)

  > 另一篇："如果 appendChild 使用時，append 上去的是一個已存在的 node 時，它會做的是搬移，而非複製。"
  [[JS小細節] Node Element 在 appendChild 後消失（disappear）!?](https://pjchender.blogspot.com/2017/06/js-node-element-appenchild-disappear.html)

- hw 2
   一開始超蠢，把 hidden 的內容做 addEventListener，但它本身是 hidden 狀態頁面根本沒有可以 click 的地方哈哈！

  `classList.toggle` 是個好東西

- hw 3
  代辦事項的欄位，原本想說試試看用 ::before 及 ::after 兩個部分來做 addEventListener，但後來測試後不行！

- hw 4
  一開始寫自己似懂非懂，因此再看一遍 [FE102] 相關影片，寫完還是覺得偏理論，對於實際的運作，感覺要之後多做練習才比較懂。

### 3. 直播檢討
- margin: auto 的部分，自己也是習慣了老師的做法 : 加 transform: translate(-50%, -50%) 
- 得知 react.js 會注重結尾標籤
- 得知 github html 的預覽，之前都是看助教給的 link

### 4. week 10 回顧
- [MTR05] 捕獲與冒泡特別補充
  重溫捕獲與冒泡機機制，更了解整個運作流程及參數的設定 (true or false)。

- 作業訂正
  被助教提醒的部分
  
  1. 資料格式的驗證

  如信箱使用 `type="email"`、手機號碼則使用 `type="number"` 
  
  2. CSS 命名忽大忽小 (建議遵循 BEM)

  3. 這次 ESLint 有個部分花了我一點時間，沒想到他連這個也要管，一直跳說 no-sequences！！
  ```
  //一直跳 warning
  `報名類型: ${arr[3], arr[4]}`

  //改成
  `報名類型: ${arr[3]}${arr[4]}`
  ```

---  
## 第八週

### 1. 上課心得
- [FE102]
  Ajax 我大概三年前就聽過，但當時看了些資料或教學影片，還是不懂，這次看了兩遍，總算理解其做法。網頁與伺服器的溝通比想像中的複雜，原來有三種傳送資料的方式，之前雖然看過同步與非同步概念的文章，但仍然似懂非懂，透過這週影片的實際例子才比較明白。影片最後有提到單方面丟 request的例子： 發 email 並檢查是否有客戶打開的例子，聽完覺得有趣，似乎可以來動手做做看。

### 2. 解題心得

- hw 1
   CSS 的過程中，頓時感受到有按順序、有語義的好處，頓時將該要的標籤轉移到頁面上。同時重溫一些關於 position 跟 display 的部分，解題時有個疑問：
  > width 跟 max-width 的差別

  解答：[w3schools](https://www.w3schools.com/css/tryit.asp?filename=trycss_max-width)

  當中花了不少時間在想，如何重新抽獎一次（而非重刷頁面），最終再做一個 `onclick()`，針對相對的 css 加上 hidden，最後完成。

- hw 2
  一開始傻傻地用 week 4 的 request，還來個 `npm i request` 。之後在 header 的處理上一直處於疑惑的狀態，還差點被 fake 要用 JSONP LOL
  [Stackoverflow: XMLHttprequest not working the twitch.tv api](https://stackoverflow.com/questions/30772644/xmlhttprequest-not-working-the-twitch-tv-api)，裡面有個回答：
  > "The Twitch.tv API doesn't support CORS. You need to use JSON-P (aka JSONP) to work around it."

  這個則是 [不完整的 XHR header 資訊](https://discuss.dev.twitch.tv/t/update-html-based-on-if-stream-is-live/23251)
  
  後來終於找到正確的寫法啦！[Clips Discovery Guide](https://dev.twitch.tv/docs/v5/guides/clips-discovery) 
  > 原來可以用兩次 `setRequestHeader`，一直卡關的原因是以為只能有一個 `setRequestHeader`。

  在串接 API 參數的部分花了點時間，分別是 limit 跟 game，後來才想起可以用 “&” 串起來！之後就是一大段資料處理、調整 CSS、Debug JS 的部分，過程蠻順利。

- hw 3 
  沒想到這份作業花蠻多時間的，可以媲美打程式的時間，原因概念沒釐清。什麼是 Ajax 到 Ajax vs 表單，這邊都還行，畢竟是作業實做的內容。一直到第三題：JSONP 是什麼？我看完兩次 JS102 關於 JSONP 的那個影片，那是不太懂，再看第三遍，Google 一些有關於它的文章，啊！懂了，但下一個沒釐清的概念又跳出，`callback()` 到底是什麼？之前想說沒用到，沒好好理解，這週不得不理解啦！終於....寫完作業，看看時間，原來已幾個小時過去 XD 
  一開始對於 `<script>` 能夠做跨網域感到問號，後來反覆細看才發現，原來 script 裡面的 "src" 才是重點啊！ 恍然大悟，原來以前剛玩 html 就是試用過，比較印象深刻應用，是幾年前在寫楊春網頁（系所上的選修課），我要製作一個幸運轉盤的東西，誤打誤撞地成功引入了別人的 JS，我只要修改轉輪圖片上的每個獎品，修改每個角度下的獎品內容，就能使用啦！真是懷念，原來我真的用過！
  在 push 到 github 的過程中也發生了一個小狀況，就是改完 ESLint 後它 commit 完，相同的錯誤又出現，我試著重新開機看看，後來才想，是 VScode 沒有把我兩個 js 檔 加到儲存更新區，手動點擊後就解決啦，不然蠻納悶的，想說好不容易改好，卻又要再改一次。

### 3. 直播檢討
  這週有提問（關於使用單位），老師的解答也很直接，就是看情況使用！另外，有些問題自己也有疑惑，突然覺得有直播檢討真好。

### 4. week 10 回顧
  再次閱讀老師的 [輕鬆理解 Ajax 與跨來源請求](https://blog.techbridge.cc/2017/05/20/api-ajax-cors-and-jsonp/)，透過複習了 API、AJAX、XMLHttpRequest、CORS、JSONP 等概念，特別細看 Preflight Request，因為回看時居然對它沒印象，好一個 Method 為 Options 的東西，用於確認後續的請求能否送出，沒過的話 Reuqest 就不會送出。回顧助教批改後的作業，被提醒要把 `console.log()`系列刪掉。最後，把自我檢測的題目自己回答一遍。

---
## 第九週
> 這週有件趣事發生，就是我此刻才發現 mattermost 上的 "閒聊 channel" (暈
打算等碩班口試結束，再加入 WTF 小樹屋>< (期待

### 1. 上課心得
- [BE101]
  一直看到 "PHP 與 MySQL 的互動：新增資料"，開始卡住，或是需要回看數次，非常認同這句語法非常難看：`query("insert into xx(xxx) values (' " . $yyy . "')");` 

  php 與 html 混搭的那段，好難看懂。
  在製作登入的驗證：去資料庫尋找 username & password，對這部分感到新奇，畢竟這是日常生活會做的事，一探背後的原理。
  一開始不明白為何 `add.php` 後又要再一個 `add_handle.php`，看到後面的範例就明白了
  [BE101] 筆記的部分，有一半是跟 CSS 有關的哈，像是有文字框通常會用到 `word-break`、`white-space`、水水的 border 通常加上 `box-shadow` 跟 `border-radius`
  
  覺得語言細節有差，但大致差不遠，變數前加 "$" 覺得還好，倒是加 ";"，因為在寫 JS 上已習慣不加分號，這個倒是要適應一下。

### 2. 解題心得
- hw 1
  從一開始的邊做邊看，開始寫筆記，然後實作時減少觀看影片的頻率；之後看著筆記動工，真的卡關才打開 gitHub 的範例參考，到最後只看著筆記做出來，真是不錯的體驗。另外，自己也對 sql query 不熟悉，以為可以`"select * from users where username='%s' , password='%s'"`，殊不知應該是要中間放 "and"！


- hw 2
  我發現每次的論述題都會使用比我想像長的時間，原因當然是自己還沒釐清當中的概念，而且這次上網查找的資料不太一致，最後決定直接去 mySQL 官網查找資料。

### 3. 直播檢討
- 認識 cookie 的三個形態
- 發現 Google 有網站建構服務 
- 這週剛好有提問，老師稍作解釋後，最後娓娓道出在 week 11 後就不會遇到這問題了 XD
- 得知有期中、期末考，呵呵

### 4. week 10 回顧
- 後端的驗證是必須的！前端只是個小保全，後端才是真正的海關人員。
- Session VS Cookie
  Session 是通行證機制，可以在 Server 端存資料，可以在 Client 端設置 session id 來驗證身份。
  
  Cookie 本身是個儲存容器，身份驗證只是用途之一，或是說最著名的用途。

  覺得老師把 HTTP 無狀態比喻成面盲症真滴好猛！

---
## 第十週

- ### 綜合能力測驗

  一開始覺得怪怪地，從 `index.php/?mode=start`，一直到 `index.php/?mode=start&norestriction` ，
  五個提示都有跳出
根據提示修改 CSS 也沒反應，明明顯示 class="hidden" 但還是有顯示在頁面上，按鈕也顯示但按了也沒任何反應
此時看到 console 出現 
  > `error: Uncaught SyntaxError: Unexpected token '<'`

  **後來才發現裡面多了一個斜線**，刪掉後：`index.php?mode=start&norestriction`
整個版面突然變置中哈，且提示 3~5 也變 hidden 了，原來這才是正常的啊 XD
做到 提示 #5 : 別忘了遺漏的變數，卡關了一段時間，決定參考第四期學長姐的心得（掩面，原來還可以透過 console 賦值來設定關卡，太猛啦！

- ### r3:0 異世界網站挑戰
  
  lv 1-3 都順順地，到 lv 4 花了點時間，一開始還去找關於CSS Transparency 的屬性，後來才找到 lv4.css，從 class = "special" 去找裡面的 token ! 

  lv 5 畫面閃了一下，token 隱約浮現，~~該不會要考截圖的速度吧~~ 想不通後決定看學長姐心得，原來用 `esc` 即可

  lv 6，看到 lv6.js 裡面一堆不明符號 XD，使用 hint 後看到“也許這是 aaencode”，google 後看到老師這篇：[
讓 JavaSript 難以閱讀：jsfuck 與 aaencode](https://blog.techbridge.cc/2016/07/16/javascript-jsfuck-and-aaencode/)，裡面提到的顏文字寫程式！ 欸不是啊看起來沒有 aaencode 回傳 js 的工具，無從入手只好再次參考學長姐心得QQ，但我不想直接看答案，只好慢慢地滑，看到從 console 輸入 window 這個提示，那就來試試看吧，大海茫茫總算找到。

  lv 7 是好吃的餅乾，迅速找到

  lv 8 也是速速地爆頭破關

  lv 9 找到 php code 後就開始卡關...之後有時間再研究
