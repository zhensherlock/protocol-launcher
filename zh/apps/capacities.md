---
url: /protocol-launcher/zh/apps/capacities.md
---

# Capacities

[Capacities](https://capacities.io/) 是一款用于组织笔记和对象的知识管理应用。**Protocol Launcher** 可以为 Capacities 官方文档列出的 action 生成 x-callback-url 链接。

## 用法

有两种方式使用此库：

* On-Demand 从子路径导入，有利于 tree-shaking 并保持包体积较小。
* Full Import 从根包导入，写起来更方便，但会包含所有应用模块。

生产构建建议使用 On-Demand；快速脚本或演示可以使用 Full Import。

Capacities x-callback-url 链接使用 `capacities://x-callback-url/<action>`。API 字段 `xSource`、`xSuccess` 和 `xError` 会生成官方的 `x-source`、`x-success` 和 `x-error` query 参数。如果需要接收 action 结果，请同时提供 `xSuccess` 和 `xError`。

Capacities 官方页面在 `createNewObject` 参数表中列出了 `title`，同时在 Testing 和 `createNewObject` 示例中使用了 `name`。本包只暴露这些官方页面出现过的 query 参数。

### Create New Object

打开 Capacities 并创建一个新对象。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'createNewObject' : 'capacities' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'capacities.'}}createNewObject({
  name: 'My new object',
})

const objectWithOptionsUrl = {{currentMethod === 'On-Demand' ? '' : 'capacities.'}}createNewObject({
  spaceId: 'REPLACE_WITH_SPACE_ID',
  type: 'REPLACE_WITH_OBJECT_TYPE',
  title: 'Research note',
  content: '# Hello Capacities',
  xSource: 'SourceApp',
  xSuccess: 'sourceapp://x-callback-url/response',
  xError: 'sourceapp://x-callback-url/error',
})
```

### Append To Daily Note

打开 Capacities，并将 markdown 内容追加到今天的 daily note。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'appendToDailyNote' : 'capacities' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'capacities.'}}appendToDailyNote({
  content: 'My content',
})

const appendWithCallbacksUrl = {{currentMethod === 'On-Demand' ? '' : 'capacities.'}}appendToDailyNote({
  spaceId: 'REPLACE_WITH_SPACE_ID',
  content: '- Captured from Shortcuts',
  xSource: 'SourceApp',
  xSuccess: 'sourceapp://x-callback-url/response',
  xError: 'sourceapp://x-callback-url/error',
})
```

### Get Current Object

通过回调 URL 返回 Capacities 当前打开的对象。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'getCurrentObject' : 'capacities' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'capacities.'}}getCurrentObject({
  xSource: 'SourceApp',
  xSuccess: 'sourceapp://x-callback-url/response',
  xError: 'sourceapp://x-callback-url/error',
})
```

## 官方文档

* [Capacities X-Callback-URLs](https://docs.capacities.io/developer/x-callback-urls)
