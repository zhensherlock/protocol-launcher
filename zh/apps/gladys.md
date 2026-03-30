---
url: /protocol-launcher/zh/apps/gladys.md
---

# Gladys

[Gladys](http://www.bru.build/app/gladys) 是一款适用于 iPad 的拖放搁架应用，可以临时存储您想要放置的内容，例如链接、文本片段、地图位置、联系人、图像、照片、电子邮件、消息等等。**Protocol Launcher** 允许您生成深度链接以在 Gladys 中创建项目和从剪贴板粘贴。

## 使用方式

有两种使用此库的方式：

* 按需导入（On-Demand）：从子路径导入支持 tree-shaking，保持较小的打包体积。
* 完整导入（Full Import）：从根包导入更方便，但会包含所有应用模块。

生产构建建议选择按需导入；快速脚本或演示可以使用完整导入。

### 创建文本项目

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'createItem' : 'gladys' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'gladys.'}}createItem({
  text: 'Hi There',
  title: 'Greeting',
  labels: 'Created Items,New Items',
  note: 'Some Notes',
})
```

### 创建 URL 项目

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'createItem' : 'gladys' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'gladys.'}}createItem({
  url: 'http://bru.build',
  title: 'The Gladys Guy',
  labels: 'Developer,iOS,macOS,Embedded',
  note: 'Some Notes',
})
```

### 创建 Base64 数据项目

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'createItem' : 'gladys' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'gladys.'}}createItem({
  base64data: 'RXhhbXBsZSB0ZXh0IGZpbGUuCg==',
  title: 'Test.txt',
  labels: 'Text Files',
  note: 'Pretending I am a file',
})
```

### 粘贴剪贴板

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'pasteClipboard' : 'gladys' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'gladys.'}}pasteClipboard()
```

### 粘贴剪贴板（带标题）

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'pasteClipboard' : 'gladys' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'gladys.'}}pasteClipboard({
  title: 'Override The Title',
})
```

### 粘贴剪贴板（带标签和备注）

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'pasteClipboard' : 'gladys' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'gladys.'}}pasteClipboard({
  title: 'Override The Title',
  labels: 'Pasted Items,New Items',
  note: 'Some Notes',
})
```
