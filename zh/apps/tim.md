---
url: /protocol-launcher/zh/apps/tim.md
---

# Tim

[Tim](https://tim.neat.software/) 是一款 macOS 时间追踪应用。**Protocol Launcher** 允许您生成 Tim 深度链接。

## 使用方式

有两种使用此库的方式：

* 按需导入（On-Demand）：从子路径导入支持 tree-shaking，保持较小的打包体积。
* 完整导入（Full Import）：从根包导入更方便，但会包含所有应用模块。

生产构建建议选择按需导入；快速脚本或演示可以使用完整导入。

## 注意事项

Tim 官方帮助页明确列出的 URL 形式只有：`tim://`、`tim://[id]`、`tim://[id]?action=start&notes=My%20Notes`、`tim://?action=stop`、`tim://create?type=[task|group]&title=My%20Title&notes=My%20Notes` 和 `tim://x-callback-url/getCurrentUrl?x-success=https://www.apple.com`。

`createTask()` 和 `createGroup()` 只暴露官方明确列出的 `task`/`group` 类型以及 `title` 和 `notes`。官方页面没有列出其他 query 字段名，因此这里不额外添加。

### 打开 Tim

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'tim' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'tim.'}}open()
```

### 打开任务或分组

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openTaskOrGroup' : 'tim' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'tim.'}}openTaskOrGroup({
  id: 'D43FA035-6406-495D-9ADD-46721986040F',
})
```

### 开始任务计时

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'startTask' : 'tim' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'tim.'}}startTask({
  id: 'D43FA035-6406-495D-9ADD-46721986040F',
  notes: 'My Notes',
})
```

### 停止计时

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'stopTimer' : 'tim' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'tim.'}}stopTimer()
```

### 创建任务

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'createTask' : 'tim' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'tim.'}}createTask({
  title: 'My Title',
  notes: 'My Notes',
})
```

### 创建分组

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'createGroup' : 'tim' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'tim.'}}createGroup({
  title: 'My Title',
  notes: 'My Notes',
})
```

### 获取当前 URL

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'getCurrentUrl' : 'tim' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'tim.'}}getCurrentUrl({
  xSuccess: 'https://www.apple.com',
})
```

## 生成的 URL

```ts
open()
// => 'tim://'

openTaskOrGroup({
  id: 'D43FA035-6406-495D-9ADD-46721986040F',
})
// => 'tim://D43FA035-6406-495D-9ADD-46721986040F'

startTask({
  id: 'D43FA035-6406-495D-9ADD-46721986040F',
  notes: 'My Notes',
})
// => 'tim://D43FA035-6406-495D-9ADD-46721986040F?action=start&notes=My%20Notes'

stopTimer()
// => 'tim://?action=stop'

createTask({
  title: 'My Title',
  notes: 'My Notes',
})
// => 'tim://create?type=task&title=My%20Title&notes=My%20Notes'

createGroup({
  title: 'My Title',
  notes: 'My Notes',
})
// => 'tim://create?type=group&title=My%20Title&notes=My%20Notes'

getCurrentUrl({
  xSuccess: 'https://www.apple.com',
})
// => 'tim://x-callback-url/getCurrentUrl?x-success=https://www.apple.com'
```

## 官方文档

* [Tim Time Tracker Help](https://tim.neat.software/help)
