---
url: /protocol-launcher/zh/apps/houdahspot.md
---

# HoudahSpot

[HoudahSpot](https://www.houdah.com/houdahSpot/) 是一款 macOS 文件搜索应用。**Protocol Launcher** 可以生成 HoudahSpot URL scheme 链接。

## 使用

有两种方式可以使用此库：

* 按需从子路径导入，支持 Tree Shaking 并保持包体积较小。
* 从根包完整导入更适合快速脚本或示例，但会包含全部应用模块。

生产构建建议使用按需导入；快速演示可以使用完整导入。

## 说明

HoudahSpot 官方用户指南只定义了一个用于启动搜索的 URL scheme 端点：`houdahspot4://search?q=QUERY&location=PATH&template=PATH&s=ATTRIBUTE`。此模块只暴露这个已文档化的端点，以及文档中列出的搜索属性。

payload 使用官方 URL 格式中的参数名：`q` 是搜索字符串，`location` 是一个或多个待搜索文件夹路径，`template` 是包含 `.hstemplate` 扩展名的模板路径，`s` 是搜索属性。同时也支持 HoudahSpot 文档列出的别名：`query`、`l`、`t` 和 `search`。官方文档列出的 `s` 或 `search` 值为 `name`、`content` 和 `anytext`。

### 搜索

使用官方文档支持的参数组合启动 HoudahSpot 搜索。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'search' : 'houdahspot' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'houdahspot.'}}search({
  q: 'Houdah Software',
  location: '~/Documents',
})
```

### 按名称搜索

启动 HoudahSpot 搜索，并将搜索属性设为 `name`。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'searchName' : 'houdahspot' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'houdahspot.'}}searchName({
  q: 'invoice',
  location: '~/Documents',
})
```

### 按内容搜索

启动 HoudahSpot 搜索，并将搜索属性设为 `content`。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'searchContent' : 'houdahspot' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'houdahspot.'}}searchContent({
  q: 'project plan',
  location: '~/Documents',
})
```

### 按任意文本搜索

启动 HoudahSpot 搜索，并将搜索属性设为 `anytext`。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'searchAnyText' : 'houdahspot' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'houdahspot.'}}searchAnyText({
  q: 'tag:orange',
})
```

## 生成的 URL

```ts
search({
  q: 'Houdah Software',
  location: '~/Documents',
})
// => 'houdahspot4://search?q=Houdah%20Software&location=~/Documents'

searchName({
  q: 'invoice',
})
// => 'houdahspot4://search?q=invoice&s=name'

searchContent({
  q: 'project plan',
})
// => 'houdahspot4://search?q=project%20plan&s=content'

searchAnyText({
  q: 'tag:orange',
})
// => 'houdahspot4://search?q=tag:orange&s=anytext'
```

## 官方文档

* [HoudahSpot User Guide](https://www.houdah.com/houdahSpot/help/HoudahSpot%20Help%20EN.pdf)
