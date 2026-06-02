---
url: /protocol-launcher/apps/ivanti-web-work.md
---

# Ivanti Web@Work

[Ivanti Web@Work](https://www.ivanti.com/en-gb/products/productivity-apps/web-work) is a secure mobile browser by Ivanti. **Protocol Launcher** allows you to generate Web@Work URL scheme links.

## Usage

There are two ways to use this library:

* On-Demand import from subpaths enables tree-shaking and keeps bundles small.
* Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

## Notes

Ivanti's official Web@Work for iOS guide documents four schemes: `mibrowser://` for HTTP connections, `mibrowsers://` for HTTPS connections, `mibrowserf://` for full-screen web clips using HTTP, and `mibrowsersf://` for full-screen web clips using HTTPS.

This module only replaces the standard URL prefix that matches the selected connection type. It does not add parameters or expose undocumented Web@Work actions.

### Open HTTP URL

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openHttpUrl' : 'ivantiWebWork' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'ivantiWebWork.'}}openHttpUrl({
  url: 'http://www.example.com/intranet',
})
```

### Open HTTPS URL

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openHttpsUrl' : 'ivantiWebWork' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'ivantiWebWork.'}}openHttpsUrl({
  url: 'https://www.example.com/secure',
})
```

### Open Full-Screen HTTP URL

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openFullScreenHttpUrl' : 'ivantiWebWork' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'ivantiWebWork.'}}openFullScreenHttpUrl({
  url: 'http://www.example.com/app',
})
```

### Open Full-Screen HTTPS URL

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openFullScreenHttpsUrl' : 'ivantiWebWork' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'ivantiWebWork.'}}openFullScreenHttpsUrl({
  url: 'https://www.example.com/app',
})
```

## Generated URLs

```ts
openHttpUrl({
  url: 'http://www.example.com/intranet',
})
// => 'mibrowser://www.example.com/intranet'

openHttpsUrl({
  url: 'https://www.example.com/secure',
})
// => 'mibrowsers://www.example.com/secure'

openFullScreenHttpUrl({
  url: 'http://www.example.com/app',
})
// => 'mibrowserf://www.example.com/app'

openFullScreenHttpsUrl({
  url: 'https://www.example.com/app',
})
// => 'mibrowsersf://www.example.com/app'
```

## References

* [Ivanti Web@Work URL schemes](https://help.ivanti.com/mi/help/en_US/WW/2.x.x/gdi/WebAtWorkForiOS/Website_authentication_u.htm)
