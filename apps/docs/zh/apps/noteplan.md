---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import {
  addNote,
  addText,
  openNote,
  openView,
  search,
  selectTag,
  toggleSidebar,
} from 'protocol-launcher/noteplan';
import { SelectInstallationMethod } from '../../.vitepress/components';
import {
  addNoteParams,
  addTextParams,
  openNoteDateParams,
  openNoteTitleParams,
  openViewParams,
  searchFilterParams,
  searchTextParams,
  selectTagParams,
  toggleSidebarParams,
} from '../../.vitepress/constants/noteplan';

const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/noteplan' : 'protocol-launcher');
</script>

# NotePlan

[NotePlan](https://noteplan.co/) 将笔记、日历笔记和任务结合在一起。**Protocol Launcher** 可以为 NotePlan 官方 URL scheme 文档中列出的 x-callback-url 动作生成链接。

## 使用

提供两种使用方式：

- 按需加载（通过子路径导入），支持 Tree Shaking，体积更小。
- 全量导入（从根包导入），使用简单，但会包含所有应用模块。

生产环境建议使用按需加载以减小体积；快速脚本或演示可选择全量导入。

<SelectInstallationMethod v-model="currentMethod" />

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

<div class="flex flex-col gap-4 items-center">
  <VPLink :href="openNote(openNoteDateParams)" target="_self">
    打开今天的笔记
  </VPLink>
  <VPLink :href="openNote(openNoteTitleParams)" target="_self">
    按标题打开笔记
  </VPLink>
</div>

### 打开视图

按名称和/或文件夹打开视图。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openView' : 'noteplan' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'noteplan.'}}openView({
  name: 'Project Tasks',
  folder: '10 - Projects',
})
```

<div class="flex justify-center">
  <VPLink :href="openView(openViewParams)" target="_self">
    打开 NotePlan 视图
  </VPLink>
</div>

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

<div class="flex justify-center">
  <VPLink :href="addText(addTextParams)" target="_self">
    向今天的笔记添加文本
  </VPLink>
</div>

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

<div class="flex justify-center">
  <VPLink :href="addNote(addNoteParams)" target="_self">
    在 NotePlan 中添加笔记
  </VPLink>
</div>

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

<div class="flex justify-center">
  <VPLink :href="selectTag(selectTagParams)" target="_self">
    选择 NotePlan 标签
  </VPLink>
</div>

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

<div class="flex flex-col gap-4 items-center">
  <VPLink :href="search(searchTextParams)" target="_self">
    在 NotePlan 中搜索
  </VPLink>
  <VPLink :href="search(searchFilterParams)" target="_self">
    打开 NotePlan 筛选器
  </VPLink>
</div>

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

<div class="flex flex-col gap-4 items-center">
  <VPLink :href="toggleSidebar()" target="_self">
    切换 NotePlan 侧边栏
  </VPLink>
  <VPLink :href="toggleSidebar(toggleSidebarParams)" target="_self">
    打开 NotePlan 侧边栏
  </VPLink>
</div>

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

- [NotePlan X-Callback-Url Scheme](https://help.noteplan.co/article/49-x-callback-url-scheme)
