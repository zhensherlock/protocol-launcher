---
url: /protocol-launcher/zh/apps/viber.md
---

# Viber

[Viber](https://www.viber.com/) 是一款即时通讯应用和 bot 平台。**Protocol Launcher** 可以生成用于 Viber bot 和 Chat Extension 工作流的 URL scheme 链接。

## 使用方式

有两种使用此库的方式：

* 按需导入（On-Demand）：从子路径导入支持 tree-shaking，保持较小的打包体积。
* 完整导入（Full Import）：从根包导入更方便，但会包含所有应用模块。

生产构建建议选择按需导入；快速脚本或演示可以使用完整导入。

### 打开 Bot 聊天

Viber 官方文档将 `context` 和 `text` 记录为 bot 聊天深度链接的可选参数。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openBotChat' : 'viber' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'viber.'}}openBotChat({
  chatURI: 'examplebot',
  context: 'checkout',
  text: 'Hi there!',
})
```

### 打开 Bot 信息页

Viber 官方文档将 bot 信息页深度链接记录为支持 Android 和 iOS，不支持 Desktop。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openBotInfo' : 'viber' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'viber.'}}openBotInfo({
  uri: 'examplebot',
})
```

### 打开 Bot QR 扫描器

Viber 官方文档将 bot QR 扫描器深度链接记录为面向移动端用户，并列出限制：Android 上 Viber 17.1.0.6 及以上、iOS 上 Viber 17.2 及以上，不支持 Desktop。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openBotQrScanner' : 'viber' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'viber.'}}openBotQrScanner({
  chatURI: 'examplebot',
})
```

### 打开 Chat Extension

Viber 官方文档记录了三种 Chat Extension 深度链接场景：打开默认页面、打开指定服务，或打开指定服务并传入搜索词。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openChatExtension' : 'viber' }} } from '{{ importPath }}'

const defaultUrl = {{currentMethod === 'On-Demand' ? '' : 'viber.'}}openChatExtension()

const serviceUrl = {{currentMethod === 'On-Demand' ? '' : 'viber.'}}openChatExtension({
  service: 'example',
})

const searchUrl = {{currentMethod === 'On-Demand' ? '' : 'viber.'}}openChatExtension({
  service: 'example',
  search: 'coffee',
})
```

## 官方文档

* [Viber DeepLinks](https://developers.viber.com/docs/tools/deep-links/)
* [Viber Chat Extensions](https://developers.viber.com/docs/guides/chatex/)
