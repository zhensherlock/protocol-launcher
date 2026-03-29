---
url: /protocol-launcher/zh/apps/interact.md
---

# Interact Scratchpad

[Interact Scratchpad](https://docs.getdrafts.com/docs/misc/interact-scratchpad) 是一个免费的 Mac 菜单栏工具，用于从文本片段（如电子邮件签名等）轻松创建联系人。**Protocol Launcher** 允许您生成深度链接以打开 Interact Scratchpad 并预填充文本以进行联系人解析。

## 使用方式

有两种使用此库的方式：

* 按需导入（On-Demand）：从子路径导入支持 tree-shaking，保持较小的打包体积。
* 完整导入（Full Import）：从根包导入更方便，但会包含所有应用模块。

生产构建建议选择按需导入；快速脚本或演示可以使用完整导入。

### 打开 Interact Scratchpad

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'interact' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'interact.'}}open()
```

### 使用文本打开 Scratchpad

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'scratchpad' : 'interact' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'interact.'}}scratchpad({
  text: 'John Doe\njohn@example.com\n888-555-1234',
})
```
