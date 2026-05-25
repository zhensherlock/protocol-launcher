---
url: /protocol-launcher/zh/apps/devonthink.md
---

# DEVONthink

[DEVONthink](https://www.devontechnologies.com/apps/devonthink) 是 macOS 上的文档和信息管理工具。**Protocol Launcher** 允许你为 DEVONthink 生成链接。

## 使用

提供两种使用方式：

* 按需加载（通过子路径导入），支持 Tree Shaking，体积更小。
* 全量导入（从根包导入），使用简单，但会包含所有应用模块。

生产环境建议使用按需加载以减小体积；快速脚本或演示可选择全量导入。

## URL Commands

DEVONthink URL commands 使用 `x-devonthink://<command>` scheme。它们是命令 URL，不是 x-callback-url。

### 创建格式化笔记

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'createFormattedNote' : 'devonthink' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'devonthink.'}}createFormattedNote({
  title: 'New Note',
  source: '<p>Hello</p>',
})
```

### 创建 HTML

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'createHTML' : 'devonthink' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'devonthink.'}}createHTML({
  title: 'Page',
  source: '<h1>Hello</h1>',
})
```

### 创建 Markdown

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'createMarkdown' : 'devonthink' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'devonthink.'}}createMarkdown({
  title: 'Readme',
  text: '# Hello',
})
```

### 创建 PDF

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'createPDF' : 'devonthink' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'devonthink.'}}createPDF({
  location: 'https://www.devontechnologies.com',
  width: 800,
  paginated: 1,
})
```

### 创建 RTF

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'createRTF' : 'devonthink' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'devonthink.'}}createRTF({
  title: 'New bookmark',
  location: 'http://www.devontechnologies.com',
  noselector: 1,
})

const url = {{currentMethod === 'On-Demand' ? '' : 'devonthink.'}}createRTF({
  title: 'Selection',
  selection: 'Selected text',
})
```

### 创建网页归档

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'createWebArchive' : 'devonthink' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'devonthink.'}}createWebArchive({
  title: 'DEVONtechnologies',
  location: 'https://www.devontechnologies.com',
})
```

### 创建书签

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'createBookmark' : 'devonthink' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'devonthink.'}}createBookmark({
  title: 'DEVONtechnologies',
  location: 'https://www.devontechnologies.com',
})
```

### 创建组

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'createGroup' : 'devonthink' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'devonthink.'}}createGroup({
  title: 'Inbox',
  destination: 'F8E2A5A6-0000-0000-0000-000000000000',
})
```

### 创建文本

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'createText' : 'devonthink' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'devonthink.'}}createText({
  title: 'Plain Note',
  text: 'Hello World',
})
```

### Clip

打开 Clip to DEVONthink 面板。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'clip' : 'devonthink' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'devonthink.'}}clip()
```

### Note

打开 Take Note 面板。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'note' : 'devonthink' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'devonthink.'}}note()
```

### 搜索

在已打开的 DEVONthink 数据库中发起搜索。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'search' : 'devonthink' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'devonthink.'}}search({
  query: 'invoice',
})
```

## Item Links

DEVONthink item links 使用 `x-devonthink-item://<uuid>` scheme。它们指向已有的 DEVONthink 数据库、组、文档，或受支持文档里的具体位置。

### Item Link

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'itemLink' : 'devonthink' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'devonthink.'}}itemLink({
  uuid: '929D101B-35AC-474C-801C-D8818C48DB80',
  reveal: 1,
})

const url = {{currentMethod === 'On-Demand' ? '' : 'devonthink.'}}itemLink({
  uuid: 'PDF-ID',
  page: 5,
})

const url = {{currentMethod === 'On-Demand' ? '' : 'devonthink.'}}itemLink({
  uuid: 'TEXT-FILE-ID',
  search: 'iPad Pro',
})

const url = {{currentMethod === 'On-Demand' ? '' : 'devonthink.'}}itemLink({
  uuid: 'MOVIE-ID',
  time: 43.5,
})

const url = {{currentMethod === 'On-Demand' ? '' : 'devonthink.'}}itemLink({
  uuid: '929D101B-35AC-474C-801C-D8818C48DB80',
  line: 125,
})
```

## 官方参考

* [DEVONthink URL Commands](https://download.devontechnologies.com/download/devonthink/3.8.2/DEVONthink.help/Contents/Resources/pgs/automation-urlcommands.html)
* [DEVONthink Item Links](https://download.devontechnologies.com/download/devonthink/3.8.2/DEVONthink.help/Contents/Resources/pgs/automation-itemlinks.html)
