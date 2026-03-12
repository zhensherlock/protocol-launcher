---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { open, openPreferences, navigateTo, gallery, customSearch } from 'protocol-launcher/alfred';
import { SelectInstallationMethod } from '../../.vitepress/components';
import {
  navigateToWorkflowsPath,
  navigateToResolveDependenciesPath,
  navigateToWorkflowPath,
  navigateToSnippetsPath,
  galleryWorkflowParams,
  galleryWorkflow1PasswordParams,
  customSearchGithubParams,
} from '../../.vitepress/constants/alfred';

const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/alfred' : 'protocol-launcher');
</script>

# Alfred

[Alfred](https://www.alfredapp.com/) is an award-winning productivity app for macOS. It boosts your efficiency with hotkeys, keywords, text expansion and more. Search your Mac and the web, and be more productive with custom actions to control your Mac. **Protocol Launcher** allows you to generate deep links to open Alfred, navigate preferences, browse workflows in the gallery, and create custom searches.

## Usage

There are two ways to use this library:

- On-Demand import from subpaths enables tree-shaking and keeps bundles small.
- Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

<SelectInstallationMethod v-model="currentMethod" />

### Open Alfred

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'alfred' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'alfred.'}}open()
```

<div class="flex justify-center">
  <VPLink :href="open()" target="_self">
    Open Alfred
  </VPLink>
</div>

### Open Preferences

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openPreferences' : 'alfred' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'alfred.'}}openPreferences()
```

<div class="flex justify-center">
  <VPLink :href="openPreferences()" target="_self">
    Open Alfred Preferences
  </VPLink>
</div>

### Navigate to Preferences Section

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'navigateTo' : 'alfred' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'alfred.'}}navigateTo({
  path: 'workflows',
})
```

<div class="flex justify-center">
  <VPLink :href="navigateTo(navigateToWorkflowsPath)" target="_self">
    Navigate to Workflows
  </VPLink>
</div>

### Navigate to Resolve Dependencies

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'navigateTo' : 'alfred' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'alfred.'}}navigateTo({
  path: 'workflows>resolvedependencies',
})
```

<div class="flex justify-center">
  <VPLink :href="navigateTo(navigateToResolveDependenciesPath)" target="_self">
    Navigate to Resolve Dependencies
  </VPLink>
</div>

### Navigate to Specific Workflow

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'navigateTo' : 'alfred' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'alfred.'}}navigateTo({
  path: 'workflows>workflow>user.workflow.81CBDAC6-527B-4B33-BA4E-F12563EBED09',
})
```

<div class="flex justify-center">
  <VPLink :href="navigateTo(navigateToWorkflowPath)" target="_self">
    Navigate to Workflow
  </VPLink>
</div>

### Navigate to Snippets

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'navigateTo' : 'alfred' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'alfred.'}}navigateTo({
  path: 'features>snippets',
})
```

<div class="flex justify-center">
  <VPLink :href="navigateTo(navigateToSnippetsPath)" target="_self">
    Navigate to Snippets
  </VPLink>
</div>

### Open Gallery Workflow

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'gallery' : 'alfred' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'alfred.'}}gallery({
  author: '{{ galleryWorkflowParams.author }}',
  workflow: '{{ galleryWorkflowParams.workflow }}',
})
```

<div class="flex justify-center">
  <VPLink :href="gallery(galleryWorkflowParams)" target="_self">
    Open About Mac Workflow
  </VPLink>
</div>

### Open 1Password Gallery Workflow

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'gallery' : 'alfred' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'alfred.'}}gallery({
  author: '{{ galleryWorkflow1PasswordParams.author }}',
  workflow: '{{ galleryWorkflow1PasswordParams.workflow }}',
})
```

<div class="flex justify-center">
  <VPLink :href="gallery(galleryWorkflow1PasswordParams)" target="_self">
    Open 1Password Workflow
  </VPLink>
</div>

### Create Custom Search

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'customSearch' : 'alfred' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'alfred.'}}customSearch({
  title: '{{ customSearchGithubParams.title }}',
  keyword: '{{ customSearchGithubParams.keyword }}',
  url: '{{ customSearchGithubParams.url }}',
})
```

<div class="flex justify-center">
  <VPLink :href="customSearch(customSearchGithubParams)" target="_self">
    Create GitHub Custom Search
  </VPLink>
</div>
