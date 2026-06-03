---
url: /protocol-launcher/apps/cleanshot-x.md
---

# CleanShot X

[CleanShot X](https://cleanshot.com) is a macOS screenshot and screen recording app. **Protocol Launcher** allows you to generate CleanShot X URL scheme links.

## Usage

There are two ways to use this library:

* On-Demand import from subpaths enables tree-shaking and keeps bundles small.
* Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

## URL Methods

The helpers below mirror CleanShot's official URL Scheme API.

### All-In-One Mode

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'allInOne' : 'cleanShotX' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'cleanShotX.'}}allInOne()

const areaUrl = {{currentMethod === 'On-Demand' ? '' : 'cleanShotX.'}}allInOne({
  x: 100,
  y: 120,
  width: 200,
  height: 150,
  display: 1,
})
```

### Screenshots

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'captureArea, capturePreviousArea, captureFullscreen, captureWindow, selfTimer, scrollingCapture, pin' : 'cleanShotX' }} } from '{{ importPath }}'

const captureAreaUrl = {{currentMethod === 'On-Demand' ? '' : 'cleanShotX.'}}captureArea()

const annotateAreaUrl = {{currentMethod === 'On-Demand' ? '' : 'cleanShotX.'}}captureArea({
  action: 'annotate',
})

const regionUrl = {{currentMethod === 'On-Demand' ? '' : 'cleanShotX.'}}captureArea({
  x: 100,
  y: 120,
  width: 200,
  height: 150,
  display: 1,
})

const previousUrl = {{currentMethod === 'On-Demand' ? '' : 'cleanShotX.'}}capturePreviousArea({
  action: 'copy',
})

const fullscreenUrl = {{currentMethod === 'On-Demand' ? '' : 'cleanShotX.'}}captureFullscreen({
  action: 'save',
})

const windowUrl = {{currentMethod === 'On-Demand' ? '' : 'cleanShotX.'}}captureWindow({
  action: 'upload',
})

const timerUrl = {{currentMethod === 'On-Demand' ? '' : 'cleanShotX.'}}selfTimer({
  action: 'pin',
})

const scrollingUrl = {{currentMethod === 'On-Demand' ? '' : 'cleanShotX.'}}scrollingCapture({
  x: 100,
  y: 120,
  width: 200,
  height: 150,
  start: true,
  autoscroll: true,
})

const pinUrl = {{currentMethod === 'On-Demand' ? '' : 'cleanShotX.'}}pin({
  filepath: '/Users/username/Desktop/my screenshot.png',
})
```

### Screen Recording

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'recordScreen' : 'cleanShotX' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'cleanShotX.'}}recordScreen()

const areaUrl = {{currentMethod === 'On-Demand' ? '' : 'cleanShotX.'}}recordScreen({
  x: 100,
  y: 120,
  width: 200,
  height: 150,
  display: 1,
})
```

### Text Recognition

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'captureText' : 'cleanShotX' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'cleanShotX.'}}captureText()

const fileUrl = {{currentMethod === 'On-Demand' ? '' : 'cleanShotX.'}}captureText({
  filepath: '/Users/username/Desktop/my screenshot.png',
})

const areaUrl = {{currentMethod === 'On-Demand' ? '' : 'cleanShotX.'}}captureText({
  x: 100,
  y: 120,
  width: 200,
  height: 150,
  display: 1,
  linebreaks: true,
})
```

### Annotate

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openAnnotate, openFromClipboard' : 'cleanShotX' }} } from '{{ importPath }}'

const fileUrl = {{currentMethod === 'On-Demand' ? '' : 'cleanShotX.'}}openAnnotate({
  filepath: '/Users/username/Desktop/my screenshot.png',
})

const clipboardUrl = {{currentMethod === 'On-Demand' ? '' : 'cleanShotX.'}}openFromClipboard()
```

### Desktop Icons

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'toggleDesktopIcons, hideDesktopIcons, showDesktopIcons' : 'cleanShotX' }} } from '{{ importPath }}'

const toggleUrl = {{currentMethod === 'On-Demand' ? '' : 'cleanShotX.'}}toggleDesktopIcons()

const hideUrl = {{currentMethod === 'On-Demand' ? '' : 'cleanShotX.'}}hideDesktopIcons()

const showUrl = {{currentMethod === 'On-Demand' ? '' : 'cleanShotX.'}}showDesktopIcons()
```

### Quick Access Overlay

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'addQuickAccessOverlay' : 'cleanShotX' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'cleanShotX.'}}addQuickAccessOverlay({
  filepath: '/Users/username/Desktop/my screenshot.png',
})
```

### History Management

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openHistory, restoreRecentlyClosed' : 'cleanShotX' }} } from '{{ importPath }}'

const historyUrl = {{currentMethod === 'On-Demand' ? '' : 'cleanShotX.'}}openHistory()

const restoreUrl = {{currentMethod === 'On-Demand' ? '' : 'cleanShotX.'}}restoreRecentlyClosed()
```

### Settings

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openSettings' : 'cleanShotX' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'cleanShotX.'}}openSettings()

const tabUrl = {{currentMethod === 'On-Demand' ? '' : 'cleanShotX.'}}openSettings({
  tab: 'recording',
})
```

## Official Documentation

* [CleanShot X URL Scheme API](https://cleanshot.com/docs-api)
