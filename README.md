# webpack-demo
webpack & reactjs

## 安装
```
//项目fork下来后，安装依赖包
//进入项目根文件夹,打开控制台执行如下命令
npm install

```


## demo1
### 编译上线
在webpack.config.js里注释devtool选项，避免source map 代码冗余
将IS_PRO_MODE设置为true
```
cd demo1
webpack

```

### 开发热编译
还没调通
在webpack.config.js里开启devtool选项，打开source map，方便调试代码
将IS_PRO_MODE设置为false
```
cd demo1
node server

```
打开 http://localhost:8085/




