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

[CleanShot X](https://cleanshot.com) 是一款 macOS 截图和屏幕录制应用。**Protocol Launcher** 允许您生成 CleanShot X 的 URL scheme 链接。

## 使用方式

有两种使用此库的方式：

- 按需导入（On-Demand）：从子路径导入支持 tree-shaking，保持较小的打包体积。
- 完整导入（Full Import）：从根包导入更方便，但会包含所有应用模块。

生产构建建议选择按需导入；快速脚本或演示可以使用完整导入。

<SelectInstallationMethod v-model="currentMethod" />

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

<div class="flex flex-col gap-4 items-center">
  <VPLink :href="allInOne()" target="_self">
    打开 All-In-One
  </VPLink>
  <VPLink :href="allInOne(allInOneAreaParams)" target="_self">
    在指定区域打开 All-In-One
  </VPLink>
</div>

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

<div class="flex flex-col gap-4 items-center">
  <VPLink :href="captureArea(captureAreaActionParams)" target="_self">
    截取区域并标注
  </VPLink>
  <VPLink :href="captureArea(captureAreaRegionParams)" target="_self">
    截取指定区域
  </VPLink>
  <VPLink :href="capturePreviousArea(capturePreviousAreaParams)" target="_self">
    重复上一次截图
  </VPLink>
  <VPLink :href="captureFullscreen(captureFullscreenParams)" target="_self">
    截取全屏
  </VPLink>
  <VPLink :href="captureWindow(captureWindowParams)" target="_self">
    截取窗口
  </VPLink>
  <VPLink :href="selfTimer(selfTimerParams)" target="_self">
    启动延时截图
  </VPLink>
  <VPLink :href="scrollingCapture(scrollingCaptureParams)" target="_self">
    启动滚动截图
  </VPLink>
  <VPLink :href="pin(pinParams)" target="_self">
    固定文件
  </VPLink>
</div>

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

<div class="flex flex-col gap-4 items-center">
  <VPLink :href="recordScreen()" target="_self">
    打开屏幕录制
  </VPLink>
  <VPLink :href="recordScreen(recordScreenParams)" target="_self">
    在指定区域打开屏幕录制
  </VPLink>
</div>

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

<div class="flex flex-col gap-4 items-center">
  <VPLink :href="captureText()" target="_self">
    打开文本识别
  </VPLink>
  <VPLink :href="captureText(captureTextFileParams)" target="_self">
    从文件识别文本
  </VPLink>
  <VPLink :href="captureText(captureTextAreaParams)" target="_self">
    从区域识别文本
  </VPLink>
</div>

### 标注

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openAnnotate, openFromClipboard' : 'cleanShotX' }} } from '{{ importPath }}'

const fileUrl = {{currentMethod === 'On-Demand' ? '' : 'cleanShotX.'}}openAnnotate({
  filepath: '/Users/username/Desktop/my screenshot.png',
})

const clipboardUrl = {{currentMethod === 'On-Demand' ? '' : 'cleanShotX.'}}openFromClipboard()
```

<div class="flex flex-col gap-4 items-center">
  <VPLink :href="openAnnotate(openAnnotateParams)" target="_self">
    在标注中打开文件
  </VPLink>
  <VPLink :href="openFromClipboard()" target="_self">
    在标注中打开剪贴板图片
  </VPLink>
</div>

### 桌面图标

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'toggleDesktopIcons, hideDesktopIcons, showDesktopIcons' : 'cleanShotX' }} } from '{{ importPath }}'

const toggleUrl = {{currentMethod === 'On-Demand' ? '' : 'cleanShotX.'}}toggleDesktopIcons()

const hideUrl = {{currentMethod === 'On-Demand' ? '' : 'cleanShotX.'}}hideDesktopIcons()

const showUrl = {{currentMethod === 'On-Demand' ? '' : 'cleanShotX.'}}showDesktopIcons()
```

<div class="flex flex-col gap-4 items-center">
  <VPLink :href="toggleDesktopIcons()" target="_self">
    切换桌面图标
  </VPLink>
  <VPLink :href="hideDesktopIcons()" target="_self">
    隐藏桌面图标
  </VPLink>
  <VPLink :href="showDesktopIcons()" target="_self">
    显示桌面图标
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
    添加 Quick Access Overlay
  </VPLink>
</div>

### 历史管理

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openHistory, restoreRecentlyClosed' : 'cleanShotX' }} } from '{{ importPath }}'

const historyUrl = {{currentMethod === 'On-Demand' ? '' : 'cleanShotX.'}}openHistory()

const restoreUrl = {{currentMethod === 'On-Demand' ? '' : 'cleanShotX.'}}restoreRecentlyClosed()
```

<div class="flex flex-col gap-4 items-center">
  <VPLink :href="openHistory()" target="_self">
    打开历史记录
  </VPLink>
  <VPLink :href="restoreRecentlyClosed()" target="_self">
    恢复最近关闭项
  </VPLink>
</div>

### 设置

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openSettings' : 'cleanShotX' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'cleanShotX.'}}openSettings()

const tabUrl = {{currentMethod === 'On-Demand' ? '' : 'cleanShotX.'}}openSettings({
  tab: 'recording',
})
```

<div class="flex flex-col gap-4 items-center">
  <VPLink :href="openSettings()" target="_self">
    打开设置
  </VPLink>
  <VPLink :href="openSettings(openSettingsParams)" target="_self">
    打开录制设置
  </VPLink>
</div>

## 官方文档

- [CleanShot X URL Scheme API](https://cleanshot.com/docs-api)
