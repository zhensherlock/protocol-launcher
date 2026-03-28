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

[Longshot](https://longshot.chitaner.com/) is a powerful screenshot and screen recording tool for macOS. **Protocol Launcher** allows you to generate deep links to trigger actions like screenshot, recording, OCR, and more in Longshot.

## Usage

There are two ways to use this library:

- On-Demand import from subpaths enables tree-shaking and keeps bundles small.
- Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

<SelectInstallationMethod v-model="currentMethod" />

### Start Screenshot

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'snip' : 'longshot' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'longshot.'}}snip({
  func: 'start',
})
```

<div class="flex justify-center">
  <VPLink :href="snip(snipParams)" target="_self">
    Start Screenshot
  </VPLink>
</div>

### Start Area Recording

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'record' : 'longshot' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'longshot.'}}record({
  func: 'startArea',
})
```

<div class="flex justify-center">
  <VPLink :href="record(recordParams)" target="_self">
    Start Area Recording
  </VPLink>
</div>

### Start OCR

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'ocr' : 'longshot' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'longshot.'}}ocr({
  func: 'start',
})
```

<div class="flex justify-center">
  <VPLink :href="ocr(ocrParams)" target="_self">
    Start OCR
  </VPLink>
</div>

### Start Screen Measurement

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'rule' : 'longshot' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'longshot.'}}rule({
  func: 'start',
})
```

<div class="flex justify-center">
  <VPLink :href="rule(ruleParams)" target="_self">
    Start Screen Measurement
  </VPLink>
</div>

### Open Preferences

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'pref' : 'longshot' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'longshot.'}}pref({
  page: 'shortcuts',
})
```

<div class="flex justify-center">
  <VPLink :href="pref(prefParams)" target="_self">
    Open Preferences
  </VPLink>
</div>
