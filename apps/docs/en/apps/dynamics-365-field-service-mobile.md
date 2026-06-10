---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { createEntityRecord, openEntityList, openEntityRecord } from 'protocol-launcher/dynamics-365-field-service-mobile';
import { SelectInstallationMethod } from '../../.vitepress/components';
import {
  createEntityRecordParams,
  entityListParams,
  entityRecordParams,
} from '../../.vitepress/constants/dynamics-365-field-service-mobile';

const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/dynamics-365-field-service-mobile' : 'protocol-launcher');
</script>

# Dynamics 365 Field Service Mobile

[Dynamics 365 Field Service Mobile](https://learn.microsoft.com/en-us/dynamics365/guidance/resources/field-service-mobile-use-deep-links) is Microsoft's mobile app for Dynamics 365 Field Service. **Protocol Launcher** allows you to generate Dynamics 365 Field Service Mobile URL scheme links.

## Usage

There are two ways to use this library:

- On-Demand import from subpaths enables tree-shaking and keeps bundles small.
- Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

<SelectInstallationMethod v-model="currentMethod" />

## Notes

This module only wraps the Field Service mobile deep link format Microsoft documents: `ms-apps-fs://<org-url>_<app-id>?tenantId=<tenant-id>&isShortcut=true&appType=AppModule&openApp=true&restartApp=true&forceOfflineDataSync=true`.

Pass `orgUrl` without `https://`. Entity record links use `pagetype=entityrecord`; create forms use the same page type with a blank `id`. Entity list links use `pagetype=entitylist` and the documented `Viewtype` values: `1039` for system views and `4230` for personal views.

## URL Methods

### Open Entity Record

Open an `entityrecord` form in the Dynamics 365 Field Service mobile app.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openEntityRecord' : 'dynamics365FieldServiceMobile' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'dynamics365FieldServiceMobile.'}}openEntityRecord({
  orgUrl: 'contoso.onmicrosoft.com',
  appId: 'e6429eba-2204-40e8-b9dd-fc74791ff2c2',
  tenantId: 'aaaabbbb-0000-cccc-1111-dddd2222eeee',
  etn: 'bookableresourcebooking',
  id: '00000000-1111-2222-3333-444444444444',
})
```

<div class="flex justify-center">
  <VPLink :href="openEntityRecord(entityRecordParams)" target="_self">
    Open Field Service Entity Record
  </VPLink>
</div>

### Create Entity Record

Open a create form for an `entityrecord` in the Dynamics 365 Field Service mobile app.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'createEntityRecord' : 'dynamics365FieldServiceMobile' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'dynamics365FieldServiceMobile.'}}createEntityRecord({
  orgUrl: 'contoso.onmicrosoft.com',
  appId: 'e6429eba-2204-40e8-b9dd-fc74791ff2c2',
  tenantId: 'aaaabbbb-0000-cccc-1111-dddd2222eeee',
  etn: 'bookableresourcebooking',
})
```

<div class="flex justify-center">
  <VPLink :href="createEntityRecord(createEntityRecordParams)" target="_self">
    Create Field Service Entity Record
  </VPLink>
</div>

### Open Entity List

Open an `entitylist` view in the Dynamics 365 Field Service mobile app.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openEntityList' : 'dynamics365FieldServiceMobile' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'dynamics365FieldServiceMobile.'}}openEntityList({
  orgUrl: 'contoso.onmicrosoft.com',
  appId: 'e6429eba-2204-40e8-b9dd-fc74791ff2c2',
  tenantId: 'aaaabbbb-0000-cccc-1111-dddd2222eeee',
  etn: 'bookableresourcebooking',
  viewid: '11111111-2222-3333-4444-555555555555',
  viewType: 1039,
})
```

<div class="flex justify-center">
  <VPLink :href="openEntityList(entityListParams)" target="_self">
    Open Field Service Entity List
  </VPLink>
</div>

## Generated URLs

```ts
openEntityRecord(entityRecordParams)
// => 'ms-apps-fs://contoso.onmicrosoft.com_e6429eba-2204-40e8-b9dd-fc74791ff2c2?tenantId=aaaabbbb-0000-cccc-1111-dddd2222eeee&isShortcut=true&appType=AppModule&openApp=true&restartApp=true&forceOfflineDataSync=true&etn=bookableresourcebooking&pagetype=entityrecord&id=00000000-1111-2222-3333-444444444444'

createEntityRecord(createEntityRecordParams)
// => 'ms-apps-fs://contoso.onmicrosoft.com_e6429eba-2204-40e8-b9dd-fc74791ff2c2?tenantId=aaaabbbb-0000-cccc-1111-dddd2222eeee&isShortcut=true&appType=AppModule&openApp=true&restartApp=true&forceOfflineDataSync=true&etn=bookableresourcebooking&pagetype=entityrecord&id='

openEntityList(entityListParams)
// => 'ms-apps-fs://contoso.onmicrosoft.com_e6429eba-2204-40e8-b9dd-fc74791ff2c2?tenantId=aaaabbbb-0000-cccc-1111-dddd2222eeee&isShortcut=true&appType=AppModule&openApp=true&restartApp=true&forceOfflineDataSync=true&etn=bookableresourcebooking&pagetype=entitylist&viewid=11111111-2222-3333-4444-555555555555&Viewtype=1039'
```

## Official Documentation

- [Use deep links to the Field Service mobile app](https://learn.microsoft.com/en-us/dynamics365/guidance/resources/field-service-mobile-use-deep-links)
