# Electron_Notebook

最近几个月的学习让我意识到目前一个巨大的问题

过于依赖视频教学以至于不知道怎么开始一个没有视频的学习。

这是一个基于文档学习的Electron学习计划，会有一定的视频辅助，主要还是通过阅读文档以及敲案例来完成学习。



## [打造你的第一个 Electron 应用](https://www.electronjs.org/docs/tutorial/first-app#打造你的第一个-electron-应用)

```
npm init
```

开发依赖项安装

```
cnpm install --save-dev electron
```

## [使用 VSCode 进行主进程调试](https://www.electronjs.org/docs/tutorial/debugging-main-process-vscode#使用-vscode-进行主进程调试)

添加一个 `.vscode/launch.json` 文件并使用以下配置：

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Debug Main Process",
      "type": "node",
      "request": "launch",
      "cwd": "${workspaceFolder}",
      "runtimeExecutable": "${workspaceFolder}/node_modules/.bin/electron",
      "windows": {
        "runtimeExecutable": "${workspaceFolder}/node_modules/.bin/electron.cmd"
      },
      "args" : ["."]
    }
  ]
}
```

## 通知栏以及断网判断



```js
addEventLinster('online',()=>{
console.log('online')
})
```



# BUG记录

## 1 npm ERR! missing script: start

结果是路径错了，本该放在package.js的路径下敲npm start，结果在根目录下敲了

## 2 Attribute 'runtimeExecutable' does not exist

以为还是路径错了，就修改了一下launch.js

但是，改了又是另一个错误，最后只好把app文件夹删除，把库文件，main.js之类的文件放到根目录下，最后解决了，难道vscode的调试文件只能在根目录放着么？

## 3 打开重复窗口

多复制了一行

## 4 断网不被检测

暂时无法解决