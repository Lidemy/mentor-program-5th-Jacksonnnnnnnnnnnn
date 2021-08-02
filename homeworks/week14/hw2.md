# 部署的心得

一開始 google 了幾篇文章來看，但因為想說選 AWS (畢竟免費一年)，搜著搜著就看到第四期學長姐的筆記，剛好當時才剛看完 week 13 檢討（我進度落後 :p），最後的部分老師提到 week 14 檢討會直接來直播教學，我就順理成章來個雙管齊下。過程中複習/認識一些專有名詞如 CLI 相關的 sudo、apt；架 Server 相關的 EC2、S3、RDS...
在架設 mySQL 後，有遇到 error message:
> Your password does not satisfy the current policy requirements

後來發現自己密碼少打一個空格，暈倒（想吐槽密碼設定，給別人選密碼強度 0，但真正要輸入時又說不符合強度規格 QQ)
在成功使用 loacal 端的 mySQL workbench 來連接後，下載 phpmyadmin，這時出現
> E: Could not get lock /var/lib/dpkg/lock’ Error in Ubuntu Linux”

看來是因為之前在安裝 phpMyAdmin 時，Git Bash 突然掛掉，只好關掉重開，但當時的安裝程序還在執行環境中。Google 後使用 ps aux | grep -i apt -> sudo killall apt apt-get 來清乾淨之前暫存的程序。

另外，Git Bash 每過一小段時間就會跳出 `client_loop: send disconnect: Connection reset by peer`，跳出這個 message 也代表說你的執行環境又回到 local 端了 == 搜尋後使用 `git config --global http.postBuffer 524288000`，跳出 reset 的機率變少。

目前仍是 [apache2 Ubuntu Default Page](http://jacksonli.tw/)

