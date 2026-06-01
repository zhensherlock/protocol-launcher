---
url: /protocol-launcher/apps/textwell.md
---

# Textwell

[Textwell](https://sociomedia.com/textwell/) is a text editor for iOS and macOS. **Protocol Launcher** allows you to generate official URL scheme links for Textwell.

## Usage

There are two ways to use this library:

* On-Demand import from subpaths enables tree-shaking and keeps bundles small.
* Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

## Notes

Textwell's official URL scheme documentation says every query parameter value must be URL-encoded. Textwell URL schemes support the documented `x-success` callback option, and `extendXSuccess` can ask Textwell to append `textwell-text`, `textwell-loc`, and `textwell-len` to the callback URL.

The `prefix` and `suffix` options are documented only for the four paste methods: `pasteReplace`, `pasteInsert`, `pasteAdd`, and `pasteReplaceRange`.

### Open

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'textwell' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'textwell.'}}open()
```

### Replace

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'replace' : 'textwell' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'textwell.'}}replace({
  text: 'Hello, Textwell.',
})
```

### Insert

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'insert' : 'textwell' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'textwell.'}}insert({
  text: 'Inserted text',
})
```

### Add

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'add' : 'textwell' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'textwell.'}}add({
  text: 'New ending',
})
```

### Replace Range

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'replaceRange' : 'textwell' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'textwell.'}}replaceRange({
  replacingLoc: 7,
  replacingLen: 5,
  text: 'Textwell',
  selectingLoc: 0,
  selectingLen: 16,
})
```

### Paste Methods

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'pasteReplace, pasteInsert, pasteAdd' : 'textwell' }} } from '{{ importPath }}'

const replaceUrl = {{currentMethod === 'On-Demand' ? '' : 'textwell.'}}pasteReplace()
const insertUrl = {{currentMethod === 'On-Demand' ? '' : 'textwell.'}}pasteInsert({
  prefix: '> ',
  suffix: '\n',
})
const addUrl = {{currentMethod === 'On-Demand' ? '' : 'textwell.'}}pasteAdd()
```

### Paste Replace Range

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'pasteReplaceRange' : 'textwell' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'textwell.'}}pasteReplaceRange({
  replacingLoc: 7,
  replacingLen: 5,
  selectingLoc: 0,
  selectingLen: 16,
})
```

### Execute Action

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'executeAction' : 'textwell' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'textwell.'}}executeAction({
  title: 'Format Markdown',
})
```

### Import Action

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'importAction' : 'textwell' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'textwell.'}}importAction({
  title: 'Hello',
  source: 'editor.setText("Hello")',
  iconTitle: 'star',
  desc: 'Create hello text',
  platform: 0,
  confirming: 1,
})
```

### x-success

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'replace' : 'textwell' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'textwell.'}}replace({
  text: 'Hello',
  xSuccess: 'shortcuts://callback',
  extendXSuccess: true,
})
```

## Generated URLs

```ts
open()
// => 'textwell://'

replace({ text: 'Hello, Textwell.' })
// => 'textwell:///replace?text=Hello%2C%20Textwell.'

insert({ text: 'Inserted text' })
// => 'textwell:///insert?text=Inserted%20text'

add({ text: 'New ending' })
// => 'textwell:///add?text=New%20ending'

replaceRange({
  replacingLoc: 7,
  replacingLen: 5,
  text: 'Textwell',
  selectingLoc: 0,
  selectingLen: 16,
})
// => 'textwell:///replaceRange?replacingLoc=7&replacingLen=5&text=Textwell&selectingLoc=0&selectingLen=16'

pasteReplace()
// => 'textwell:///pasteReplace?'

pasteInsert({ prefix: '> ', suffix: '\n' })
// => 'textwell:///pasteInsert?prefix=%3E%20&suffix=%0A'

pasteAdd()
// => 'textwell:///pasteAdd?'

pasteReplaceRange({
  replacingLoc: 7,
  replacingLen: 5,
  selectingLoc: 0,
  selectingLen: 16,
})
// => 'textwell:///pasteReplaceRange?replacingLoc=7&replacingLen=5&selectingLoc=0&selectingLen=16'

executeAction({ title: 'Format Markdown' })
// => 'textwell:///executeAction?title=Format%20Markdown'

importAction({
  title: 'Hello',
  source: 'editor.setText("Hello")',
  iconTitle: 'star',
  desc: 'Create hello text',
  platform: 0,
  confirming: 1,
})
// => 'textwell:///importAction?title=Hello&source=editor.setText(%22Hello%22)&iconTitle=star&desc=Create%20hello%20text&platform=0&confirming=1'

replace({
  text: 'Hello',
  xSuccess: 'shortcuts://callback',
  extendXSuccess: true,
})
// => 'textwell:///replace?text=Hello&x-success=shortcuts%3A%2F%2Fcallback&extendXSuccess=true'
```

## Official Documentation

* [Textwell URL Schemes](https://sociomedia.com/textwell/urlschemes/)
