---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { open, createGist } from 'protocol-launcher/codehub';
import { SelectInstallationMethod } from '../../.vitepress/components';
import { createGistParams } from '../../.vitepress/constants/codehub';

const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/codehub' : 'protocol-launcher');
</script>

# CodeHub

[CodeHub](https://github.com/CodeHubApp/CodeHub) is the best way to browse and maintain your GitHub repositories on iPhone, iPod Touch, and iPad. **Protocol Launcher** allows you to generate deep links to open CodeHub and create GitHub Gists.

## Usage

There are two ways to use this library:

- On-Demand import from subpaths enables tree-shaking and keeps bundles small.
- Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

<SelectInstallationMethod v-model="currentMethod" />

### Open App

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'codehub' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'codehub.'}}open()
```

<div class="flex justify-center">
  <VPLink :href="open()" target="_self">
    Open CodeHub
  </VPLink>
</div>

### Create Gist

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'createGist' : 'codehub' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'codehub.'}}createGist({
  description: 'Hello from Protocol Launcher',
  public: true,
  files: {
    'hello.txt': 'Hello, World!',
    'codehub.txt': 'CodeHub is awesome!',
  },
})
```

<div class="flex justify-center">
  <VPLink :href="createGist(createGistParams)" target="_self">
    Create Gist in CodeHub
  </VPLink>
</div>
