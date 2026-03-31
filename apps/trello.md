---
url: /protocol-launcher/apps/trello.md
---

# Trello

[Trello](https://trello.com/) is a collaboration tool that organizes your projects into boards. **Protocol Launcher** allows you to generate deep links to create boards and cards, and navigate to specific content in Trello.

## Usage

There are two ways to use this library:

* On-Demand import from subpaths enables tree-shaking and keeps bundles small.
* Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

### Open Trello

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'trello' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'trello.'}}open()
```

### Create Board

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'createBoard' : 'trello' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'trello.'}}createBoard({
  name: 'My New Board',
  organization: 'My Organization',
  permission: 'private',
  xSuccess: 'myapp://success',
  xError: 'myapp://failure',
})
```

### Create Card

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'createCard' : 'trello' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'trello.'}}createCard({
  shortlink: '81QRDHnt',
  name: 'MyCardName',
  description: 'MyCardDescription',
  listId: '526e7338ffa7dfb94d0084a7',
})
```

### Show Board

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'showBoard' : 'trello' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'trello.'}}showBoard({
  shortlink: '81QRDHnt',
  xSource: 'MyTestApp',
})
```

### Show Card

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'showCard' : 'trello' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'trello.'}}showCard({
  id: '526e7338ffa7dfb94d0084a6',
  xSource: 'MyTestApp',
})
```
