---
url: /protocol-launcher/zh/apps/simple-scan.md
---

# Simple Scan

[Simple Scan](https://agiletortoise.com/simple-scan/) 是 Agile Tortoise 开发的一款快速、简便的文档扫描应用，可将纸质文档扫描为优化后的可搜索 PDF 文档（或图像），并发送到几乎任何地方。**Protocol Launcher** 允许您生成深度链接以打开 Simple Scan 并使用预定义的目的地和格式触发扫描。

## 使用方式

有两种使用此库的方式：

* 按需导入（On-Demand）：从子路径导入支持 tree-shaking，保持较小的打包体积。
* 完整导入（Full Import）：从根包导入更方便，但会包含所有应用模块。

生产构建建议选择按需导入；快速脚本或演示可以使用完整导入。

### 打开 Simple Scan

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'simpleScan' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'simpleScan.'}}open()
```

### 扫描

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'scan' : 'simpleScan' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'simpleScan.'}}scan({
  destination: 'email',
  format: 'pdf',
  quality: 'original',
})
```
