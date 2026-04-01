---
url: /protocol-launcher/zh/apps/coda.md
---

# Coda

[Coda](https://panic.com/code-editor)（现名为 Code Editor）是一款适用于 iOS 的便携式代码编辑器，非常适合在移动中进行快速的网页编辑。**Protocol Launcher** 允许您生成深度链接以在 Coda 中创建和编辑文件。

## 使用方式

有两种使用此库的方式：

* 按需导入（On-Demand）：从子路径导入支持 tree-shaking，保持较小的打包体积。
* 完整导入（Full Import）：从根包导入更方便，但会包含所有应用模块。

生产构建建议选择按需导入；快速脚本或演示可以使用完整导入。

### 打开应用

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'coda' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'coda.'}}open()
```

### 新建文件

在 Coda 中创建新文件。如果文件已存在，将创建一个具有唯一名称的文件。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'newFile' : 'coda' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'coda.'}}newFile({
  name: 'foo.txt',
  text: 'bar',
})
```

### 追加内容

向 Coda 中的文件追加文本，如果文件不存在则会创建。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'append' : 'coda' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'coda.'}}append({
  name: 'foo.txt',
  text: 'bar',
})
```

### 替换内容

替换 Coda 中文件的内容，如果文件不存在则会创建。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'replace' : 'coda' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'coda.'}}replace({
  name: 'foo.txt',
  text: 'bar',
})
```
