﻿# crx_webpack4
使用webpack4+react全家桶构建的Chrome Extensions项目  
使用mvvm框架和UI框架也可以开发插件~

    npm run install  安装依赖
    npm run build  打包项目

### 1. 目录结构  
/page 路径下只是用react开发页面  
/static 路径为静态资源，Chrome Extensions的js什么的文件直接放到static，打包时会cp到dist目录  

### 2. 目前进度及更新计划
* 进度
  * 引入react/antd/less
  * 目前写死了2个入口，分别是popup和background，对应cxr最基础的2个页面
* 计划
  * 引入redux/axios/eslint/router
  * 封装content_script消息接口
  * 重写buildjs，支持更多cxr页面/js入口
