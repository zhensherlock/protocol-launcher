---
url: /protocol-launcher/zh/apps/orion-browser.md
---

# Orion Browser

[Orion Browser](https://browser.kagi.com/) 是 Kagi 为 Apple 设备打造的 WebKit 浏览器。**Protocol Launcher** 允许您生成深度链接，以在 iOS 版 Orion Browser 中打开 URL 和搜索。

## 使用方式

有两种使用此库的方式：

* 按需导入（On-Demand）：从子路径导入支持 tree-shaking，保持较小的打包体积。
* 完整导入（Full Import）：从根包导入更方便，但会包含所有应用模块。

生产构建建议选择按需导入；快速脚本或演示可以使用完整导入。

## 说明

此模块遵循 Orion Browser 官方 [FAQ](https://browser.kagi.com/faq.html)，其中记录了 iOS 的 `orion://open-url?url=url` 和 `orion://search?q=query` schemes。

### 打开 URL

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openUrl' : 'orionBrowser' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'orionBrowser.'}}openUrl({
  url: 'https://browser.kagi.com/',
})
```

### 搜索

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'search' : 'orionBrowser' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'orionBrowser.'}}search({
  query: 'privacy browser',
})
```
