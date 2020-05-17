<!--
 * @Author       : yuanrunwei
 * @Date         : 2020-05-17 16:38:29
 * @LastEditors  : yuanrunwei
 * @LastEditTime : 2020-05-17 17:25:51
 * @FilePath     : \ambre-miniprogram\README.md
--> 
#### 安装依赖
```
1.yarn install 
2.详情内勾选使用npm模块
3.工具内构建npm
```
#### 目录结构
```
├── components // 组件文件夹
│   ├── painter // canvas生成海报组件
│   └── titleBar // 标题栏组件
├── miniprogram_npm // 需构建后自动生成
├── pages // 页面
├── static  // 静态资源
│   ├── iconfont // 阿里字体图标库
│   └── image // 图片存放文件夹
├── utils
│   ├── axios.js // 请求方法封装
│   ├── util.js // 通用方法.js
│   └── util.wxs // 通用方法.wxs
├── wxss
│   ├── common.wxss // 通用样式
│   ├── layout.wxss // 布局样式
│   └── vant.wxss // VANT样式覆盖
├── .gitignore
├── README.md
├── app.js
├── app.json
├── app.wxss
├── package.json
├── project.config.json
└── sitemap.json
```

#### 环境配置
##### 使用方法
```
├── utils
    └── util.js
// 在上述路径中配置方法
wx.environment
```

#### 请求说明
##### 使用方法
```
wx.axios('/test',{                          // 请求接口绝对路径
  num:1                                     // 请求参数(非必填)
},{method:'POST'}).then(res=>{              // 请求扩展配置说明：
                                            // {
                                            //   method: 'GET' // 请求方法 非必填(默认值:POST)
                                            //   wait: true    // 是否阻塞重复请求 非必填(默认值:FALSE)
                                            //   loading: false // 是否显示加载图标 非必填(默认值:TRUE)
                                            //   fullPath: 'https://www.test.com/test' // 非必填(默认值:空)
                                            //   *fullPath说明：为贴合业务，传入fullPath则使用全路径请求
                                            //   *fullPath优先级高于默认请求路径
                                            // }

  console.log(res)                          // 获得返回结果
})
```