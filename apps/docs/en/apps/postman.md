---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { openLocalFlow } from 'protocol-launcher/postman';
import { SelectInstallationMethod } from '../../.vitepress/components';

const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/postman' : 'protocol-launcher');
</script>

# Postman

[Postman](https://www.postman.com/) is an API platform for building, testing, and collaborating on APIs. **Protocol Launcher** allows you to generate URLs for opening local Flow files in Postman.

## Usage

There are two ways to use this library:

- On-Demand import from subpaths enables tree-shaking and keeps bundles small.
- Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

<SelectInstallationMethod v-model="currentMethod" />

## URL Methods

Postman's official Native Git / Flows documentation lists a `postman://app/flows/open?filePath=...` custom protocol link for opening local flows. The generated `filePath` value is a URL-encoded absolute path to the flow file. This module exposes only that documented form.

### Open Local Flow

Generate the documented deep link that opens a local Postman Flow file. Pass the raw absolute path; Protocol Launcher encodes it in the generated URL.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openLocalFlow' : 'postman' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'postman.'}}openLocalFlow({
  filePath: '/Users/username/GitHub/postman/flows/New flow.flow',
})
```

<div class="flex justify-center">
  <VPLink :href="openLocalFlow({ filePath: '/Users/username/GitHub/postman/flows/New flow.flow' })" target="_self">
    Open Local Flow
  </VPLink>
</div>

## Generated URLs

```ts
openLocalFlow({ filePath: '/Users/username/GitHub/postman/flows/New flow.flow' })
// => 'postman://app/flows/open?filePath=%2FUsers%2Fusername%2FGitHub%2Fpostman%2Fflows%2FNew%20flow.flow'
```

## Official Documentation

- [Manage flows with Native Git](https://learning.postman.com/docs/postman-flows/get-started/flows-native-git)
