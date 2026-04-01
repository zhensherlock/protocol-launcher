---
url: /protocol-launcher/apps/terminology.md
---

# Terminology

[Terminology](https://agiletortoise.com/terminology/) is a browser for the English language – part dictionary, part thesaurus, and part research tool. **Protocol Launcher** allows you to generate deep links to look up words and search in Terminology.

## Usage

There are two ways to use this library:

* On-Demand import from subpaths enables tree-shaking and keeps bundles small.
* Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

### Open Terminology

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'terminology' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'terminology.'}}open()
```

### Lookup Word

Open directly to a detail look up for a term in Terminology.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'lookup' : 'terminology' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'terminology.'}}lookup({
  text: 'automation',
})
```

### Search

Open directly to a word search for a string in Terminology.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'search' : 'terminology' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'terminology.'}}search({
  q: 'protocol',
})
```
