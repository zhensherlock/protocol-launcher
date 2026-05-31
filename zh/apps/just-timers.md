---
url: /protocol-launcher/zh/apps/just-timers.md
---

# Just Timers

[Just Timers](https://justtimers.app/) 是一款 iOS 计时器应用。**Protocol Launcher** 允许您生成官方 URL scheme 链接，用于创建、删除、暂停、重置、重新开始和继续计时器。

## 使用方式

有两种使用此库的方式：

* 按需导入（On-Demand）：从子路径导入支持 tree-shaking，保持较小的打包体积。
* 完整导入（Full Import）：从根包导入更方便，但会包含所有应用模块。

生产构建建议选择按需导入；快速脚本或演示可以使用完整导入。

## 说明

Just Timers 官方文档将单个计时器的格式写为 `justtimers://x-callback-url/[action]/?[parameter]=[value]`，将控制所有计时器的格式写为 `justtimers://x-callback-url/[action]/all`。官方页面没有记录 `x-success` 或 `x-error` 这类回调查询参数，因此此模块不暴露这些参数。

创建计时器必须传入 `name`，并在 `duration` 和 `seconds` 中二选一。新计时器默认立即运行；传入 `active: false` 可以创建为暂停状态。

### 使用 Duration 创建计时器

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'createTimer' : 'justTimers' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'justTimers.'}}createTimer({
  name: 'Tea',
  duration: '2 minutes',
})
```

### 使用秒数创建暂停的计时器

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'createTimer' : 'justTimers' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'justTimers.'}}createTimer({
  name: 'Tea',
  seconds: 120,
  active: false,
})
```

### 删除计时器

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'deleteTimer' : 'justTimers' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'justTimers.'}}deleteTimer({
  name: 'Tea',
})
```

### 暂停所有计时器

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'pauseTimer' : 'justTimers' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'justTimers.'}}pauseTimer({
  all: true,
})
```

### 重置计时器

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'resetTimer' : 'justTimers' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'justTimers.'}}resetTimer({
  name: 'Tea',
})
```

### 重新开始计时器

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'restartTimer' : 'justTimers' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'justTimers.'}}restartTimer({
  name: 'Tea',
})
```

### 继续计时器

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'resumeTimer' : 'justTimers' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'justTimers.'}}resumeTimer({
  name: 'Tea',
})
```

## 生成的 URL

```ts
createTimer({ name: 'Tea', duration: '2 minutes' })
// => 'justtimers://x-callback-url/new/?name=Tea&duration=2%20minutes'

createTimer({ name: 'Tea', seconds: 120, active: false })
// => 'justtimers://x-callback-url/new/?name=Tea&seconds=120&active=false'

deleteTimer({ name: 'Tea' })
// => 'justtimers://x-callback-url/delete/?name=Tea'

deleteTimer({ all: true })
// => 'justtimers://x-callback-url/delete/all'

pauseTimer({ name: 'Tea' })
// => 'justtimers://x-callback-url/pause/?name=Tea'

pauseTimer({ all: true })
// => 'justtimers://x-callback-url/pause/all'

resetTimer({ name: 'Tea' })
// => 'justtimers://x-callback-url/reset/?name=Tea'

resetTimer({ all: true })
// => 'justtimers://x-callback-url/reset/all'

restartTimer({ name: 'Tea' })
// => 'justtimers://x-callback-url/restart/?name=Tea'

restartTimer({ all: true })
// => 'justtimers://x-callback-url/restart/all'

resumeTimer({ name: 'Tea' })
// => 'justtimers://x-callback-url/resume/?name=Tea'

resumeTimer({ all: true })
// => 'justtimers://x-callback-url/resume/all'
```

## 官方文档

* [Just Timers Shortcuts API](https://justtimers.app/help/shortcuts/)
