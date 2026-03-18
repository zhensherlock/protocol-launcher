---
url: /protocol-launcher/zh/apps/app-store.md
---

# App Store

[App Store](https://www.apple.com/app-store/) 由苹果公司开发，是 iPhone、iPod Touch、iPad 以及 Mac 的服务软件，允许用户从 iTunes Store 或 Mac App Store 浏览和下载一些为 iPhone SDK 或 Mac 开发的应用程序。**Protocol Launcher** 允许你生成深度链接，用于在 App Store 中打开并配置资源。

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
