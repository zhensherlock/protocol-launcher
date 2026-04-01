---
url: /protocol-launcher/apps/dict-cc.md
---

# dict.cc

[dict.cc](https://www.dict.cc/) is a free English-German and multilingual dictionary. **Protocol Launcher** allows you to generate deep links to search for translations in dict.cc.

## Usage

There are two ways to use this library:

* On-Demand import from subpaths enables tree-shaking and keeps bundles small.
* Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

### Open dict.cc

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'dictCc' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'dictCc.'}}open()
```

### Open dict.cc Plus

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'dictCc' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'dictCc.'}}open({
  plus: true,
})
```

### Search with Word

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'dictCc' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'dictCc.'}}open({
  word: 'hello',
  languagePair: 'de-en',
})
```

### Search

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'search' : 'dictCc' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'dictCc.'}}search({
  word: 'world',
  languagePair: 'en-de',
  newSearch: true,
})
```
