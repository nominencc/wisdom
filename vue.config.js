const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: 8081,
    // 设置代理
    proxy: {  //配置跨域
          '/api': {
          target: 'https://open-cn.aqara.com/v3.0/open/api',  
          // ws: true,
          changOrigin: true,  //允许跨域
          pathRewrite: {
          "^/api": "" //这里理解成用'/api'代替target里面的地址,比如我要用'https://www.baidu.com/user/add'，直接写'/api/user/add'即可
                  }
              }
          },
  },
})
