---
url: /protocol-launcher/apps/tembo.md
---

# Tembo

[Tembo](https://houdah.com/tembo/) is a macOS file search app. **Protocol Launcher** allows you to generate Tembo URL scheme links.

## Usage

There are two ways to use this library:

* On-Demand import from subpaths enables tree-shaking and keeps bundles small.
* Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

## Notes

Houdah's official Tembo article documents the URL format as `tembo2://search?query=[QUERY]&location=[LOCATION]&group=[GROUP]`. The `location` and `group` parameters are optional additions to the search query, and `location` can be repeated to show multiple paths in Tembo's locations menu.

The `group` value is limited to Tembo's official values: `APPLICATIONS`, `BOOKMARKS`, `CONTACTS`, `DIRECTORIES`, `CALENDAR`, `EVERNOTE`, `FONTS`, `IMAGES`, `MESSAGES`, `MOVIES`, `MUSIC`, `PDF`, `SOURCE`, `SYSTEM_PREFS`, and `XML`.

The same official article also shows Alfred's custom search URL as `tembo2://search?q={query}`. Pass `q` instead of `query` only when you need that documented short parameter.

### Search

Start a Tembo search with query text.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'search' : 'tembo' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'tembo.'}}search({
  query: 'Houdah Software',
})
```

### Search In Location

Start a Tembo search with a specific location.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'searchInLocation' : 'tembo' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'tembo.'}}searchInLocation({
  query: 'Houdah Software',
  location: '~/Documents',
})
```

### Search Multiple Locations

Pass an array to repeat Tembo's documented `location` parameter.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'searchInLocation' : 'tembo' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'tembo.'}}searchInLocation({
  query: 'Houdah Software',
  location: ['~/Documents', '~/Desktop'],
  group: 'PDF',
})
```

### Search Group

Start a Tembo search in one of the official groups.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'searchGroup' : 'tembo' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'tembo.'}}searchGroup({
  query: 'Houdah Software',
  group: 'PDF',
})
```

### Alfred Short Query Parameter

Generate the official Alfred custom search form with `q`.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'search' : 'tembo' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'tembo.'}}search({
  q: 'Houdah Software',
})
```

## Generated URLs

```ts
search({ query: 'Houdah Software' })
// => 'tembo2://search?query=Houdah%20Software'

search({
  query: 'Houdah Software',
  location: '~/Documents',
  group: 'PDF',
})
// => 'tembo2://search?query=Houdah%20Software&location=~/Documents&group=PDF'

searchInLocation({
  query: 'Houdah Software',
  location: '~/Documents',
})
// => 'tembo2://search?query=Houdah%20Software&location=~/Documents'

searchInLocation({
  query: 'Houdah Software',
  location: ['~/Documents', '~/Desktop'],
  group: 'PDF',
})
// => 'tembo2://search?query=Houdah%20Software&location=~/Documents&location=~/Desktop&group=PDF'

searchGroup({
  query: 'Houdah Software',
  group: 'PDF',
})
// => 'tembo2://search?query=Houdah%20Software&group=PDF'

search({ q: 'Houdah Software' })
// => 'tembo2://search?q=Houdah%20Software'
```

## Official Documentation

* [Start a Tembo File Search from Alfred, Butler or LaunchBar](https://blog.houdah.com/2015/10/start-a-tembo-file-search-from-alfred-butler-or-launchbar/)
