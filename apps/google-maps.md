---
url: /protocol-launcher/apps/google-maps.md
---

# Google Maps

[Google Maps](https://www.google.com/maps) is a web mapping service developed by Google. It provides maps, search, street view, and directions. **Protocol Launcher** allows you to generate deep links to open Google Maps, display maps, search places, get directions, and open supported Google Maps desktop URLs.

## Usage

There are two ways to use this library:

* On-Demand import from subpaths enables tree-shaking and keeps bundles small.
* Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

## Notes

This module only wraps parameters documented by Google. The official page mentions `comgooglemaps-x-callback://`, but does not document x-callback actions or payload parameters, so this module does not expose x-callback helpers.

### Open Google Maps

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'googleMaps' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'googleMaps.'}}open()
```

### Display Map

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'displayMap' : 'googleMaps' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'googleMaps.'}}displayMap({
  center: '40.765819,-73.975866',
  zoom: 14,
  views: 'traffic',
})
```

### Display Street View

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'displayMap' : 'googleMaps' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'googleMaps.'}}displayMap({
  center: '46.414382,10.013988',
  mapmode: 'streetview',
})
```

### Clear Views

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'displayMap' : 'googleMaps' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'googleMaps.'}}displayMap({
  views: '',
})
```

### Search

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'search' : 'googleMaps' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'googleMaps.'}}search({
  q: 'Pizza',
  center: '37.759748,-122.427135',
})
```

### Search with Views

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'search' : 'googleMaps' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'googleMaps.'}}search({
  q: 'Steamers Lane Santa Cruz, CA',
  center: '37.782652,-122.410126',
  views: ['satellite', 'traffic'],
  zoom: 15,
})
```

### Display Directions

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'directions' : 'googleMaps' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'googleMaps.'}}directions({
  saddr: 'Google Inc, 8th Avenue, New York, NY',
  daddr: 'John F. Kennedy International Airport, Van Wyck Expressway, Jamaica, New York',
  directionsmode: 'transit',
})
```

### Directions from Current Location

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'directions' : 'googleMaps' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'googleMaps.'}}directions({
  saddr: '',
  daddr: 'John F. Kennedy International Airport',
  directionsmode: 'driving',
})
```

### Walking Directions

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'directions' : 'googleMaps' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'googleMaps.'}}directions({
  saddr: '2025 Garcia Ave, Mountain View, CA, USA',
  daddr: 'Google, 1600 Amphitheatre Parkway, Mountain View, CA, United States',
  center: '37.423725,-122.0877',
  directionsmode: 'walking',
  zoom: 17,
})
```

### Open Desktop URL

`openUrl` accepts only the Google Maps desktop URL formats covered by Google's official URL scheme regular expression: `maps.google.{TLD}/`, `google.{TLD}/maps/` or `www.google.{TLD}/maps/`, and `goo.gl/maps/`, with an optional `http://` or `https://` prefix.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openUrl' : 'googleMaps' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'googleMaps.'}}openUrl({
  url: 'https://www.google.com/maps/preview/@42.585444,13.007813,6z',
})
```

## Official Documentation

* [Google Maps URL Scheme for iOS](https://developers.google.com/maps/documentation/urls/ios-urlscheme)
