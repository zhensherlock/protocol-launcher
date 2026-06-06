---
url: /protocol-launcher/apps/power-bi-mobile.md
---

# Power BI Mobile

[Power BI Mobile](https://powerbi.microsoft.com/mobile/) is Microsoft's mobile app for viewing Power BI content on phones and tablets. **Protocol Launcher** allows you to generate Power BI Mobile URL scheme links.

## Usage

There are two ways to use this library:

* On-Demand import from subpaths enables tree-shaking and keeps bundles small.
* Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

## Notes

This module only wraps the `mspbi://app/` mobile deep-link format Microsoft documents for devices that have the Power BI mobile app installed. Microsoft also documents separate redirect and report URL formats; those are not part of these `mspbi://` helpers.

For content outside My Workspace, pass `groupObjectId` so the generated URL includes Microsoft's `GroupObjectId` parameter. Report bookmarks are only documented for standard 36-character GUID values; `BookmarkXXXXXXXXXXXXXXXXXXX` values are not supported.

### Open App

Open the Power BI mobile app.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openApp' : 'powerBiMobile' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'powerBiMobile.'}}openApp()
```

### Open Dashboard

Open a specific dashboard by dashboard object ID.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openDashboard' : 'powerBiMobile' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'powerBiMobile.'}}openDashboard({
  dashboardObjectId: 'aaaaaaaa-0000-1111-2222-bbbbbbbbbbbb',
  groupObjectId: 'ffffffff-5555-6666-7777-aaaaaaaaaaaa',
})
```

### Open Tile

Open a dashboard tile in focus mode.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openTile' : 'powerBiMobile' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'powerBiMobile.'}}openTile({
  dashboardObjectId: 'aaaaaaaa-0000-1111-2222-bbbbbbbbbbbb',
  tileObjectId: 'cccccccc-2222-3333-4444-dddddddddddd',
  groupObjectId: 'ffffffff-5555-6666-7777-aaaaaaaaaaaa',
})
```

### Open Report

Open a specific report.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openReport' : 'powerBiMobile' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'powerBiMobile.'}}openReport({
  reportObjectId: 'dddddddd-3333-4444-5555-eeeeeeeeeeee',
  groupObjectId: 'ffffffff-5555-6666-7777-aaaaaaaaaaaa',
})
```

### Open Report Page

Open a specific report page.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openReport' : 'powerBiMobile' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'powerBiMobile.'}}openReport({
  reportObjectId: 'dddddddd-3333-4444-5555-eeeeeeeeeeee',
  reportPage: 'ReportSection11',
})
```

### Open Report With Context

Add a context parameter to a report deep link.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openReport' : 'powerBiMobile' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'powerBiMobile.'}}openReport({
  reportObjectId: 'dddddddd-3333-4444-5555-eeeeeeeeeeee',
  groupObjectId: 'eeeeeeee-4444-5555-6666-ffffffffffff',
  context: 'SlackDeepLink',
})
```

## Official Documentation

* [Create a link to a specific location in the Power BI mobile apps](https://learn.microsoft.com/en-us/power-bi/developer/embedded/mobile-apps-deep-link-specific-location)
