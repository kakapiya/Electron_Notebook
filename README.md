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



## [菜单项](https://www.electronjs.org/docs/api/menu-item#菜单项)

注意是对象数组



## [原生文件拖放](https://www.electronjs.org/docs/tutorial/native-file-drag-drop#原生文件拖放)



我发现了一个严峻的事实，没有视频的帮助我什么都做不出来。文档中包含的内容太少了，这些例子完全不能直接使用，没有源代码我也就不懂怎么分析这些API之间的使用逻辑

```
ipcRenderer.send('ondragstart', '/path/to/item')
```

这句代码怎么也看不懂原因是，作为一个功能流程图，在没看到api文档前并不能直接使用，还需要继续去查，吐血了。

我觉得这东西完全应该放在api之后。







 