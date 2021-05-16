## 前四週心得與解題心得
簡介每一週的心得框架，固定部分：
1. 上課心得
2. 解題心得
3. 直播檢討
4. week 5 回顧（回顧時的額外發現）

### Week 1

這週最印象深刻莫過於“交作業的流程出錯”，在那週的禮拜天，往中壢的火車上，手機突然跳出 mattermost 訊息：
> 安安～我是助教老余，你的 week1 因為裡面只有 hw1 內容，所以我 close 掉，提醒你一下，需要放剩下的作業進去再發一次 PR，再繳一次作業喔～

『噢不！』我心中感到不妙，同時也有點小開心，畢竟是第一次收到助教的訊息，當天整天在外面，也沒帶筆電，因此隔天才補繳。整個 Debug 過程不太順利，所幸有老余大大循循善誘，加上 Google 大神，總算解決了問題，而問題大概是：**在開啟 week 1 branch 前，不小心先做了 git push origin master，在 week 1 branch push 完後，其實有看到 PR 的內容只有 hw1，但當我點出去 git 的頁面，week1 的每份作業都在 week1 的 branch，在 GitHub 頁面上也看到自己的作業內容，我就沒多加理會了（抱頭逃走**
> 在 Debug 過程中卡住的點是：
**我無法回到initial commit !**

