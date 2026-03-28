---
url: /protocol-launcher/apps/agenda.md
---

# Agenda

[Agenda](https://agenda.community/) is a note-taking app designed for creatives and professionals who want to organize their ideas by date. **Protocol Launcher** allows you to generate deep links to create and manage notes, projects, and categories in Agenda.

## Usage

There are two ways to use this library:

* On-Demand import from subpaths enables tree-shaking and keeps bundles small.
* Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

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

### Create Category

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'createCategory' : 'agenda' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'agenda.'}}createCategory({
  title: 'New Category',
})
```

### Open Note

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openNote' : 'agenda' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'agenda.'}}openNote({
  title: 'Meeting With Peta',
  projectTitle: 'Work',
})
```

### Open Project

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openProject' : 'agenda' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'agenda.'}}openProject({
  title: 'Work Project',
})
```

### Open Overview

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openOverview' : 'agenda' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'agenda.'}}openOverview({
  title: 'This Week',
})
```

### Open Search

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openSearch' : 'agenda' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'agenda.'}}openSearch({
  query: '#Important',
})
```

### Append to Note

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'appendToNote' : 'agenda' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'agenda.'}}appendToNote({
  title: 'Some Note',
  text: 'More Text',
  onTheAgenda: true,
})
```

### Replace Note

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'replaceNote' : 'agenda' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'agenda.'}}replaceNote({
  title: 'Some Note',
  text: 'New Content',
})
```

### Get Identifier

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'getIdentifier' : 'agenda' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'agenda.'}}getIdentifier({
  projectTitle: 'Welcome',
  title: 'Things to Try',
})
```

### Get Selection

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'getSelection' : 'agenda' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'agenda.'}}getSelection()
```

### Get Selected Note

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'getSelectedNote' : 'agenda' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'agenda.'}}getSelectedNote()
```

### Get Selected Project

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'getSelectedProject' : 'agenda' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'agenda.'}}getSelectedProject()
```

### Today

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'today' : 'agenda' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'agenda.'}}today()
```

### On the Agenda

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'onTheAgenda' : 'agenda' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'agenda.'}}onTheAgenda()
```
