---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import {
  addNewTrigger,
  cancelDelayedNamedTriggerExecution,
  deleteTrigger,
  executeAssignedActionsForTrigger,
  exportPreset,
  importPreset,
  importViaUrl,
  jsonImport,
  refreshWidget,
  revealElementInUi,
  runShortcut,
  runShortcutAsyncWithoutResponse,
  setNumberVariable,
  setPersistentNumberVariable,
  setPersistentStringVariable,
  setStringVariable,
  triggerAction,
  triggerNamed,
  triggerNamedAsyncWithoutResponse,
  updateMenubarItem,
  updateStreamDeckWidget,
  updateTouchBarWidget,
  updateTrigger,
} from 'protocol-launcher/bettertouchtool';
import { SelectInstallationMethod } from '../../.vitepress/components';
import {
  addNewTriggerParams,
  cancelDelayedNamedTriggerExecutionParams,
  exportPresetParams,
  importPresetKeepExistingParams,
  importPresetParams,
  importViaUrlParams,
  importViaUrlUnzipParams,
  jsonImportParams,
  jsonImportUncompressParams,
  runShortcutAsyncParams,
  runShortcutParams,
  setNumberVariableParams,
  setPersistentNumberVariableParams,
  setPersistentStringVariableParams,
  setStringVariableParams,
  triggerActionParams,
  triggerNamedAsyncParams,
  triggerNamedCancelDelayedParams,
  triggerNamedParams,
  triggerNamedWithVariablesParams,
  triggerUuidParams,
  updateMenubarItemParams,
  updateStreamDeckWidgetParams,
  updateTouchBarWidgetParams,
  updateTriggerParams,
  widgetUuidParams,
} from '../../.vitepress/constants/bettertouchtool';

const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/bettertouchtool' : 'protocol-launcher');
</script>

# BetterTouchTool

[BetterTouchTool](https://folivora.ai/) 是一款 macOS 自动化应用。**Protocol Launcher** 会为 BetterTouchTool 官方 Custom URL Scheme 接口生成 `btt://` URL。

BetterTouchTool 可以要求 URL 中包含 `shared_secret` 查询参数。如果你的 BetterTouchTool 高级偏好设置启用了 shared secret，可在基于查询参数的 helper 中通过 `sharedSecret` 传入。

## 使用方式

有两种使用此库的方式：

- 按需导入（On-Demand）：从子路径导入支持 tree-shaking，保持较小的打包体积。
- 完整导入（Full Import）：从根包导入更方便，但会包含所有应用模块。

生产构建建议选择按需导入；快速脚本或演示可以使用完整导入。

<SelectInstallationMethod v-model="currentMethod" />

### 触发命名触发器

运行命名触发器，向它传入 BetterTouchTool 变量，或取消它的延迟执行。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'triggerNamed' : 'betterTouchTool' }} } from '{{ importPath }}'

const reviewUrl = {{currentMethod === 'On-Demand' ? '' : 'betterTouchTool.'}}triggerNamed({
  triggerName: 'Daily Review',
})

const projectUrl = {{currentMethod === 'On-Demand' ? '' : 'betterTouchTool.'}}triggerNamed({
  triggerName: 'Open Project',
  variables: {
    projectName: 'Protocol Launcher',
  },
})

const cancelUrl = {{currentMethod === 'On-Demand' ? '' : 'betterTouchTool.'}}triggerNamed({
  triggerName: 'Daily Review',
  cancelDelayed: 1,
})
```

<div class="flex flex-col gap-4 items-center">
  <VPLink :href="triggerNamed(triggerNamedParams)" target="_self">
    运行 Daily Review
  </VPLink>
  <VPLink :href="triggerNamed(triggerNamedWithVariablesParams)" target="_self">
    带变量打开项目
  </VPLink>
  <VPLink :href="triggerNamed(triggerNamedCancelDelayedParams)" target="_self">
    取消延迟的 Daily Review
  </VPLink>
</div>

### 异步触发命名触发器

异步运行命名触发器，不等待响应。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'triggerNamedAsyncWithoutResponse' : 'betterTouchTool' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'betterTouchTool.'}}triggerNamedAsyncWithoutResponse({
  triggerName: 'Refresh Dashboard',
})
```

