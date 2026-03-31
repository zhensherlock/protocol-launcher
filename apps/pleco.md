---
url: /protocol-launcher/apps/pleco.md
---

# Pleco

[Pleco](https://www.pleco.com/) is the world's best Chinese dictionary app for iOS and Android. **Protocol Launcher** allows you to generate deep links to search words, view definitions, and import flashcards in Pleco.

## Usage

There are two ways to use this library:

* On-Demand import from subpaths enables tree-shaking and keeps bundles small.
* Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

### Search

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'search' : 'pleco' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pleco.'}}search({
  q: '你好',
  xSource: 'MyApp',
  xSuccess: 'myapp://success',
})
```

### Definition

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'definition' : 'pleco' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pleco.'}}definition({
  hw: '你好',
  py: 'ni3hao3',
  sec: 'stroke',
  xSource: 'MyApp',
  xSuccess: 'myapp://success',
})
```

### Clipboard

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'clipboard' : 'pleco' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pleco.'}}clipboard()
```

### Import Flashcards

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'importFlashcards' : 'pleco' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pleco.'}}importFlashcards({
  u: 'https://example.com/flashcards.txt',
  xSource: 'MyApp',
  xSuccess: 'myapp://success',
})
```
