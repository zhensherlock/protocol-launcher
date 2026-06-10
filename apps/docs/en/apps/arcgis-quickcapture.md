---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { launchAppLink, launchUrlScheme, openPortal, openProject, populateUserInput, pressButton } from 'protocol-launcher/arcgis-quickcapture';
import { SelectInstallationMethod } from '../../.vitepress/components';
import { launchAppLinkParams, launchUrlSchemeParams, openPortalParams, openProjectParams, populateUserInputParams, pressButtonParams } from '../../.vitepress/constants/arcgis-quickcapture';

const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/arcgis-quickcapture' : 'protocol-launcher');
</script>

# ArcGIS QuickCapture

[ArcGIS QuickCapture](https://www.esri.com/en-us/arcgis/products/arcgis-quickcapture/overview) is Esri's rapid field data collection app. **Protocol Launcher** allows you to generate ArcGIS QuickCapture launch links.

## Usage

There are two ways to use this library:

- On-Demand import from subpaths enables tree-shaking and keeps bundles small.
- Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

<SelectInstallationMethod v-model="currentMethod" />

## URL Methods

Esri documents two QuickCapture launch methods: QuickCapture links that begin with `https://quickcapture.arcgis.app` and custom URL scheme links that begin with `arcgis-quickcapture://`. Both methods support the same mobile app parameters.

This module exposes only the documented parameters: `itemID`, `portalUrl`, `externalBrowserSignIn`, `center`, `callback`, `action=press:<button GUID>`, `field:<field name>`, and `userInput:<input id>`.

### Launch URL Scheme

Launch QuickCapture with the documented custom URL scheme.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'launchUrlScheme' : 'arcgisQuickCapture' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'arcgisQuickCapture.'}}launchUrlScheme({
  itemID: 'aabda4a5e36d42c2bcf1c479fe01e5e3',
  userInputs: { '001': 'Alice' },
})
```

<div class="flex justify-center">
  <VPLink :href="launchUrlScheme(launchUrlSchemeParams)" target="_self">
    Open URL Scheme
  </VPLink>
</div>

### Launch App Link

Launch QuickCapture with the documented app link for iOS and Android.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'launchAppLink' : 'arcgisQuickCapture' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'arcgisQuickCapture.'}}launchAppLink({
  itemID: 'aabda4a5e36d42c2bcf1c479fe01e5e3',
  userInputs: { '001': 'Alice' },
})
```

<div class="flex justify-center">
  <VPLink :href="launchAppLink(launchAppLinkParams)" target="_self">
    Open App Link
  </VPLink>
</div>

### Open Project

Open a QuickCapture project by project item ID.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openProject' : 'arcgisQuickCapture' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'arcgisQuickCapture.'}}openProject({
  itemID: 'aabda4a5e36d42c2bcf1c479fe01e5e3',
  center: '37.8199,-122.4783,20',
})
```

<div class="flex justify-center">
  <VPLink :href="openProject(openProjectParams)" target="_self">
    Open Project
  </VPLink>
</div>

### Open Portal

Open QuickCapture for a specific ArcGIS portal and optionally request external-browser sign-in.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openPortal' : 'arcgisQuickCapture' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'arcgisQuickCapture.'}}openPortal({
  portalUrl: 'https://myorg.arcgis.com',
  externalBrowserSignIn: true,
})
```

<div class="flex justify-center">
  <VPLink :href="openPortal(openPortalParams)" target="_self">
    Open Portal
  </VPLink>
</div>

### Press Button

Press a QuickCapture button by its documented button GUID and optionally populate field values.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'pressButton' : 'arcgisQuickCapture' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'arcgisQuickCapture.'}}pressButton({
  itemID: 'aabda4a5e36d42c2bcf1c479fe01e5e3',
  buttonID: '0c59c9d9-9b51-46b3-bb81-21149e6fddb4',
  fields: { diameter: '20' },
  callback: 'https://survey123.arcgis.app',
})
```

<div class="flex justify-center">
  <VPLink :href="pressButton(pressButtonParams)" target="_self">
    Press Button
  </VPLink>
</div>

### Populate User Input

Open a QuickCapture project with documented project user input values.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'populateUserInput' : 'arcgisQuickCapture' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'arcgisQuickCapture.'}}populateUserInput({
  itemID: 'aabda4a5e36d42c2bcf1c479fe01e5e3',
  userInputs: {
    '001': 'Alice',
    '002': 'Zone5',
  },
})
```

<div class="flex justify-center">
  <VPLink :href="populateUserInput(populateUserInputParams)" target="_self">
    Populate User Input
  </VPLink>
</div>

## Generated URLs

```ts
launchUrlScheme({
  itemID: 'aabda4a5e36d42c2bcf1c479fe01e5e3',
  userInputs: { '001': 'Alice' },
})
// => 'arcgis-quickcapture://?itemID=aabda4a5e36d42c2bcf1c479fe01e5e3&userInput:001=Alice'

launchAppLink({
  itemID: 'aabda4a5e36d42c2bcf1c479fe01e5e3',
  userInputs: { '001': 'Alice' },
})
// => 'https://quickcapture.arcgis.app/?itemID=aabda4a5e36d42c2bcf1c479fe01e5e3&userInput:001=Alice'

openProject({
  itemID: 'aabda4a5e36d42c2bcf1c479fe01e5e3',
  center: '37.8199,-122.4783,20',
})
// => 'arcgis-quickcapture://?itemID=aabda4a5e36d42c2bcf1c479fe01e5e3&center=37.8199%2C-122.4783%2C20'

openPortal({
  portalUrl: 'https://myorg.arcgis.com',
  externalBrowserSignIn: true,
})
// => 'arcgis-quickcapture://?portalUrl=https%3A%2F%2Fmyorg.arcgis.com&externalBrowserSignIn=true'

pressButton({
  itemID: 'aabda4a5e36d42c2bcf1c479fe01e5e3',
  buttonID: '0c59c9d9-9b51-46b3-bb81-21149e6fddb4',
  fields: { diameter: '20' },
  callback: 'https://survey123.arcgis.app',
})
// => 'arcgis-quickcapture://?itemID=aabda4a5e36d42c2bcf1c479fe01e5e3&action=press%3A0c59c9d9-9b51-46b3-bb81-21149e6fddb4&field:diameter=20&callback=https%3A%2F%2Fsurvey123.arcgis.app'

populateUserInput({
  itemID: 'aabda4a5e36d42c2bcf1c479fe01e5e3',
  userInputs: { '001': 'Alice', '002': 'Zone5' },
})
// => 'arcgis-quickcapture://?itemID=aabda4a5e36d42c2bcf1c479fe01e5e3&userInput:001=Alice&userInput:002=Zone5'
```

## Official Documentation

- [Integrate with other apps](https://doc.arcgis.com/en/quickcapture/help/integratewithotherapps.htm)
