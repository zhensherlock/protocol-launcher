---
url: /protocol-launcher/zh/apps/equipd-bible.md
---

# Equipd Bible

[Equipd Bible](https://www.equipd.me/) 是一款专为圣经学习和事工用途优化的 EPUB 阅读器。支持并排比较多种语言和译本。**Protocol Launcher** 允许您生成深度链接以在 Equipd Bible 中打开经文。

## 使用方式

有两种使用此库的方式：

* 按需导入（On-Demand）：从子路径导入支持 tree-shaking，保持较小的打包体积。
* 完整导入（Full Import）：从根包导入更方便，但会包含所有应用模块。

生产构建建议选择按需导入；快速脚本或演示可以使用完整导入。

### 打开应用

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'equipdBible' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'equipdBible.'}}open()
```

### 查找经文

使用 x-callback-url scheme 在 Equipd Bible 中查找经文。这是与 Equipd Bible 应用集成的最强大方式。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'lookup' : 'equipdBible' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'equipdBible.'}}lookup({
  scripture: 'John3:16',
})
```

### 打开经文

使用基本 URL scheme 在 Equipd Bible 中打开特定经文。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'scripture' : 'equipdBible' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'equipdBible.'}}scripture({
  scripture: '2Timothy3:15,16',
})
```
