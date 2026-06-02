---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { openFile, openFileAtPage } from 'protocol-launcher/highlights';
import { SelectInstallationMethod } from '../../.vitepress/components';
import { openFileAtPageParams, openFileParams } from '../../.vitepress/constants/highlights';

const currentMethod = ref('On-Demand');
const importPath = computed(() =>
  currentMethod.value === 'On-Demand' ? 'protocol-launcher/highlights' : 'protocol-launcher',
);
</script>

# Highlights

[Highlights](https://highlightsapp.net/) 是一款用于阅读和批注 PDF 文档的 PDF 阅读器。**Protocol Launcher** 可以生成 Highlights URL scheme 链接。

## 使用方式

有两种使用此库的方式：

- 按需导入（On-Demand）：从子路径导入支持 tree-shaking，保持较小的打包体积。
- 完整导入（Full Import）：从根包导入更方便，但会包含所有应用模块。

生产构建建议选择按需导入；快速脚本或演示可以使用完整导入。

<SelectInstallationMethod v-model="currentMethod" />

### 打开文件

使用官方文档中的 `highlights://Users/test.pdf` URL 形式打开 PDF 文件。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openFile' : 'highlights' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'highlights.'}}openFile({
  path: '/Users/test.pdf',
})
```

<div class="flex justify-center">
  <VPLink :href="openFile(openFileParams)" target="_self">
    在 Highlights 中打开文件
  </VPLink>
</div>

### 在指定页打开文件

打开同一个 PDF 文件，并跳转到官方文档中的页码 fragment。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openFileAtPage' : 'highlights' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'highlights.'}}openFileAtPage({
  path: '/Users/test.pdf',
  page: 3,
})
```

<div class="flex justify-center">
  <VPLink :href="openFileAtPage(openFileAtPageParams)" target="_self">
    在 Highlights 中打开指定页面
  </VPLink>
</div>

## 参考资料

- [Highlights Version 1.2 URL-scheme notes](https://highlightsapp.net/changelog/2015/01/03/Version-1.2/)
