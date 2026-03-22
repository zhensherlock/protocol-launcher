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

AppleScript is a scripting language created by Apple that allows you to control scriptable macOS applications and parts of the operating system itself. You can write scripts to automate repetitive tasks, combine features from different applications, and build complex workflows. **Protocol Launcher** provides utilities to generate and execute AppleScripts.

## Usage

There are two ways to use this library:

- On-Demand import from subpaths enables tree-shaking and keeps bundles small.
- Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

<SelectInstallationMethod v-model="currentMethod" />

### Open Apple Script Editor

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'appleScript' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'appleScript.'}}open()
```

<div class="flex justify-center">
  <VPLink :href="open()" target="_self">
    Open Apple Script Editor
  </VPLink>
</div>

### Add Script

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'addScript' : 'appleScript' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'appleScript.'}}addScript({
  script: 'display dialog "Hello, World!"'
})
```

<div class="flex justify-center">
  <VPLink :href="addScript(addScriptParams)" target="_self">
    OpenOpen in Apple Script Editor
  </VPLink>
</div>

### Smart Note Capture

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
    Open in Apple Script Editor
  </VPLink>
</div>
