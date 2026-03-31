---
url: /protocol-launcher/zh/apps/textastic.md
---

# Textastic

[Textastic](https://www.textasticapp.com/) 是一款适用于 iOS、iPadOS 和 macOS 的强大文本编辑器，支持超过 80 种编程和标记语言的语法高亮。**Protocol Launcher** 允许您生成深度链接以在 Textastic 中打开、创建和编辑文件。

## 使用方式

有两种使用此库的方式：

* 按需导入（On-Demand）：从子路径导入支持 tree-shaking，保持较小的打包体积。
* 完整导入（Full Import）：从根包导入更方便，但会包含所有应用模块。

生产构建建议选择按需导入；快速脚本或演示可以使用完整导入。

### 打开应用

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'textastic' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'textastic.'}}open()
```

### 打开文件

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openFile' : 'textastic' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'textastic.'}}openFile({
  path: 'example.com',
  name: 'index.html',
})
```

### 新建文件

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'newFile' : 'textastic' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'textastic.'}}newFile({
  name: 'foo.txt',
  text: 'bar',
})
```

### 追加文本

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'append' : 'textastic' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'textastic.'}}append({
  location: 'iCloud',
  name: 'clipboard.txt',
})
```

### 替换文本

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'replace' : 'textastic' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'textastic.'}}replace({
  location: 'iCloud',
  name: 'scratchpad.txt',
  text: 'foo',
})
```

### 重新加载自定义

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'reloadCustomizations' : 'textastic' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'textastic.'}}reloadCustomizations()
```
