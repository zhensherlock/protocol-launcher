---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { action, open, service } from 'protocol-launcher/forscore';
import { SelectInstallationMethod } from '../../.vitepress/components';
import {
  actionNextItemParams,
  openScoreParams,
  openSetlistParams,
  serviceDropboxParams,
} from '../../.vitepress/constants/forscore';

const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/forscore' : 'protocol-launcher');
</script>

# forScore

[forScore](https://forscore.co/) is a sheet music reader for iPad, iPhone, and Mac. **Protocol Launcher** allows you to generate forScore URL scheme links.

## Usage

There are two ways to use this library:

- On-Demand import from subpaths enables tree-shaking and keeps bundles small.
- Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

<SelectInstallationMethod v-model="currentMethod" />

### Open

forScore documents `forscore://open` with at least one of `path`, `score`, `setlist`, or `page`. `bookmark` is optional and only applies when a score is referenced. When both `path` and `score` are supplied, forScore gives `path` precedence.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'forscore' }} } from '{{ importPath }}'

const scoreUrl = {{currentMethod === 'On-Demand' ? '' : 'forscore.'}}open({
  path: 'My Score.pdf',
})

const setlistUrl = {{currentMethod === 'On-Demand' ? '' : 'forscore.'}}open({
  setlist: 'My Setlist',
  score: 'My Score',
  bookmark: 'My Bookmark',
  page: 3,
})
```

<div class="flex justify-center gap-3">
  <VPLink :href="open(openScoreParams)" target="_self">Open Score</VPLink>
  <VPLink :href="open(openSetlistParams)" target="_self">Open Setlist Item</VPLink>
</div>

### Service

forScore documents `forscore://service` with a required `type`. Dropbox and Box can include a starting `path`; content providers do not support paths.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'service' : 'forscore' }} } from '{{ importPath }}'

const dropboxUrl = {{currentMethod === 'On-Demand' ? '' : 'forscore.'}}service({
  type: 'dropbox',
})

const dropboxPathUrl = {{currentMethod === 'On-Demand' ? '' : 'forscore.'}}service({
  type: 'dropbox',
  path: 'Directory/Subdirectory',
})

const prestoUrl = {{currentMethod === 'On-Demand' ? '' : 'forscore.'}}service({
  type: 'presto',
})
```

<div class="flex justify-center">
  <VPLink :href="service(serviceDropboxParams)" target="_self">
    Open Dropbox
  </VPLink>
</div>

### Action

forScore documents `forscore://action` for relative navigation changes such as moving to the next page, next item, going back, or showing now playing.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'action' : 'forscore' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'forscore.'}}action({
  type: 'nextitem',
})
```

<div class="flex justify-center">
  <VPLink :href="action(actionNextItemParams)" target="_self">
    Next Item
  </VPLink>
</div>

## Generated URLs

```ts
open({ path: 'My Score.pdf' })
// => 'forscore://open?path=My%20Score.pdf'

open({ setlist: 'My Setlist', score: 'My Score', bookmark: 'My Bookmark', page: 3 })
// => 'forscore://open?setlist=My%20Setlist&score=My%20Score&bookmark=My%20Bookmark&page=3'

service({ type: 'dropbox' })
// => 'forscore://service?type=dropbox'

service({ type: 'dropbox', path: 'Directory/Subdirectory' })
// => 'forscore://service?type=dropbox&path=Directory%2FSubdirectory'

service({ type: 'presto' })
// => 'forscore://service?type=presto'

action({ type: 'nextitem' })
// => 'forscore://action?type=nextitem'
```

## Official Documentation

- [forScore Automation URL Scheme](https://forscore.co/developers-automation/)
