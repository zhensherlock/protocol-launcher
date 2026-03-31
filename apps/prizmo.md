---
url: /protocol-launcher/apps/prizmo.md
---

# Prizmo

[Prizmo](https://creaceed.com/prizmo) is a professional scanning app with OCR for iPhone, iPad, and Mac. **Protocol Launcher** allows you to generate deep links to process documents and read text aloud in Prizmo.

## Usage

There are two ways to use this library:

* On-Demand import from subpaths enables tree-shaking and keeps bundles small.
* Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

### Process Document

Process a document in Prizmo with OCR, PDF generation, and image cleanup.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'processDocument' : 'prizmo' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'prizmo.'}}processDocument({
  ocr: 'en',
  destination: 'clipboard',
})
```

### Process Document with Callback

Process a document with callback URLs for success, cancel, and error events.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'processDocument' : 'prizmo' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'prizmo.'}}processDocument({
  ocr: 'en',
  destination: 'url',
  xSuccess: 'myapp://callback',
})
```

### Read Text

Read text aloud in Prizmo Text Reader.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'readText' : 'prizmo' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'prizmo.'}}readText({
  text: 'Hello World',
  voice: 'Ryan',
})
```
