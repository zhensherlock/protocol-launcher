---
url: /protocol-launcher/apps/letterboxd.md
---

# Letterboxd

[Letterboxd](https://letterboxd.com/) is an app for logging, reviewing, and sharing films. **Protocol Launcher** allows you to generate Letterboxd URL scheme links.

## Usage

There are two ways to use this library:

* On-Demand import from subpaths enables tree-shaking and keeps bundles small.
* Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

## URL Methods

Letterboxd's official iOS x-callback-url documentation lists exactly three actions: `search`, `addToWatchlist`, and `log`. This module exposes only those documented actions and the optional `x-success`, `x-cancel`, and `x-error` callback parameters.

### Search

Search Letterboxd for films, members, lists, reviews, contributors, or all result types. The documented `type` values are `film`, `member`, `list`, `review`, `contributor`, and `all`.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'search' : 'letterboxd' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'letterboxd.'}}search({
  query: 'Blade Runner',
  type: 'film',
})
```

### Add To Watchlist

Open Letterboxd and use a film name as the search query for adding a film to the user's watchlist. Letterboxd asks the user to manually confirm the correct result.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'addToWatchlist' : 'letterboxd' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'letterboxd.'}}addToWatchlist({
  name: 'Heat',
})
```

### Log

Add a new log entry, diary entry, or review for a film. Letterboxd uses `name` as a search query and asks the user to manually confirm the correct result. Boolean values are serialized as `true` or `false` as documented.

The documented fields are `name`, `date`, `rewatch`, `tags`, `review`, `containsSpoilers`, `rating`, `like`, and deprecated `shareOnFacebook`.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'log' : 'letterboxd' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'letterboxd.'}}log({
  name: 'Heat',
  date: '2026-06-10',
  rewatch: true,
  tags: 'crime,friendship',
  review: '<strong>Great</strong>',
  containsSpoilers: false,
  rating: 4.5,
  like: true,
})
```

## Generated URLs

```ts
search({ query: 'Blade Runner', type: 'film' })
// => 'letterboxd://x-callback-url/search?query=Blade%20Runner&type=film'

addToWatchlist({ name: 'Heat' })
// => 'letterboxd://x-callback-url/addToWatchlist?name=Heat'

log({
  name: 'Heat',
  date: '2026-06-10',
  rewatch: true,
  tags: 'crime,friendship',
  review: '<strong>Great</strong>',
  containsSpoilers: false,
  rating: 4.5,
  like: true,
})
// => 'letterboxd://x-callback-url/log?name=Heat&date=2026-06-10&rewatch=true&tags=crime%2Cfriendship&review=%3Cstrong%3EGreat%3C%2Fstrong%3E&containsSpoilers=false&rating=4.5&like=true'
```

## Official Documentation

* [Letterboxd iOS X-Callback-URL Support](https://github.com/Letterboxd/letterboxd-ios-x-callback-url)
