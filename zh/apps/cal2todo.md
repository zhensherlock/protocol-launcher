---
url: /protocol-launcher/zh/apps/cal2todo.md
---

# Cal2Todo

[Cal2Todo](https://apps.apple.com/sg/app/cal2todo/id475987733) 是一款适用于 iOS 的简单日历和任务管理器。**Protocol Launcher** 允许您生成深度链接以向 Cal2Todo 添加事件。

## 使用方式

有两种使用此库的方式：

* 按需导入（On-Demand）：从子路径导入支持 tree-shaking，保持较小的打包体积。
* 完整导入（Full Import）：从根包导入更方便，但会包含所有应用模块。

生产构建建议选择按需导入；快速脚本或演示可以使用完整导入。

### 打开应用

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'cal2todo' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'cal2todo.'}}open()
```

### 添加事件

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'add' : 'cal2todo' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'cal2todo.'}}add({
  title: 'Meeting',
  notes: 'Discuss project roadmap',
})
```

### 添加带回调 URL 的事件

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'add' : 'cal2todo' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'cal2todo.'}}add({
  title: 'Meeting',
  xSuccess: 'myapp://ok',
  xSource: 'myapp',
  xError: 'myapp://cancel',
})
```
