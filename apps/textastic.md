---
url: /protocol-launcher/apps/textastic.md
---

# Textastic

[Textastic](https://www.textasticapp.com/) is a powerful text editor for iOS, iPadOS, and macOS with syntax highlighting for over 80 programming and markup languages. **Protocol Launcher** allows you to generate deep links to open, create, and edit files in Textastic.

## Usage

There are two ways to use this library:

* On-Demand import from subpaths enables tree-shaking and keeps bundles small.
* Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

### Open App

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'textastic' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'textastic.'}}open()
```

### Open File

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openFile' : 'textastic' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'textastic.'}}openFile({
  path: 'example.com',
  name: 'index.html',
})
```

### New File

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'newFile' : 'textastic' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'textastic.'}}newFile({
  name: 'foo.txt',
  text: 'bar',
})
```

### Append Text

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'append' : 'textastic' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'textastic.'}}append({
  location: 'iCloud',
  name: 'clipboard.txt',
})
```

### Replace Text

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'replace' : 'textastic' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'textastic.'}}replace({
  location: 'iCloud',
  name: 'scratchpad.txt',
  text: 'foo',
})
```

### Reload Customizations

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'reloadCustomizations' : 'textastic' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'textastic.'}}reloadCustomizations()
```