<div class="flex justify-center">
  <VPLink :href="triggerNamedAsyncWithoutResponse(triggerNamedAsyncParams)" target="_self">
    异步刷新 Dashboard
  </VPLink>
</div>

### 取消延迟触发器执行

取消一个命名触发器的待执行延迟触发。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'cancelDelayedNamedTriggerExecution' : 'betterTouchTool' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'betterTouchTool.'}}cancelDelayedNamedTriggerExecution({
  triggerName: 'Daily Review',
})
```

<div class="flex justify-center">
  <VPLink :href="cancelDelayedNamedTriggerExecution(cancelDelayedNamedTriggerExecutionParams)" target="_self">
    取消待执行的 Daily Review
  </VPLink>
</div>

### 执行触发器已分配动作

执行指定 UUID 触发器的全部已分配动作。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'executeAssignedActionsForTrigger' : 'betterTouchTool' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'betterTouchTool.'}}executeAssignedActionsForTrigger({
  uuid: '0E2F7963-E64C-403A-8591-C3725D4D9ADC',
})
```

<div class="flex justify-center">
  <VPLink :href="executeAssignedActionsForTrigger(triggerUuidParams)" target="_self">
    执行触发器动作
  </VPLink>
</div>

### 触发预定义动作

通过动作 JSON 运行 BetterTouchTool 预定义动作。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'triggerAction' : 'betterTouchTool' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'betterTouchTool.'}}triggerAction({
  json: {
    BTTPredefinedActionType: 153,
    BTTPredefinedActionName: 'Move Mouse To Position',
    BTTMoveMouseToPosition: '{100, 10}',
    BTTMoveMouseRelative: '6',
  },
})
```

<div class="flex justify-center">
  <VPLink :href="triggerAction(triggerActionParams)" target="_self">
    移动鼠标到指定位置
  </VPLink>
</div>

### 刷新脚本小组件

执行脚本 widget 上分配的全部脚本并更新其内容。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'refreshWidget' : 'betterTouchTool' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'betterTouchTool.'}}refreshWidget({
  uuid: 'CC46E199-B07D-4BF7-AC36-48AAE558540B',
})
```

<div class="flex justify-center">
  <VPLink :href="refreshWidget(widgetUuidParams)" target="_self">
    刷新状态 Widget
  </VPLink>
</div>

### 更新触控栏脚本小组件

更新 Touch Bar Script Widget 的内容。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'updateTouchBarWidget' : 'betterTouchTool' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'betterTouchTool.'}}updateTouchBarWidget({
  uuid: 'CC46E199-B07D-4BF7-AC36-48AAE558540B',
  text: 'Build passed',
  iconPath: '/Users/andi/Desktop/status.png',
  backgroundColor: '200,200,100,255',
})
```

<div class="flex justify-center">
  <VPLink :href="updateTouchBarWidget(updateTouchBarWidgetParams)" target="_self">
    在 Touch Bar 显示构建状态
  </VPLink>
</div>

### 更新控制台小组件

更新 Stream Deck widget 的内容。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'updateStreamDeckWidget' : 'betterTouchTool' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'betterTouchTool.'}}updateStreamDeckWidget({
  uuid: 'CC46E199-B07D-4BF7-AC36-48AAE558540B',
  text: 'Deploy',
})
```

<div class="flex justify-center">
  <VPLink :href="updateStreamDeckWidget(updateStreamDeckWidgetParams)" target="_self">
    更新 Stream Deck 部署按钮
  </VPLink>
</div>

### 更新菜单栏项目

更新菜单栏项目的内容。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'updateMenubarItem' : 'betterTouchTool' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'betterTouchTool.'}}updateMenubarItem({
  uuid: 'CC46E199-B07D-4BF7-AC36-48AAE558540B',
  text: 'Ready',
})
```

<div class="flex justify-center">
  <VPLink :href="updateMenubarItem(updateMenubarItemParams)" target="_self">
    更新菜单栏状态
  </VPLink>
</div>

### 更新触发器

更新指定触发器的配置。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'updateTrigger' : 'betterTouchTool' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'betterTouchTool.'}}updateTrigger({
  uuid: '0E2F7963-E64C-403A-8591-C3725D4D9ADC',
  json: {
    BTTTouchBarButtonName: 'New Name2',
    BTTTriggerConfig: {
      BTTTouchBarItemIconHeight: 30,
    },
  },
})
```

