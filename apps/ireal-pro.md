---
url: /protocol-launcher/apps/ireal-pro.md
---

# iReal Pro

[iReal Pro](https://www.irealpro.com/) is a music practice app for chord charts and backing tracks. **Protocol Launcher** allows you to generate iReal Pro URL scheme links.

## Usage

There are two ways to use this library:

* On-Demand import from subpaths enables tree-shaking and keeps bundles small.
* Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

## Notes

iReal Pro documents `irealb://search?<title>` for opening the song search window. It also documents an `irealbook://` custom chord chart protocol with six components: song title, composer, style, key signature, the fixed `n` component, and chord progression.

The official developer docs also mention exported song and playlist links in the opaque `irealb://...` format. Because iReal Pro does not publish that internal export format, this module does not add `importSong()` or `importPlaylist()` helpers for it. Use those exported URLs exactly as copied from iReal Pro.

### Search

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'search' : 'iRealPro' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'iRealPro.'}}search({
  title: 'Song Title',
})
```

### Custom Chord Chart

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'customChordChart' : 'iRealPro' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'iRealPro.'}}customChordChart({
  title: 'Song Title',
  composer: 'LastName FirstName',
  style: 'Style',
  key: 'Ab',
  chordProgression: 'T44*A{C^7 |A-7 |D-9 |G7#5 }',
})
```

### Custom Chord Chart Playlist

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'customChordChartPlaylist' : 'iRealPro' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'iRealPro.'}}customChordChartPlaylist({
  songs: [
    {
      title: 'Song 1',
      composer: 'LastName FirstName',
      style: 'Style',
      key: 'Ab',
      chordProgression: 'T44*A{C^7 |A-7 |D-9 |G7#5 }',
    },
    {
      title: 'Song 2',
      composer: 'LastName FirstName',
      style: 'Style',
      key: 'Ab',
      chordProgression: 'T44*A{C^7 |A-7 |D-9 |G7#5 }',
    },
    {
      title: 'Song 3',
      composer: 'LastName FirstName',
      style: 'Style',
      key: 'Ab',
      chordProgression: 'T44*A{C^7 |A-7 |D-9 |G7#5 }',
    },
  ],
})
```

## Generated URLs

```ts
search({ title: 'Song Title' })
// => 'irealb://search?Song%20Title'
```

```ts
customChordChart({
  title: 'Song Title',
  composer: 'LastName FirstName',
  style: 'Style',
  key: 'Ab',
  chordProgression: 'T44*A{C^7 |A-7 |D-9 |G7#5 }',
})
// => 'irealbook://Song%20Title%3DLastName%20FirstName%3DStyle%3DAb%3Dn%3DT44*A%7BC%5E7%20%7CA-7%20%7CD-9%20%7CG7%235%20%7D'
```

## Official Documentation

* [iReal Pro Developer Docs](https://www.irealpro.com/developer-docs)
* [iReal Pro custom chord chart protocol](https://www.irealpro.com/ireal-pro-custom-chord-chart-protocol)
