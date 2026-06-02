---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { openFile, openRemotePdf, openSyncedFile } from 'protocol-launcher/pdf-expert';
import { SelectInstallationMethod } from '../../.vitepress/components';
import { openFileParams, openRemotePdfParams, openSyncedFileParams } from '../../.vitepress/constants/pdf-expert';

const currentMethod = ref('On-Demand');
const importPath = computed(() =>
  currentMethod.value === 'On-Demand' ? 'protocol-launcher/pdf-expert' : 'protocol-launcher',
);
</script>

# PDF Expert

[PDF Expert](https://pdfexpert.com/) 是 Readdle 面向 Mac、iPad 和 iPhone 的 PDF 编辑与阅读应用。**Protocol Launcher** 可以生成 PDF Expert URL scheme 链接。

## 使用方式

有两种使用此库的方式：

- 按需导入（On-Demand）：从子路径导入支持 tree-shaking，保持较小的打包体积。
- 完整导入（Full Import）：从根包导入更方便，但会包含所有应用模块。

生产构建建议选择按需导入；快速脚本或演示可以使用完整导入。

<SelectInstallationMethod v-model="currentMethod" />

### 打开远程 PDF

通过添加官方文档中的 `PDFE` 前缀，保存并打开一个直接 PDF URL。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openRemotePdf' : 'pdfExpert' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pdfExpert.'}}openRemotePdf({
  url: 'https://example.com/Guide.pdf',
})
```

<div class="flex justify-center">
  <VPLink :href="openRemotePdf(openRemotePdfParams)" target="_self">
    在 PDF Expert 中打开远程 PDF
  </VPLink>
</div>

### 打开文件

使用官方文档中的 `PDFEFILE:///Folder/Subfolder/File.pdf` 形式，打开存储在 PDF Expert “Documents” 标签页中的文件。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openFile' : 'pdfExpert' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pdfExpert.'}}openFile({
  path: 'Folder/Subfolder/File.pdf',
})
```

<div class="flex justify-center">
  <VPLink :href="openFile(openFileParams)" target="_self">
    在 PDF Expert 中打开文件
  </VPLink>
</div>

如果文件夹名称中包含空格，Readdle 官方文档说明可以使用 `%20`；请在 `path` 中传入这些转义。

### 打开同步文件

使用官方文档中的 `pdfefile:///SyncedFolders/` 静态路径，打开保存在 Synced folders 中的文件。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openSyncedFile' : 'pdfExpert' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pdfExpert.'}}openSyncedFile({
  path: 'folder1/folder2/test.pdf',
})
```

<div class="flex justify-center">
  <VPLink :href="openSyncedFile(openSyncedFileParams)" target="_self">
    在 PDF Expert 中打开同步文件
  </VPLink>
</div>

Readdle 提示，其他应用语言可能需要使用 URL 中 Synced folders 部分的翻译版本。此 helper 生成官方文档中的英文静态路径 `pdfefile:///SyncedFolders/`。

## 参考资料

- [Readdle PDF Expert URL schemes](https://support.readdle.com/pdfexpert/en_US/for-developers/url-schemes)
