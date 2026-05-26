---
url: /protocol-launcher/apps/bunch.md
---

# Bunch

[Bunch](https://bunchapp.co/) is a macOS workspace automation app. **Protocol Launcher** allows you to generate deep links for Bunch.

## Usage

There are two ways to use this library:

* On-Demand import from subpaths enables tree-shaking and keeps bundles small.
* Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

## URL Methods

All helpers below support Bunch's documented `x-callback-url` path format and official `x-source`, `x-success`, `x-delay`, and `x-bunch-beta` URL values when those parameters apply.

### Open Bunch

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'bunch' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'bunch.'}}open({
  bunch: 'Comms',
})

const shortcutUrl = {{currentMethod === 'On-Demand' ? '' : 'bunch.'}}open({
  bunch: 'Comms',
  syntax: 'shortcut',
})

const pathUrl = {{currentMethod === 'On-Demand' ? '' : 'bunch.'}}open({
  bunch: 'WorkBunch',
  syntax: 'path',
})
```

### Open Bunch Beta

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'bunch' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'bunch.'}}open({
  bunch: 'Comms',
  scheme: 'x-bunch-beta',
})
```

### Open With Frontmatter Values

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'bunch' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'bunch.'}}open({
  bunch: 'Default',
  variables: {
    launch: 'TextEdit',
  },
})
```

### Open With Callback Parameters

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'bunch' }} } from '{{ importPath }}'

const callbackUrl = {{currentMethod === 'On-Demand' ? '' : 'bunch.'}}open({
  bunch: 'Comms',
  xCallback: true,
  'x-source': 'com.googlecode.iterm2',
})

const successUrl = {{currentMethod === 'On-Demand' ? '' : 'bunch.'}}open({
  bunch: 'Comms',
  'x-success': 'com.brettterpstra.marked2',
  'x-delay': 15,
})
```

### Close Bunch

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'close' : 'bunch' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'bunch.'}}close({
  bunch: 'Comms',
})

const pathUrl = {{currentMethod === 'On-Demand' ? '' : 'bunch.'}}close({
  bunch: 'Comms',
  syntax: 'path',
})
```

### Toggle Bunch

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'toggle' : 'bunch' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'bunch.'}}toggle({
  bunch: 'Comms',
})

const pathUrl = {{currentMethod === 'On-Demand' ? '' : 'bunch.'}}toggle({
  bunch: 'Comms',
  syntax: 'path',
})
```

### Toggle Tagged Bunches

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'toggle' : 'bunch' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'bunch.'}}toggle({
  tag: 'Tag1+Tag2',
})
```

### Edit Bunch

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'edit' : 'bunch' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'bunch.'}}edit({
  bunch: 'Example',
})

const pathUrl = {{currentMethod === 'On-Demand' ? '' : 'bunch.'}}edit({
  bunch: 'Example',
  syntax: 'path',
})
```

### Run Raw Bunch Text Or File

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'raw' : 'bunch' }} } from '{{ importPath }}'

const fileUrl = {{currentMethod === 'On-Demand' ? '' : 'bunch.'}}raw({
  file: '~/MiscBunch.bunch',
})

const textUrl = {{currentMethod === 'On-Demand' ? '' : 'bunch.'}}raw({
  txt: '(dnd on)',
})
```

### Refresh Bunch Files

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'refresh' : 'bunch' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'bunch.'}}refresh()
```

### Reveal Bunch Folder

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'reveal' : 'bunch' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'bunch.'}}reveal()
```

### Set Preferences

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'setPref' : 'bunch' }} } from '{{ importPath }}'

const toggleUrl = {{currentMethod === 'On-Demand' ? '' : 'bunch.'}}setPref({
  toggleBunches: 1,
})

const folderUrl = {{currentMethod === 'On-Demand' ? '' : 'bunch.'}}setPref({
  configDir: '~/Dropbox/Sync/Bunches',
})
```

### Run Snippet

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'snippet' : 'bunch' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'bunch.'}}snippet({
  file: 'useful.snippets',
  fragment: 'Music',
  variables: {
    playlist: 'spotify:playlist:3cSpIL4Q0H3uqdBMbT6c9x',
  },
})

const pathUrl = {{currentMethod === 'On-Demand' ? '' : 'bunch.'}}snippet({
  file: 'useful.snippets',
  fragment: 'Speak',
  syntax: 'path',
  variables: {
    var1: 'foo',
    var2: 'bar baz',
  },
})
```

### Open Preferences

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'prefs' : 'bunch' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'bunch.'}}prefs()
```

## Official Documentation

* [The Bunch URL Handler](https://bunchapp.co/docs/integration/url-handler/)
