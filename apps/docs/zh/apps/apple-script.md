---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { open, addScript } from 'protocol-launcher/apple-script';
import { SelectInstallationMethod } from '../../.vitepress/components';
import {
  addScriptParams,
  smartNoteCapture,
} from '../../.vitepress/constants/apple-script';

const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/apple-script' : 'protocol-launcher');
</script>

# Apple Script Editor

AppleScript 是由 Apple 创建的一种脚本语言，它允许您控制可编写脚本的 macOS 应用程序以及操作系统本身的部分功能。您可以编写脚本来自动执行重复性任务、组合来自不同应用程序的功能以及构建复杂的工作流程。**Protocol Launcher** 提供了生成和执行 AppleScript 的实用工具。

## 使用

提供两种使用方式：

- 按需加载（通过子路径导入），支持 Tree Shaking，体积更小。
- 全量导入（从根包导入），使用简单，但会包含所有应用模块。

生产环境建议使用按需加载以减小体积；快速脚本或演示可选择全量导入。

<SelectInstallationMethod v-model="currentMethod" />

### 打开 Apple Script Editor

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'appleScript' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'appleScript.'}}open()
```

<div class="flex justify-center">
  <VPLink :href="open()" target="_self">
    打开 Apple Script Editor
  </VPLink>
</div>

### 添加脚本

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'addScript' : 'appleScript' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'appleScript.'}}addScript({
  script: 'display dialog "Hello, World!"'
})
```

<div class="flex justify-center">
  <VPLink :href="addScript(addScriptParams)" target="_self">
    在 Apple Script Editor 中打开
  </VPLink>
</div>

### 智能笔记捕捉器

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'addScript' : 'appleScript' }} } from '{{ importPath }}'

const script = `-- Smart Note Capture

-- Get selected text (universal: copy from clipboard)
set oldClipboard to the clipboard
tell application "System Events"
	keystroke "c" using command down
	delay 0.3
end tell

set selectedText to the clipboard

-- If no text is selected
if selectedText is "" then
	display dialog "No selected text detected" buttons {"OK"} default button 1
	return
end if

-- Ask user for a note
set userNote to text returned of (display dialog "Enter your note:" default answer "")

-- Get current time
set nowDate to current date
set timeStr to (year of nowDate as string) & "-" & (month of nowDate as integer) & "-" & (day of nowDate as integer)

-- Get frontmost app name
tell application "System Events"
	set frontApp to name of first application process whose frontmost is true
end tell

-- Generate Markdown content
set mdContent to "# Captured Note

"
set mdContent to mdContent & "**Time:** " & timeStr & "
"
set mdContent to mdContent & "**Source App:** " & frontApp & "

"
set mdContent to mdContent & "## Selected Text
> " & selectedText & "

"
set mdContent to mdContent & "## My Note
" & userNote & "

"

-- File path (Desktop)
set fileName to "note_" & (do shell script "date +%s") & ".md"
set filePath to (path to desktop folder as text) & fileName

-- Write file
set posixPath to POSIX path of filePath
do shell script "echo " & quoted form of mdContent & " > " & quoted form of posixPath

-- Open with Safari (simple preview)
tell application "Safari"
	activate
	open location "file://" & POSIX path of filePath
end tell

-- Restore clipboard
set the clipboard to oldClipboard

display notification "Note saved to Desktop" with title "Smart Capture"
`

const url = {{currentMethod === 'On-Demand' ? '' : 'appleScript.'}}addScript({ script })
```

<div class="flex justify-center">
  <VPLink :href="addScript(smartNoteCapture)" target="_self">
    在 Apple Script Editor 中打开
  </VPLink>
</div>
