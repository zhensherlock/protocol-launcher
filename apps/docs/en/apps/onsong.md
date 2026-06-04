---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import { SelectInstallationMethod } from '../../.vitepress/components';

const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/onsong' : 'protocol-launcher');
</script>

# OnSong

[OnSong](https://onsongapp.com/) is a digital songbook and chord chart app for musicians. **Protocol Launcher** allows you to generate OnSong URL scheme links.

## Usage

There are two ways to use this library:

- On-Demand import from subpaths enables tree-shaking and keeps bundles small.
- Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

<SelectInstallationMethod v-model="currentMethod" />

## Notes

The helpers below mirror OnSong's official developer documentation for importing content, opening songs, exporting song data, and performing actions. Only the documented `onsong://`, `onsong://ImportData/...`, `onsong://open/songs`, `onsong://export/songs`, `onsong://action/list`, and `onsong://action/<value>` URL shapes are exposed.

OnSong's Open Song and Actions URL APIs require OnSong 2020.8 or higher. `importUrl()` accepts an `http://` file URL because the official import documentation says to replace the `http://` component with `onsong://`; for SSL-hosted files, the official docs say to redirect to the `https://` location. `importData()` expects Base64-encoded file data, and the filename extension is important because OnSong uses it to determine the file type.

The published Open Song page says export output can include additional properties, but it does not currently show a query parameter name or full URL syntax for that option. This module therefore does not expose a `properties` payload.

Use synthetic song titles, identifiers, set names, and short Base64 samples in examples and tests. Do not publish copyrighted lyrics, full sheet-music content, or real user library identifiers.

### Open

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'onsong' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'onsong.'}}open()
```

### Import URL

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'importUrl' : 'onsong' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'onsong.'}}importUrl({
  url: 'http://my.domain.com/files/go/here/Song%20Title.txt',
})
```

### Import Data

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'importData' : 'onsong' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'onsong.'}}importData({
  filename: 'My Song Title.pdf',
  base64Data: 'BASE_64_ENCODED_DATA_HERE',
})
```

### Open Song

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openSong' : 'onsong' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'onsong.'}}openSong({
  song: 'be-still',
})
```

### Open Songs

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openSongs' : 'onsong' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'onsong.'}}openSongs({
  song: ['be-still', 'beautiful-life', 'changes'],
  index: 1,
})
```

### Export Songs

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'exportSongs' : 'onsong' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'onsong.'}}exportSongs({
  collection: 'current',
  returnURL: 'http://mywebsite.com/receive?data=',
})
```

### List Actions

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'listActions' : 'onsong' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'onsong.'}}listActions({
  returnURL: 'myapp://retrieve-actions/?data=',
})
```

### Perform Action

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'performAction' : 'onsong' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'onsong.'}}performAction({
  action: 'SongSectionWasPressed',
  parameters: {
    sectionID: 'Chorus',
  },
})
```

## Generated URLs

```ts
open()
// => 'onsong://'

importUrl({
  url: 'http://my.domain.com/files/go/here/Song%20Title.txt',
})
// => 'onsong://my.domain.com/files/go/here/Song%20Title.txt'

importData({
  filename: 'My Song Title.pdf',
  base64Data: 'BASE_64_ENCODED_DATA_HERE',
})
// => 'onsong://ImportData/My%20Song%20Title.pdf?BASE_64_ENCODED_DATA_HERE'

openSong({ song: 'be-still' })
// => 'onsong://open/songs?song=be-still'

openSongs({
  song: ['be-still', 'beautiful-life', 'changes'],
  index: 1,
})
// => 'onsong://open/songs/?song=be-still&song=beautiful-life&song=changes&index=1'

exportSongs({
  collection: 'current',
  returnURL: 'http://mywebsite.com/receive?data=',
})
// => 'onsong://export/songs?collection=current&returnURL=http%3A%2F%2Fmywebsite%2Ecom%2Freceive%3Fdata%3D'

listActions()
// => 'onsong://action/list'

performAction({ action: 'PositionWasAdjusted', amount: 0.5 })
// => 'onsong://action/PositionWasAdjusted?amount=0.5'
```

## References

- [OnSong Import Into OnSong](https://onsongapp.com/developers/import/)
- [OnSong Open Song](https://onsongapp.com/developers/open-song/)
- [OnSong Actions](https://onsongapp.com/developers/actions/)
