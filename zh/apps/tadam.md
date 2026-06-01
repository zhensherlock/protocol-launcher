---
url: /protocol-launcher/zh/apps/tadam.md
---

# Tadam

[Tadam](https://tadamapp.com/) 是一款 macOS Pomodoro 计时器应用。**Protocol Launcher** 允许您生成 Tadam 的官方 URL scheme 链接。

## 使用方式

有两种使用此库的方式：

* 按需导入（On-Demand）：从子路径导入支持 tree-shaking，保持较小的打包体积。
* 完整导入（Full Import）：从根包导入更方便，但会包含所有应用模块。

生产构建建议选择按需导入；快速脚本或演示可以使用完整导入。

## 说明

Tadam 文档说明 `time` 使用与应用内相同的时间格式，例如 `10`、`10:30`、`1h` 和 `2h5min20sec`。官方页面还说明 `open` 和 `mini` 设置为 `true` 或 `1` 时启用。

Tadam 部分支持 x-callback-url。使用 `xCallback...` helpers 可以生成文档中的 `tadam://x-callback-url/` 前缀；如果需要文档中的 `x-success` 参数，也可以传给常规 helper。`x-error` 以及其他 x-callback-url 参数不受支持。

### 启动工作计时器

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'startWork' : 'tadam' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'tadam.'}}startWork({
  time: '10min',
})
```

### 启动工作计时器并打开界面

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'startWork' : 'tadam' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'tadam.'}}startWork({
  time: '5:30',
  open: true,
})
```

### 启动休息计时器

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'startBreak' : 'tadam' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'tadam.'}}startBreak({
  time: '5',
})
```

### 以 Mini UI 启动休息计时器

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'startBreak' : 'tadam' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'tadam.'}}startBreak({
  time: '10min',
  mini: true,
})
```

### 控制计时器

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'pause, resume, stop' : 'tadam' }} } from '{{ importPath }}'

const pauseUrl = {{currentMethod === 'On-Demand' ? '' : 'tadam.'}}pause()
const resumeUrl = {{currentMethod === 'On-Demand' ? '' : 'tadam.'}}resume()
const stopUrl = {{currentMethod === 'On-Demand' ? '' : 'tadam.'}}stop()
```

### 打开计时器界面和帮助

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'help, startBreak, startWork' : 'tadam' }} } from '{{ importPath }}'

const startWorkUiUrl = {{currentMethod === 'On-Demand' ? '' : 'tadam.'}}startWork()
const breakUiUrl = {{currentMethod === 'On-Demand' ? '' : 'tadam.'}}startBreak()
const helpUrl = {{currentMethod === 'On-Demand' ? '' : 'tadam.'}}help()
```

### x-callback-url

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'xCallbackStartWork' : 'tadam' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'tadam.'}}xCallbackStartWork({
  time: '10min',
})
```

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'xCallbackPause' : 'tadam' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'tadam.'}}xCallbackPause({
  xSuccess: 'shortcuts://callback',
})
```

## 生成的 URL

```ts
startWork({ time: '10min' })
// => 'tadam://start?time=10min'

startWork({ time: '5:30', open: true })
// => 'tadam://start?time=5:30&open=true'

startBreak({ time: '5' })
// => 'tadam://break?time=5'

startBreak({ time: '10min', mini: true })
// => 'tadam://break?time=10min&mini=true'

pause()
// => 'tadam://pause'

resume()
// => 'tadam://resume'

stop()
// => 'tadam://stop'

help()
// => 'tadam://help'

xCallbackStartWork({ time: '10min' })
// => 'tadam://x-callback-url/start?time=10min'

xCallbackPause({ xSuccess: 'shortcuts://callback' })
// => 'tadam://x-callback-url/pause?x-success=shortcuts%3A%2F%2Fcallback'
```

## 官方文档

* [Tadam URL Schemes](https://tadamapp.com/url-schemes/)
