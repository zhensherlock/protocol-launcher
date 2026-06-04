---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { actions } from 'protocol-launcher/locus-map';
import { SelectInstallationMethod } from '../../.vitepress/components';
import { actionsParams } from '../../.vitepress/constants/locus-map';

const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/locus-map' : 'protocol-launcher');
</script>

# Locus Map

[Locus Map](https://www.locusmap.app/) is an outdoor navigation and mapping app. **Protocol Launcher** allows you to generate Locus Map URL scheme links.

## Usage

There are two ways to use this library:

- On-Demand import from subpaths enables tree-shaking and keeps bundles small.
- Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

<SelectInstallationMethod v-model="currentMethod" />

## Notes

The official Locus Actions documentation defines a `locus-actions://` URL that points Locus Map to a hosted XML file. The XML document describes what Locus Map should do.

This module only exposes the actions documented by Locus Map: `download` and `event`. It does not add map search, navigation, point creation, or other behavior that is not present in the official Locus Actions page.

`actions()` accepts an `https://` XML file URL and converts it to the documented `locus-actions://https/<host>/<path>` form. `downloadAction()` and `eventAction()` return complete XML documents with a single action.

### Actions URL

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'actions' : 'locusMap' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'locusMap.'}}actions({
  url: 'https://example.com/path/to/actions.xml',
})
```

<div class="flex justify-center">
  <VPLink :href="actions(actionsParams)" target="_self">
    Open Locus Actions
  </VPLink>
</div>

### Download Action

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'downloadAction' : 'locusMap' }} } from '{{ importPath }}'

const xml = {{currentMethod === 'On-Demand' ? '' : 'locusMap.'}}downloadAction({
  source: {
    url: 'http://example.com/maps/map.tar',
    size: 22075830,
    date: '2012-06-29_19-11-54',
  },
  dest: '/maps/map.tar',
  after: 'refreshMap',
})
```

The `after` field is limited to the official values: `refreshMap`, `importData`, `displayData`, `extract`, and `deleteSource`. Pass an array to generate the documented pipe-separated combinations, such as `extract|deleteSource|refreshMap`.

### Event Action

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'eventAction' : 'locusMap' }} } from '{{ importPath }}'

const xml = {{currentMethod === 'On-Demand' ? '' : 'locusMap.'}}eventAction({
  key: 'setMapVector',
  value: '/mapsVector/DownloadedMap.map',
})
```

The `key` field is limited to the official values: `setMapVector` and `setMapVectorTheme`.

## Generated URLs and XML

```ts
actions({
  url: 'https://example.com/path/to/actions.xml',
})
// => 'locus-actions://https/example.com/path/to/actions.xml'
```

```xml
<?xml version="1.0" encoding="utf-8"?>
<locusActions>
  <download>
    <source size="22075830" date="2012-06-29_19-11-54">
      <![CDATA[http://example.com/maps/map.tar]]>
    </source>
    <dest><![CDATA[/maps/map.tar]]></dest>
    <after>refreshMap</after>
  </download>
</locusActions>
```

```xml
<?xml version="1.0" encoding="utf-8"?>
<locusActions>
  <event>
    <key>setMapVector</key>
    <value><![CDATA[/mapsVector/DownloadedMap.map]]></value>
  </event>
</locusActions>
```

## Official Documentation

- [Locus Actions](https://docs.locusmap.app/doku.php?id=manual%3Aadvanced%3Acustomization%3Aactions)
