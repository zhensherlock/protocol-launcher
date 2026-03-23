---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { open, newTask, newBtTask, openTaskList, pauseAllTask, resumeAllTask, preferences, about } from 'protocol-launcher/motrix';
import { SelectInstallationMethod } from '../../.vitepress/components';
import { newTaskParams } from '../../.vitepress/constants/motrix';

const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/motrix' : 'protocol-launcher');
</script>

# Motrix

[Motrix](https://motrix.app) is a full-featured download manager that supports downloading HTTP, FTP, BitTorrent, Magnet, etc. **Protocol Launcher** allows you to generate deep links to create download tasks and control Motrix.

## Usage

There are two ways to use this library:

- On-Demand import from subpaths enables tree-shaking and keeps bundles small.
- Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

<SelectInstallationMethod v-model="currentMethod" />

### Open Motrix

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'motrix' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'motrix.'}}open()
```

<div class="flex justify-center">
  <VPLink :href="open()" target="_self">
    Open Motrix
  </VPLink>
</div>

### New Task

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'newTask' : 'motrix' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'motrix.'}}newTask({
  uri: 'https://example.com/file.dmg',
  out: 'myfile.dmg',
})
```

<div class="flex justify-center">
  <VPLink :href="newTask(newTaskParams)" target="_self">
    New Download Task
  </VPLink>
</div>

### New BitTorrent Task

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'newBtTask' : 'motrix' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'motrix.'}}newBtTask()
```

<div class="flex justify-center">
  <VPLink :href="newBtTask()" target="_self">
    New BitTorrent Task
  </VPLink>
</div>

### Open Task List

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openTaskList' : 'motrix' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'motrix.'}}openTaskList()
```

<div class="flex justify-center">
  <VPLink :href="openTaskList()" target="_self">
    Open Task List
  </VPLink>
</div>

### Pause All Tasks

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'pauseAllTask' : 'motrix' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'motrix.'}}pauseAllTask()
```

<div class="flex justify-center">
  <VPLink :href="pauseAllTask()" target="_self">
    Pause All Tasks
  </VPLink>
</div>

### Resume All Tasks

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'resumeAllTask' : 'motrix' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'motrix.'}}resumeAllTask()
```

<div class="flex justify-center">
  <VPLink :href="resumeAllTask()" target="_self">
    Resume All Tasks
  </VPLink>
</div>

### Open Preferences

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'preferences' : 'motrix' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'motrix.'}}preferences()
```

<div class="flex justify-center">
  <VPLink :href="preferences()" target="_self">
    Open Preferences
  </VPLink>
</div>

### Open About

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'about' : 'motrix' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'motrix.'}}about()
```

<div class="flex justify-center">
  <VPLink :href="about()" target="_self">
    Open About
  </VPLink>
</div>
