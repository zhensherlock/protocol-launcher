---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { clipboard, definition, importFlashcards, search } from 'protocol-launcher/pleco';
import { SelectInstallationMethod } from '../../.vitepress/components';
import { searchParams, definitionParams, importFlashcardsParams } from '../../.vitepress/constants/pleco';

const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/pleco' : 'protocol-launcher');
</script>

# Pleco

[Pleco](https://www.pleco.com/) is the world's best Chinese dictionary app for iOS and Android. **Protocol Launcher** allows you to generate deep links to search words, view definitions, and import flashcards in Pleco.

## Usage

There are two ways to use this library:

- On-Demand import from subpaths enables tree-shaking and keeps bundles small.
- Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

<SelectInstallationMethod v-model="currentMethod" />

### Search

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'search' : 'pleco' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pleco.'}}search({
  q: '你好',
  xSource: 'MyApp',
  xSuccess: 'myapp://success',
})
```

<div class="flex justify-center">
  <VPLink :href="search(searchParams)" target="_self">
    Search in Pleco
  </VPLink>
</div>

### Definition

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'definition' : 'pleco' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pleco.'}}definition({
  hw: '你好',
  py: 'ni3hao3',
  sec: 'stroke',
  xSource: 'MyApp',
  xSuccess: 'myapp://success',
})
```

<div class="flex justify-center">
  <VPLink :href="definition(definitionParams)" target="_self">
    View Definition in Pleco
  </VPLink>
</div>

### Clipboard

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'clipboard' : 'pleco' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pleco.'}}clipboard()
```

<div class="flex justify-center">
  <VPLink :href="clipboard()" target="_self">
    Open Clipboard in Pleco
  </VPLink>
</div>

### Import Flashcards

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'importFlashcards' : 'pleco' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pleco.'}}importFlashcards({
  u: 'https://example.com/flashcards.txt',
  xSource: 'MyApp',
  xSuccess: 'myapp://success',
})
```

<div class="flex justify-center">
  <VPLink :href="importFlashcards(importFlashcardsParams)" target="_self">
    Import Flashcards in Pleco
  </VPLink>
</div>
