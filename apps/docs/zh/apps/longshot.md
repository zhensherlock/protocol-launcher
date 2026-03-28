---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { ocr, pref, record, rule, snip } from 'protocol-launcher/longshot';
import { SelectInstallationMethod } from '../../.vitepress/components';
import { ocrParams, prefParams, recordParams, ruleParams, snipParams } from '../../.vitepress/constants/longshot';

const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/longshot' : 'protocol-launcher');
</script>

# Longshot

[Longshot](https://longshot.chitaner.com/) 是一款强大的 macOS 截图和录屏工具。**Protocol Launcher** 允许您生成深度链接以在 Longshot 中触发截图、录屏、OCR 等操作。

## 使用方式

有两种使用此库的方式：

- 按需导入（On-Demand）：从子路径导入支持 tree-shaking，保持较小的打包体积。
- 完整导入（Full Import）：从根包导入更方便，但会包含所有应用模块。

生产构建建议选择按需导入；快速脚本或演示可以使用完整导入。

<SelectInstallationMethod v-model="currentMethod" />

### 开始截图

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'snip' : 'longshot' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'longshot.'}}snip({
  func: 'start',
})
```

<div class="flex justify-center">
  <VPLink :href="snip(snipParams)" target="_self">
    开始截图
  </VPLink>
</div>

### 开始区域录屏

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'record' : 'longshot' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'longshot.'}}record({
  func: 'startArea',
})
```

<div class="flex justify-center">
  <VPLink :href="record(recordParams)" target="_self">
    开始区域录屏
  </VPLink>
</div>

### 开始 OCR 文字识别

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'ocr' : 'longshot' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'longshot.'}}ocr({
  func: 'start',
})
```

<div class="flex justify-center">
  <VPLink :href="ocr(ocrParams)" target="_self">
    开始 OCR 文字识别
  </VPLink>
</div>

### 开始屏幕测量

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'rule' : 'longshot' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'longshot.'}}rule({
  func: 'start',
})
```

<div class="flex justify-center">
  <VPLink :href="rule(ruleParams)" target="_self">
    开始屏幕测量
  </VPLink>
</div>

### 打开偏好设置

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'pref' : 'longshot' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'longshot.'}}pref({
  page: 'shortcuts',
})
```

<div class="flex justify-center">
  <VPLink :href="pref(prefParams)" target="_self">
    打开偏好设置
  </VPLink>
</div>
