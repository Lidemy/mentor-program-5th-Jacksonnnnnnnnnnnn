## 交作業流程

1. 創建 GitHub 賬號
2. 加入 Lidemy 第五期的 repository
3. 使用 Git clone + GitHub 上給予的 HTTPS URL 把檔案抓到 local 端 e.g. `git clone https://github.com/Lidemy/mentor-program-5th-Jackson.git ` 
4. 在 local 端完成作業
5. 使用 `git status` 查看分支狀態，想要細心一點可以加上 `git diff` 查看剛才新增或修改的內容
6. 建立屬於這份作業的branch並切換過去，以建立"week1" branch 為例：`git branch week1` || `git checkout -b week1`，前者是開啟一個新的branch，後者是開啟這個branch後再切換到新branch上，省略 `git checkout week1`這一步 
7. 新增版本名稱並 commit，以week1_hw為例：`git commit -am 'week1_hw'`
8. 將 local 端的 branch （week1）發送到遠端（GitHub）：`git push origin week1`
9. 確認 GitHub 上是否有新的 branch，並點擊 "Compare & pull request" 按鈕，將week1 branch 合併進去遠端master branch
10. 點擊 "Create pull request" 按鈕
11. 點擊 "Files changed" 確認新增/更改的作業內容是否正確，無需請直接到下一步，需要的話則是重新修改版本並再 push 一次： `git commit -am '更新版'` + `git push orgin week1`
12. 進入 Lidemy 學習系統，點擊課程總覽，選擇要繳交的作業週次，看"自我檢討"後，確認無誤把 GitHub 的 PR 連結送出
13. 到作業列表的連結查看是否有成功送出，完成交作業流程！