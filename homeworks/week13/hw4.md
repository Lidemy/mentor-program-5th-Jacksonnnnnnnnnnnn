## Webpack 是做什麼用的？可以不用它嗎？

Webpack 是 模組的 bundler，主要用途是把你的模組包好、整理且轉換(如壓縮)，讓使用者可以在瀏覽器上使用(引入)。好處是在前端開發將各種模組分門別類，使程式碼更明確及方便管理。對於模組的定義，webpack 提供一個叫 loader 的東西，可以決定載入什麼樣的檔案格式，除了 JS 外，webpack 也可以將圖片、CSS 等當成模組來進行包裝，用 JS 語法去引用不同模組。

## gulp 跟 webpack 有什麼不一樣？

gulp: 自動化各種 task，而 take 是使用者自己定義的，gulp 是用於管理任務。
webpack: 將不同模組打包，其中最大的用途是將瀏覽器無法支援的東西轉換成可以在瀏覽器上（例如 npm 上的某個模組無法在瀏覽器上使用，但經過 webpack 打包後，它就可以在瀏覽器上操作了），webpack 用於是打包模組的工具。
結論：gulp 無法打包但可以管理各種 task，而 webpack 無法管理 task 但可以打包各種模組。

## CSS Selector 權重的計算方式為何？
根據 [mozilla](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity) 的定義:
> Specificity is the means by which browsers decide which CSS property values are the most relevant to an element and, therefore, will be applied. Specificity is based on the matching rules which are composed of different sorts of CSS selectors.

可以得知權重是因應關係度而區分不同等級。

基本上的權重大小：
`inline style > ID > Class/attribute > Element > *`

終極霸王：
`!important` 
它能蓋過所有的權重
