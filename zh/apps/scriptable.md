---
url: /protocol-launcher/zh/apps/scriptable.md
---

# Scriptable

[Scriptable](https://www.scriptable.app/) 是一款 iOS 自动化应用，允许您编写 JavaScript 脚本来与原生 iOS API 交互。**Protocol Launcher** 允许您生成深度链接以打开 Scriptable、创建新脚本或运行现有脚本。

## 使用方式

有两种使用此库的方式：

* 按需导入（On-Demand）：从子路径导入支持 tree-shaking，保持较小的打包体积。
* 完整导入（Full Import）：从根包导入更方便，但会包含所有应用模块。

生产构建建议选择按需导入；快速脚本或演示可以使用完整导入。

### 打开应用

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'scriptable' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'scriptable.'}}open()
```

### 添加脚本

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'addScript' : 'scriptable' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'scriptable.'}}addScript()
```

### 打开脚本

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openScript' : 'scriptable' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'scriptable.'}}openScript({
  scriptName: 'Example',
})
```

### 打开脚本并显示设置

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openScript' : 'scriptable' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'scriptable.'}}openScript({
  scriptName: 'Example',
  openSettings: true,
})
```

### 运行脚本

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'runScript' : 'scriptable' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'scriptable.'}}runScript({
  scriptName: 'Example',
})
```

### 运行脚本并打开编辑器

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'runScript' : 'scriptable' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'scriptable.'}}runScript({
  scriptName: 'Example',
  openEditor: true,
})
```
