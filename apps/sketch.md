---
url: /protocol-launcher/apps/sketch.md
---

# Sketch

[Sketch](https://www.sketch.com/) is a vector graphics editor for macOS primarily used for user interface and icon design. **Protocol Launcher** allows you to generate deep links to open files, add libraries, and run plugins in Sketch.

## Usage

There are two ways to use this library:

* On-Demand import from subpaths enables tree-shaking and keeps bundles small.
* Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

### Open Sketch

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'sketch' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'sketch.'}}open()
```

### Open File

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openFile' : 'sketch' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'sketch.'}}openFile({
  path: '/Users/name/Documents/design.sketch',
})
```

### Open File with Layer Focus and Zoom

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openFile' : 'sketch' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'sketch.'}}openFile({
  path: '/Users/name/Documents/design.sketch',
  centerOnLayer: 'layer-123',
  zoom: 2,
})
```

### Add Library

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'addLibrary' : 'sketch' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'sketch.'}}addLibrary({
  url: 'https://developer.apple.com/design/downloads/sketch.rss',
})
```

### Run Plugin

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'runPlugin' : 'sketch' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'sketch.'}}runPlugin({
  pluginId: 'com.example.sketch.messenger',
  commandId: 'message.show',
})
```

### Run Plugin with Query Parameters

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'runPlugin' : 'sketch' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'sketch.'}}runPlugin({
  pluginId: 'com.example.sketch.messenger',
  commandId: 'message.show',
  query: { msg: 'Hello World' },
})
```
