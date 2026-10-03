---
url: /protocol-launcher/apps/picsew.md
---

# Picsew

[Picsew](https://docs.picsew.app/) is a screenshot stitching app for iOS. **Protocol Launcher** allows you to generate Picsew x-callback-url links.

## Usage

There are two ways to use this library:

* On-Demand import from subpaths enables tree-shaking and keeps bundles small.
* Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

## Notes

Picsew's official x-callback-url documentation defines three actions: `/scroll`, `/vert`, and `/hori`. This module exposes only those documented actions as `scroll()`, `vert()`, and `hori()`.

Picsew 3.18.1+ adds `mockupName` (`mockup-name`) and `mockupBackgroundWidth` (`mockup-background-width`, an integer from 0 to 100). `mockup2` remains a compatible alias. The payload also supports: `in`, `count` when `in=latest`, `out`, `watermark`, `border`, `mockup2`, `clean_status`, `remove_scrollbar`, and `delete_source`. The older `mockup` parameter still prompts an upgrade and should be avoided in new URLs.

### Scrollshot Stitching

Use the specified images for Picsew Scrollshot Stitching.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'scroll' : 'picsew' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'picsew.'}}scroll({
  in: 'recent',
  out: 'save',
  clean_status: 'yes',
  mockupName: 'iphone-air-sky-blue',
  mockupBackgroundWidth: 50,
  delete_source: 'yes',
})
```

### Vertical Stitching

Use the specified images for Picsew Vertical Stitching.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'vert' : 'picsew' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'picsew.'}}vert({
  in: 'latest',
  count: 3,
  out: 'copy',
  watermark: 'repeat',
})
```

### Horizontal Stitching

Use the specified images for Picsew Horizontal Stitching.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'hori' : 'picsew' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'picsew.'}}hori({
  in: 'paste',
  out: 'copy',
})
```

## Generated URLs

```ts
scroll({
  in: 'recent',
  out: 'save',
  clean_status: 'yes',
  mockupName: 'iphone-air-sky-blue',
  mockupBackgroundWidth: 50,
  delete_source: 'yes',
})
// => 'picsew://x-callback-url/scroll?in=recent&out=save&clean_status=yes&mockup-name=iphone-air-sky-blue&mockup-background-width=50&delete_source=yes'

vert({
  in: 'latest',
  count: 3,
  out: 'copy',
  watermark: 'repeat',
})
// => 'picsew://x-callback-url/vert?in=latest&count=3&out=copy&watermark=repeat'

hori({
  in: 'paste',
  out: 'copy',
})
// => 'picsew://x-callback-url/hori?in=paste&out=copy'
```

## Official Documentation

* [Picsew x-callback-url](https://docs.picsew.app/getting-started/x-callback-url/)
