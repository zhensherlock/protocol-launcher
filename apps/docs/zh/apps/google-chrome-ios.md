---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { openUrl } from 'protocol-launcher/google-chrome-ios';
import { SelectInstallationMethod } from '../../.vitepress/components';
import { openUrlParams } from '../../.vitepress/constants/google-chrome-ios';

const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/google-chrome-ios' : 'protocol-launcher');
</script>

# Google Chrome iOS

[Google Chrome](https://www.google.com/chrome/) 是 Google 开发的网页浏览器。**Protocol Launcher** 允许您生成深度链接，以在 iOS 版 Chrome 中打开 HTTP 和 HTTPS URL。

## 使用方式

有两种使用此库的方式：

- 按需导入（On-Demand）：从子路径导入支持 tree-shaking，保持较小的打包体积。
- 完整导入（Full Import）：从根包导入更方便，但会包含所有应用模块。

生产构建建议选择按需导入；快速脚本或演示可以使用完整导入。

<SelectInstallationMethod v-model="currentMethod" />

## 说明

此模块遵循 Chrome for iOS 官方 [URL scheme 文档](https://chromium.googlesource.com/chromium/src/+/lkgr/docs/ios/opening_links.md)：替换第一个 `:` 前面的 URL scheme，因此 `http` 变为 `googlechrome`，`https` 变为 `googlechromes`。

### 打开 URL

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openUrl' : 'googleChromeIos' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'googleChromeIos.'}}openUrl({
  url: 'https://www.google.com/',
})
```

<div class="flex justify-center">
  <VPLink :href="openUrl(openUrlParams)" target="_self">
    在 Google Chrome iOS 中打开 URL
  </VPLink>
</div>
