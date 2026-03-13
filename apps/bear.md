---
url: /protocol-launcher/apps/bear.md
---

# Bear

[Bear](https://bear.app/) is a beautiful, flexible writing app for crafting notes and prose. Bear works on iPhone, iPad, and Mac, offering everything you need to write, edit, and organize your ideas. With its powerful tag management system, markdown support, and seamless synchronization across devices, Bear is perfect for everything from quick notes to in-depth articles. **Protocol Launcher** allows you to generate deep links to open notes, create content, search, and manage tags in Bear.

## Usage

There are two ways to use this library:

* On-Demand import from subpaths enables tree-shaking and keeps bundles small.
* Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

### Open Bear

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'bear' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'bear.'}}open()
```

### Open Note

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openNote' : 'bear' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'bear.'}}openNote({
  title: 'Shopping',
})
```

### Create Note

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'create' : 'bear' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'bear.'}}create({
  title: 'Shopping',
  text: 'Milk',
  tags: 'home,groceries',
})
```

### Add Text to Note

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'addText' : 'bear' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'bear.'}}addText({
  text: 'new line',
  id: '4EDAF0D1',
  mode: 'append',
})
```

### Search

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'search' : 'bear' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'bear.'}}search({
  term: 'nemo',
  tag: 'movies',
})
```

### Open Tag

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openTag' : 'bear' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'bear.'}}openTag({
  tag: 'work',
})
```

### Rename Tag

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'renameTag' : 'bear' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'bear.'}}renameTag({
  tag: 'old-tag',
  newTag: 'new-tag',
})
```

### Delete Tag

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'deleteTag' : 'bear' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'bear.'}}deleteTag({
  tag: 'obsolete-tag',
})
```

### Show Todos

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'todo' : 'bear' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'bear.'}}todo({
  search: 'home',
})
```

### Show Today's Notes

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'today' : 'bear' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'bear.'}}today()
```

### Show Locked Notes

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'locked' : 'bear' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'bear.'}}locked()
```

### Show Untagged Notes

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'untagged' : 'bear' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'bear.'}}untagged()
```

### Show Trash

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'trash' : 'bear' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'bear.'}}trash()
```

### Show Archive

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'archive' : 'bear' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'bear.'}}archive()
```

### Grab URL

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'grabUrl' : 'bear' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'bear.'}}grabUrl({
  url: 'https://bear.app',
})
```

### Get All Tags

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'tags' : 'bear' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'bear.'}}tags({
  token: '123456-123456-123456',
})
```
