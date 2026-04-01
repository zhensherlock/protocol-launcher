---
url: /protocol-launcher/apps/cubox.md
---

# Cubox

[Cubox](https://www.cubox.pro/) is a next-generation AI-powered read-it-later assistant that helps you save, organize, and truly understand what you read. **Protocol Launcher** allows you to generate deep links to add content and navigate within Cubox.

## Usage

There are two ways to use this library:

* On-Demand import from subpaths enables tree-shaking and keeps bundles small.
* Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

### Open App

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'cubox' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'cubox.'}}open()
```

### Add Link

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'addLink' : 'cubox' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'cubox.'}}addLink({
  url: 'https://example.com/article',
})
```

### Add Memo

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'addMemo' : 'cubox' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'cubox.'}}addMemo({
  memo: 'Remember to buy groceries',
})
```

### Open Folder

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openFolder' : 'cubox' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'cubox.'}}openFolder({
  name: 'Reading List',
})
```

### Open Inbox

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openInbox' : 'cubox' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'cubox.'}}openInbox()
```

### Open Smart Folder

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openSmartFolder' : 'cubox' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'cubox.'}}openSmartFolder({
  name: 'Recent Articles',
})
```

### Open Starred

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openStarred' : 'cubox' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'cubox.'}}openStarred()
```

### Open Tag

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openTag' : 'cubox' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'cubox.'}}openTag({
  name: 'important',
})
```

### Search

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'search' : 'cubox' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'cubox.'}}search({
  query: 'typescript',
  type: 'card',
})
```
