---
url: /protocol-launcher/apps/goodlinks.md
---

# GoodLinks

[GoodLinks](https://goodlinks.app/) is a read-it-later app for saving and reading links. **Protocol Launcher** allows you to generate GoodLinks x-callback-url actions exactly from the official URL scheme: save, open, pick, last, random, unread, starred, untagged, read, and tag.

GoodLinks supports `x-success`, `x-error`, and `x-cancel` callback URLs. Pass them as `xSuccess`, `xError`, and `xCancel` when needed.

## Usage

There are two ways to use this library:

* On-Demand import from subpaths enables tree-shaking and keeps bundles small.
* Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

### Save Link

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'save' : 'goodlinks' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'goodlinks.'}}save({
  url: 'https://apple.com',
  starred: '1',
  tags: 'apple ios',
})
```

### Open Link

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'goodlinks' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'goodlinks.'}}open({
  url: 'https://example.com/article',
})
```

### Pick Link Details

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'pick' : 'goodlinks' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'goodlinks.'}}pick({
  urlParam: 'link',
  titleParam: 'name',
  summaryParam: 'description',
})
```

### Open Last Unread Link

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'last' : 'goodlinks' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'goodlinks.'}}last()
```

### Open Random Unread Link

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'random' : 'goodlinks' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'goodlinks.'}}random()
```

### Show Unread List

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'unread' : 'goodlinks' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'goodlinks.'}}unread()
```

### Show Starred List

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'starred' : 'goodlinks' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'goodlinks.'}}starred()
```

### Show Untagged List

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'untagged' : 'goodlinks' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'goodlinks.'}}untagged()
```

### Show Read List

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'read' : 'goodlinks' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'goodlinks.'}}read()
```

### Show Tagged Links

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'tag' : 'goodlinks' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'goodlinks.'}}tag({
  name: 'apple',
})
```
