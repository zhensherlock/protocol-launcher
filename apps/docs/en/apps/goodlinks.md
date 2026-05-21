---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { save, open, pick, last, random, unread, starred, untagged, read, tag } from 'protocol-launcher/goodlinks';
import { SelectInstallationMethod } from '../../.vitepress/components';
import { saveParams, openParams, pickParams, tagParams } from '../../.vitepress/constants/goodlinks';

const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/goodlinks' : 'protocol-launcher');
</script>

# GoodLinks

[GoodLinks](https://goodlinks.app/) is a read-it-later app for saving and reading links. **Protocol Launcher** allows you to generate GoodLinks x-callback-url actions exactly from the official URL scheme: save, open, pick, last, random, unread, starred, untagged, read, and tag.

GoodLinks supports `x-success`, `x-error`, and `x-cancel` callback URLs. Pass them as `xSuccess`, `xError`, and `xCancel` when needed.

## Usage

There are two ways to use this library:

- On-Demand import from subpaths enables tree-shaking and keeps bundles small.
- Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

<SelectInstallationMethod v-model="currentMethod" />

### Save Link

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'save' : 'goodlinks' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'goodlinks.'}}save({
  url: 'https://apple.com',
  starred: '1',
  tags: 'apple ios',
})
```

<div class="flex justify-center">
  <VPLink :href="save(saveParams)" target="_self">
    Save Link in GoodLinks
  </VPLink>
</div>

### Open Link

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'goodlinks' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'goodlinks.'}}open({
  url: 'https://example.com/article',
})
```

<div class="flex justify-center">
  <VPLink :href="open(openParams)" target="_self">
    Open Link in GoodLinks
  </VPLink>
</div>

### Pick Link Details

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'pick' : 'goodlinks' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'goodlinks.'}}pick({
  urlParam: 'link',
  titleParam: 'name',
  summaryParam: 'description',
})
```

<div class="flex justify-center">
  <VPLink :href="pick(pickParams)" target="_self">
    Pick Link Details in GoodLinks
  </VPLink>
</div>

### Open Last Unread Link

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'last' : 'goodlinks' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'goodlinks.'}}last()
```

<div class="flex justify-center">
  <VPLink :href="last()" target="_self">
    Open Last Unread Link in GoodLinks
  </VPLink>
</div>

### Open Random Unread Link

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'random' : 'goodlinks' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'goodlinks.'}}random()
```

<div class="flex justify-center">
  <VPLink :href="random()" target="_self">
    Open Random Unread Link in GoodLinks
  </VPLink>
</div>

### Show Unread List

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'unread' : 'goodlinks' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'goodlinks.'}}unread()
```

<div class="flex justify-center">
  <VPLink :href="unread()" target="_self">
    Show Unread List in GoodLinks
  </VPLink>
</div>

### Show Starred List

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'starred' : 'goodlinks' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'goodlinks.'}}starred()
```

<div class="flex justify-center">
  <VPLink :href="starred()" target="_self">
    Show Starred List in GoodLinks
  </VPLink>
</div>

### Show Untagged List

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'untagged' : 'goodlinks' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'goodlinks.'}}untagged()
```

<div class="flex justify-center">
  <VPLink :href="untagged()" target="_self">
    Show Untagged List in GoodLinks
  </VPLink>
</div>

### Show Read List

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'read' : 'goodlinks' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'goodlinks.'}}read()
```

<div class="flex justify-center">
  <VPLink :href="read()" target="_self">
    Show Read List in GoodLinks
  </VPLink>
</div>

### Show Tagged Links

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'tag' : 'goodlinks' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'goodlinks.'}}tag({
  name: 'apple',
})
```

<div class="flex justify-center">
  <VPLink :href="tag(tagParams)" target="_self">
    Show Tagged Links in GoodLinks
  </VPLink>
</div>
