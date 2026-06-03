---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import {
  addQuickAccessOverlay,
  allInOne,
  captureArea,
  captureFullscreen,
  capturePreviousArea,
  captureText,
  captureWindow,
  hideDesktopIcons,
  openAnnotate,
  openFromClipboard,
  openHistory,
  openSettings,
  pin,
  recordScreen,
  restoreRecentlyClosed,
  scrollingCapture,
  selfTimer,
  showDesktopIcons,
  toggleDesktopIcons,
} from 'protocol-launcher/cleanshot-x';
import { SelectInstallationMethod } from '../../.vitepress/components';
import {
  addQuickAccessOverlayParams,
  allInOneAreaParams,
  captureAreaActionParams,
  captureAreaRegionParams,
  captureFullscreenParams,
  capturePreviousAreaParams,
  captureTextAreaParams,
  captureTextFileParams,
  captureWindowParams,
  openAnnotateParams,
  openSettingsParams,
  pinParams,
  recordScreenParams,
  scrollingCaptureParams,
  selfTimerParams,
} from '../../.vitepress/constants/cleanshot-x';

const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/cleanshot-x' : 'protocol-launcher');
</script>

# CleanShot X

[CleanShot X](https://cleanshot.com) is a macOS screenshot and screen recording app. **Protocol Launcher** allows you to generate CleanShot X URL scheme links.

## Usage

There are two ways to use this library:

- On-Demand import from subpaths enables tree-shaking and keeps bundles small.
- Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

<SelectInstallationMethod v-model="currentMethod" />

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

<div class="flex flex-col gap-4 items-center">
  <VPLink :href="allInOne()" target="_self">
    Open All-In-One
  </VPLink>
  <VPLink :href="allInOne(allInOneAreaParams)" target="_self">
    Open All-In-One at Area
  </VPLink>
</div>

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

<div class="flex flex-col gap-4 items-center">
  <VPLink :href="captureArea(captureAreaActionParams)" target="_self">
    Capture Area and Annotate
  </VPLink>
  <VPLink :href="captureArea(captureAreaRegionParams)" target="_self">
    Capture Area Region
  </VPLink>
  <VPLink :href="capturePreviousArea(capturePreviousAreaParams)" target="_self">
    Capture Previous Area
  </VPLink>
  <VPLink :href="captureFullscreen(captureFullscreenParams)" target="_self">
    Capture Fullscreen
  </VPLink>
  <VPLink :href="captureWindow(captureWindowParams)" target="_self">
    Capture Window
  </VPLink>
  <VPLink :href="selfTimer(selfTimerParams)" target="_self">
    Start Self-Timer
  </VPLink>
  <VPLink :href="scrollingCapture(scrollingCaptureParams)" target="_self">
    Start Scrolling Capture
  </VPLink>
  <VPLink :href="pin(pinParams)" target="_self">
    Pin File
  </VPLink>
</div>

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

<div class="flex flex-col gap-4 items-center">
  <VPLink :href="recordScreen()" target="_self">
    Open Record Screen
  </VPLink>
  <VPLink :href="recordScreen(recordScreenParams)" target="_self">
    Open Record Screen at Area
  </VPLink>
</div>

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

<div class="flex flex-col gap-4 items-center">
  <VPLink :href="captureText()" target="_self">
    Open Text Recognition
  </VPLink>
  <VPLink :href="captureText(captureTextFileParams)" target="_self">
    Capture Text from File
  </VPLink>
  <VPLink :href="captureText(captureTextAreaParams)" target="_self">
    Capture Text from Area
  </VPLink>
</div>

### Annotate

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openAnnotate, openFromClipboard' : 'cleanShotX' }} } from '{{ importPath }}'

const fileUrl = {{currentMethod === 'On-Demand' ? '' : 'cleanShotX.'}}openAnnotate({
  filepath: '/Users/username/Desktop/my screenshot.png',
})

const clipboardUrl = {{currentMethod === 'On-Demand' ? '' : 'cleanShotX.'}}openFromClipboard()
```

<div class="flex flex-col gap-4 items-center">
  <VPLink :href="openAnnotate(openAnnotateParams)" target="_self">
    Open File in Annotate
  </VPLink>
  <VPLink :href="openFromClipboard()" target="_self">
    Open Clipboard in Annotate
  </VPLink>
</div>

### Desktop Icons

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'toggleDesktopIcons, hideDesktopIcons, showDesktopIcons' : 'cleanShotX' }} } from '{{ importPath }}'

const toggleUrl = {{currentMethod === 'On-Demand' ? '' : 'cleanShotX.'}}toggleDesktopIcons()

const hideUrl = {{currentMethod === 'On-Demand' ? '' : 'cleanShotX.'}}hideDesktopIcons()

const showUrl = {{currentMethod === 'On-Demand' ? '' : 'cleanShotX.'}}showDesktopIcons()
```

<div class="flex flex-col gap-4 items-center">
  <VPLink :href="toggleDesktopIcons()" target="_self">
    Toggle Desktop Icons
  </VPLink>
  <VPLink :href="hideDesktopIcons()" target="_self">
    Hide Desktop Icons
  </VPLink>
  <VPLink :href="showDesktopIcons()" target="_self">
    Show Desktop Icons
  </VPLink>
</div>

### Quick Access Overlay

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'addQuickAccessOverlay' : 'cleanShotX' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'cleanShotX.'}}addQuickAccessOverlay({
  filepath: '/Users/username/Desktop/my screenshot.png',
})
```

<div class="flex justify-center">
  <VPLink :href="addQuickAccessOverlay(addQuickAccessOverlayParams)" target="_self">
    Add Quick Access Overlay
  </VPLink>
</div>

### History Management

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openHistory, restoreRecentlyClosed' : 'cleanShotX' }} } from '{{ importPath }}'

const historyUrl = {{currentMethod === 'On-Demand' ? '' : 'cleanShotX.'}}openHistory()

const restoreUrl = {{currentMethod === 'On-Demand' ? '' : 'cleanShotX.'}}restoreRecentlyClosed()
```

<div class="flex flex-col gap-4 items-center">
  <VPLink :href="openHistory()" target="_self">
    Open History
  </VPLink>
  <VPLink :href="restoreRecentlyClosed()" target="_self">
    Restore Recently Closed
  </VPLink>
</div>

### Settings

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openSettings' : 'cleanShotX' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'cleanShotX.'}}openSettings()

const tabUrl = {{currentMethod === 'On-Demand' ? '' : 'cleanShotX.'}}openSettings({
  tab: 'recording',
})
```

<div class="flex flex-col gap-4 items-center">
  <VPLink :href="openSettings()" target="_self">
    Open Settings
  </VPLink>
  <VPLink :href="openSettings(openSettingsParams)" target="_self">
    Open Recording Settings
  </VPLink>
</div>

## Official Documentation

- [CleanShot X URL Scheme API](https://cleanshot.com/docs-api)
