---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { open, play, pause, subscribe } from 'protocol-launcher/pocket-casts';
import { SelectInstallationMethod } from '../../.vitepress/components';
import { subscribeParams } from '../../.vitepress/constants/pocket-casts';

const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/pocket-casts' : 'protocol-launcher');
</script>

# Pocket Casts

[Pocket Casts](https://pocketcasts.com/) is a podcast app for listening to and following shows. **Protocol Launcher** allows you to generate Pocket Casts iOS URL scheme links.

## Usage

There are two ways to use this library:

- On-Demand import from subpaths enables tree-shaking and keeps bundles small.
- Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

<SelectInstallationMethod v-model="currentMethod" />

### Open App

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'pocketCasts' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pocketCasts.'}}open()
```

<div class="flex justify-center">
  <VPLink :href="open()" target="_self">
    Open Pocket Casts
  </VPLink>
</div>

### Play Paused Episode

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'play' : 'pocketCasts' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pocketCasts.'}}play()
```

<div class="flex justify-center">
  <VPLink :href="play()" target="_self">
    Play in Pocket Casts
  </VPLink>
</div>

### Pause Playing Episode

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'pause' : 'pocketCasts' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pocketCasts.'}}pause()
```

<div class="flex justify-center">
  <VPLink :href="pause()" target="_self">
    Pause in Pocket Casts
  </VPLink>
</div>

### Follow Podcast by Feed URL

Pocket Casts expects the feed URL without a leading `http://`.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'subscribe' : 'pocketCasts' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pocketCasts.'}}subscribe({
  feedUrlWithoutHttp: 'example.com/podcast/rss',
})
```

<div class="flex justify-center">
  <VPLink :href="subscribe(subscribeParams)" target="_self">
    Follow in Pocket Casts
  </VPLink>
</div>
