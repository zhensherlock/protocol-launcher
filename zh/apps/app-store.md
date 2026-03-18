---
url: /protocol-launcher/zh/apps/app-store.md
---

# App Store

[App Store](https://www.apple.com/app-store/) 是由苹果公司为其 iOS、iPadOS 和 watchOS 操作系统开发和维护的数字分发平台。**Protocol Launcher** 允许你生成深度链接，用于在 App Store 中打开并配置资源。

## 使用

提供两种使用方式：

* 按需加载（通过子路径导入），支持 Tree Shaking，体积更小。
* 全量导入（从根包导入），使用简单，但会包含所有应用模块。

生产环境建议使用按需加载以减小体积；快速脚本或演示可选择全量导入。

### 打开 App Store

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'appStore' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'appStore.'}}open()
```

### 打开特定页面

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'appStore' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'appStore.'}}open({
  path: 'account/subscriptions',
})
```

### 搜索应用

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'search' : 'appStore' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'appStore.'}}search({
  query: 'things',
})
```

### 打开应用页面

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'app' : 'appStore' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'appStore.'}}app({
  id: '836500024',
})
```

### 打开应用页面并执行操作

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'app' : 'appStore' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'appStore.'}}app({
  id: '836500024',
  action: 'write-review',
})
```
