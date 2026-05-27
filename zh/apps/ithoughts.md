---
url: /protocol-launcher/zh/apps/ithoughts.md
---

# iThoughts

[iThoughts](https://www.toketaware.com/ithoughts) 是一款思维导图应用。**Protocol Launcher** 允许你为 iThoughts 生成深度链接。

## 使用方式

提供两种使用方式：

* 按需加载（通过子路径导入），支持 Tree Shaking，体积更小。
* 全量导入（从根包导入），使用简单，但会包含所有应用模块。

生产环境建议使用按需加载以减小体积；快速脚本或演示可选择全量导入。

## URL 方法

以下 helper 对应 iThoughts 官方文档中的两个 x-callback-url 动作：`makeMap` 和 `amendMap`。

### 创建导图

将 Markdown 或文本转换成新的思维导图。官方文档明确列出的参数只有 `text`、`note`、`link`、`format`、`path` 和 `style`。iThoughts 官方文档列出的 `format` 值为 `md` 和 `text`，并支持在 `text` 参数中传入 `[[clipboard]]` 来使用剪贴板内容。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'makeMap' : 'ithoughts' }} } from '{{ importPath }}'

const markdownUrl = {{currentMethod === 'On-Demand' ? '' : 'ithoughts.'}}makeMap({
  text: '# Project\n- Collect ideas\n- Draft outline',
  note: 'Created from Markdown',
  link: 'https://www.toketaware.com/ithoughts-howto-x-callback-url',
  format: 'md',
})

const clipboardUrl = {{currentMethod === 'On-Demand' ? '' : 'ithoughts.'}}makeMap({
  text: '[[clipboard]]',
  format: 'text',
})
```

### 修改已有导图

通过传入已有导图的 `path` 和目标主题匹配字符串 `target` 来追加内容。iThoughts 官方文档中的 `edit` 值为 `YES` 或 `NO`；`YES` 会选中新主题并进入编辑状态。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'amendMap' : 'ithoughts' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'ithoughts.'}}amendMap({
  text: 'Follow up',
  path: '/tasks',
  target: 'newtasks',
  edit: 'YES',
})
```

## 官方文档

* [iThoughts x-callback-url](https://www.toketaware.com/ithoughts-howto-x-callback-url)
