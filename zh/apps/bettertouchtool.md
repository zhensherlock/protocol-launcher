---
url: /protocol-launcher/zh/apps/bettertouchtool.md
---

# BetterTouchTool

[BetterTouchTool](https://folivora.ai/) 是一款 macOS 自动化应用，可用于自定义手势、快捷键、Touch Bar 控件、Stream Deck 按钮、菜单栏项目以及其他系统级工作流。

## 使用方式

有两种使用此库的方式：

* 按需导入（On-Demand）：从子路径导入支持 tree-shaking，保持较小的打包体积。
* 完整导入（Full Import）：从根包导入更方便，但会包含所有应用模块。

生产构建建议选择按需导入；快速脚本或演示可以使用完整导入。

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

### 异步触发命名触发器

异步运行命名触发器，不等待响应。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'triggerNamedAsyncWithoutResponse' : 'betterTouchTool' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'betterTouchTool.'}}triggerNamedAsyncWithoutResponse({
  triggerName: 'Refresh Dashboard',
})
```

### 取消延迟触发器执行

取消一个命名触发器的待执行延迟触发。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'cancelDelayedNamedTriggerExecution' : 'betterTouchTool' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'betterTouchTool.'}}cancelDelayedNamedTriggerExecution({
  triggerName: 'Daily Review',
})
```

### 执行触发器已分配动作

执行指定 UUID 触发器的全部已分配动作。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'executeAssignedActionsForTrigger' : 'betterTouchTool' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'betterTouchTool.'}}executeAssignedActionsForTrigger({
  uuid: '0E2F7963-E64C-403A-8591-C3725D4D9ADC',
})
```

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

### 刷新脚本小组件

执行脚本 widget 上分配的全部脚本并更新其内容。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'refreshWidget' : 'betterTouchTool' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'betterTouchTool.'}}refreshWidget({
  uuid: 'CC46E199-B07D-4BF7-AC36-48AAE558540B',
})
```

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

### 更新控制台小组件

更新 Stream Deck widget 的内容。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'updateStreamDeckWidget' : 'betterTouchTool' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'betterTouchTool.'}}updateStreamDeckWidget({
  uuid: 'CC46E199-B07D-4BF7-AC36-48AAE558540B',
  text: 'Deploy',
})
```

### 更新菜单栏项目

更新菜单栏项目的内容。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'updateMenubarItem' : 'betterTouchTool' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'betterTouchTool.'}}updateMenubarItem({
  uuid: 'CC46E199-B07D-4BF7-AC36-48AAE558540B',
  text: 'Ready',
})
```

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

### 删除触发器

通过 UUID 删除 BetterTouchTool 触发器。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'deleteTrigger' : 'betterTouchTool' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'betterTouchTool.'}}deleteTrigger({
  uuid: '0E2F7963-E64C-403A-8591-C3725D4D9ADC',
})
```

### 在界面中定位元素

打开 BetterTouchTool 配置界面并通过 UUID 定位到元素。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'revealElementInUi' : 'betterTouchTool' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'betterTouchTool.'}}revealElementInUi({
  uuid: '0E2F7963-E64C-403A-8591-C3725D4D9ADC',
})
```

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

### 运行快捷指令

按名称运行 Apple Shortcuts 快捷指令并等待结果。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'runShortcut' : 'betterTouchTool' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'betterTouchTool.'}}runShortcut({
  shortcutName: 'Start Focus',
  input: 'Protocol Launcher',
})
```

### 异步运行快捷指令

异步运行 Apple Shortcuts 快捷指令，不等待响应。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'runShortcutAsyncWithoutResponse' : 'betterTouchTool' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'betterTouchTool.'}}runShortcutAsyncWithoutResponse({
  shortcutName: 'Log Break',
  input: '5 minutes',
})
```

### 设置持久字符串变量

设置一个会在 BetterTouchTool 重新启动后保留的字符串变量。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'setPersistentStringVariable' : 'betterTouchTool' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'betterTouchTool.'}}setPersistentStringVariable({
  variableName: 'currentProject',
  to: 'Protocol Launcher',
})
```

### 设置字符串变量

设置一个仅在 BetterTouchTool 运行期间存在的字符串变量。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'setStringVariable' : 'betterTouchTool' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'betterTouchTool.'}}setStringVariable({
  variableName: 'sessionState',
  to: 'reviewing',
})
```

### 设置持久数字变量

设置一个会在 BetterTouchTool 重新启动后保留的数字变量。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'setPersistentNumberVariable' : 'betterTouchTool' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'betterTouchTool.'}}setPersistentNumberVariable({
  variableName: 'focusGoalMinutes',
  to: 45,
})
```

### 设置数字变量

设置一个仅在 BetterTouchTool 运行期间存在的数字变量。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'setNumberVariable' : 'betterTouchTool' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'betterTouchTool.'}}setNumberVariable({
  variableName: 'currentPomodoro',
  to: 2,
})
```

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

## 官方文档

* [BetterTouchTool Custom URL Scheme](https://docs.folivora.ai/docs/scripting/url-scheme/)
