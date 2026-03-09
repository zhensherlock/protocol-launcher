---
url: /protocol-launcher/apps/kaleidoscope.md
---

# Kaleidoscope

[Kaleidoscope](https://kaleidoscope.app/) is the world's most powerful file comparison and merge app. It allows you to spot differences in text and image files, or even folders full of files. **Protocol Launcher** allows you to generate deep links to open and compare resources in Kaleidoscope.

## Usage

There are two ways to use this library:

* On-Demand import from subpaths enables tree-shaking and keeps bundles small.
* Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

### Open Kaleidoscope

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'kaleidoscope' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'kaleidoscope.'}}open()
```

### Compare Files

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'compare' : 'kaleidoscope' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'kaleidoscope.'}}compare({
  previousPath: '/Users/dev/Desktop/previous.md',
  latestPath: '/Users/dev/Desktop/latest.md',
})
```

### Compare Clipboard

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'clipboard' : 'kaleidoscope' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'kaleidoscope.'}}clipboard({
  label: 'Clipboard',
})
```

### Open History

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'history' : 'kaleidoscope' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'kaleidoscope.'}}history({
  label: 'History',
  filePath: '/Users/dev/protocol-launcher/packages/protocol-launcher/src/kaleidoscope/history.ts',
})
```
