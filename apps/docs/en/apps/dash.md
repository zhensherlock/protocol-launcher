---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { pluginSearch, search, searchDocsets } from 'protocol-launcher/dash';
import { SelectInstallationMethod } from '../../.vitepress/components';

const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/dash' : 'protocol-launcher');
</script>

# Dash

[Dash](https://kapeli.com/dash) is a macOS documentation browser and code snippet manager. **Protocol Launcher** allows you to generate URLs for searching Dash and working with Dash docsets.

## Usage

There are two ways to use this library:

- On-Demand import from subpaths enables tree-shaking and keeps bundles small.
- Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

<SelectInstallationMethod v-model="currentMethod" />

## URL Methods

Dash's official documentation lists `dash://?query=...` search URLs, `dash-plugin://...` plugin URLs, `dash-feed://...` feed subscription URLs, and `dash-install://...` docset install URLs. This module exposes only those documented forms.

### Search

Generate the documented URL that initiates a Dash search.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'search' : 'dash' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'dash.'}}search({
  query: 'string',
})
```

<div class="flex justify-center">
  <VPLink :href="search({ query: 'string' })" target="_self">
    Search Dash
  </VPLink>
</div>

### Search Docsets

Generate the documented `dash://` URL with a Dash docset keyword or Search Profile keyword trigger.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'searchDocsets' : 'dash' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'dash.'}}searchDocsets({
  keyword: 'php',
  query: 'printf',
})
```

<div class="flex justify-center">
  <VPLink :href="searchDocsets({ keyword: 'php', query: 'printf' })" target="_self">
    Search PHP Docset
  </VPLink>
</div>

### Plugin Search

Generate the documented plugin URL for sending comma-separated docset keywords and an optional query to Dash.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'pluginSearch' : 'dash' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'dash.'}}pluginSearch({
  keys: 'python,django',
  query: 'string',
})
```

<div class="flex justify-center">
  <VPLink :href="pluginSearch({ keys: 'python,django', query: 'string' })" target="_self">
    Plugin Search
  </VPLink>
</div>

### Subscribe Feed

Generate the documented `dash-feed://` URL for subscribing Dash to a docset feed. The feed URL is percent-encoded as required by the Dash docset guide.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'subscribeFeed' : 'dash' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'dash.'}}subscribeFeed({
  url: 'http://kapeli.com/feeds/NodeJS.xml',
})
```

### Install Docset

Generate the documented `dash-install://` URL for installing a docset from a Dash downloads repo entry.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'installDocset' : 'dash' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'dash.'}}installDocset({
  repoName: 'Ruby Docsets',
  entryName: 'cheatset',
  version: '1.3.3',
})
```

## Generated URLs

```ts
search({ query: 'string' })
// => 'dash://?query=string'

searchDocsets({ keyword: 'php', query: 'printf' })
// => 'dash://?query=php:printf'

pluginSearch({ keys: 'python,django', query: 'string' })
// => 'dash-plugin://keys=python,django&query=string'

pluginSearch({ keys: 'python,django' })
// => 'dash-plugin://keys=python,django'

pluginSearch({ query: 'string' })
// => 'dash-plugin://query=string'

subscribeFeed({ url: 'http://kapeli.com/feeds/NodeJS.xml' })
// => 'dash-feed://http%3A%2F%2Fkapeli.com%2Ffeeds%2FNodeJS.xml'

installDocset({ repoName: 'Ruby Docsets', entryName: 'cheatset', version: '1.3.3' })
// => 'dash-install://repo_name=Ruby Docsets&entry_name=cheatset&version=1.3.3'
```

## Official Documentation

- [Dash User Guide](https://kapeli.com/dash_guide)
- [Dash Plugin Development](https://kapeli.com/dash_plugins)
- [dash-install:// URL Format](https://kapeli.com/dash_install)
- [Docset Generation Guide](https://kapeli.com/docsets)
