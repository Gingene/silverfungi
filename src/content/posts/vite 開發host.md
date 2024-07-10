---
title: 將vite當live server和開發時在其他設備開啟
published: 2024-07-10
description: 'vite當live server和開發時在其他設備開啟'
image: ''
tags: [Vite, Blogging]
category: ''
draft: false 
---

vite 作為近年相當火熱的前端建構工具，在 2023 Javascript 年度調查中獲得各類獎項
詳細資訊可參照 [State of JavaScript 2023](https://2023.stateofjs.com/en-US/)

這邊跟大家分享一些小知識，首先

1. vite功能之一是開發伺服器 (dev server)
2. vite中的打包工具是 Rollup 

有些人可能會誤以為vite是打包工具
所以在這邊演示一下在單純的只有html的環境下使用vite

要使用vite 開起網頁的話要使用vite CLI指令，要全域安裝vite
不過通常是不需要安裝這個Cli, 要建立專案通常是用以下指令就可以了

```sh
npm create vite@latest
```
所以這邊就使用npx呼叫就好


先建立一個index.html
![image](https://github.com/Gingene/astro-portfolio/blob/main/public/vite-post/vite1.png?raw=true)

打下面指令
```sh
npx vite
```

這邊需要安裝必要的package
![image](https://github.com/Gingene/astro-portfolio/blob/main/public/vite-post/vite3.png?raw=true)

安裝完專案下會新增的.vite資料夾
這時候已經可以開啟網頁了
![image](https://github.com/Gingene/astro-portfolio/blob/main/public/vite-post/vite4.png?raw=true)

畫面開啟成功
![image](https://github.com/Gingene/astro-portfolio/blob/main/public/vite-post/vite5.png?raw=true)

不過你有注意到這邊嗎?
![image](https://github.com/Gingene/astro-portfolio/blob/main/public/vite-post/vite-host.jpg?raw=true)

其實這邊很容易被忽略掉就是可以在後面增加參數 --host  
這在官方文件也有說明[CLI](https://vitejs.dev/guide/cli.html)  
相信對很多開發者也是常識，老實說一開始很猶豫要不要寫這篇出來  
不過想到應該有些初階開發者(像我)不知道有這功能  
乾脆還是當一篇筆記文寫下。

關掉重新輸入
```sh
npx vite --host
```
![image](https://github.com/Gingene/astro-portfolio/blob/main/public/vite-post/vite-network.png?raw=true)

可以看到下面多了一些IP可以點擊，  
這邊IP是你的區網內你目前開發電腦的IP位址，  
這邊會看到兩個IP是因為我目前設備有開WSL2，有虛擬網段的應該就會看到  
其他區網內的設備皆可以跟這台電腦連線開啟網頁，  
你可以在手機、平板或是其他設備**看到目前開發的畫面**  
這對於想在開發階段就先用手機debug或是雙電腦開發的人應該都蠻方便的

手機開發的畫面
![image](https://github.com/Gingene/astro-portfolio/blob/main/public/vite-post/vite-mobile1.png?raw=true)

### 專案模式

專案的話可以在package.json中在scripts內新增指令以後只要跑這段指令就可以了
```json
{
    "scripts": {
        "dev": "vite",
        "host": "vite --host",
    },
}
```

或者也可以在vite.config.js的server項目新增host為ture或0.0.0.0 也可以達到相同效果
其他的前後端框架其實都可以設定，可以參考各家的官方文件這邊就不列舉了

後面可能會再補充一篇關於很難上雲的後端服務也要設定不然開發時只會看到網頁