---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { launchConnect, launchFieldApp, launchFieldAppLink, launchWebApp } from 'protocol-launcher/arcgis-survey123';
import { SelectInstallationMethod } from '../../.vitepress/components';
import { launchConnectParams, launchFieldAppLinkParams, launchFieldAppParams, launchWebAppParams } from '../../.vitepress/constants/arcgis-survey123';

const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/arcgis-survey123' : 'protocol-launcher');
</script>

# ArcGIS Survey123

[ArcGIS Survey123](https://www.esri.com/en-us/arcgis/products/arcgis-survey123/overview) is Esri's form-centric field data collection app. **Protocol Launcher** allows you to generate ArcGIS Survey123 URL scheme links.

## Usage

There are two ways to use this library:

- On-Demand import from subpaths enables tree-shaking and keeps bundles small.
- Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

<SelectInstallationMethod v-model="currentMethod" />

## URL Scheme

Esri documents four Survey123 launch patterns: the web app share URL `https://survey123.arcgis.com/share/ID`, the field app app link `https://survey123.arcgis.app`, the field app custom scheme `arcgis-survey123://`, and the Survey123 Connect scheme `arcgis-survey123connect://`.

The field app accepts the documented URL parameters `center`, `field:<question name>`, `portalUrl`, `itemID`, `download`, `action`, `folder`, `callback`, `callback:<status>`, `filter`, `update`, and `q:<query parameter>`. The web app uses the survey item ID as the path segment and accepts the documented web app parameters `signIn`, `isOrgSignIn`, `center`, `field:<question name>`, `portalUrl`, `open`, `hide`, `locale`, `mode`, `globalId`, `recalculate`, `version`, `token`, `autoReload`, `autoRefresh`, `encodeUrlParams`, and `width`. Survey123 Connect accepts only `portalUrl` and `itemID`.

### Launch Field App

Launch the Survey123 field app with the custom URL scheme.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'launchFieldApp' : 'arcgisSurvey123' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'arcgisSurvey123.'}}launchFieldApp({
  itemID: '36ff9e8c13e042a58cfce4ad87f55d19',
  fields: { surname: 'Klauser' },
  center: '37.8199,-122.4783,20',
})
```

<div class="flex justify-center">
  <VPLink :href="launchFieldApp(launchFieldAppParams)" target="_self">
    Open Field App Scheme
  </VPLink>
</div>

### Launch Field App Link

Launch the Survey123 field app with the app link recommended for iOS and Android app-to-app links.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'launchFieldAppLink' : 'arcgisSurvey123' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'arcgisSurvey123.'}}launchFieldAppLink({
  itemID: '36ff9e8c13e042a58cfce4ad87f55d19',
  fields: { surname: 'Klauser' },
})
```

<div class="flex justify-center">
  <VPLink :href="launchFieldAppLink(launchFieldAppLinkParams)" target="_self">
    Open Field App Link
  </VPLink>
</div>

### Launch Web App

Open a survey in the Survey123 web app.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'launchWebApp' : 'arcgisSurvey123' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'arcgisSurvey123.'}}launchWebApp({
  itemID: '36ff9e8c13e042a58cfce4ad87f55d19',
  fields: { surname: 'Klauser' },
  center: '37.8199,-122.4783',
})
```

<div class="flex justify-center">
  <VPLink :href="launchWebApp(launchWebAppParams)" target="_self">
    Open Web Survey
  </VPLink>
</div>

### Launch Connect

Open a survey in Survey123 Connect. Esri documents that both `portalUrl` and `itemID` are required.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'launchConnect' : 'arcgisSurvey123' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'arcgisSurvey123.'}}launchConnect({
  portalUrl: 'https://www.arcgis.com',
  itemID: '36ff9e8c13e042a58cfce4ad87f55d19',
})
```

<div class="flex justify-center">
  <VPLink :href="launchConnect(launchConnectParams)" target="_self">
    Open Survey123 Connect
  </VPLink>
</div>

## Generated URLs

```ts
launchFieldApp({
  itemID: '36ff9e8c13e042a58cfce4ad87f55d19',
  fields: { surname: 'Klauser' },
  center: '37.8199,-122.4783,20',
})
// => 'arcgis-survey123://?itemID=36ff9e8c13e042a58cfce4ad87f55d19&field:surname=Klauser&center=37.8199%2C-122.4783%2C20'

launchFieldAppLink({
  itemID: '36ff9e8c13e042a58cfce4ad87f55d19',
  fields: { surname: 'Klauser' },
})
// => 'https://survey123.arcgis.app?itemID=36ff9e8c13e042a58cfce4ad87f55d19&field:surname=Klauser'

launchWebApp({
  itemID: '36ff9e8c13e042a58cfce4ad87f55d19',
  fields: { surname: 'Klauser' },
  center: '37.8199,-122.4783',
})
// => 'https://survey123.arcgis.com/share/36ff9e8c13e042a58cfce4ad87f55d19?field:surname=Klauser&center=37.8199%2C-122.4783'

launchConnect({
  portalUrl: 'https://www.arcgis.com',
  itemID: '36ff9e8c13e042a58cfce4ad87f55d19',
})
// => 'arcgis-survey123connect://?portalUrl=https%3A%2F%2Fwww.arcgis.com&itemID=36ff9e8c13e042a58cfce4ad87f55d19'
```

## Official Documentation

- [Integrate with other apps](https://doc.arcgis.com/en/survey123/get-started/integratewithotherapps.htm)
- [Launch the field app](https://doc.arcgis.com/en/survey123/get-started/integrate-launchfieldapp.htm)
- [Launch the web app](https://doc.arcgis.com/en/survey123/get-started/integrate-launchwebapp.htm)
- [Launch Survey123 Connect](https://doc.arcgis.com/en/survey123/get-started/integrate-launchconnect.htm)
