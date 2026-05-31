---
url: /protocol-launcher/zh/apps/timer-plus.md
---

# Timer+

[Timer+](https://www.timerplusapp.com/) 是一款 iOS 计时器与秒表应用。**Protocol Launcher** 允许您生成官方 URL scheme 链接，在 Timer+ 中启动 quick timer 和 quick stopwatch。

## 使用方式

有两种使用此库的方式：

* 按需导入（On-Demand）：从子路径导入支持 tree-shaking，保持较小的打包体积。
* 完整导入（Full Import）：从根包导入更方便，但会包含所有应用模块。

生产构建建议选择按需导入；快速脚本或演示可以使用完整导入。

### 启动 Quick Timer

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'quickTimer' : 'timerPlus' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'timerPlus.'}}quickTimer({
  minutes: 50,
  name: 'Laundry',
})
```

Timer+ 支持任意组合 `hours`、`minutes` 和 `seconds`。官方文档说明总时长最多 100 小时；如果省略时长，或时长合计为 0，会打开新的 Quick Timer 编辑界面。

### 启动带时分秒的 Quick Timer

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'quickTimer' : 'timerPlus' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'timerPlus.'}}quickTimer({
  hours: 1,
  minutes: 23,
  seconds: 45,
})
```

### 启动 Quick Stopwatch

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'quickStopwatch' : 'timerPlus' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'timerPlus.'}}quickStopwatch({
  name: 'Plank',
})
```

### x-callback-url

Timer+ 部分支持 x-callback-url。官方文档只接受 `x-source` 和 `x-success`，并使用 `timerplus://x-callback-url/` 前缀替代 `timerplus://app/`。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'quickTimer' : 'timerPlus' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'timerPlus.'}}quickTimer({
  hours: 1,
  minutes: 5,
  seconds: 30,
  name: 'Tea',
  xSource: 'Shortcuts',
  xSuccess: 'shortcuts://callback',
})
```

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'quickStopwatch' : 'timerPlus' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'timerPlus.'}}quickStopwatch({
  name: 'Plank',
  xSource: 'Shortcuts',
  xSuccess: 'shortcuts://callback',
})
```

## 官方文档

* [Timer+ URL scheme](https://www.timerplusapp.com/help/BkG3d6F_d-/)
