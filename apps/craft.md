---
url: /protocol-launcher/apps/craft.md
---

# Craft

[Craft](https://www.craft.do) is a powerful, beautiful tool for creating documents, managing tasks, and organizing your work and life. **Protocol Launcher** allows you to generate deep links to open and create content in Craft.

## Usage

There are two ways to use this library:

* On-Demand import from subpaths enables tree-shaking and keeps bundles small.
* Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

### Open App

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'craft' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'craft.'}}open()
```

### Open Document

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openDocument' : 'craft' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'craft.'}}openDocument({
  spaceId: 'abc-123',
  blockId: 'xyz-789',
})
```

### Create Document

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'createDocument' : 'craft' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'craft.'}}createDocument({
  spaceId: 'abc-123',
  title: 'My Note',
  content: 'Hello **World**',
  folderId: '',
})
```

### Create New Document

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'createNewDocument' : 'craft' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'craft.'}}createNewDocument()
```

### Create Block

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'createBlock' : 'craft' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'craft.'}}createBlock({
  parentBlockId: 'doc-123',
  spaceId: 'abc-123',
  content: 'New content',
  index: 9999,
})
```

### Open Daily Note

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openDailyNote' : 'craft' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'craft.'}}openDailyNote({
  spaceId: 'abc-123',
  type: 'today',
})
```

### Open Search

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openSearch' : 'craft' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'craft.'}}openSearch({
  spaceId: 'abc-123',
  query: 'vacation plans',
})
```

### Open Space

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openSpace' : 'craft' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'craft.'}}openSpace({
  spaceId: 'abc-123',
  tab: 'calendar',
})
```
