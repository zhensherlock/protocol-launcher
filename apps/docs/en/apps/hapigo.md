---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { searchApp, searchClipboard, searchFile, translate } from 'protocol-launcher/hapigo';
import { SelectInstallationMethod } from '../../.vitepress/components';
import { searchAppParams, searchClipboardParams, searchFileParams, translateParams } from '../../.vitepress/constants/hapigo';

const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/hapigo' : 'protocol-launcher');
</script>

# HapiGo

[HapiGo](https://www.hapigo.com/) is a macOS launcher for quickly opening apps and files. **Protocol Launcher** allows you to generate HapiGo URL scheme links.

## Usage

There are two ways to use this library:

- On-Demand import from subpaths enables tree-shaking and keeps bundles small.
- Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

<SelectInstallationMethod v-model="currentMethod" />

## Notes

HapiGo's official URL scheme is `hapigo://open?extensionID={id}&query={query}`. The documentation defines `query` as the keyword and `extensionID` as the extension id. It currently exposes four built-in extension IDs: `APP`, `FILE`, `CLIPBOARD`, and `TRANSLATE`. This module only provides helpers for those documented IDs.

When HapiGo is in mixed search mode, HapiGo documents that `APP` and `FILE` have the same effect and both send text to the main search.

### Search App

Send text to HapiGo app search.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'searchApp' : 'hapigo' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'hapigo.'}}searchApp({
  query: 'hapigo',
})
```

<div class="flex justify-center">
  <VPLink :href="searchApp(searchAppParams)" target="_self">
    Search App
  </VPLink>
</div>

### Search File

Send text to HapiGo file search.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'searchFile' : 'hapigo' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'hapigo.'}}searchFile({
  query: 'pdf',
})
```

<div class="flex justify-center">
  <VPLink :href="searchFile(searchFileParams)" target="_self">
    Search File
  </VPLink>
</div>

### Search Clipboard

Send text to HapiGo clipboard search.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'searchClipboard' : 'hapigo' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'hapigo.'}}searchClipboard({
  query: 'request',
})
```

<div class="flex justify-center">
  <VPLink :href="searchClipboard(searchClipboardParams)" target="_self">
    Search Clipboard
  </VPLink>
</div>

### Translate

Send text to HapiGo Translate.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'translate' : 'hapigo' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'hapigo.'}}translate({
  query: 'app',
})
```

<div class="flex justify-center">
  <VPLink :href="translate(translateParams)" target="_self">
    Translate
  </VPLink>
</div>

## Generated URLs

```ts
searchApp({ query: 'hapigo' })
// => 'hapigo://open?extensionID=APP&query=hapigo'

searchFile({ query: 'pdf' })
// => 'hapigo://open?extensionID=FILE&query=pdf'

searchClipboard({ query: 'request' })
// => 'hapigo://open?extensionID=CLIPBOARD&query=request'

translate({ query: 'app' })
// => 'hapigo://open?extensionID=TRANSLATE&query=app'
```

## Official Documentation

- [HapiGo API & PopClip plugin](https://docs-cn.hapigo.com/adv/urlscheme)
