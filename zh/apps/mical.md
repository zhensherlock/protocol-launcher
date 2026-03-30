---
url: /protocol-launcher/zh/apps/mical.md
---

# miCal

[miCal](http://micalapp.com/en/) 是一款专为 Apple iOS iPhone 和 iPad 设计的多功能日历应用，采用针对 iOS 16 优化的现代设计。它提供 8 种不同的视图、任务/提醒支持、自然语言输入、天气集成、生日提醒，并与 iCloud、Google Calendar、Outlook、Exchange 等服务无缝同步。**Protocol Launcher** 允许您生成深度链接以打开 miCal、显示特定视图、创建事件和添加提醒。

## 使用方式

有两种使用此库的方式：

* 按需导入（On-Demand）：从子路径导入支持 tree-shaking，保持较小的打包体积。
* 完整导入（Full Import）：从根包导入更方便，但会包含所有应用模块。

生产构建建议选择按需导入；快速脚本或演示可以使用完整导入。

### 打开 miCal

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'mical' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'mical.'}}open()
```

### 显示视图

使用预定义的视图打开 miCal（dashboard、day、week、weekagenda、month、year 或 list）。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'show' : 'mical' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'mical.'}}show({
  view: 'weekagenda',
})
```

### 添加事件

使用自然语言输入在 miCal 中创建事件。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'add' : 'mical' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'mical.'}}add({
  input: 'Lunch tomorrow at 12',
  notes: 'Meeting with team',
})
```

### 添加提醒

在 miCal 中创建提醒。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'addReminder' : 'mical' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'mical.'}}addReminder({
  title: 'Buy groceries',
  notes: 'Milk, eggs, bread',
})
```
