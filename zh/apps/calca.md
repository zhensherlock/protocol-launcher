---
url: /protocol-launcher/zh/apps/calca.md
---

# Calca

[Calca](http://calca.io/) 是一款热爱数学的文本编辑器，可以在您输入时给出答案。**Protocol Launcher** 允许您生成深度链接以在 Calca 中创建文档和执行计算。

## 使用方式

有两种使用此库的方式：

* 按需导入（On-Demand）：从子路径导入支持 tree-shaking，保持较小的打包体积。
* 完整导入（Full Import）：从根包导入更方便，但会包含所有应用模块。

生产构建建议选择按需导入；快速脚本或演示可以使用完整导入。

### 打开 Calca

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'calca' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'calca.'}}open()
```

### 创建文档

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'create' : 'calca' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'calca.'}}create({
  body: '2+2=>',
  title: 'Math',
})
```

### 计算

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'calc' : 'calca' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'calca.'}}calc({
  body: '2+2=>',
  xSuccess: 'app://callback',
})
```
