---
url: /protocol-launcher/zh/apps/written-down.md
---

# Written Down

[Written Down](https://tinkerbuilt.com/written-down/) 是一款用于记录个人条目的日记应用。**Protocol Launcher** 可以生成用于在 Written Down 中创建和编辑条目、打开条目以及打开日记本的链接。

## 使用

提供两种使用方式：

* 按需加载（通过子路径导入），支持 Tree Shaking，体积更小。
* 全量导入（从根包导入），使用简单，但会包含所有应用模块。

生产环境建议使用按需加载以减小体积；快速脚本或演示可选择全量导入。

Written Down 官方文档列出了 `writtendown://x-callback-url/[action]?[action parameters]`，支持 `create`、`open-entry`、`edit-entry` 和 `open-journal`。未传入的可选值会被省略。

### Create

创建新条目。所有 action 参数都是可选的；省略 `journalID` 时，Written Down 会使用第一个日记本。

官方 action 参数：

* `text`：新条目的正文。
* `journalID`：要在其中创建条目的日记本唯一标识符；省略时默认使用第一个日记本。
* `tags`：要添加到条目的标签，使用逗号分隔。
* `latlng`：条目位置的纬度和经度，使用逗号分隔；省略时默认使用当前位置。
* `date`：条目的日期和时间，使用 ISO 8601 格式；省略时默认使用当前日期和时间。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'create' : 'writtenDown' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'writtenDown.'}}create({
  text: "It's beautiful today",
  journalID: '4739C5F8-AF19-49A3-B6BD-2561962C75CC',
  tags: 'thoughts,weather',
  latlng: '37.331686,-122.030656',
  date: '2017-12-19T16:39:57-08:00',
})
```

官方 `x-success` 返回参数：`id`、`text` 和 `journalID`。

### Open Entry

通过必填的 `id` 打开并显示一个条目。

官方 action 参数：

* `id`：必填，要打开的条目唯一标识符。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openEntry' : 'writtenDown' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'writtenDown.'}}openEntry({
  id: '4739C5F8-AF19-49A3-B6BD-2561962C75CC',
})
```

官方 `x-success` 返回参数：`id`、`text` 和 `journalID`。

### Edit Entry

通过必填的 `id` 编辑已有条目。Written Down 官方文档列出的 `mode` 值是 `append`、`replace` 和 `prepend`，`tagMode` 值是 `append`、`replace` 和 `delete`。

官方 action 参数：

* `id`：必填，要编辑的条目唯一标识符。
* `text`：要添加到条目的文本。
* `mode`：将文本 `append`、`replace` 或 `prepend` 到条目；省略时默认为 `append`。
* `tags`：要应用到条目的标签，使用逗号分隔。
* `tagMode`：将提供的标签 `append`、`replace` 或 `delete`；省略时默认为 `append`。
* `latlng`：条目位置的纬度和经度，使用逗号分隔；省略时不更改位置，传入 `delete` 会移除位置。
* `date`：条目的日期和时间，使用 ISO 8601 格式；省略时不更改日期。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'editEntry' : 'writtenDown' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'writtenDown.'}}editEntry({
  id: '4739C5F8-AF19-49A3-B6BD-2561962C75CC',
  text: 'Another thought',
  mode: 'replace',
  tags: 'thoughts,feelings',
  tagMode: 'delete',
  latlng: 'delete',
  date: '2017-12-19T16:39:57-08:00',
})
```

官方 `x-success` 返回参数：`id`、`text` 和 `journalID`。

### Open Journal

通过必填的 `journalID` 打开并显示一个日记本。

官方 action 参数：

* `journalID`：必填，要打开的日记本唯一标识符。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openJournal' : 'writtenDown' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'writtenDown.'}}openJournal({
  journalID: '4739C5F8-AF19-49A3-B6BD-2561962C75CC',
})
```

官方 `x-success` 返回参数：`journalID`。

## 官方文档

* [Written Down X-Callback-URL Scheme](https://tinkerbuilt.com/faq/x-callback-url/)
