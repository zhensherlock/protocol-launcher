---
url: /protocol-launcher/zh/apps/highlights.md
---

# Highlights

[Highlights](https://highlightsapp.net/) 是一款用于阅读和批注 PDF 文档的 PDF 阅读器。**Protocol Launcher** 可以生成 Highlights URL scheme 链接。

## 使用方式

有两种使用此库的方式：

* 按需导入（On-Demand）：从子路径导入支持 tree-shaking，保持较小的打包体积。
* 完整导入（Full Import）：从根包导入更方便，但会包含所有应用模块。

生产构建建议选择按需导入；快速脚本或演示可以使用完整导入。

### 打开文件

使用官方文档中的 `highlights://Users/test.pdf` URL 形式打开 PDF 文件。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openFile' : 'highlights' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'highlights.'}}openFile({
  path: '/Users/test.pdf',
})
```

### 在指定页打开文件

打开同一个 PDF 文件，并跳转到官方文档中的页码 fragment。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openFileAtPage' : 'highlights' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'highlights.'}}openFileAtPage({
  path: '/Users/test.pdf',
  page: 3,
})
```

## 参考资料

* [Highlights Version 1.2 URL-scheme notes](https://highlightsapp.net/changelog/2015/01/03/Version-1.2/)
