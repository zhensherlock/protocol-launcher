---
url: /protocol-launcher/apps/charty.md
---

# Charty

[Charty](https://chartyios.app/) is an iOS app for creating charts from Apple's Shortcuts app. **Protocol Launcher** allows you to generate Charty URL scheme links.

## Usage

There are two ways to use this library:

* On-Demand import from subpaths enables tree-shaking and keeps bundles small.
* Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

## URL Scheme

Charty's official documentation defines one URL scheme endpoint for adding custom color themes: `charty://add-theme?name=...&baseColors=...&colors=...`. This module exposes only that documented endpoint.

The `colors` value is a comma-separated list of hexadecimal color codes. Charty documents 3, 6, and 8 character color codes. The documented `baseColors` values are `0`, `3`, and `4`.

### Add Theme

Add a custom Charty color theme.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'addTheme' : 'charty' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'charty.'}}addTheme({
  name: 'BlGrYeOrRe',
  baseColors: 0,
  colors: '1a76e8,28d475,ffd416,ff6f1d,eb2d40',
})
```

::: details Output example

```ts
import { addTheme } from 'protocol-launcher/charty'

addTheme({
  name: 'BlGrYeOrRe',
  baseColors: 0,
  colors: '1a76e8,28d475,ffd416,ff6f1d,eb2d40',
})
// => 'charty://add-theme?name=BlGrYeOrRe&baseColors=0&colors=1a76e8,28d475,ffd416,ff6f1d,eb2d40'
```

:::

## References

* [Charty 1.1 Iris](https://chartyios.app/blog/charty11iris.html)
* [Charty Themes](https://chartyios.app/themes.html)
