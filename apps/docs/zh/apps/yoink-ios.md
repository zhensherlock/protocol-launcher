---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import {
  addString,
  copyToClipboard,
  downloadUrl,
  pasteFromClipboard,
  showDownloadUi,
} from 'protocol-launcher/yoink-ios';
import { SelectInstallationMethod } from '../../.vitepress/components';
import {
  addStringParams,
  copyToClipboardParams,
  downloadUrlParams,
  pasteFromClipboardParams,
} from '../../.vitepress/constants/yoink-ios';

const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/yoink-ios' : 'protocol-launcher');
</script>

# Yoink for iOS

[Yoink for iPad and iPhone](https://eternalstorms.at/yoink/ios/) 是一款用于在 iPad 和 iPhone 上收集文件与片段的 shelf 应用。**Protocol Launcher** 允许你生成 Yoink for iOS 官方 URL scheme action。

## 使用

有两种方式使用这个库：

- 按需从子路径导入，支持 tree-shaking 并保持 bundle 更小。
- 从根包完整导入，适合快速脚本或 demo，但会包含所有 app 模块。

生产构建建议使用按需导入；完整导入适合快速脚本或演示。

<SelectInstallationMethod v-model="currentMethod" />

## 说明

本模块只封装 Yoink for iPad and iPhone Usage Tips 官方页面记录的 URL scheme action：`pastefromclipboard`、`copytoclipboard`、`showdownloadui`、`downloadurl` 和 `addstring`。

官方页面记录了 scheme 可使用 `x-success` 和 `x-error` callback 参数。`showdownloadui` 不接收 callback，因为 Yoink 明确说明这个 action 不会回调调用方 app。

官方页面的通用格式行写作 `yoink://[action]...`，但每个具体 action 示例都使用 `yoinkios://...`；本模块跟随这些具体 action 示例。

## URL 方法

### 从剪贴板粘贴

将当前剪贴板内容粘贴到 Yoink。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'pasteFromClipboard' : 'yoinkIos' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'yoinkIos.'}}pasteFromClipboard({
  title: 'My Title',
  createStack: 0,
})
```

<div class="flex justify-center">
  <VPLink :href="pasteFromClipboard(pasteFromClipboardParams)" target="_self">
    粘贴剪贴板内容到 Yoink
  </VPLink>
</div>

### 复制到剪贴板

按索引将 Yoink 中的项目复制到剪贴板。在 Yoink 中，`0` 表示最上方的项目。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'copyToClipboard' : 'yoinkIos' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'yoinkIos.'}}copyToClipboard({
  index: 0,
})
```

<div class="flex justify-center">
  <VPLink :href="copyToClipboard(copyToClipboardParams)" target="_self">
    复制第一个 Yoink 项目
  </VPLink>
</div>

### 显示下载界面

显示 Yoink 的下载界面。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'showDownloadUi' : 'yoinkIos' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'yoinkIos.'}}showDownloadUi()
```

<div class="flex justify-center">
  <VPLink :href="showDownloadUi()" target="_self">
    显示 Yoink 下载界面
  </VPLink>
</div>

### 下载 URL

在 Yoink 中下载 URL。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'downloadUrl' : 'yoinkIos' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'yoinkIos.'}}downloadUrl({
  url: 'https://eternalstorms.at/yoink/Yoink.zip',
})
```

<div class="flex justify-center">
  <VPLink :href="downloadUrl(downloadUrlParams)" target="_self">
    在 Yoink 中下载 URL
  </VPLink>
</div>

### 添加字符串

在 Yoink 中保存字符串。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'addString' : 'yoinkIos' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'yoinkIos.'}}addString({
  string: 'Yoink is available on\u0002iOS and macOS',
  title: 'Yoink Availability',
})
```

<div class="flex justify-center">
  <VPLink :href="addString(addStringParams)" target="_self">
    添加字符串到 Yoink
  </VPLink>
</div>

## 生成的 URL

```ts
pasteFromClipboard(pasteFromClipboardParams)
// => 'yoinkios://pastefromclipboard?title=My%20Title&createStack=0'

copyToClipboard(copyToClipboardParams)
// => 'yoinkios://copytoclipboard?index=0'

showDownloadUi()
// => 'yoinkios://showdownloadui'

downloadUrl(downloadUrlParams)
// => 'yoinkios://downloadurl?url=https%3A%2F%2Feternalstorms.at%2Fyoink%2FYoink.zip'

addString(addStringParams)
// => 'yoinkios://addstring?string=Yoink%20is%20available%20on%02iOS%20and%20macOS&title=Yoink%20Availability'
```

## 官方文档

- [Yoink for iPad and iPhone Usage Tips](https://eternalstorms.at/yoink/ios/tips/)
