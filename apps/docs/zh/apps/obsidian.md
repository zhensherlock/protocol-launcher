---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { open, openNote, newNote, search, insert, command, options, settings, dailyNote, uniqueNote, chooseVault, hookGetAddress } from 'protocol-launcher/obsidian';
import { dailyNoteParams, uniqueNoteParams, hookGetAddressParams } from '../../.vitepress/constants/obsidian';
import { SelectInstallationMethod } from '../../.vitepress/components';
import { openNoteParams, newNoteParams, searchParams, insertParams, commandParams, optionsParams, settingsParams } from '../../.vitepress/constants/obsidian';

const currentMethod = ref('On-Demand');
const importPath = computed(() =>
  currentMethod.value === 'On-Demand' ? 'protocol-launcher/obsidian' : 'protocol-launcher',
);
</script>

# Obsidian

[Obsidian](https://obsidian.md/) 是一个强大的知识库，基于本地纯文本 Markdown 文件夹工作。**Protocol Launcher** 允许您生成深度链接以在 Obsidian 中打开笔记、创建新笔记、搜索和执行命令。

## 使用方式

有两种使用此库的方式：

- 按需导入（On-Demand）：从子路径导入支持 tree-shaking，保持较小的打包体积。
- 完整导入（Full Import）：从根包导入更方便，但会包含所有应用模块。

生产构建建议选择按需导入；快速脚本或演示可以使用完整导入。

<SelectInstallationMethod v-model="currentMethod" />

`openNote` 和 `newNote` 支持 `path` 和 `paneType`（`tab`、`split`、`window`；window 仅限桌面端）。Obsidian 中 `path` 优先于 `vault` 和 `file`。`newNote` 支持 `file`、`path`、`paneType`、`clipboard`、`silent`、`overwrite` 和 `xSuccess`；用 `silent: true` 创建而不打开。既有插件相关函数继续保留，但不属于核心 URI 官方文档的范围。

### 打开 Obsidian

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'obsidian' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'obsidian.'}}open()
```

<div class="flex justify-center">
  <VPLink :href="open()" target="_self">
    打开 Obsidian
  </VPLink>
</div>

### 打开笔记

在 Obsidian 中打开特定的笔记。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openNote' : 'obsidian' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'obsidian.'}}openNote({
  vault: 'My Vault',
  file: 'Notes/Meeting.md',
})
```

<div class="flex justify-center">
  <VPLink :href="openNote(openNoteParams)" target="_self">
    在 Obsidian 中打开笔记
  </VPLink>
</div>

### 新建笔记

在 Obsidian 中创建新笔记。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'newNote' : 'obsidian' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'obsidian.'}}newNote({
  vault: 'My Vault',
  name: 'New Note',
  content: 'Hello World',
})
```

<div class="flex justify-center">
  <VPLink :href="newNote(newNoteParams)" target="_self">
    在 Obsidian 中创建新笔记
  </VPLink>
</div>

### 搜索

在 Obsidian 中搜索笔记。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'search' : 'obsidian' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'obsidian.'}}search({
  vault: 'My Vault',
  query: 'meeting notes',
})
```

<div class="flex justify-center">
  <VPLink :href="search(searchParams)" target="_self">
    在 Obsidian 中搜索
  </VPLink>
</div>

### 插入内容

在 Obsidian 的当前笔记中插入内容。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'insert' : 'obsidian' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'obsidian.'}}insert({
  vault: 'My Vault',
  content: '## Heading',
})
```

<div class="flex justify-center">
  <VPLink :href="insert(insertParams)" target="_self">
    在 Obsidian 中插入内容
  </VPLink>
</div>

### 执行命令

在 Obsidian 中执行命令。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'command' : 'obsidian' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'obsidian.'}}command({
  vault: 'My Vault',
  id: 'editor:save-file',
})
```

<div class="flex justify-center">
  <VPLink :href="command(commandParams)" target="_self">
    在 Obsidian 中执行命令
  </VPLink>
</div>

### 选项

打开 Obsidian 的选项（快速设置）。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'options' : 'obsidian' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'obsidian.'}}options({
  vault: 'My Vault',
})
```

<div class="flex justify-center">
  <VPLink :href="options(optionsParams)" target="_self">
    打开 Obsidian 选项
  </VPLink>
</div>

### 设置

打开 Obsidian 设置。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'settings' : 'obsidian' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'obsidian.'}}settings({
  vault: 'My Vault',
  page: 'editor',
})
```

<div class="flex justify-center">
  <VPLink :href="settings(settingsParams)" target="_self">
    打开 Obsidian 设置
  </VPLink>
</div>

### 每日笔记

创建或打开每日笔记，需要启用核心插件 Daily notes。支持 new 动作的参数。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'dailyNote' : 'obsidian' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'obsidian.'}}dailyNote({
  vault: 'My Vault',
  content: 'Daily notes',
  append: true
})
```

<div class="flex justify-center">
  <VPLink :href="dailyNote(dailyNoteParams)" target="_self">
    每日笔记
  </VPLink>
</div>

### 唯一笔记

启用核心插件 Unique note creator 后创建唯一笔记。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'uniqueNote' : 'obsidian' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'obsidian.'}}uniqueNote({
  vault: 'My Vault',
  content: 'Hello World'
})
```

<div class="flex justify-center">
  <VPLink :href="uniqueNote(uniqueNoteParams)" target="_self">
    唯一笔记
  </VPLink>
</div>

### 仓库管理器

打开仓库管理器。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'chooseVault' : 'obsidian' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'obsidian.'}}chooseVault()
```

<div class="flex justify-center">
  <VPLink :href="chooseVault()" target="_self">
    仓库管理器
  </VPLink>
</div>

### 为 Hook 获取地址

向 Hook 返回当前笔记地址。未传回调时，将其 Markdown 链接复制到剪贴板。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'hookGetAddress' : 'obsidian' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'obsidian.'}}hookGetAddress({
  xSuccess: 'hook://x-callback-url/setCurrentNode'
})
```

<div class="flex justify-center">
  <VPLink :href="hookGetAddress(hookGetAddressParams)" target="_self">
    为 Hook 获取地址
  </VPLink>
</div>

## 官方文档

- [URL scheme 官方说明](https://obsidian.md/help/uri)
