---
url: /protocol-launcher/zh/apps/timepage.md
---

# Timepage

[Timepage](https://bonobolabs.com/support/timepage/introduction/timepages-url-schemes/) 是一款用于管理日程、事件和天气的日历应用。**Protocol Launcher** 可以生成官方 Timepage URL scheme 链接。

## 使用方式

有两种使用此库的方式：

* 按需导入（On-Demand）：从子路径导入支持 tree-shaking，保持较小的打包体积。
* 完整导入（Full Import）：从根包导入更方便，但会包含所有应用模块。

生产构建建议选择按需导入；快速脚本或演示可以使用完整导入。

### 打开 Timepage

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'timepage' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'timepage.'}}open()
```

### 添加事件

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'addEvent' : 'timepage' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'timepage.'}}addEvent({
  title: 'Team Sync',
  day: 'today',
})
```

只有在需要 Timepage 官方 x-callback-url 形式时，才传入 `x-success` 或 `x-cancel`：

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'addEvent' : 'timepage' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'timepage.'}}addEvent({
  title: 'Team Sync',
  day: 'tomorrow',
  xSuccess: 'shortcuts://callback',
  xCancel: 'shortcuts://cancel',
})
```

### 打开事件

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openEvent' : 'timepage' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'timepage.'}}openEvent({
  event: 'next',
})
```

### 打开事件地图

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openEventMap' : 'timepage' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'timepage.'}}openEventMap({
  event: 'next',
})
```

### 打开日期

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openDay' : 'timepage' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'timepage.'}}openDay({
  day: '2026-03-30',
})
```

### 打开周

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openWeek' : 'timepage' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'timepage.'}}openWeek({
  week: 'this',
})
```

官方 `index` 参数也支持数字偏移量：

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openWeek' : 'timepage' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'timepage.'}}openWeek({
  week: -1,
})
```

### 打开月份

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openMonth' : 'timepage' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'timepage.'}}openMonth({
  month: 'next',
})
```

### 打开天气

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openWeather' : 'timepage' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'timepage.'}}openWeather({
  day: 'today',
})
```

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openWeather' : 'timepage' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'timepage.'}}openWeather({
  week: 'next',
})
```

### 搜索

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'search' : 'timepage' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'timepage.'}}search({
  query: 'project review',
})
```

### 获取事件

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'getEvent' : 'timepage' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'timepage.'}}getEvent({
  event: 'next',
  xSuccess: 'shortcuts://callback',
})
```

Timepage 会调用 `x-success` 回调，并带上 `start`、`end`、`title` 和 `location` 参数。

## 参考资料

* [Timepage URL Schemes](https://bonobolabs.com/support/timepage/introduction/timepages-url-schemes/)
