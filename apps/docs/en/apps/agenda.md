---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { 
  appendToNote, 
  createCategory, 
  createNote, 
  createProject, 
  getIdentifier, 
  getSelectedNote, 
  getSelectedProject, 
  getSelection, 
  onTheAgenda, 
  openNote, 
  openOverview, 
  openProject, 
  openSearch, 
  replaceNote, 
  today 
} from 'protocol-launcher/agenda';
import { SelectInstallationMethod } from '../../.vitepress/components';
import {
  createNoteParams,
  createProjectParams,
  createCategoryParams,
  openNoteParams,
  openProjectParams,
  openOverviewParams,
  appendToNoteParams,
  replaceNoteParams,
} from '../../.vitepress/constants/agenda';

const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/agenda' : 'protocol-launcher');
</script>

# Agenda

[Agenda](https://agenda.community/) is a note-taking app designed for creatives and professionals who want to organize their ideas by date. **Protocol Launcher** allows you to generate deep links to create and manage notes, projects, and categories in Agenda.

## Usage

There are two ways to use this library:

- On-Demand import from subpaths enables tree-shaking and keeps bundles small.
- Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

<SelectInstallationMethod v-model="currentMethod" />

### Create Note

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'createNote' : 'agenda' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'agenda.'}}createNote({
  title: 'Meeting Notes',
  text: 'Discussion about project roadmap',
  projectTitle: 'Work',
  onTheAgenda: true,
  date: '2024-01-15',
})
```

<div class="flex justify-center">
  <VPLink :href="createNote(createNoteParams)" target="_self">
    Create Note in Agenda
  </VPLink>
</div>

### Create Project

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'createProject' : 'agenda' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'agenda.'}}createProject({
  title: 'New Project',
  categoryTitle: 'Work',
  select: true,
  sortOrder: 'newest-first',
})
```

<div class="flex justify-center">
  <VPLink :href="createProject(createProjectParams)" target="_self">
    Create Project in Agenda
  </VPLink>
</div>

### Create Category

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'createCategory' : 'agenda' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'agenda.'}}createCategory({
  title: 'New Category',
})
```

<div class="flex justify-center">
  <VPLink :href="createCategory(createCategoryParams)" target="_self">
    Create Category in Agenda
  </VPLink>
</div>

### Open Note

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openNote' : 'agenda' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'agenda.'}}openNote({
  title: 'Meeting With Peta',
  projectTitle: 'Work',
})
```

<div class="flex justify-center">
  <VPLink :href="openNote(openNoteParams)" target="_self">
    Open Note in Agenda
  </VPLink>
</div>

### Open Project

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openProject' : 'agenda' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'agenda.'}}openProject({
  title: 'Work Project',
})
```

<div class="flex justify-center">
  <VPLink :href="openProject(openProjectParams)" target="_self">
    Open Project in Agenda
  </VPLink>
</div>

### Open Overview

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openOverview' : 'agenda' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'agenda.'}}openOverview({
  title: 'This Week',
})
```

<div class="flex justify-center">
  <VPLink :href="openOverview(openOverviewParams)" target="_self">
    Open Overview in Agenda
  </VPLink>
</div>

### Open Search

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openSearch' : 'agenda' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'agenda.'}}openSearch({
  query: '#Important',
})
```

<div class="flex justify-center">
  <VPLink :href="openSearch({ query: '#Important' })" target="_self">
    Open Search in Agenda
  </VPLink>
</div>

### Append to Note

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'appendToNote' : 'agenda' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'agenda.'}}appendToNote({
  title: 'Some Note',
  text: 'More Text',
  onTheAgenda: true,
})
```

<div class="flex justify-center">
  <VPLink :href="appendToNote(appendToNoteParams)" target="_self">
    Append to Note in Agenda
  </VPLink>
</div>

### Replace Note

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'replaceNote' : 'agenda' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'agenda.'}}replaceNote({
  title: 'Some Note',
  text: 'New Content',
})
```

<div class="flex justify-center">
  <VPLink :href="replaceNote(replaceNoteParams)" target="_self">
    Replace Note in Agenda
  </VPLink>
</div>

### Get Identifier

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'getIdentifier' : 'agenda' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'agenda.'}}getIdentifier({
  projectTitle: 'Welcome',
  title: 'Things to Try',
})
```

<div class="flex justify-center">
  <VPLink :href="getIdentifier({ projectTitle: 'Welcome', title: 'Things to Try' })" target="_self">
    Get Identifier in Agenda
  </VPLink>
</div>

### Get Selection

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'getSelection' : 'agenda' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'agenda.'}}getSelection()
```

<div class="flex justify-center">
  <VPLink :href="getSelection()" target="_self">
    Get Selection in Agenda
  </VPLink>
</div>

### Get Selected Note

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'getSelectedNote' : 'agenda' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'agenda.'}}getSelectedNote()
```

<div class="flex justify-center">
  <VPLink :href="getSelectedNote()" target="_self">
    Get Selected Note in Agenda
  </VPLink>
</div>

### Get Selected Project

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'getSelectedProject' : 'agenda' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'agenda.'}}getSelectedProject()
```

<div class="flex justify-center">
  <VPLink :href="getSelectedProject()" target="_self">
    Get Selected Project in Agenda
  </VPLink>
</div>

### Today

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'today' : 'agenda' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'agenda.'}}today()
```

<div class="flex justify-center">
  <VPLink :href="today()" target="_self">
    Open Today in Agenda
  </VPLink>
</div>

### On the Agenda

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'onTheAgenda' : 'agenda' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'agenda.'}}onTheAgenda()
```

<div class="flex justify-center">
  <VPLink :href="onTheAgenda()" target="_self">
    Open On the Agenda in Agenda
  </VPLink>
</div>
