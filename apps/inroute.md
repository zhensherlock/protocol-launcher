---
url: /protocol-launcher/apps/inroute.md
---

# inRoute

[inRoute](https://inroute.com/) is a route planning and navigation app. **Protocol Launcher** allows you to generate inRoute URL scheme links.

## Usage

There are two ways to use this library:

* On-Demand import from subpaths enables tree-shaking and keeps bundles small.
* Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

## URL Methods

This module mirrors the inRoute URL Scheme page: coordinate imports with `inroute://coordinates`, search imports with `inroute://searches`, map-pin viewing with `inroute://view`, navigation to a pin with `inroute://route`, optional waypoint optimization via `action=opt`, and the shared `back_url` return parameter.

The official page does not document a bare app-open command or additional route settings, so this module does not expose helpers for those.

### Coordinates

Send coordinate-based route locations to inRoute. Each location is serialized as the documented repeated `loc={name}/{latitude}/{longitude}` parameter.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'coordinates' : 'inRoute' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'inRoute.'}}coordinates({
  optimize: true,
  locations: [
    { name: 'Lazy K’s', latitude: 47.648434, longitude: -121.914307 },
    { name: 'Greek Food', latitude: 47.739555, longitude: -121.985924 },
  ],
})
```

### Search

Send search-based route locations to inRoute. The helper is named `search`, but it emits the official `inroute://searches` command.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'search' : 'inRoute' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'inRoute.'}}search({
  optimize: true,
  locations: [
    { name: 'Lazy K’s', search: 'Lazy K’, Carnation WA 98014' },
    { name: 'Greek Food', search: '15410 Main St NE, Duvall WA 98019' },
  ],
})
```

### View

View a map pin at specified coordinates.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'view' : 'inRoute' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'inRoute.'}}view({
  geo: '48.8582,2.2946',
})
```

### Route

Navigate to a map pin at specified coordinates.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'route' : 'inRoute' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'inRoute.'}}route({
  geo: '48.8582,2.2946',
})
```

### Return to Caller

Any inRoute URL can include the documented `back_url` parameter, exposed as `backUrl`.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'view' : 'inRoute' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'inRoute.'}}view({
  geo: '48.8582,2.2946',
  backUrl: 'myapp://',
})
```

## Generated URLs

```ts
coordinates({
  optimize: true,
  locations: [
    { name: 'Lazy K’s', latitude: 47.648434, longitude: -121.914307 },
    { name: 'Greek Food', latitude: 47.739555, longitude: -121.985924 },
  ],
})
// => 'inroute://coordinates?action=opt&loc=Lazy%20K’s/47.648434/-121.914307&loc=Greek%20Food/47.739555/-121.985924'

search({
  optimize: true,
  locations: [
    { name: 'Lazy K’s', search: 'Lazy K’, Carnation WA 98014' },
    { name: 'Greek Food', search: '15410 Main St NE, Duvall WA 98019' },
  ],
})
// => 'inroute://searches?action=opt&loc=Lazy%20K’s/Lazy%20K’,%20Carnation%20WA%2098014&loc=Greek%20Food/15410%20Main%20St%20NE,%20Duvall%20WA%2098019'

view({ geo: '48.8582,2.2946' })
// => 'inroute://view?geo=48.8582,2.2946'

route({ geo: '48.8582,2.2946' })
// => 'inroute://route?geo=48.8582,2.2946'

view({ geo: '48.8582,2.2946', backUrl: 'myapp://' })
// => 'inroute://view?geo=48.8582,2.2946&back_url=myapp%3A%2F%2F'
```

## Official Documentation

* [inRoute URL Scheme](https://inroute.com/url-scheme/)
