---
url: /protocol-launcher/zh/apps/beorg.md
---

# Beorg

[Beorg](https://www.beorgapp.com/) 是一款适用于 iPhone 和 iPad 的强大任务管理应用，使用 Org 模式语法的纯文本文件。**Protocol Launcher** 允许您生成深度链接以打开 Beorg、捕获任务、搜索项目以及查看您的议程和任务。

## 使用方式

有两种使用此库的方式：

* 按需导入（On-Demand）：从子路径导入支持 tree-shaking，保持较小的打包体积。
* 完整导入（Full Import）：从根包导入更方便，但会包含所有应用模块。

生产构建建议选择按需导入；快速脚本或演示可以使用完整导入。

### 打开 Beorg

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'beorg' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'beorg.'}}open()
```

### 捕获任务

添加新项目到 Beorg（捕获）。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'capture' : 'beorg' }} } from '{{ importPath }}'

// 捕获带有标题、笔记、计划和文件的任
const url = {{currentMethod === 'On-Demand' ? '' : 'beorg.'}}capture({
  title: 'Shopping List',
  notes: 'Buy eggs',
  scheduled: '2017-10-03',
  file: 'shopping',
})

// 捕获带有截止日期、模板和编辑选项的任务
const url = {{currentMethod === 'On-Demand' ? '' : 'beorg.'}}capture({
  title: 'New task',
  notes: 'Complete project',
  deadline: '2017-10-10',
  template: 'Daily Review',
  edit: true,
})
```

### 搜索

在 Beorg 中搜索项目并以 JSON 格式返回结果。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'search' : 'beorg' }} } from '{{ importPath }}'

// 简单搜索
const url = {{currentMethod === 'On-Demand' ? '' : 'beorg.'}}search({
  search: 't bookmark',
})

// 带回调 URL 的搜索
const url = {{currentMethod === 'On-Demand' ? '' : 'beorg.'}}search({
  search: 't bookmark',
  xSuccess: 'shortcuts://x-callback-url/run-shortcut?name=ProcessResults',
})
```

### 显示议程

在 Beorg 中显示议程。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'showAgenda' : 'beorg' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'beorg.'}}showAgenda()
```

### 显示任务

在 Beorg 中显示任务标签页，可选择带搜索过滤器。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'showTasks' : 'beorg' }} } from '{{ importPath }}'

// 显示所有任务
const url = {{currentMethod === 'On-Demand' ? '' : 'beorg.'}}showTasks({})

// 显示带搜索过滤器的任务
const url = {{currentMethod === 'On-Demand' ? '' : 'beorg.'}}showTasks({
  search: 't bookmark',
})
```

### 查看文件

在 Beorg 中查看特定文件。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'viewFile' : 'beorg' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'beorg.'}}viewFile({
  file: 'shopping',
})
```
