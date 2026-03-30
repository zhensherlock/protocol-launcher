---
url: /protocol-launcher/zh/apps/fantastical.md
---

# Fantastical

[Fantastical](https://flexibits.com/fantastical) 是一款您一旦使用就无法离开的日历和任务应用。Fantastical 荣获 Apple Design Award 和 Mac App of the Year 大奖，将精美的界面与强大的功能相结合，支持自然语言事件创建、任务管理，并可集成 Google Calendar、iCloud、Exchange 等多种日历服务。**Protocol Launcher** 允许您生成深度链接以在 Fantastical 中创建事件和导航日期。

## 使用方式

有两种使用此库的方式：

* 按需导入（On-Demand）：从子路径导入支持 tree-shaking，保持较小的打包体积。
* 完整导入（Full Import）：从根包导入更方便，但会包含所有应用模块。

生产构建建议选择按需导入；快速脚本或演示可以使用完整导入。

### Parse（创建事件）

使用自然语言输入在 Fantastical 中创建新事件：

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'parse' : 'fantastical' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'fantastical.'}}parse({
  sentence: '明天中午 12 点和 John 共进午餐',
})
```

使用结构化参数创建新事件：

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'parse' : 'fantastical' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'fantastical.'}}parse({
  title: '团队会议',
  start: '2026-03-30 10:00',
  end: '2026-03-30 11:00',
  location: 'A 会议室',
  notes: '讨论第二季度路线图',
})
```

创建提醒而不是事件：

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'parse' : 'fantastical' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'fantastical.'}}parse({
  title: '给 Sarah 打电话',
  reminder: true,
  due: '2026-03-30 15:00',
  notes: '讨论项目更新',
})
```

### Show（导航到日期）

在 Fantastical 中跳转到今天：

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'show' : 'fantastical' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'fantastical.'}}show({
  date: 'today',
})
```

跳转到特定日期：

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'show' : 'fantastical' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'fantastical.'}}show({
  date: '2026-03-30',
})
```

使用自然语言跳转到日期：

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'show' : 'fantastical' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'fantastical.'}}show({
  date: 'next monday',
})
```
