---
url: /protocol-launcher/apps/ulysses.md
---

# Ulysses

[Ulysses](https://ulysses.app/) is a powerful writing app for Mac, iPad and iPhone. **Protocol Launcher** allows you to generate deep links to create and manage sheets, groups, and notes in Ulysses.

## Usage

There are two ways to use this library:

* On-Demand import from subpaths enables tree-shaking and keeps bundles small.
* Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

### Open App

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'ulysses' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'ulysses.'}}open()
```

### Open Item

Open a sheet or group by identifier, name, or path.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openItem' : 'ulysses' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'ulysses.'}}openItem({
  id: 'DCj45UWKr_g15y2vBPwJdQ',
})
```

### New Sheet

Create a new sheet with optional content, group, format, and position.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'newSheet' : 'ulysses' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'ulysses.'}}newSheet({
  text: 'My new sheet content',
  group: '/Books',
  format: 'markdown',
  index: 0,
})
```

### Insert Text

Insert or append text to an existing sheet.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'insert' : 'ulysses' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'ulysses.'}}insert({
  id: 'H8zLAmc1I0njH-0Ql-3YGQ',
  text: 'Inserted text',
  format: 'markdown',
  position: 'end',
  newline: 'prepend',
})
```

### Attach Note

Attach a note to a sheet.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'attachNote' : 'ulysses' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'ulysses.'}}attachNote({
  id: 'H8zLAmc1I0njH-0Ql-3YGQ',
  text: 'My new note',
  format: 'markdown',
})
```

### Attach Keywords

Add keywords to a sheet.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'attachKeywords' : 'ulysses' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'ulysses.'}}attachKeywords({
  id: 'H8zLAmc1I0njH-0Ql-3YGQ',
  keywords: 'Draft,Important',
})
```

### New Group

Create a new group for organizing sheets.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'newGroup' : 'ulysses' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'ulysses.'}}newGroup({
  name: 'My Group',
  parent: '/Books',
  index: 0,
})
```

### Copy Item

Copy a sheet or group to a target location.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'copy' : 'ulysses' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'ulysses.'}}copy({
  id: 'hZ7IX2jqKbVmPGlYUXkZjQ',
  targetGroup: 'H8zLAmc1I0njH-0Ql-3YGQ',
  index: 4,
})
```

### Open All

Open the special "All" group showing all sheets.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openAll' : 'ulysses' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'ulysses.'}}openAll()
```

### Open Favorites

Open the special "Favorites" group.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openFavorites' : 'ulysses' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'ulysses.'}}openFavorites()
```

### Open Recent

Open the special "Last 7 Days" (Recent) group.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openRecent' : 'ulysses' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'ulysses.'}}openRecent()
```
