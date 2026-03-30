---
url: /protocol-launcher/zh/apps/opener.md
---

# Opener

[Opener](https://www.opener.link/) 是一款 iOS 应用，允许你在其他应用中打开来自网页的链接。**Protocol Launcher** 允许你生成深度链接，用于在 Opener 中显示选项和商店产品详情。

## 使用

提供两种使用方式：

* 按需加载（通过子路径导入），支持 Tree Shaking，体积更小。
* 全量导入（从根包导入），使用简单，但会包含所有应用模块。

生产环境建议使用按需加载以减小体积；快速脚本或演示可选择全量导入。

### 显示选项

启动 Opener 并显示打开给定 URL 的可用选项。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'showOptions' : 'opener' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'opener.'}}showOptions({
  url: 'https://twitter.com/piercedavid/status/594646584232542208',
})
```

### 显示选项（禁用自动打开）

启动 Opener 并显示可用选项，但不进行自动打开。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'showOptions' : 'opener' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'opener.'}}showOptions({
  url: 'https://example.com',
  allowAutoOpen: false,
})
```

### 显示商店产品详情

在 Opener 中的 SKStoreProductViewController 或 iOS 商店应用中显示 iTunes 产品的详情。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'showStoreProductDetails' : 'opener' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'opener.'}}showStoreProductDetails({
  id: '989565871',
})
```
