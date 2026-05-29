---
url: /protocol-launcher/zh/apps/diarly.md
---

# Diarly

[Diarly](https://diarly.app/) 是一款用于书写和整理每日条目的日记应用。**Protocol Launcher** 可以生成用于在 Diarly 中打开条目或笔记、追加文本、创建笔记和搜索条目的链接。

## 使用

提供两种使用方式：

* 按需加载（通过子路径导入），支持 Tree Shaking，体积更小。
* 全量导入（从根包导入），使用简单，但会包含所有应用模块。

生产环境建议使用按需加载以减小体积；快速脚本或演示可选择全量导入。

Diarly 官方文档列出了 `diarly://x-callback-url/[action]?[parameters]`，其中 `open`、`append` 和 `create` 使用 x-callback 路径；搜索使用 `diarly://search?text=...`。每日条目的 identifier 使用 `dd-mm-yyyy` 格式的 `day` 和可选 `journal`；笔记的 identifier 使用 `id`。

### Open

通过唯一 `id` 打开笔记。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'diarly' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'diarly.'}}open({
  id: 'REPLACE_WITH_NOTE_ID',
})
```

通过 `day` 和可选 `journal` 打开每日条目。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'diarly' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'diarly.'}}open({
  day: '01-01-2019',
  journal: '2bc759b2-9dd8-4186-ba64-12890f5642c9',
})
```

### 追加 / 添加

向通过 `id` 或 `day` 加可选 `journal` 标识的笔记或每日条目追加文本。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'append' : 'diarly' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'diarly.'}}append({
  day: '16-12-2020',
  text: 'Hello World',
})
```

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'append' : 'diarly' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'diarly.'}}append({
  id: 'REPLACE_WITH_NOTE_ID',
  text: 'Hello World',
})
```

### 创建笔记

使用 `text` 和可选 `journal` 创建新笔记。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'create' : 'diarly' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'diarly.'}}create({
  text: 'Hello World',
})
```

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'create' : 'diarly' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'diarly.'}}create({
  journal: 'Personal',
  text: 'Hello World',
})
```

### 搜索

使用 `text` 搜索 Diarly 条目。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'search' : 'diarly' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'diarly.'}}search({
  text: '@onThisDay',
})
```

## 官方文档

* [Diarly X-Callback-URL Scheme Documentation](https://diarly.app/help/x-callback-url-scheme-documentation.html)
