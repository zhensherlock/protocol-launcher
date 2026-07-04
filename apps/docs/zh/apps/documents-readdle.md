---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { openFile, openSyncedFile } from 'protocol-launcher/documents-readdle';
import { SelectInstallationMethod } from '../../.vitepress/components';
import {
  openFileParams,
  openLocalizedSyncedFileParams,
  openSyncedFileParams,
} from '../../.vitepress/constants/documents-readdle';

const currentMethod = ref('On-Demand');
const importPath = computed(() =>
  currentMethod.value === 'On-Demand' ? 'protocol-launcher/documents-readdle' : 'protocol-launcher',
);
</script>

# Documents by Readdle

[Documents by Readdle](https://readdle.com/documents) 是 Readdle 面向 iPhone 和 iPad 的文件管理、媒体播放与文档中心应用。**Protocol Launcher** 允许你生成 Documents URL scheme 链接，用于打开应用内文件。

## 使用方式

有两种使用此库的方式：

- 按需导入（On-Demand）：从子路径导入支持 tree-shaking，保持较小的打包体积。
- 完整导入（Full Import）：从根包导入更方便，但会包含所有应用模块。

生产构建建议选择按需导入；快速脚本或演示可以使用完整导入。

<SelectInstallationMethod v-model="currentMethod" />

### 打开文件

使用官方文档中的 `rdocs:///folder/subfolder/file.pdf` 形式，打开存储在 My Files 区域中的文件。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openFile' : 'documentsReaddle' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'documentsReaddle.'}}openFile({
  path: 'folder/subfolder/file.pdf',
})
```

<div class="flex justify-center">
  <VPLink :href="openFile(openFileParams)" target="_self">
    在 Documents 中打开文件
  </VPLink>
</div>

### 打开同步文件

使用官方文档中的 `rdocs:///SyncedFolders/` 静态路径，打开保存在 Synced folders 中的文件。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openSyncedFile' : 'documentsReaddle' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'documentsReaddle.'}}openSyncedFile({
  path: 'folder1/folder2/test.pdf',
})
```

<div class="flex justify-center">
  <VPLink :href="openSyncedFile(openSyncedFileParams)" target="_self">
    在 Documents 中打开同步文件
  </VPLink>
</div>

Readdle 提示，其他应用语言可能需要使用 URL 中 Synced folders 部分的翻译版本。需要时通过 `syncedFoldersPath` 传入该路径段：

```ts-vue [{{currentMethod}}]
const localizedUrl = {{currentMethod === 'On-Demand' ? '' : 'documentsReaddle.'}}openSyncedFile({
  syncedFoldersPath: '同期フォルダ',
  path: 'folder1/folder2/test.pdf',
})
```

<div class="flex justify-center">
  <VPLink :href="openSyncedFile(openLocalizedSyncedFileParams)" target="_self">
    打开本地化同步文件
  </VPLink>
</div>

## 生成的 URL

```ts
openFile({ path: 'folder/subfolder/file.pdf' })
// => 'rdocs:///folder/subfolder/file.pdf'

openSyncedFile({ path: 'folder1/folder2/test.pdf' })
// => 'rdocs:///SyncedFolders/folder1/folder2/test.pdf'

openSyncedFile({
  syncedFoldersPath: '同期フォルダ',
  path: 'folder1/folder2/test.pdf',
})
// => 'rdocs:///同期フォルダ/folder1/folder2/test.pdf'
```

## 官方文档

- [Documents URL scheme from Safari](https://support.readdle.com/documents/transfer-share-your-files/transfer-files-from-safari-to-documents)
