---
url: /protocol-launcher/apps/scannr.md
---

# Scannr

[Scannr](https://scannrapp.com/) is an app for ID scanning to obtain data from driver's licences. **Protocol Launcher** allows you to generate the official Scannr URL scheme links documented as `scannr://` and `scannr://?callbackScheme=<foo>`.

## Usage

There are two ways to use this library:

* On-Demand import from subpaths enables tree-shaking and keeps bundles small.
* Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

### Scan ID

Launch Scannr with the Android URL scheme documented as `scannr://`.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'scanId' : 'scannr' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'scannr.'}}scanId()
```

### Scan ID with iOS Callback

Launch Scannr with the iOS URL scheme documented as `scannr://?callbackScheme=<foo>`. The calling app must define the `foo` URL scheme and follow Scannr's `LSApplicationQueriesSchemes` setup.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'scanId' : 'scannr' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'scannr.'}}scanId({
  callbackScheme: 'foo',
})
```

## Official Documentation

* [Scannr URL scheme integration](https://scannrapp.com/scannr_url_scheme.pdf)
