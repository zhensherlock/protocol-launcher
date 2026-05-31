---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { history, newJson, paste, scriptsPanel } from 'protocol-launcher/ok-json';
import { SelectInstallationMethod } from '../../.vitepress/components';
import { newJsonParams } from '../../.vitepress/constants/ok-json';

const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/ok-json' : 'protocol-launcher');
</script>

# OK JSON

[OK JSON](https://okjson.app/) is a JSON viewer. **Protocol Launcher** allows you to generate OK JSON URL scheme links.

## Usage

There are two ways to use this library:

- On-Demand import from subpaths enables tree-shaking and keeps bundles small.
- Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

<SelectInstallationMethod v-model="currentMethod" />

## Notes

OK JSON's official URL Schemes page documents five actions: `okjson://paste`, `okjson://new?content=...`, `okjson://history`, `okjson://scripts-panel`, and `okjson://script/...`. This module only exposes helpers for those documented actions.

`newJson()` accepts a raw JSON string and serializes it as the official URL-encoded `content` query parameter. `runScript()` accepts the custom script file name without the `.js` extension, matching the official script URL format.

### View JSON String from Pasteboard

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'paste' : 'okJson' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'okJson.'}}paste()
```

<div class="flex justify-center">
  <VPLink :href="paste()" target="_self">
    View Pasteboard JSON in OK JSON
  </VPLink>
</div>

### View JSON String

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'newJson' : 'okJson' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'okJson.'}}newJson({
  content: '{"hello":"world"}',
})
```

<div class="flex justify-center">
  <VPLink :href="newJson(newJsonParams)" target="_self">
    View JSON String in OK JSON
  </VPLink>
</div>

### Show History Window

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'history' : 'okJson' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'okJson.'}}history()
```

<div class="flex justify-center">
  <VPLink :href="history()" target="_self">
    Show OK JSON History
  </VPLink>
</div>

### Show Scripts Panel Window

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'scriptsPanel' : 'okJson' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'okJson.'}}scriptsPanel()
```

<div class="flex justify-center">
  <VPLink :href="scriptsPanel()" target="_self">
    Show OK JSON Scripts Panel
  </VPLink>
</div>

### Run Script

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'runScript' : 'okJson' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'okJson.'}}runScript({
  scriptFileNameWithoutJsExtension: 'copy-minified-json',
})
```

## Generated URLs

```ts
paste()
// => 'okjson://paste'

newJson({
  content: '{"hello":"world"}',
})
// => 'okjson://new?content=%7B%22hello%22%3A%22world%22%7D'

history()
// => 'okjson://history'

scriptsPanel()
// => 'okjson://scripts-panel'

runScript({
  scriptFileNameWithoutJsExtension: 'copy-minified-json',
})
// => 'okjson://script/copy-minified-json'
```

## Official Documentation

- [OK JSON URL Schemes](https://docs.okjson.app/url-schemes)
