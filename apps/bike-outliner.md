---
url: /protocol-launcher/apps/bike-outliner.md
---

# Bike Outliner

[Bike Outliner](https://www.hogbaysoftware.com/bike/) is an outliner app. **Protocol Launcher** allows you to generate Bike Outliner row links and path row links.

## Usage

There are two ways to use this library:

* On-Demand import from subpaths enables tree-shaking and keeps bundles small.
* Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

## Notes

Bike Outliner's official documentation defines row links with the `bike://<rootid>/<focusid>#<selectid>` pattern. The focused row id and selected row id are optional. It also defines path row links in the `bike:///path/to/file.bike#row` form.

This module exposes only those documented link forms. Use `openRowLink()` when you already have a complete Bike Outliner link copied from Bike Outliner.

### Open Row

Open Bike Outliner and select a row by using the document root id, optional focused row id, and optional selected row id.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openRow' : 'bikeOutliner' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'bikeOutliner.'}}openRow({
  rootId: 'KOcw9x9N',
  focusId: 'ch',
  selectedId: 'zf',
})
```

### Open Path Row

Use a file path to locate the Bike Outliner outline file, then select the row identified by the fragment id.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openPathRow' : 'bikeOutliner' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'bikeOutliner.'}}openPathRow({
  path: '/Users/jessegrosjean/Documents/todo.bike',
  selectedId: 'aF',
})
```

### Open Existing Row Link

Use `openRowLink()` when you already have a full Bike Outliner row link or path row link.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openRowLink' : 'bikeOutliner' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'bikeOutliner.'}}openRowLink({
  url: 'bike://KOcw9x9N/ch#zf',
})
```

## Generated URLs

```ts
openRow({
  rootId: 'KOcw9x9N',
  focusId: 'ch',
  selectedId: 'zf',
})
// => 'bike://KOcw9x9N/ch#zf'

openPathRow({
  path: '/Users/jessegrosjean/Documents/todo.bike',
  selectedId: 'aF',
})
// => 'bike:///Users/jessegrosjean/Documents/todo.bike#aF'

openRowLink({ url: 'bike://KOcw9x9N/ch#zf' })
// => 'bike://KOcw9x9N/ch#zf'
```

## Official Documentation

* [Bike Outliner Using Links](https://bikeguide.hogbaysoftware.com/using-bike/using-links)
