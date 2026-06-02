---
url: /protocol-launcher/apps/highlights.md
---

# Highlights

[Highlights](https://highlightsapp.net/) is a PDF reader for reading and annotating PDF documents. **Protocol Launcher** allows you to generate Highlights URL scheme links.

## Usage

There are two ways to use this library:

* On-Demand import from subpaths enables tree-shaking and keeps bundles small.
* Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

### Open File

Open a PDF file using the documented `highlights://Users/test.pdf` URL shape.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openFile' : 'highlights' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'highlights.'}}openFile({
  path: '/Users/test.pdf',
})
```

### Open File At Page

Open the same PDF file and scroll to a documented page fragment.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openFileAtPage' : 'highlights' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'highlights.'}}openFileAtPage({
  path: '/Users/test.pdf',
  page: 3,
})
```

## References

* [Highlights Version 1.2 URL-scheme notes](https://highlightsapp.net/changelog/2015/01/03/Version-1.2/)
