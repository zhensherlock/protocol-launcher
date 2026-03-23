---
url: /protocol-launcher/zh/apps/soulver.md
---

# Soulver

[Soulver](https://soulver.app/) 是一款面向 Mac、iPad 和 iPhone 的**自然语言**记事本计算器应用。**Protocol Launcher** 允许您生成深度链接以在 Soulver 中创建文档、计算表达式和添加行。

## 使用方式

有两种使用此库的方式：

* 按需导入（On-Demand）：从子路径导入支持 tree-shaking，保持较小的打包体积。
* 完整导入（Full Import）：从根包导入更方便，但会包含所有应用模块。

生产构建建议选择按需导入；快速脚本或演示可以使用完整导入。

### 打开 Soulver

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'soulver' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'soulver.'}}open()
```

### 创建文档

在 Soulver 中创建新文档并计算表达式。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'create' : 'soulver' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'soulver.'}}create({
  expression: '$3k earnings / 5 people',
})
```

### 计算到剪贴板

计算表达式并将结果复制到剪贴板。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'calculate' : 'soulver' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'soulver.'}}calculate({
  expression: 'lunch was $55 + 25% tip',
  toClipboard: true,
})
```

### 添加行

向 Soulver 中的特定工作表添加表达式。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'appendLine' : 'soulver' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'soulver.'}}appendLine({
  id: '3BBFDEB9-E705-4AC1-846D-433446BA0C60',
  expression: '$500 in EUR',
})
```

### 打开工作表

在 Soulver 中打开特定的工作表。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openSheet' : 'soulver' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'soulver.'}}openSheet({
  id: '3BBFDEB9-E705-4AC1-846D-433446BA0C60',
})
```
