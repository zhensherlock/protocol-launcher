---
url: /protocol-launcher/apps/anybox.md
---

# Anybox

[Anybox](https://anybox.app/) is a bookmark and link manager for saving, finding, and organizing links. **Protocol Launcher** generates Anybox URLs from the official URL Schemes documentation, including save, paste, Quick Find, macOS utilities, iOS photo actions, and x-callback-url save/paste actions.

## Usage

There are two ways to use this library:

* On-Demand import from subpaths enables tree-shaking and keeps bundles small.
* Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

### Show Anybox

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'show' : 'anybox' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'anybox.'}}show()
```

### Paste Clipboard Content

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'paste' : 'anybox' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'anybox.'}}paste({
  tag: 'Reading',
  starred: 'yes',
})
```

### Save Text Content

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'save' : 'anybox' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'anybox.'}}save({
  text: 'https://example.com/article',
  tag: 'Reading',
  starred: 'yes',
  archive: 'webarchive',
})
```

### Download URL (macOS)

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'download' : 'anybox' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'anybox.'}}download({
  url: 'https://example.com/file.pdf',
  tag: 'Reading',
})
```

### Save Current Tab (macOS)

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'saveTab' : 'anybox' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'anybox.'}}saveTab({
  tag: 'Reading',
  starred: 'yes',
  archive: 'pdf',
})
```

### Open Link From Pasteboard

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openLinkFromPasteboard' : 'anybox' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'anybox.'}}openLinkFromPasteboard()
```

### Copy Pasteboard Link As Markdown (macOS)

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'copyPasteboardLinkAsMarkdown' : 'anybox' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'anybox.'}}copyPasteboardLinkAsMarkdown()
```

### Quick Find

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'quickFind' : 'anybox' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'anybox.'}}quickFind({
  q: 'research',
})
```

### Quick Save (macOS)

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'quickSave' : 'anybox' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'anybox.'}}quickSave()
```

### Stash Box (macOS)

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'stashBox' : 'anybox' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'anybox.'}}stashBox()
```

### Toggle Anydock (macOS)

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'toggleAnydock' : 'anybox' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'anybox.'}}toggleAnydock()
```

### New Note (iOS)

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'newNote' : 'anybox' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'anybox.'}}newNote()
```

### Latest Photo (iOS)

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'latestPhoto' : 'anybox' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'anybox.'}}latestPhoto()
```

### Photos (iOS)

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'photos' : 'anybox' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'anybox.'}}photos()
```

### x-callback-url Save

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'xCallbackSave' : 'anybox' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'anybox.'}}xCallbackSave({
  text: 'helloWorld',
  xSuccess: 'successURL',
  xError: 'errorURL',
})
```

### x-callback-url Paste

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'xCallbackPaste' : 'anybox' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'anybox.'}}xCallbackPaste({
  xSuccess: 'successURL',
  xError: 'errorURL',
})
```
