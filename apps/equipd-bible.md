---
url: /protocol-launcher/apps/equipd-bible.md
---

# Equipd Bible

[Equipd Bible](https://www.equipd.me/) is an EPUB reader optimised for Bible study and ministry use. Compare multiple languages and translations side-by-side. **Protocol Launcher** allows you to generate deep links to open scriptures in Equipd Bible.

## Usage

There are two ways to use this library:

* On-Demand import from subpaths enables tree-shaking and keeps bundles small.
* Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

### Open App

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'equipdBible' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'equipdBible.'}}open()
```

### Lookup Scripture

Lookup a scripture in Equipd Bible using the x-callback-url scheme. This is the most powerful method of integrating with the Equipd Bible app.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'lookup' : 'equipdBible' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'equipdBible.'}}lookup({
  scripture: 'John3:16',
})
```

### Open Scripture

Open a specific scripture in Equipd Bible using the basic URL scheme.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'scripture' : 'equipdBible' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'equipdBible.'}}scripture({
  scripture: '2Timothy3:15,16',
})
```
