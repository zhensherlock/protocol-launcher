---
url: /protocol-launcher/apps/coda.md
---

# Coda

[Coda](https://panic.com/code-editor) (now known as Code Editor) is a portable code editor for iOS, perfect for quick web edits on the go. **Protocol Launcher** allows you to generate deep links to create and edit files in Coda.

## Usage

There are two ways to use this library:

* On-Demand import from subpaths enables tree-shaking and keeps bundles small.
* Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

### Open App

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'coda' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'coda.'}}open()
```

### New File

Creates a new file in Coda. If one exists, a file with a unique name will be created.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'newFile' : 'coda' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'coda.'}}newFile({
  name: 'foo.txt',
  text: 'bar',
})
```

### Append

Append text to a file in Coda, creating it if necessary.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'append' : 'coda' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'coda.'}}append({
  name: 'foo.txt',
  text: 'bar',
})
```

### Replace

Replaces the contents of a file in Coda, creating it if necessary.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'replace' : 'coda' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'coda.'}}replace({
  name: 'foo.txt',
  text: 'bar',
})
```
