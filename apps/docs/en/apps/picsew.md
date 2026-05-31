---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { hori, scroll, vert } from 'protocol-launcher/picsew';
import { SelectInstallationMethod } from '../../.vitepress/components';
import { horiParams, scrollParams, vertParams } from '../../.vitepress/constants/picsew';

const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/picsew' : 'protocol-launcher');
</script>

# Picsew

[Picsew](https://docs.picsew.app/) is a screenshot stitching app for iOS. **Protocol Launcher** allows you to generate Picsew x-callback-url links.

## Usage

There are two ways to use this library:

- On-Demand import from subpaths enables tree-shaking and keeps bundles small.
- Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

<SelectInstallationMethod v-model="currentMethod" />

## Notes

Picsew's official x-callback-url documentation defines three actions: `/scroll`, `/vert`, and `/hori`. This module exposes only those documented actions as `scroll()`, `vert()`, and `hori()`.

The payload mirrors the documented action parameters: `in`, `count` when `in=latest`, `out`, `watermark`, `border`, `mockup2`, `clean_status`, `remove_scrollbar`, and `delete_source`. The older `mockup` parameter is marked unavailable by Picsew, so it is not exposed.

### Scrollshot Stitching

Use the specified images for Picsew Scrollshot Stitching.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'scroll' : 'picsew' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'picsew.'}}scroll({
  in: 'recent',
  out: 'save',
  clean_status: 'yes',
  mockup2: 'iphone-14-blue',
  delete_source: 'yes',
})
```

<div class="flex justify-center">
  <VPLink :href="scroll(scrollParams)" target="_self">
    Create Scrollshot Stitching URL
  </VPLink>
</div>

### Vertical Stitching

Use the specified images for Picsew Vertical Stitching.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'vert' : 'picsew' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'picsew.'}}vert({
  in: 'latest',
  count: 3,
  out: 'copy',
  watermark: 'repeat',
})
```

<div class="flex justify-center">
  <VPLink :href="vert(vertParams)" target="_self">
    Create Vertical Stitching URL
  </VPLink>
</div>

### Horizontal Stitching

Use the specified images for Picsew Horizontal Stitching.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'hori' : 'picsew' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'picsew.'}}hori({
  in: 'paste',
  out: 'copy',
})
```

<div class="flex justify-center">
  <VPLink :href="hori(horiParams)" target="_self">
    Create Horizontal Stitching URL
  </VPLink>
</div>

## Generated URLs

```ts
scroll({
  in: 'recent',
  out: 'save',
  clean_status: 'yes',
  mockup2: 'iphone-14-blue',
  delete_source: 'yes',
})
// => 'picsew://x-callback-url/scroll?in=recent&out=save&clean_status=yes&mockup2=iphone-14-blue&delete_source=yes'

vert({
  in: 'latest',
  count: 3,
  out: 'copy',
  watermark: 'repeat',
})
// => 'picsew://x-callback-url/vert?in=latest&count=3&out=copy&watermark=repeat'

hori({
  in: 'paste',
  out: 'copy',
})
// => 'picsew://x-callback-url/hori?in=paste&out=copy'
```

## Official Documentation

- [Picsew x-callback-url](https://docs.picsew.app/getting-started/x-callback-url/)
