---
url: /protocol-launcher/zh/apps/cleanshot-x.md
---

# CleanShot X

[CleanShot X](https://cleanshot.com) 是一款 macOS 截图和屏幕录制应用。**Protocol Launcher** 允许您生成 CleanShot X 的 URL scheme 链接。

## 使用方式

有两种使用此库的方式：

* 按需导入（On-Demand）：从子路径导入支持 tree-shaking，保持较小的打包体积。
* 完整导入（Full Import）：从根包导入更方便，但会包含所有应用模块。

生产构建建议选择按需导入；快速脚本或演示可以使用完整导入。

## URL 方法

下面的 helper 与 CleanShot 官方 URL Scheme API 保持一致。

### All-In-One 模式

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

### 截图

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

### 屏幕录制

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

### 文本识别

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

### 标注

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openAnnotate, openFromClipboard' : 'cleanShotX' }} } from '{{ importPath }}'

const fileUrl = {{currentMethod === 'On-Demand' ? '' : 'cleanShotX.'}}openAnnotate({
  filepath: '/Users/username/Desktop/my screenshot.png',
})

const clipboardUrl = {{currentMethod === 'On-Demand' ? '' : 'cleanShotX.'}}openFromClipboard()
```

### 桌面图标

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

### 历史管理

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openHistory, restoreRecentlyClosed' : 'cleanShotX' }} } from '{{ importPath }}'

const historyUrl = {{currentMethod === 'On-Demand' ? '' : 'cleanShotX.'}}openHistory()

const restoreUrl = {{currentMethod === 'On-Demand' ? '' : 'cleanShotX.'}}restoreRecentlyClosed()
```

### 设置

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openSettings' : 'cleanShotX' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'cleanShotX.'}}openSettings()

const tabUrl = {{currentMethod === 'On-Demand' ? '' : 'cleanShotX.'}}openSettings({
  tab: 'recording',
})
```

## 官方文档

* [CleanShot X URL Scheme API](https://cleanshot.com/docs-api)
