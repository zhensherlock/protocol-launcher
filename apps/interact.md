---
url: /protocol-launcher/apps/interact.md
---

# Interact Scratchpad

[Interact Scratchpad](https://docs.getdrafts.com/docs/misc/interact-scratchpad) is a free Mac menu bar utility to ease the creation of contacts from snippets of text, like email signatures and more. **Protocol Launcher** allows you to generate deep links to open the Interact Scratchpad with pre-filled text for contact parsing.

## Usage

There are two ways to use this library:

* On-Demand import from subpaths enables tree-shaking and keeps bundles small.
* Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

### Open Interact Scratchpad

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'interact' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'interact.'}}open()
```

### Open Scratchpad with Text

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'scratchpad' : 'interact' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'interact.'}}scratchpad({
  text: 'John Doe\njohn@example.com\n888-555-1234',
})
```
