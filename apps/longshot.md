---
url: /protocol-launcher/apps/longshot.md
---

# Longshot

[Longshot](https://longshot.chitaner.com/) is a powerful screenshot and screen recording tool for macOS. **Protocol Launcher** allows you to generate deep links to trigger actions like screenshot, recording, OCR, and more in Longshot.

## Usage

There are two ways to use this library:

* On-Demand import from subpaths enables tree-shaking and keeps bundles small.
* Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

### Start Screenshot

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'snip' : 'longshot' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'longshot.'}}snip({
  func: 'start',
})
```

### Start Area Recording

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'record' : 'longshot' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'longshot.'}}record({
  func: 'start_area',
})
```

### Start OCR

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'ocr' : 'longshot' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'longshot.'}}ocr({
  func: 'start',
})
```

### Start Screen Measurement

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'rule' : 'longshot' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'longshot.'}}rule({
  func: 'start',
})
```

### Open Preferences

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'pref' : 'longshot' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'longshot.'}}pref({
  page: 'shortcuts',
})
```

### Return Capture Results

snip, record and ocr accept xSuccess, xError and xSource. Supplying callback options (or xCallback: true) selects x-callback-url and clipboard results: data for snip, filepath for record, string for ocr. The official area-recording examples use start\_area for the plain route and startArea for the callback route. Supply the corresponding func value; it is preserved as provided. errorMessage is returned by Longshot, rather than supplied in the request.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'snip' : 'longshot' }} } from '{{ importPath }}'

const snipUrl = {{currentMethod === 'On-Demand' ? '' : 'longshot.'}}snip({
  'func': 'start',
  'xSuccess': 'myapp://snipped'
})
```

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'record' : 'longshot' }} } from '{{ importPath }}'

const recordUrl = {{currentMethod === 'On-Demand' ? '' : 'longshot.'}}record({
  'func': 'startArea',
  'xSuccess': 'myapp://recorded',
  'xError': 'myapp://error'
})
```

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'ocr' : 'longshot' }} } from '{{ importPath }}'

const ocrUrl = {{currentMethod === 'On-Demand' ? '' : 'longshot.'}}ocr({
  'func': 'start',
  'xSuccess': 'myapp://recognized'
})
```

## Official Documentation

* [URL scheme](https://longshot.chitaner.com/blog/urlschemeapi/)
