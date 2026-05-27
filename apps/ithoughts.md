---
url: /protocol-launcher/apps/ithoughts.md
---

# iThoughts

[iThoughts](https://www.toketaware.com/ithoughts) is a mind-mapping app. **Protocol Launcher** allows you to generate deep links for iThoughts.

## Usage

There are two ways to use this library:

* On-Demand import from subpaths enables tree-shaking and keeps bundles small.
* Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

## URL Methods

The helpers below mirror the two x-callback-url actions documented by iThoughts: `makeMap` and `amendMap`.

### Make Map

Convert Markdown or text into a new mind map. The documented parameters are exactly `text`, `note`, `link`, `format`, `path`, and `style`. iThoughts documents `md` and `text` as format values, and also supports `[[clipboard]]` in the `text` parameter to use the clipboard contents.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'makeMap' : 'ithoughts' }} } from '{{ importPath }}'

const markdownUrl = {{currentMethod === 'On-Demand' ? '' : 'ithoughts.'}}makeMap({
  text: '# Project\n- Collect ideas\n- Draft outline',
  note: 'Created from Markdown',
  link: 'https://www.toketaware.com/ithoughts-howto-x-callback-url',
  format: 'md',
})

const clipboardUrl = {{currentMethod === 'On-Demand' ? '' : 'ithoughts.'}}makeMap({
  text: '[[clipboard]]',
  format: 'text',
})
```

### Amend Map

Amend an existing map by passing its `path` and a `target` topic match. iThoughts documents `edit` as `YES` or `NO`; `YES` selects the new topic and edits it.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'amendMap' : 'ithoughts' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'ithoughts.'}}amendMap({
  text: 'Follow up',
  path: '/tasks',
  target: 'newtasks',
  edit: 'YES',
})
```

## Official Documentation

* [iThoughts x-callback-url](https://www.toketaware.com/ithoughts-howto-x-callback-url)
