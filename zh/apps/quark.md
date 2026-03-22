---
url: /protocol-launcher/zh/apps/quark.md
---

# Quark

[Quark](https://www.quark.cn/) 是阿里巴巴推出的 AI 智能浏览器，具备 AI 搜索、AI 助手、网盘等功能。**Protocol Launcher** 允许您生成深度链接以在 Quark 中打开链接和网盘。

## 使用方式

有两种使用此库的方式：

* 按需导入（On-Demand）：从子路径导入支持 tree-shaking，保持较小的打包体积。
* 完整导入（Full Import）：从根包导入更方便，但会包含所有应用模块。

生产构建建议选择按需导入；快速脚本或演示可以使用完整导入。

### 打开浏览器

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'quark' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'quark.'}}open()
```

### 打开链接

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openLink' : 'quark' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'quark.'}}openLink({
  url: 'www.baidu.com',
})
```

### 打开网盘

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openCloudDrive' : 'quark' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'quark.'}}openCloudDrive()
```
