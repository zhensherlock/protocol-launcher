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

当前官方帮助涵盖应用/窗口导航、任务/分组/记录 ID、计时器控制、已弃用的 create 链接及 getCurrentUrl 回调。createRecord() 需要任务 ID 和 ISO 8601 起止时间。上游已弃用所有 create 函数对应的链接。嵌套回调 URL 会进行百分号编码。

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

### 打开设置

打开设置窗口。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openSettings' : 'tim' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'tim.'}}openSettings()
```

### 打开导出

打开导出窗口。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openExport' : 'tim' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'tim.'}}openExport()
```

### 打开升级

打开升级窗口。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openUpgrade' : 'tim' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'tim.'}}openUpgrade()
```

### 创建记录（已弃用）

使用 ISO 8601 起止时间为任务创建计时记录。Tim 将 create 链接标记为已弃用。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'createRecord' : 'tim' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'tim.'}}createRecord({
  'task': 'REPLACE_WITH_TASK_ID',
  'start': '2026-10-02T01:00:00Z',
  'end': '2026-10-02T02:00:00Z',
  'notes': 'Code review'
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
// => 'tim://x-callback-url/getCurrentUrl?x-success=https%3A%2F%2Fwww.apple.com'
```

## 官方文档

* [Tim Time Tracker Help](https://tim.neat.software/help)
