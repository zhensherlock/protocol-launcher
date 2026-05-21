---
url: /protocol-launcher/zh/apps/noteplan.md
---

# NotePlan

[NotePlan](https://noteplan.co/) 将笔记、日历笔记和任务结合在一起。**Protocol Launcher** 可以为 NotePlan 官方 URL scheme 文档中列出的 x-callback-url 动作生成链接。

## 使用

提供两种使用方式：

* 按需加载（通过子路径导入），支持 Tree Shaking，体积更小。
* 全量导入（从根包导入），使用简单，但会包含所有应用模块。

生产环境建议使用按需加载以减小体积；快速脚本或演示可选择全量导入。

### 打开笔记

打开日历笔记、普通笔记或指定文件名的笔记。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openNote' : 'noteplan' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'noteplan.'}}openNote({
  noteDate: 'today',
})

const url = {{currentMethod === 'On-Demand' ? '' : 'noteplan.'}}openNote({
  noteTitle: 'Fleeting Notes#Second Brain',
})

const url = {{currentMethod === 'On-Demand' ? '' : 'noteplan.'}}openNote({
  filename: 'folder/note.txt',
  heading: 'Ideas',
  splitView: 'yes',
})
```

### 打开视图

按名称和/或文件夹打开视图。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openView' : 'noteplan' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'noteplan.'}}openView({
  name: 'Project Tasks',
  folder: '10 - Projects',
})
```

### 添加文本

向通过日期、标题或文件名识别的笔记添加文本。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'addText' : 'noteplan' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'noteplan.'}}addText({
  noteDate: 'today',
  text: '* Hello World',
  mode: 'append',
  openNote: 'yes',
})

const url = {{currentMethod === 'On-Demand' ? '' : 'noteplan.'}}addText({
  noteTitle: 'Test Note',
  text: '* Hello World',
  mode: 'prepend',
})
```

### 添加笔记

用标题和/或文本创建普通笔记。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'addNote' : 'noteplan' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'noteplan.'}}addNote({
  noteTitle: 'New Note',
  openNote: 'yes',
})

const url = {{currentMethod === 'On-Demand' ? '' : 'noteplan.'}}addNote({
  text: 'Hello World',
  folder: 'Projects',
  highlightStart: 9999,
  highlightLength: 0,
})
```

### 删除笔记

生成一个按标题、日期或文件名删除笔记的 URL。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'deleteNote' : 'noteplan' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'noteplan.'}}deleteNote({
  noteTitle: 'New Note',
})

const url = {{currentMethod === 'On-Demand' ? '' : 'noteplan.'}}deleteNote({
  noteDate: 'tomorrow',
})
```

### 选择标签

选择标签或提及。选择标签时包含开头的 `#` 或 `@`；传入空字符串会显示所有笔记。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'selectTag' : 'noteplan' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'noteplan.'}}selectTag({
  name: '#noteplan',
})

const url = {{currentMethod === 'On-Demand' ? '' : 'noteplan.'}}selectTag({
  name: '',
})
```

### 搜索

按文本搜索，或打开已有筛选器。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'search' : 'noteplan' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'noteplan.'}}search({
  text: 'noteplan',
})

const url = {{currentMethod === 'On-Demand' ? '' : 'noteplan.'}}search({
  filter: 'Upcoming',
})
```

### 运行插件

通过插件名称或插件 ID 运行 NotePlan 插件命令。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'runPlugin' : 'noteplan' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'noteplan.'}}runPlugin({
  pluginName: ' Note Statistics',
  command: 'nc',
})

const url = {{currentMethod === 'On-Demand' ? '' : 'noteplan.'}}runPlugin({
  pluginID: 'example.Plugin',
  command: 'run',
  arg0: 'first',
  arg1: 'second',
})
```

### 安装插件

生成通过插件 ID 安装 NotePlan 插件的 URL。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'installPlugin' : 'noteplan' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'noteplan.'}}installPlugin({
  pluginID: 'dwertheimer.Favorites',
})
```

### 切换侧边栏

切换、显示或隐藏侧边栏。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'toggleSidebar' : 'noteplan' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'noteplan.'}}toggleSidebar()

const url = {{currentMethod === 'On-Demand' ? '' : 'noteplan.'}}toggleSidebar({
  forceOpen: 'yes',
})

const url = {{currentMethod === 'On-Demand' ? '' : 'noteplan.'}}toggleSidebar({
  forceCollapse: 'yes',
  animated: 'no',
})
```

### 笔记信息

通过 `x-success` 请求当前打开笔记的绝对文件路径和名称。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'noteInfo' : 'noteplan' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'noteplan.'}}noteInfo({
  xSuccess: 'sourceapp://x-callback-url',
})
```

### x-success

NotePlan 官方文档列出的每个 x-callback-url 动作都支持 `xSuccess`。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'addText' : 'noteplan' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'noteplan.'}}addText({
  noteDate: 'today',
  text: 'Hello',
  xSuccess: 'sourceapp://x-callback-url',
})
```

## 官方参考

* [NotePlan X-Callback-Url Scheme](https://help.noteplan.co/article/49-x-callback-url-scheme)
