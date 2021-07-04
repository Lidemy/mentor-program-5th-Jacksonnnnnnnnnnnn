## 請說明雜湊跟加密的差別在哪裡，為什麼密碼要雜湊過後才存入資料庫

雜湊：不可逆，使用演算法，將資料轉換成看似亂碼的字串。我們無法從轉換後的樣貌(雜湊值)，去推導出原本的模樣(原密碼)。

加密：可逆，加密跟解密必須要有金鑰（Key）才能進行。

差別：雜湊不可逆，無法追溯源頭（或是超級無敵費時），給予的安全保護較佳。

## `include`、`require`、`include_once`、`require_once` 的差別

`include`: 函式會將指定的檔案讀入並且執行裡面的程式，適合用來匯入動態的程式程式碼。

`require`: PHP 程式在執行前，就會先讀入 require 所指定引入的檔案，使它變成 PHP 程式網頁的一部份，通常用於匯入靜態的內容。

兩者差別：`include` 是當 PHP 在讀到 include 的檔案時，才將它讀進來。而 `require` 則是 PHP 在執行前，就會先讀入所指定引入的檔案。此外，兩者對於 Error 處理也略有不同，若無法取得檔案時，`include` 會給 warning 並繼續執行，而 `require` 則是直接終止頁面的程式，不再執行。 

`include_once` & `require_once`: 使用方法跟include、require一樣，差別在於在引入檔案前，會先檢查檔案是否已經在其他地方被引入過了，若有，就不會再重複引入。

## 請說明 SQL Injection 的攻擊原理以及防範方法

使用者可以透過能 input 的地方，使用 SQL query 來進行操作，導致背後的資料庫，會直接接收 SQL 指令，在輸出使用者想要的資訊，後台資料就不但被看光光，還會被惡意刪除或修改。

防範方法：使用 prepare statement，將舊有的 springf + % 更新！
```php
// 原本：
$sql = sprintf(
    "INSERT INTO tableName(tableColumn1, tableColumn2) VALUES('%s', '%d')",
    $STRING,
    $NUM
  );
  $result = $conn->query($sql);
  if (!$result) {
    die($conn->error);
  }
  
// 更改為：
$sql = "INSERT INTO tableName(tableColumn1, tableColumn2)
      VALUES(?, ?)";
  $stmt = $conn->prepare($sql);
  // 兩個 s === 兩個 string 變數
  $stmt->bind_param('ss', $nickname, $content);
  // 從 query($sql) 改為 execute()
  $result = $stmt->execute();
  if (!$result) {
    die($conn->error);
  }
  // 取值 (若需要的話)
  $result = $stmt->get_result();
```

##  請說明 XSS 的攻擊原理以及防範方法

Cross-site scripting 的縮寫，主軸就是放在 scripting。使用者可以在 input 的地方加入 script tag，如 `<scipt>alert(123)</script>` 或 `<h1></h1>`，讓理論上要輸入純文字的地方，變成可以執行的程式碼。

防範方法：在輸出的 encoding 上做處理，讓瀏覽器不會任意執行 JS 程式，讓它們成為純文字。PHP 可使用內建 htmlspecialchars 函式
example: `htmlspecialchars($str, ENT_QUOTES);`

## 請說明 CSRF 的攻擊原理以及防範方法
全名為 Cross Site Request Forgery，跨站請求偽造，又稱作 one-click attack，因為只要誤點一下就中招。利用瀏覽器的 cookie 機制來製造攻擊機會。因為瀏覽器是透過 cookie 來認使用者的臉，若取得 cookie，也等於取得你的臉，瀏覽器基本上會以為本人在自行操作，不會做出任何防備動作。

常見防範方法：
1. 每次使用網站後就登出，把通行證藏好
2. 檢查 request header 裡的 referer 欄位
3. 加上圖形驗證機制、簡訊驗證等
4. 加上 CSRF Token 
5. Double Submit Cookie
6. SameSite Cookie