<div class="flex justify-center">
  <VPLink :href="updateTrigger(updateTriggerParams)" target="_self">
    重命名 Touch Bar 触发器
  </VPLink>
</div>

### 添加新触发器

通过触发器 JSON 向 BetterTouchTool 添加新触发器。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'addNewTrigger' : 'betterTouchTool' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'betterTouchTool.'}}addNewTrigger({
  json: {
    BTTTriggerClass: 'BTTTriggerTypeKeyboardShortcut',
    BTTPredefinedActionType: 5,
    BTTPredefinedActionName: 'Mission Control',
    BTTAdditionalConfiguration: '1179658',
    BTTTriggerOnDown: 1,
    BTTEnabled: 1,
    BTTShortcutKeyCode: 2,
    BTTShortcutModifierKeys: 1179648,
    BTTOrder: 3,
  },
})
```

<div class="flex justify-center">
  <VPLink :href="addNewTrigger(addNewTriggerParams)" target="_self">
    添加 Mission Control 快捷键
  </VPLink>
</div>

### 删除触发器

通过 UUID 删除 BetterTouchTool 触发器。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'deleteTrigger' : 'betterTouchTool' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'betterTouchTool.'}}deleteTrigger({
  uuid: '0E2F7963-E64C-403A-8591-C3725D4D9ADC',
})
```

<div class="flex justify-center">
  <VPLink :href="deleteTrigger(triggerUuidParams)" target="_self">
    删除触发器
  </VPLink>
</div>

### 在界面中定位元素

打开 BetterTouchTool 配置界面并通过 UUID 定位到元素。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'revealElementInUi' : 'betterTouchTool' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'betterTouchTool.'}}revealElementInUi({
  uuid: '0E2F7963-E64C-403A-8591-C3725D4D9ADC',
})
```

<div class="flex justify-center">
  <VPLink :href="revealElementInUi(triggerUuidParams)" target="_self">
    在 BetterTouchTool 中显示触发器
  </VPLink>
</div>

### 导出预设

将 BetterTouchTool preset 导出到文件。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'exportPreset' : 'betterTouchTool' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'betterTouchTool.'}}exportPreset({
  name: 'Focus Mode',
  outputPath: '/Users/andi/Desktop/FocusMode.bttpreset',
  compress: 1,
})
```

<div class="flex justify-center">
  <VPLink :href="exportPreset(exportPresetParams)" target="_self">
    导出 Focus Mode Preset
  </VPLink>
</div>

### 导入预设

从文件路径导入 BetterTouchTool preset。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'importPreset' : 'betterTouchTool' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'betterTouchTool.'}}importPreset({
  path: '/Users/andi/Desktop/FocusMode.bttpreset',
})

const keepExistingUrl = {{currentMethod === 'On-Demand' ? '' : 'betterTouchTool.'}}importPreset({
  path: '/Users/andi/Desktop/FocusMode.bttpreset',
  replaceExisting: 0,
})
```

<div class="flex flex-col gap-4 items-center">
  <VPLink :href="importPreset(importPresetParams)" target="_self">
    导入 Focus Mode Preset
  </VPLink>
  <VPLink :href="importPreset(importPresetKeepExistingParams)" target="_self">
    导入但保留已有 Preset
  </VPLink>
</div>

### 运行快捷指令

按名称运行 Apple Shortcuts 快捷指令并等待结果。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'runShortcut' : 'betterTouchTool' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'betterTouchTool.'}}runShortcut({
  shortcutName: 'Start Focus',
  input: 'Protocol Launcher',
})
```

<div class="flex justify-center">
  <VPLink :href="runShortcut(runShortcutParams)" target="_self">
    运行 Start Focus 快捷指令
  </VPLink>
</div>

### 异步运行快捷指令

