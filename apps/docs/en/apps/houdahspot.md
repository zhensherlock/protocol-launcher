---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { search, searchAnyText, searchContent, searchName } from 'protocol-launcher/houdahspot';
import { SelectInstallationMethod } from '../../.vitepress/components';
import { searchAnyTextParams, searchContentParams, searchNameParams, searchParams } from '../../.vitepress/constants/houdahspot';

const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/houdahspot' : 'protocol-launcher');
</script>

# HoudahSpot

[HoudahSpot](https://www.houdah.com/houdahSpot/) is a macOS file search app. **Protocol Launcher** allows you to generate HoudahSpot URL scheme links.

## Usage

There are two ways to use this library:

- On-Demand import from subpaths enables tree-shaking and keeps bundles small.
- Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

<SelectInstallationMethod v-model="currentMethod" />

## Notes

HoudahSpot's official user guide defines one URL scheme endpoint for starting searches: `houdahspot4://search?q=QUERY&location=PATH&template=PATH&s=ATTRIBUTE`. This module exposes only that documented endpoint and the documented search attributes.

The payload uses the parameter names from the documented URL format: `q` for the search string, `location` for one or more folder paths, `template` for a template path that includes the `.hstemplate` extension, and `s` for the search attribute. It also supports HoudahSpot's documented aliases: `query`, `l`, `t`, and `search`. The documented `s` or `search` values are `name`, `content`, and `anytext`.

### Search

Start a HoudahSpot search with any supported combination of the documented parameters.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'search' : 'houdahspot' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'houdahspot.'}}search({
  q: 'Houdah Software',
  location: '~/Documents',
})
```

<div class="flex justify-center">
  <VPLink :href="search(searchParams)" target="_self">
    Search
  </VPLink>
</div>

### Search Name

Start a HoudahSpot search with the search attribute set to `name`.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'searchName' : 'houdahspot' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'houdahspot.'}}searchName({
  q: 'invoice',
  location: '~/Documents',
})
```

<div class="flex justify-center">
  <VPLink :href="searchName(searchNameParams)" target="_self">
    Search Name
  </VPLink>
</div>

### Search Content

Start a HoudahSpot search with the search attribute set to `content`.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'searchContent' : 'houdahspot' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'houdahspot.'}}searchContent({
  q: 'project plan',
  location: '~/Documents',
})
```

<div class="flex justify-center">
  <VPLink :href="searchContent(searchContentParams)" target="_self">
    Search Content
  </VPLink>
</div>

### Search Any Text

Start a HoudahSpot search with the search attribute set to `anytext`.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'searchAnyText' : 'houdahspot' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'houdahspot.'}}searchAnyText({
  q: 'tag:orange',
})
```

<div class="flex justify-center">
  <VPLink :href="searchAnyText(searchAnyTextParams)" target="_self">
    Search Any Text
  </VPLink>
</div>

## Generated URLs

```ts
search({
  q: 'Houdah Software',
  location: '~/Documents',
})
// => 'houdahspot4://search?q=Houdah%20Software&location=~/Documents'

searchName({
  q: 'invoice',
})
// => 'houdahspot4://search?q=invoice&s=name'

searchContent({
  q: 'project plan',
})
// => 'houdahspot4://search?q=project%20plan&s=content'

searchAnyText({
  q: 'tag:orange',
})
// => 'houdahspot4://search?q=tag:orange&s=anytext'
```

## Official Documentation

- [HoudahSpot User Guide](https://www.houdah.com/houdahSpot/help/HoudahSpot%20Help%20EN.pdf)
