---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { openDocument, openInternalLink, search } from 'protocol-launcher/notebooks';
import { SelectInstallationMethod } from '../../.vitepress/components';
import {
  openDocumentParams,
  openInternalLinkParams,
  searchParams,
} from '../../.vitepress/constants/notebooks';

const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/notebooks' : 'protocol-launcher');
</script>

# Notebooks

[Notebooks](https://www.notebooksapp.com/) 是一款笔记和写作应用。**Protocol Launcher** 可以生成 Notebooks URL scheme 链接，用于打开文档、添加笔记、搜索、创建项目、追加文本、从 URL 导入，以及启动共享或同步。

## 使用

这个库有两种使用方式：

- 从子路径按需导入，支持 Tree Shaking 并保持较小的包体积。
- 从根包完整导入更适合快速脚本或演示，但会包含所有应用模块。

生产构建建议选择按需导入；完整导入适合快速脚本或演示。

<SelectInstallationMethod v-model="currentMethod" />

### 打开文档

Notebooks 官方文档列出了两种打开文档的形式：`notebooks://show/<path>` 和直接内部链接形式 `notebooks://<path>`。路径相对于 Notebooks 根目录。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openDocument, openInternalLink' : 'notebooks' }} } from '{{ importPath }}'

const showUrl = {{currentMethod === 'On-Demand' ? '' : 'notebooks.'}}openDocument({
  path: 'escaped path to document',
})

const internalUrl = {{currentMethod === 'On-Demand' ? '' : 'notebooks.'}}openInternalLink({
  path: 'escaped path to document',
})
```

<div class="flex justify-center gap-3">
  <VPLink :href="openDocument(openDocumentParams)" target="_self">打开文档</VPLink>
  <VPLink :href="openInternalLink(openInternalLinkParams)" target="_self">打开内部链接</VPLink>
</div>

### 添加、搜索和追加

`addNote()` 对应 `notebooks://addnote/`，`search()` 对应 `notebooks://search/`，`append()` 对应 `notebooks://append/`。可选的 `parent`、`scope` 和 `doc` 值都是 Notebooks 路径。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'addNote, search, append' : 'notebooks' }} } from '{{ importPath }}'

const noteUrl = {{currentMethod === 'On-Demand' ? '' : 'notebooks.'}}addNote({
  text: 'note body',
  title: 'Title is optional',
  parent: 'path to parent',
})

const searchUrl = {{currentMethod === 'On-Demand' ? '' : 'notebooks.'}}search({
  term: 'term to search for',
  scope: 'book/to/search',
})

const appendUrl = {{currentMethod === 'On-Demand' ? '' : 'notebooks.'}}append({
  text: 'text to add',
  doc: 'path to document.txt',
})
```

<div class="flex justify-center">
  <VPLink :href="search(searchParams)" target="_self">搜索 Notebooks</VPLink>
</div>

### 新建文档、任务和手绘

Notebooks 官方文档列出了 `addNewDoc`、`addNewTask` 和 `addNewSketch`。每个 URL 都可以选择传入父级 book 路径。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'newDocument, newTask, newSketch' : 'notebooks' }} } from '{{ importPath }}'

const documentUrl = {{currentMethod === 'On-Demand' ? '' : 'notebooks.'}}newDocument({
  parent: 'path to parent',
})

const taskUrl = {{currentMethod === 'On-Demand' ? '' : 'notebooks.'}}newTask({
  parent: 'path to parent',
})

const sketchUrl = {{currentMethod === 'On-Demand' ? '' : 'notebooks.'}}newSketch({
  parent: 'path to parent',
})
```

### 导入、共享和同步

使用 `grab()` 可以从 URL 导入文档。Notebooks 还为 iPhone 和 iPad 官方记录了 `wifi_sharing` 和 `webdav_sync`，两者都可以选择限定到某个 book 路径。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'grab, wifiSharing, webdavSync' : 'notebooks' }} } from '{{ importPath }}'

const grabUrl = {{currentMethod === 'On-Demand' ? '' : 'notebooks.'}}grab({
  url: 'URL',
  title: 'Title of document',
  parent: 'Path to target book',
})

const sharingUrl = {{currentMethod === 'On-Demand' ? '' : 'notebooks.'}}wifiSharing({
  path: 'Path To Book To Share',
})

const syncUrl = {{currentMethod === 'On-Demand' ? '' : 'notebooks.'}}webdavSync({
  path: 'Path To Book To Sync',
})
```

## 生成的 URL

```ts
openDocument({ path: 'escaped path to document' })
// => 'notebooks://show/escaped%20path%20to%20document'

openInternalLink({ path: 'escaped path to document' })
// => 'notebooks://escaped%20path%20to%20document'

addNote({ text: 'note body', title: 'Title is optional', parent: 'path to parent' })
// => 'notebooks://addnote/note%20body&title=Title%20is%20optional&parent=path%20to%20parent'

addNote({ text: 'note body', title: 'title for document' })
// => 'notebooks://addnote/note%20body&title=title%20for%20document'

addNote({ text: 'note body' })
// => 'notebooks://addnote/note%20body'

search({ term: 'term to search for', scope: 'book/to/search' })
// => 'notebooks://search/term%20to%20search%20for&scope=book/to/search'

newDocument({ parent: 'path to parent' })
// => 'notebooks://addNewDoc&parent=path%20to%20parent'

newDocument()
// => 'notebooks://addNewDoc'

newTask({ parent: 'path to parent' })
// => 'notebooks://addNewTask&parent=path%20to%20parent'

newSketch({ parent: 'path to parent' })
// => 'notebooks://addNewSketch&parent=path%20to%20parent'

append({ text: 'text to add', doc: 'path to document.txt' })
// => 'notebooks://append/text%20to%20add&doc=path%20to%20document.txt'

grab({ url: 'URL', title: 'Title of document' })
// => 'notebooks://grab/URL&title=Title%20of%20document'

grab({ url: 'URL', title: 'Title of document', parent: 'Path to target book' })
// => 'notebooks://grab/URL&title=Title%20of%20document&parent=Path%20to%20target%20book'

grab({ url: 'URL' })
// => 'notebooks://grab/URL'

wifiSharing({ path: 'Path To Book To Share' })
// => 'notebooks://wifi_sharing/Path%20To%20Book%20To%20Share'

wifiSharing()
// => 'notebooks://wifi_sharing'

webdavSync({ path: 'Path To Book To Sync' })
// => 'notebooks://webdav_sync/Path%20To%20Book%20To%20Sync'
```

## 参考资料

- [Notebooks URL Schemes](https://www.notebooksapp.com/notebooks-url-schemes/)
