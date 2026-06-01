---
url: /protocol-launcher/apps/moovit.md
---

# Moovit

[Moovit](https://moovitapp.com/) is a public transit app. **Protocol Launcher** allows you to generate Moovit URL Scheme links.

## Usage

There are two ways to use this library:

* On-Demand import from subpaths enables tree-shaking and keeps bundles small.
* Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

## Notes

This module only exposes the actions listed by Moovit's official deeplinking documentation: `nearby`, `directions`, the iOS/Android fallback links, and the documented download link.

The payloads use Moovit's documented parameter names, including `partner_id`, `dest_lat`, `dest_lon`, `orig_lat`, `orig_lon`, and `auto_run`. `date` should be an ISO-8601 date/time string.

### Nearby Transit

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'nearby' : 'moovit' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'moovit.'}}nearby({
  lat: 40.758896,
  lon: -73.98513,
  partner_id: 'YOUR_APP_NAME',
})
```

### Directions

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'directions' : 'moovit' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'moovit.'}}directions({
  dest_lat: 40.758896,
  dest_lon: -73.98513,
  dest_name: 'Times Square',
  partner_id: 'YOUR_APP_NAME',
})
```

### Directions With Origin and Date

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'directions' : 'moovit' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'moovit.'}}directions({
  dest_lat: 40.758896,
  dest_lon: -73.98513,
  dest_name: 'Times Square',
  orig_lat: 40.735845,
  orig_lon: -73.990512,
  orig_name: 'Union Square',
  auto_run: true,
  date: '2019-04-01T18:30:00+02:00',
  partner_id: 'YOUR_APP_NAME',
})
```

### iOS Fallback Link

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'iosFallbackLink' : 'moovit' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'moovit.'}}iosFallbackLink({
  c: 'YOUR_APP_NAME',
  af_dp: 'moovit://nearby?lat=40.758896&lon=-73.98513&partner_id=YOUR_APP_NAME',
})
```

### Android Fallback Link

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'androidFallbackLink' : 'moovit' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'moovit.'}}androidFallbackLink({
  c: 'YOUR_APP_NAME',
  af_dp: 'moovit://nearby?lat=40.758896&lon=-73.98513&partner_id=YOUR_APP_NAME',
})
```

### Download Link

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'downloadLink' : 'moovit' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'moovit.'}}downloadLink({
  c: 'YOUR_APP_NAME',
})
```

## Official Documentation

* [Moovit Deeplinking](https://moovit.com/developers/deeplinking/)
