---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { downloadUrl, openInternalFile } from 'protocol-launcher/goodreader';
import { SelectInstallationMethod } from '../../.vitepress/components';
import { downloadUrlParams, openInternalFileParams } from '../../.vitepress/constants/goodreader';

const currentMethod = ref('On-Demand');
const importPath = computed(() =>
  currentMethod.value === 'On-Demand' ? 'protocol-launcher/goodreader' : 'protocol-launcher',
);
</script>

# GoodReader

[GoodReader](https://www.goodreader.com/) 是一款适用于 iPad 和 iPhone 的文件查看与文件管理应用。**Protocol Launcher** 允许您生成 GoodReader URL scheme 链接。

## 使用方式

有两种使用此库的方式：

- 按需导入（On-Demand）：从子路径导入支持 tree-shaking，保持较小的打包体积。
- 完整导入（Full Import）：从根包导入更方便，但会包含所有应用模块。

生产构建建议选择按需导入；快速脚本或演示可以使用完整导入。

<SelectInstallationMethod v-model="currentMethod" />

### 打开内部文件

使用官方文档中的 `gropen://` 前缀和文件内部路径，从 GoodReader 的内部文件存储打开文件。传入的路径会被原样拼接。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openInternalFile' : 'goodreader' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'goodreader.'}}openInternalFile({
  path: 'Manuals/Guide.pdf',
})
```

<div class="flex justify-center">
  <VPLink :href="openInternalFile(openInternalFileParams)" target="_self">
    在 GoodReader 中打开内部文件
  </VPLink>
</div>

### 下载 URL

通过给原始 HTTP 或 HTTPS URL scheme 添加官方文档中的 `g` 前缀，将下载发送到 GoodReader。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'downloadUrl' : 'goodreader' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'goodreader.'}}downloadUrl({
  url: 'https://example.com/Guide.pdf',
})
```

<div class="flex justify-center">
  <VPLink :href="downloadUrl(downloadUrlParams)" target="_self">
    在 GoodReader 中下载 URL
  </VPLink>
</div>

## 参考

- [GoodReader 文件管理](https://www.goodreader.com/how-to-manage-files-in-goodreader)
- [GoodReader 内置网页浏览器](https://www.goodreader.com/goodreader-networking-built-in-web-browser)
