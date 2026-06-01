---
url: /protocol-launcher/zh/apps/textwell.md
---

# Textwell

[Textwell](https://sociomedia.com/textwell/) 是一款面向 iOS 和 macOS 的文本编辑器。**Protocol Launcher** 允许您生成 Textwell 的官方 URL scheme 链接。

## 使用方式

有两种使用此库的方式：

* 按需导入（On-Demand）：从子路径导入支持 tree-shaking，保持较小的打包体积。
* 完整导入（Full Import）：从根包导入更方便，但会包含所有应用模块。

生产构建建议选择按需导入；快速脚本或演示可以使用完整导入。

## 说明

Textwell 官方 URL scheme 文档说明，所有查询参数值都必须经过 URL 编码。Textwell URL scheme 支持文档中的 `x-success` 回调选项，`extendXSuccess` 可以让 Textwell 在回调 URL 上追加 `textwell-text`、`textwell-loc` 和 `textwell-len`。

`prefix` 和 `suffix` 只在官方文档中的四个粘贴方法上使用：`pasteReplace`、`pasteInsert`、`pasteAdd` 和 `pasteReplaceRange`。

### 打开

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'textwell' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'textwell.'}}open()
```

### 替换

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'replace' : 'textwell' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'textwell.'}}replace({
  text: 'Hello, Textwell.',
})
```

### 插入

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'insert' : 'textwell' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'textwell.'}}insert({
  text: 'Inserted text',
})
```

### 追加

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'add' : 'textwell' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'textwell.'}}add({
  text: 'New ending',
})
```

### 替换范围

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'replaceRange' : 'textwell' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'textwell.'}}replaceRange({
  replacingLoc: 7,
  replacingLen: 5,
  text: 'Textwell',
  selectingLoc: 0,
  selectingLen: 16,
})
```

### 粘贴方法

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'pasteReplace, pasteInsert, pasteAdd' : 'textwell' }} } from '{{ importPath }}'

const replaceUrl = {{currentMethod === 'On-Demand' ? '' : 'textwell.'}}pasteReplace()
const insertUrl = {{currentMethod === 'On-Demand' ? '' : 'textwell.'}}pasteInsert({
  prefix: '> ',
  suffix: '\n',
})
const addUrl = {{currentMethod === 'On-Demand' ? '' : 'textwell.'}}pasteAdd()
```

### 粘贴替换范围

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'pasteReplaceRange' : 'textwell' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'textwell.'}}pasteReplaceRange({
  replacingLoc: 7,
  replacingLen: 5,
  selectingLoc: 0,
  selectingLen: 16,
})
```

### 执行动作

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'executeAction' : 'textwell' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'textwell.'}}executeAction({
  title: 'Format Markdown',
})
```

### 导入动作

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'importAction' : 'textwell' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'textwell.'}}importAction({
  title: 'Hello',
  source: 'editor.setText("Hello")',
  iconTitle: 'star',
  desc: 'Create hello text',
  platform: 0,
  confirming: 1,
})
```

### x-success

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'replace' : 'textwell' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'textwell.'}}replace({
  text: 'Hello',
  xSuccess: 'shortcuts://callback',
  extendXSuccess: true,
})
```

## 生成的 URL

```ts
open()
// => 'textwell://'

replace({ text: 'Hello, Textwell.' })
// => 'textwell:///replace?text=Hello%2C%20Textwell.'

insert({ text: 'Inserted text' })
// => 'textwell:///insert?text=Inserted%20text'

add({ text: 'New ending' })
// => 'textwell:///add?text=New%20ending'

replaceRange({
  replacingLoc: 7,
  replacingLen: 5,
  text: 'Textwell',
  selectingLoc: 0,
  selectingLen: 16,
})
// => 'textwell:///replaceRange?replacingLoc=7&replacingLen=5&text=Textwell&selectingLoc=0&selectingLen=16'

pasteReplace()
// => 'textwell:///pasteReplace?'

pasteInsert({ prefix: '> ', suffix: '\n' })
// => 'textwell:///pasteInsert?prefix=%3E%20&suffix=%0A'

pasteAdd()
// => 'textwell:///pasteAdd?'

pasteReplaceRange({
  replacingLoc: 7,
  replacingLen: 5,
  selectingLoc: 0,
  selectingLen: 16,
})
// => 'textwell:///pasteReplaceRange?replacingLoc=7&replacingLen=5&selectingLoc=0&selectingLen=16'

executeAction({ title: 'Format Markdown' })
// => 'textwell:///executeAction?title=Format%20Markdown'

importAction({
  title: 'Hello',
  source: 'editor.setText("Hello")',
  iconTitle: 'star',
  desc: 'Create hello text',
  platform: 0,
  confirming: 1,
})
// => 'textwell:///importAction?title=Hello&source=editor.setText(%22Hello%22)&iconTitle=star&desc=Create%20hello%20text&platform=0&confirming=1'

replace({
  text: 'Hello',
  xSuccess: 'shortcuts://callback',
  extendXSuccess: true,
})
// => 'textwell:///replace?text=Hello&x-success=shortcuts%3A%2F%2Fcallback&extendXSuccess=true'
```

## 官方文档

* [Textwell URL Schemes](https://sociomedia.com/textwell/urlschemes/)
