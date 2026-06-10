---
url: /protocol-launcher/apps/power-apps-mobile.md
---

# Power Apps Mobile

[Power Apps Mobile](https://powerapps.microsoft.com/) is Microsoft's mobile app for running Power Apps on phones and tablets. **Protocol Launcher** allows you to generate Power Apps Mobile URL scheme links.

## Usage

There are two ways to use this library:

* On-Demand import from subpaths enables tree-shaking and keeps bundles small.
* Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

## Notes

This module only wraps the Power Apps mobile URL formats Microsoft documents: `ms-apps://<org-url>_<app-id>` for model-driven apps, `ms-apps:///providers/Microsoft.PowerApps/apps/<appID>` for canvas apps, and `ms-mobile-apps:///providers/Microsoft.PowerApps/apps/<appID>` for wrapped native mobile apps.

For model-driven apps, pass `orgUrl` without `https://`. Microsoft marks `environmentId` and `appLogicalName` as mandatory for new model-driven links, and `environmentId` as mandatory for new canvas app links. Wrapped app links work only when one wrapped app is installed on the mobile device.

## URL Methods

### Open Model-Driven App

Open a model-driven app in Power Apps mobile.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openModelDrivenApp' : 'powerAppsMobile' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'powerAppsMobile.'}}openModelDrivenApp({
  orgUrl: 'contoso.onmicrosoft.com',
  appId: 'e6429eba-2204-40e8-b9dd-fc74791ff2c2',
  tenantId: 'aaaabbbb-0000-cccc-1111-dddd2222eeee',
  environmentId: 'g67tfyufhkjfg',
  appLogicalName: 'cr12_e567',
  restartApp: true,
  forceOfflineDataSync: true,
})
```

### Open Entity Record

Open an `entityrecord` form in a model-driven app.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openEntityRecord' : 'powerAppsMobile' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'powerAppsMobile.'}}openEntityRecord({
  orgUrl: 'contoso.onmicrosoft.com',
  appId: 'e6429eba-2204-40e8-b9dd-fc74791ff2c2',
  tenantId: 'aaaabbbb-0000-cccc-1111-dddd2222eeee',
  environmentId: 'g67tfyufhkjfg',
  appLogicalName: 'cr12_e567',
  etn: 'account',
  id: '00000000-1111-2222-3333-444444444444',
})
```

### Open Entity List

Open an `entitylist` view in a model-driven app.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openEntityList' : 'powerAppsMobile' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'powerAppsMobile.'}}openEntityList({
  orgUrl: 'contoso.onmicrosoft.com',
  appId: 'e6429eba-2204-40e8-b9dd-fc74791ff2c2',
  tenantId: 'aaaabbbb-0000-cccc-1111-dddd2222eeee',
  environmentId: 'g67tfyufhkjfg',
  appLogicalName: 'cr12_e567',
  etn: 'account',
  viewid: '11111111-2222-3333-4444-555555555555',
  viewType: 1039,
})
```

### Open Canvas App

Open a canvas app in Power Apps mobile.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openCanvasApp' : 'powerAppsMobile' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'powerAppsMobile.'}}openCanvasApp({
  appId: '11111111-2222-3333-4444-555555555555',
  tenantId: 'aaaabbbb-0000-cccc-1111-dddd2222eeee',
  environmentId: 'g67tfyufhkjfg',
  restartApp: true,
})
```

### Open Wrapped App

Open a wrapped native mobile app created with Power Apps wrap.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openWrappedApp' : 'powerAppsMobile' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'powerAppsMobile.'}}openWrappedApp({
  appId: '11111111-2222-3333-4444-555555555555',
  tenantId: 'aaaabbbb-0000-cccc-1111-dddd2222eeee',
  restartApp: true,
})
```

## Generated URLs

```ts
openModelDrivenApp(modelDrivenAppParams)
// => 'ms-apps://contoso.onmicrosoft.com_e6429eba-2204-40e8-b9dd-fc74791ff2c2?tenantId=aaaabbbb-0000-cccc-1111-dddd2222eeee&environmentId=g67tfyufhkjfg&appLogicalName=cr12_e567&appType=AppModule&openApp=true&restartApp=true&forceOfflineDataSync=true'

openEntityRecord(entityRecordParams)
// => 'ms-apps://contoso.onmicrosoft.com_e6429eba-2204-40e8-b9dd-fc74791ff2c2?tenantId=aaaabbbb-0000-cccc-1111-dddd2222eeee&environmentId=g67tfyufhkjfg&appLogicalName=cr12_e567&appType=AppModule&openApp=true&restartApp=true&forceOfflineDataSync=true&etn=account&pagetype=entityrecord&id=00000000-1111-2222-3333-444444444444'

openCanvasApp(canvasAppParams)
// => 'ms-apps:///providers/Microsoft.PowerApps/apps/11111111-2222-3333-4444-555555555555?tenantId=aaaabbbb-0000-cccc-1111-dddd2222eeee&environmentId=g67tfyufhkjfg&restartApp=true'

openWrappedApp(wrappedAppParams)
// => 'ms-mobile-apps:///providers/Microsoft.PowerApps/apps/11111111-2222-3333-4444-555555555555?tenantId=aaaabbbb-0000-cccc-1111-dddd2222eeee&restartApp=true'
```

## Official Documentation

* [Use deep links with the Power Apps mobile app](https://learn.microsoft.com/en-us/power-apps/mobile/mobile-deep-links)
* [Use deep links with wrapped mobile apps](https://learn.microsoft.com/en-us/power-apps/maker/common/wrap/wrap-deep-links)
