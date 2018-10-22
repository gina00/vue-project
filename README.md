## 项目说明
IBOP系统的开发主要是供中国移动客服人员使用，其中包含了登录模块、用户信息、产品菜单、综合信息、个人资料、产品信息、营销业务、套餐情况、我的账户、家宽信息等功能 。服务端主要作用在于模拟数据交互，针对客户端对数据的请求和处理作出响应。现对旧版系统做翻新修改，原有项目存在的问题：UI元素不统一（页面间距、文字，图标元素大小不统一），业务功能划分不细致，不够迎合潮流风格（比较老成），运行环境有限（ie8浏览器），现针对项目存在的问题做了相应修改。
但因客户对视觉效果的整改需求不高，迟迟未有重构进展，因此只有部分排版，功能尚不完善。

## 前端技术
1. vue
2. element
3. Webpack
4. Express

## 开发工具
VScode，Git

## 界面测试
IE9及以上、Chrome浏览器

## 开发环境依赖
node v0.10.28+

## 部署步骤
1.  npm install 安装项目依赖包
2.  node server/app 启动express 后台登录验证
3.   npm run dev 运行项目，端口8080
4.  用户名：admin 密码：abcd1234 

## 项目前端效果：

登录页：
![image](https://github.com/gina00/vue-project/blob/master/static/img/login.jpg)

首页：
![image](https://github.com/gina00/vue-project/blob/master/static/img/151615.jpg)

综合信息首页：
![image](https://github.com/gina00/vue-project/blob/master/static/img/22151634.jpg)

综合信息页：
![image](https://github.com/gina00/vue-project/blob/master/static/img/1151651.jpg)


## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
