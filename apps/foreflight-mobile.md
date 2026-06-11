---
url: /protocol-launcher/apps/foreflight-mobile.md
---

# ForeFlight Mobile

[ForeFlight Mobile](https://www.foreflight.com/products/foreflight-mobile/) is an aviation planning and electronic flight bag app. **Protocol Launcher** allows you to generate ForeFlight Mobile URL scheme links.

## Usage

There are two ways to use this library:

* On-Demand import from subpaths enables tree-shaking and keeps bundles small.
* Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

## URL Methods

ForeFlight's official URL Schemes page lists `foreflightmobile://maps/search?q=...` for Maps searches. This module exposes only that documented form.

### Map Search

Generate the documented URL that launches ForeFlight Mobile and searches on the Maps view.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'mapSearch' : 'foreflightMobile' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'foreflightMobile.'}}mapSearch({
  q: 'KISM OCF NITTS KSRQ 165 16 8000',
})
```

## Generated URLs

```ts
mapSearch({ q: 'KISM OCF NITTS KSRQ 165 16 8000' })
// => 'foreflightmobile://maps/search?q=KISM+OCF+NITTS+KSRQ+165+16+8000'

mapSearch({ q: 'KISM OCF NITTS KSRQ 125mph 12gph 8000' })
// => 'foreflightmobile://maps/search?q=KISM+OCF+NITTS+KSRQ+125mph+12gph+8000'

mapSearch({ q: 'KOSH GEP KFCM 130kts 410kgph 4000ft' })
// => 'foreflightmobile://maps/search?q=KOSH+GEP+KFCM+130kts+410kgph+4000ft'

mapSearch({ q: 'KOSH GEP USER@MYHOUSE KFCM 130kts' })
// => 'foreflightmobile://maps/search?q=KOSH+GEP+USER@MYHOUSE+KFCM+130kts'

mapSearch({ q: 'KOSH GEP CONTPACK@THECABIN KFCM 130kts' })
// => 'foreflightmobile://maps/search?q=KOSH+GEP+CONTPACK@THECABIN+KFCM+130kts'

mapSearch({ q: 'KAUS ELA KSGR 165kts 20.5gph 14000ft N12345' })
// => 'foreflightmobile://maps/search?q=KAUS+ELA+KSGR+165kts+20.5gph+14000ft+N12345'

mapSearch({ q: 'KISM OCF/F060 NITTS/N0100F040 KSRQ 8000' })
// => 'foreflightmobile://maps/search?q=KISM+OCF/F060+NITTS/N0100F040+KSRQ+8000'
```

## Official Documentation

* [ForeFlight Mobile URL Schemes](https://foreflight.com/support/app-urls/)