實際原因我無法100%確定，估計是我在 clone 下來後，沒直接做個commit，在做完全部作業後才做第一次的 commit，而且還誤 push 到 origin master，導致電腦認為 initial commit 就是有寫作業的版本 (?

- 上課心得
  - 暖身週網頁前後端整體架構說明：
更清楚知道前後端的差別，當中提到要前端的硬體、系統跟頁面的關係，後端的 DNS Server 與 Database 的關係，甚至手機跟網頁的形態相若，這都是新知！
  - 筆記的部分：
一直有想過在網路上使用筆記，但卻沒想法，決定先選HackMD做自行記錄，有點東西後再移動到 coderbridge 上
  - HackMD：
曾使用Trello，當中有使用過HackMD，透過課程更了解它。

  - Git vs GitHub vs GitLab：
一直不太清楚他們之間的關係，以前大四做過前端 intern ，公司是使用 GitLab；同時 GitHub 也很常見，Google 後的 debug 資訊，偶爾是從 GitHub 找到解答，但怠惰又被動的自己卻一直沒去查看他們之間的關係，GIT101 這個課程解開我心中的疑問。
同事也蠻意外 GitHub 原來有這麼多的功能，如 Web Page，~~欸這樣是不是履歷直接用 GitHub 一條 Link 就搞定~~（誤

- 解題心得：
解題心得的部分，過程蠻順利，~~因為不是打code啊~~交作業流程是參考老師的影片，邊看邊記錄。作業 4 比我想像中多花時間，在做作業的同時回看[GIT101]，不知不覺就寫了很多步驟，寫到後面有點累，因為 Git 牽涉的東西有點多，不容易使用一兩句話，就能概要它的資訊。在找『課程沒有提到』的 command line 時，一開始打算只要沒看過就加到作業裡吧，但想一想就停住了，自己不該為交而交！後來篩選的條件就是以會用得到的機率高低來選。作業 5 比我想像中少花時間xd，在做作業的同時很自然地回看了 [CS101] 及 [MTR05] 的一些部分，因為當初看的時候，印象響蠻深刻的，所以很迅速找到要回答的重點，只能說老師解說時圖文並茂能更讓我更印象深刻。

- 直播檢討
1. 知道了好多新知：如 globbing、git 的指令如 `cherry-pick` （選特別要的commit）、`rebase`（線圖的差別）、`squash`（commits壓成一個）。
2. 認同老師對於 sourceTree 的回應，GUI 對新手來說的確不是個好練習的空間，當年大四實習有用過，只是勉強會用但不了解當中的原理。
3. 看到有同學詢問面試的問題，覺得問得有點早（還是這位同學進度已經超級無敵前xD）

- week 5 回顧
先把寫過作業看過一遍，再看自我檢討，才發現原來自我檢討好多重要訊息，當時第一週只顧著繳作業，很隨意地把他看完，實在慚愧。接續看自我檢測，每一題自己跟自己簡略回答後，最後來寫了一個公開的筆記：
[week 1 筆記](https://hackmd.io/WQZ8rNeUQeu-noj6qAqllQ?view)

### Week 2
- 上課心得
  - 從博物館寄物櫃理解變數儲存模型：變數這東西聽過無數次，賦予值的概念也懂，但原來還可以深入去探索，實在有趣。
  - 什麼是無窮迴圈什什麼是無窮迴圈什麼是無窮迴圈麼是無窮迴圈什麼是無窮迴圈什麼是無窮迴圈什麼是無窮迴圈...
  - Immutable 的概念：自己聽完還無法完全吸收，看從博物館寄物櫃理解變數儲存模型後有比較懂，感覺需要定期要回看一下。
  - 新知：Lable & goto、for loop 初始值可以不寫、function再傳function
  - JS101 綜合練習：題目還好畢竟是 Lv1，倒是剛開編譯器時有點問題，一開始想說來用個 command line 建個 test.js，沒想到卻花了不少時間 ==，我用 windows 的 VS code 裡的 powershell，發現無法用 touch，google後用 echo 建，卻發現了 BUG，跟下方的問題一樣：
[Syntax Error: Invalid or Unexpected Token when running a nodejs file using Visual Studio Code (Using powershell)](https://stackoverflow.com/questions/64222605/syntax-error-invalid-or-unexpected-token-when-running-a-nodejs-file-using-visua)


- 解題心得
  1. For loop 中， i 範圍值的設定，最近在資料處理上慣用加上length，以致於明明是數字卻也打成 `數字.length`
  2. hw 5 中，`join()`的部分差點沒注意到要把最後一個重複的concatStr 拿掉，最終使用了`slice`，把最後一個多餘的值拿掉。
  3. undefined : 沒回傳值就會顯示，解釋了為何有時console.log()後會出現這東西
  4. ++i vs i++ : 前者會優先執行
  5. hw 6 人肉 Debug 的部分，覺得很有趣。

- 直播檢討
  - 新知的部分：
  1. "==="
  ```
  var a1 = 0
  var a2 = 0
  var a3 = 0

  a1 === a2 === a3 
  // return false 的原因 : (a1===a2) === a3
  ```

  2. if else 的縮寫
  ```
  if (a>b) return c
  ```

- week 5 回顧：
把作業寫過一遍，再看自我檢討，一些題目迅速解決，一些則是有點卡（所幸最後還是完成了）。這次較卡的題目，回想當時第一次做，好像也是卡這些題，慶幸自己卡的時間減少了XD。在比對這次重寫及第一次繳交的內容，不外乎是對 JS 更認識。以 hw 2 為例，發現自己第一次做的時候有使用 Regular Expression，但自己當時根本不知道這東西的名堂，純粹就是 google 後，參考 stackoverflow 後直接複製貼上，
```
//第一次繳交
if ((/[a-zA-Z]/).test(str[0]) == true) { ... }

//重寫
if (str[0] == /A-Z/) { ... }
```
不僅刪掉沒用的部分（a-z），同時也簡潔許多。


### Week 3
這週印象較深刻的地方在於作業 5 及 ESLint 的部分。
- 上課心得
  - 了解一些常見但不懂/似懂非懂的東西，像 NPM、require、export，影片的講解內容淺顯易懂。
  - ES6 是個酷東西
- 解題心得
  - LIOJ 的部分：凱撒加密，主要花時間在換算超過 z 後的運算公式，結論是超過就` -122 + 96`。另外，對於將內建函數功能寫出來，感覺蠻妙的。
  - 作業 1-4 做的蠻順利，作業 5 卻耗了蠻多時間，對於 JS 的原始型別，自己還是有很多學習的地方，卡了兩天後在 GitHub上發文，得知是單位問題其實當下也不太知道怎麼解，過一陣子發現另一位同學也發問關於 Hw5 ，但問題跟我不太一樣，卻從他的程式碼發現 `BigInt` 這東西！（後來在作業檢討發現老師也有提到，但不建議用就是了），迅速應用在我的 code 上，一開始有 runtime error，但也很開心，至少是對了XD，後來修改了設定變數的方式：
  ```
  // old version
  let temp = lines[i].split(' ')
  let A = BigInt(Number(temp[0]))
  let B = BigInt(Number(temp[1]))
  let K = BigInt(Number(temp[2]))

  // updated version
  let [A,B,K] = lines[i].split(' ')
  ```
- ESLint：
  早上要繳交作業，先`npm install`再做 commit ，然後發現有 ESLint failed，是 failed 而不是 error，~~欸是不是格式全對所以ESLint嚇到了~~ 在 mattermost 詢問後，被建議刪掉 node_modules 再重裝，*想說簡單啦*，結果給我跳出權限問題（有夠傻眼），Google「用戶端沒有這項特殊權限」後得到解答，重裝後還是一樣 failed，在後來透過 stackoverflow 發現是 node 版本的問題，更新後問題解決，卻不知是另一個巨人的出現（最近在看巨人 S5，兵長你可以不要那麼帥嗎嗚～～）...
  還行啦，不過是從 186 problems 一直改到 0 problems 而已 XD
  但說實話，改完 hw1 及 hw2 後，大概抓到需要改的 pattern，直接就不看 error message 來處理掉剩下的 hw3 - hw 5，大概整理出最需要改的三樣東西
  >
  1. space 
  2. from 'let' to 'const' 
  3. function沒被引用，所以加上 //eslint-disable-next-line

- 直播檢討：
  ~~可惡！我也要去日月潭玩~~
  看到一些零基礎的同學提問，對於無法抓住解題方法蠻深同感受，當初懵懂的自己連迴圈都搞不懂....回想我開始熟悉迴圈的操作、程式的邏輯，其實是看了 **[ALG 101]**，真心不騙，到目前為止，我個人收穫最多的課就是 [ALG 101]，我目前也很菜，但蠻感恩在第五期前，機緣巧合上了 [ALG 101] 一半的課程，讓我在 week 2, 3 進度都蠻不錯，沒遇到大卡關嗚嗚。

- week 5 回顧：
算是接續昨天的 week 2 重溫，內容無縫接軌，這次先看了一遍自我檢討，再開始做，或許是時間點比較近，也算是有印象，若是有卡關的題目，就引用一些使用過的片段 code（倒是好奇面試時有可能帶小抄嗎 XD），在比對自己當時的作業，發現自己有點進步 XD，以 水仙花數那題為例子：
```
//old version
function solve(lines) {
    var line = lines[0]
    var t = line.split(' ')
    let N = Number(t[0])
    let M = Number(t[1])
    for (let i=N; i<=M; i++) {
        if (Narcissistic(i) === true) {
            print(i)
        }
    }
}

//new version
function solve(lines) {
  let [N, M] = Number(lines[0].split(' '))
  for (let i = N; i <= M; i++) {
    if(isNarcissistic(i)) {
      console.log(i)
    }
  }
}
``` 


### Week 4
- 上課心得
  - [NET101]：傳紙條的故事，huli 再次將枯燥乏味的東西用生動有趣的手法描述，讓人進入情境的同時也能搞懂要學的東西。DNS server這東西我之前似懂非懂，用故事中的郵差做比喻，秒懂！HTTP status code 這個部分，認識1234開頭之間的差異
  ```
  let arr = [1,2,3,4,5]
  let [hold on, here you go, go away, you fucked up, I fucked up] = arr
  ```
  這個例子也很容易懂噗。另外，得知 JSON 及 XML 的主要差別，在於佔用體積數。也知道如何用JS 做轉換 ( JSON 與 Object 互轉）
- 解題心得
這次在變數上幾乎都用 ES6 語法，覺得看起來有點療癒xd
  1. 作業一：很可以，只是因為檔案在新開的資料夾，還未載 npm，導致第一次發動 node 有錯誤。
  2. 作業二：一開始愣住，想說這 three 小 xd，後來打開提示，得知 `process.argv`這東西，看了好幾個文件/介紹才搞懂，使用 switch ，將 `process.argv[2]` 作為每個條件，呼叫到該名稱就執行。
  3. 作業三：一樣使用`process.argv[2]` 作為條件，比較 tricky 的點是貨幣要再一個迴圈，感謝老師之前紮實的課程，這題也蠻快解出來。
  4. 作業四：花了點時間在申請 ClientID，被 Twitch 得知我的電話號碼惹~~可惡~~，認識 headers 如何應用，我將它設定為一個 function 再丟到 `request ( )` 中。 
  5. 作業五：看過老師的拉麵店販賣機例子 及 YouTube 的 What is an API 以 waiter 做比喻後，我也在默默地想屬於自己的版本。想到以**系統分析師**當例子 :p
  關於 HTTP status code，在查找資料時看到 [非官方惡搞版 HTTP Status Code](https://github.com/tomdionysus/foaas/blob/master/HTTPSE.txt) XD
  6. 滿心歡喜準備繳交，在 commit 完才想起還有 ESLint 這一關嗚，這次有 107 problems，大概有 80% 都是跟空格有關。
- 參考第四期學長姐筆記
參考第四期學長姐的動機來自 hw2 ，因為一開始 google `process.argv`，但看了幾個網頁也不知道實際要如何應用，剛好其中一個搜尋結果是上一期學長姐的筆記，只是那篇比較是答案呈現，我想來找點相關講解文章，一探究竟 `process.argv` ！
- CS75 [CS75 (Summer 2012) Lecture 0 HTTP Harvard Web Development David Malan](https://www.youtube.com/watch?v=8KuO4r5CHjM)
  - 想說該看都看完了，照著老師說的去看看 CS75，剛好打算6月底考個多益，順便練練英聽（疫情又大爆發，也不知道能否準時考試）。剛開始 David 直接問瀏覽器點擊後會發生什麼事，立馬想到之前課程描述過的畫面。一開始都是說一些 root, path, hard drive 相關，到13分鐘左右老師詢問，沒學生問問題有點讓我意外 XD （因為之前看的關於國外頂大的影片，通常總會有一兩個學生問問題，不過一直看下去倒是有不少人發問）因為影片接近兩小時，我就列出一些我印象較深刻的部分：
  1. godaddy.com (我還搜尋了一下 jackson 的網址，還有不同價位呢噗）
  2.  2013 年的網頁 interface，真讓人懷念，當時我才國中生 XD
  3. Every Domain name got 2 Domain Name Server （main && backup )
  4. 到中段介紹課程出席、作業、分數計算等等，了解到頂大的某堂課的上課模式， BTW 出席率這個問題在頂大也是會被詢問的 xD
  5. 看到 2013 年進入 VM 的畫面
  6. 當時是 HTML 5，現在 2021 年也只不過是 5.2，看來 HTML 也是發展近乎完成。
  7. 使用 nslookup 後，操作 ` vi \etc\hosts`，進入 vim 編輯，可以自己設定網址名稱，但我在 local 端測試後卻不成功。

- 直播檢討：
加深理解`try {...} catch {...}` ，特別喜歡老師講實際例子，幫助我們理解什麼時候需要用到這功能。同時知道原來會視乎 Bug 的影響度而去選擇是否解決它。
- week 5 回顧：
記憶猶新，畢竟上週才繳交，從助教的評論得知自己要視乎不同情況加客制化的 error message，才能在錯誤發生時，讓使用者明確了解哪一塊有錯誤。

### 挑戰題
- HTTP Challenge （LV 4）
- LIOJ 1016,1017,1018

1016 不合群的人：感謝老師之前的教導，寫得蠻順的，第一次 submit 有 error，後來察覺到沒將所有的特殊情況納入條件，例如：全部數值都是 A 或 B。

1017 貪婪的小偷：在 week 5 前做過（自己也忘了），經過 week 3 的洗滌後，回看自己的 code，一看就知道會被 ESLint "problem爆" XD 不論是空格、還是 let, const 的運用，也順便回看自己在 LIOJ 上 wrong answer 的記錄 XD，所以主要在格式上的改動，以符合 ESLint 格式。

1018：卡關中

這週因著疫情爆發，生活上有些調整，導致時間變少了，所以剩下的 LV5 - LV 10 及 LIOJ 1018，可能等下一個複習週再處理，之後幾週有空閒時再回頭來寫。