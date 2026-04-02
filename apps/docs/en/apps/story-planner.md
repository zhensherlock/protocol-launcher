---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { open, add, project } from 'protocol-launcher/story-planner';
import { SelectInstallationMethod } from '../../.vitepress/components';
import { addParams, projectParams } from '../../.vitepress/constants/story-planner';

const currentMethod = ref('On-Demand');
const importPath = computed(() =>
  currentMethod.value === 'On-Demand' ? 'protocol-launcher/story-planner' : 'protocol-launcher',
);
</script>

# Story Planner

[Story Planner](https://www.storyplanner.app/) is a powerful planning app for writers to plot stories and organize writing projects. **Protocol Launcher** allows you to generate deep links to open Story Planner and manage your writing projects.

## Usage

There are two ways to use this library:

- On-Demand import from subpaths enables tree-shaking and keeps bundles small.
- Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

<SelectInstallationMethod v-model="currentMethod" />

### Open Story Planner

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'storyPlanner' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'storyPlanner.'}}open()
```

<div class="flex justify-center">
  <VPLink :href="open()" target="_self">
    Open Story Planner
  </VPLink>
</div>

### Add Project

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'add' : 'storyPlanner' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'storyPlanner.'}}add({
  title: 'The Master Cat',
})
```

<div class="flex justify-center">
  <VPLink :href="add(addParams)" target="_self">
    Open in Story Planner
  </VPLink>
</div>

### Open Project

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'project' : 'storyPlanner' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'storyPlanner.'}}project({
  title: 'My Novel',
  tab: 'characters',
})
```

<div class="flex justify-center">
  <VPLink :href="project(projectParams)" target="_self">
    Open in Story Planner
  </VPLink>
</div>
