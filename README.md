# wx-app-Demo
微信小程序

###  重要的文件
1.wxml  view结构   ----> html
2.wxss  view样式   ----> css
3.js    view行为   ----> js
4.json文件：       数据 && 配置


###  注册小程序：  app()
###  注册页面：    page()
###  数据绑定：
          1.在data中初始化页面所需要的数据，在页面可以直接使用

###  事件（冒泡事件 || 非冒泡事件）
          1.冒泡事件：  bind + 事件名
          2.非冒泡事件： catch + 事件名

###  模板template
          1.定义： template属性： name（标识模板）
          2.使用： template属性： is（模板的name）
          3.引入模板结构： <import src='路径'>
          4.引入模板样式： @import '路径'
          5.传参： data='{{...item}}'

###  列表渲染
          1.wx:for
          2.wx:key  为每个个体元素进行标记
          3.遍历的个体 item
          4.遍历的下标 index

###  本地缓存（setStorage, setStorageSync）
          1.缓存的是用户是否收藏了当前文章{0：true, 1: false}
          2.注意 ：
               1.缓存之前应该先去获取缓存之前的数据
               2.缓存的新数据是在原有的数据上进行的
               3.当页面加载的时候onLoad中获取本地缓存的数据（动态修改缓存中的数据）
               4.第一次获取缓存时，需要初始化数据

###  音乐播放
         将播放音乐的页面状态缓存到 appData中
          