异步运行 Apple Shortcuts 快捷指令，不等待响应。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'runShortcutAsyncWithoutResponse' : 'betterTouchTool' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'betterTouchTool.'}}runShortcutAsyncWithoutResponse({
  shortcutName: 'Log Break',
  input: '5 minutes',
})
```

<div class="flex justify-center">
  <VPLink :href="runShortcutAsyncWithoutResponse(runShortcutAsyncParams)" target="_self">
    异步记录休息时间
  </VPLink>
</div>

### 设置持久字符串变量

设置一个会在 BetterTouchTool 重新启动后保留的字符串变量。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'setPersistentStringVariable' : 'betterTouchTool' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'betterTouchTool.'}}setPersistentStringVariable({
  variableName: 'currentProject',
  to: 'Protocol Launcher',
})
```

<div class="flex justify-center">
  <VPLink :href="setPersistentStringVariable(setPersistentStringVariableParams)" target="_self">
    保存当前项目
  </VPLink>
</div>

### 设置字符串变量

设置一个仅在 BetterTouchTool 运行期间存在的字符串变量。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'setStringVariable' : 'betterTouchTool' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'betterTouchTool.'}}setStringVariable({
  variableName: 'sessionState',
  to: 'reviewing',
})
```

<div class="flex justify-center">
  <VPLink :href="setStringVariable(setStringVariableParams)" target="_self">
    设置会话状态
  </VPLink>
</div>

### 设置持久数字变量

设置一个会在 BetterTouchTool 重新启动后保留的数字变量。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'setPersistentNumberVariable' : 'betterTouchTool' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'betterTouchTool.'}}setPersistentNumberVariable({
  variableName: 'focusGoalMinutes',
  to: 45,
})
```

<div class="flex justify-center">
  <VPLink :href="setPersistentNumberVariable(setPersistentNumberVariableParams)" target="_self">
    保存专注目标
  </VPLink>
</div>

### 设置数字变量

设置一个仅在 BetterTouchTool 运行期间存在的数字变量。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'setNumberVariable' : 'betterTouchTool' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'betterTouchTool.'}}setNumberVariable({
  variableName: 'currentPomodoro',
  to: 2,
})
```

<div class="flex justify-center">
  <VPLink :href="setNumberVariable(setNumberVariableParams)" target="_self">
    设置当前番茄钟数量
  </VPLink>
</div>

### 通过链接导入预设

通过下载 URL 导入 BetterTouchTool preset，并可使用官方文档中的 unzip 路径。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'importViaUrl' : 'betterTouchTool' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'betterTouchTool.'}}importViaUrl({
  url: 'https://example.com/btt-presets/focus-mode.bttpreset',
})

const unzipUrl = {{currentMethod === 'On-Demand' ? '' : 'betterTouchTool.'}}importViaUrl({
  url: 'https://example.com/btt-presets/focus-mode.zip',
  unzip: true,
})
```

<div class="flex flex-col gap-4 items-center">
  <VPLink :href="importViaUrl(importViaUrlParams)" target="_self">
    通过 URL 导入 Focus Mode
  </VPLink>
  <VPLink :href="importViaUrl(importViaUrlUnzipParams)" target="_self">
    通过 URL 导入压缩的 Focus Mode
  </VPLink>
</div>

### 通过编码触发器数据导入

通过 URL 中的 base64 编码 JSON 字符串导入触发器。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'jsonImport' : 'betterTouchTool' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'betterTouchTool.'}}jsonImport({
  encodedJson: 'BASE64_ENCODED_TRIGGER_JSON',
})

const uncompressUrl = {{currentMethod === 'On-Demand' ? '' : 'betterTouchTool.'}}jsonImport({
  encodedJson: 'BASE64_ENCODED_COMPRESSED_TRIGGER_JSON',
  uncompress: true,
})
```

<div class="flex flex-col gap-4 items-center">
  <VPLink :href="jsonImport(jsonImportParams)" target="_self">
    导入编码后的触发器 JSON
  </VPLink>
  <VPLink :href="jsonImport(jsonImportUncompressParams)" target="_self">
    导入压缩后的触发器 JSON
  </VPLink>
</div>

## 官方文档

- [BetterTouchTool Custom URL Scheme](https://docs.folivora.ai/docs/scripting/url-scheme/)
