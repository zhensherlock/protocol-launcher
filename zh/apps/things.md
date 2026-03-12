---
url: /protocol-launcher/zh/apps/things.md
---

# Things

[Things](https://culturedcode.com/things/) 是一款屡获殊荣的个人任务管理器，旨在帮助你规划每一天、管理项目并朝着目标切实迈进。它将优美的极简设计与强大的功能相结合，助你理清思路、井井有条地处理从日常琐事到人生目标的各项事务。**Protocol Launcher** 允许你生成深度链接，以便在 Things 中快速打开并管理你的任务。

## 使用

提供两种使用方式：

* 按需加载（通过子路径导入），支持 Tree Shaking，体积更小。
* 全量导入（从根包导入），使用简单，但会包含所有应用模块。

生产环境建议使用按需加载以减小体积；快速脚本或演示可选择全量导入。

### 打开 Things

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'things' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'things.'}}open()
```

### 搜索

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'search' : 'things' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'things.'}}search({
  query: 'vacation',
})
```

### 显示

显示内置列表、项目、区域、标签或待办事项。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'show' : 'things' }} } from '{{ importPath }}'

// 显示今日列表
const url = {{currentMethod === 'On-Demand' ? '' : 'things.'}}show({
  id: 'today',
})

// 通过 ID 显示项目
const url = {{currentMethod === 'On-Demand' ? '' : 'things.'}}show({
  id: 'GJJVZHE7SNu7xcVuH2xDDh',
})

// 通过查询显示
const url = {{currentMethod === 'On-Demand' ? '' : 'things.'}}show({
  query: 'vacation',
})

// 通过查询和筛选显示
const url = {{currentMethod === 'On-Demand' ? '' : 'things.'}}show({
  query: 'vacation',
  filter: 'errand',
})
```

### 添加项目

向 Things 添加新项目。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'addProject' : 'things' }} } from '{{ importPath }}'

// 添加带开始日期的项目
const url = {{currentMethod === 'On-Demand' ? '' : 'things.'}}addProject({
  title: 'Build treehouse',
  when: 'today',
})

// 添加到区域
const url = {{currentMethod === 'On-Demand' ? '' : 'things.'}}addProject({
  title: 'Plan Birthday Party',
  area: 'Family',
})

// 添加带截止日期的项目
const url = {{currentMethod === 'On-Demand' ? '' : 'things.'}}addProject({
  title: 'Submit Tax',
  deadline: 'December 31',
  areaId: 'Lg8UqVPXo2SbJNiBpDBBQ',
})
```

### 更新项目

更新现有项目（需要 auth-token）。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'updateProject' : 'things' }} } from '{{ importPath }}'

// 更新项目开始日期
const url = {{currentMethod === 'On-Demand' ? '' : 'things.'}}updateProject({
  id: 'Jvj7EW1fLoScPhaw2JomCT',
  authToken: 'xxx',
  when: 'tomorrow',
})

// 添加标签到项目
const url = {{currentMethod === 'On-Demand' ? '' : 'things.'}}updateProject({
  id: 'Jvj7EW1fLoScPhaw2JomCT',
  authToken: 'xxx',
  addTags: 'Important',
})

// 清除项目截止日期
const url = {{currentMethod === 'On-Demand' ? '' : 'things.'}}updateProject({
  id: 'Jvj7EW1fLoScPhaw2JomCT',
  authToken: 'xxx',
  deadline: '',
})
```

### 添加待办

向 Things 添加新的待办事项。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'add' : 'things' }} } from '{{ importPath }}'

// 添加简单待办
const url = {{currentMethod === 'On-Demand' ? '' : 'things.'}}add({
  title: 'Book flights',
})

// 添加带备注和标签的待办
const url = {{currentMethod === 'On-Demand' ? '' : 'things.'}}add({
  title: 'Buy milk',
  notes: 'Low fat.',
  when: 'evening',
  tags: 'Errand',
})

// 添加多个待办
const url = {{currentMethod === 'On-Demand' ? '' : 'things.'}}add({
  titles: 'Milk\nBeer\nCheese',
  list: 'Shopping',
})
```

### 更新待办

更新现有待办（需要 auth-token）。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'update' : 'things' }} } from '{{ importPath }}'

// 更新待办开始日期
const url = {{currentMethod === 'On-Demand' ? '' : 'things.'}}update({
  id: 'SyJEz273ceSkabUbciM73A',
  authToken: 'xxx',
  when: 'today',
})

// 更新待办标题
const url = {{currentMethod === 'On-Demand' ? '' : 'things.'}}update({
  id: 'SyJEz273ceSkabUbciM73A',
  authToken: 'xxx',
  title: 'Buy bread',
})

// 追加备注到待办
const url = {{currentMethod === 'On-Demand' ? '' : 'things.'}}update({
  id: 'SyJEz273ceSkabUbciM73A',
  authToken: 'xxx',
  appendNotes: 'Wholemeal bread',
})

// 清除待办截止日期
const url = {{currentMethod === 'On-Demand' ? '' : 'things.'}}update({
  id: 'SyJEz273ceSkabUbciM73A',
  authToken: 'xxx',
  deadline: '',
})
```

### JSON 导入

基于 JSON 的高级导入功能，用于导入项目和待办事项。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'json' : 'things' }} } from '{{ importPath }}'

// 导入带待办的项目
const url = {{currentMethod === 'On-Demand' ? '' : 'things.'}}json({
  data: [
    {
      type: 'project',
      attributes: {
        title: 'Go Shopping',
        items: [
          {
            type: 'to-do',
            attributes: {
              title: 'Bread',
            },
          },
          {
            type: 'to-do',
            attributes: {
              title: 'Milk',
            },
          },
        ],
      },
    },
  ],
})

// 带 auth-token 导入
const url = {{currentMethod === 'On-Demand' ? '' : 'things.'}}json({
  authToken: 'xxx',
  data: [
    {
      type: 'to-do',
      attributes: {
        title: 'Milk',
      },
    },
  ],
})
```
