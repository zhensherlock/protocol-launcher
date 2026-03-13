---
url: /protocol-launcher/zh/apps/shortcuts.md
---

# Shortcuts

[Shortcuts](https://www.apple.com/cn/shortcuts/) 是 iOS、iPadOS 和 macOS 上的强大自动化工具，让你轻松完成更多任务。使用 Shortcuts，只需说几个字或轻点按钮，即可快速执行日常任务。你可以创建自定义快捷指令，将不同应用的多个步骤合并为一个流畅的操作，或者从图库中选择数百个预制的快捷指令。**Protocol Launcher** 允许你生成深度链接，以便打开 Shortcuts 并与你的工作流进行交互。

## 使用

提供两种使用方式：

* 按需加载（通过子路径导入），支持 Tree Shaking，体积更小。
* 全量导入（从根包导入），使用简单，但会包含所有应用模块。

生产环境建议使用按需加载以减小体积；快速脚本或演示可选择全量导入。

### 打开 Shortcuts

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'shortcuts' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'shortcuts.'}}open()
```

### 创建快捷指令

在 Shortcuts 中创建新的快捷指令。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'create' : 'shortcuts' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'shortcuts.'}}create()
```

### 打开图库

打开 Shortcuts 图库以浏览和发现快捷指令。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openGallery' : 'shortcuts' }} } from '{{ importPath }}'

// 打开不带搜索的图库
const url = {{currentMethod === 'On-Demand' ? '' : 'shortcuts.'}}openGallery()

// 打开带搜索查询的图库
const url = {{currentMethod === 'On-Demand' ? '' : 'shortcuts.'}}openGallery({
  query: 'photos',
})
```

### 打开快捷指令

在图库中打开特定的快捷指令。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openShortcut' : 'shortcuts' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'shortcuts.'}}openShortcut({
  name: 'Kaleidoscope Compare',
})
```

### 运行快捷指令

运行特定的快捷指令，可选择带输入。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'runShortcut' : 'shortcuts' }} } from '{{ importPath }}'

// 不带输入运行快捷指令
const url = {{currentMethod === 'On-Demand' ? '' : 'shortcuts.'}}runShortcut({
  name: 'Kaleidoscope Compare',
})

// 带文本输入运行快捷指令
const url = {{currentMethod === 'On-Demand' ? '' : 'shortcuts.'}}runShortcut({
  name: '将文本转为音频',
  input: 'text',
  text: '测试将文本转为音频',
})

// 带剪贴板输入运行快捷指令
const url = {{currentMethod === 'On-Demand' ? '' : 'shortcuts.'}}runShortcut({
  name: 'Add to Notes',
  input: 'clipboard',
})
```

### 使用 X-Callback-URL 运行快捷指令

使用 x-callback-url 协议运行快捷指令，以实现高级回调处理。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'xCallbackRunShortcut' : 'shortcuts' }} } from '{{ importPath }}'

// 不带回调运行快捷指令
const url = {{currentMethod === 'On-Demand' ? '' : 'shortcuts.'}}xCallbackRunShortcut({
  name: '计算小费',
  input: 'text',
  text: '24.99',
})

// 带成功和取消回调运行快捷指令
const url = {{currentMethod === 'On-Demand' ? '' : 'shortcuts.'}}xCallbackRunShortcut({
  name: '计算小费',
  input: 'text',
  text: '24.99',
  xSuccess: 'myapp://success',
  xCancel: 'myapp://cancel',
})
```
