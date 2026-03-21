---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue'
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue'
import {
  redo,
  swap,
  undo,
  dark,
  light,
  system,
  copyBackground,
  copyForeground,
  copyJson,
  copyText,
  formatHex,
  formatHsb,
  formatHsl,
  formatLab,
  formatOklch,
  formatOpenGL,
  formatRgb,
  hideHistory,
  showHistory,
  toggleHistory,
  pickBackground,
  pickForeground,
  setBackground,
  setForeground,
  systemBackground,
  systemForeground,
  about,
  help,
  preferences,
  resize,
} from 'protocol-launcher/pika'
import { SelectInstallationMethod } from '../../.vitepress/components'
import {
  resizeParams,
  setForegroundParams,
  setBackgroundParams,
  pickForegroundParams,
  pickBackgroundParams,
} from '../../.vitepress/constants/pika'

const currentMethod = ref('On-Demand')
const importPath = computed(() =>
  currentMethod.value === 'On-Demand' ? 'protocol-launcher/pika' : 'protocol-launcher',
)
</script>

# Pika

[Pika](https://superhighfives.com/pika) is a native color picker for macOS. **Protocol Launcher** allows you to generate deep links to control Pika's color picking, formatting, and appearance settings.

## Usage

There are two ways to use this library:

- On-Demand import from subpaths enables tree-shaking and keeps bundles small.
- Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

<SelectInstallationMethod v-model="currentMethod" />

## Actions

### Swap

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'swap' : 'pika' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pika.'}}swap()
```

<div class="flex justify-center">
  <VPLink :href="swap()" target="_self">
    Swap Colors in Pika
  </VPLink>
</div>

### Undo

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'undo' : 'pika' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pika.'}}undo()
```

<div class="flex justify-center">
  <VPLink :href="undo()" target="_self">
    Undo in Pika
  </VPLink>
</div>

### Redo

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'redo' : 'pika' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pika.'}}redo()
```

<div class="flex justify-center">
  <VPLink :href="redo()" target="_self">
    Redo in Pika
  </VPLink>
</div>

## Appearance

### Light

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'light' : 'pika' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pika.'}}light()
```

<div class="flex justify-center">
  <VPLink :href="light()" target="_self">
    Light Appearance in Pika
  </VPLink>
</div>

### Dark

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'dark' : 'pika' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pika.'}}dark()
```

<div class="flex justify-center">
  <VPLink :href="dark()" target="_self">
    Dark Appearance in Pika
  </VPLink>
</div>

### System

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'system' : 'pika' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pika.'}}system()
```

<div class="flex justify-center">
  <VPLink :href="system()" target="_self">
    System Appearance in Pika
  </VPLink>
</div>

## Copy

### Copy Foreground

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'copyForeground' : 'pika' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pika.'}}copyForeground()
```

<div class="flex justify-center">
  <VPLink :href="copyForeground()" target="_self">
    Copy Foreground in Pika
  </VPLink>
</div>

### Copy Background

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'copyBackground' : 'pika' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pika.'}}copyBackground()
```

<div class="flex justify-center">
  <VPLink :href="copyBackground()" target="_self">
    Copy Background in Pika
  </VPLink>
</div>

### Copy Text

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'copyText' : 'pika' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pika.'}}copyText()
```

<div class="flex justify-center">
  <VPLink :href="copyText()" target="_self">
    Copy Text in Pika
  </VPLink>
</div>

### Copy JSON

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'copyJson' : 'pika' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pika.'}}copyJson()
```

<div class="flex justify-center">
  <VPLink :href="copyJson()" target="_self">
    Copy JSON in Pika
  </VPLink>
</div>

## Format

### Format Hex

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'formatHex' : 'pika' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pika.'}}formatHex()
```

<div class="flex justify-center">
  <VPLink :href="formatHex()" target="_self">
    Format Hex in Pika
  </VPLink>
</div>

### Format RGB

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'formatRgb' : 'pika' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pika.'}}formatRgb()
```

<div class="flex justify-center">
  <VPLink :href="formatRgb()" target="_self">
    Format RGB in Pika
  </VPLink>
</div>

### Format HSB

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'formatHsb' : 'pika' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pika.'}}formatHsb()
```

<div class="flex justify-center">
  <VPLink :href="formatHsb()" target="_self">
    Format HSB in Pika
  </VPLink>
</div>

### Format HSL

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'formatHsl' : 'pika' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pika.'}}formatHsl()
```

<div class="flex justify-center">
  <VPLink :href="formatHsl()" target="_self">
    Format HSL in Pika
  </VPLink>
</div>

### Format LAB

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'formatLab' : 'pika' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pika.'}}formatLab()
```

<div class="flex justify-center">
  <VPLink :href="formatLab()" target="_self">
    Format LAB in Pika
  </VPLink>
</div>

### Format OpenGL

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'formatOpenGL' : 'pika' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pika.'}}formatOpenGL()
```

<div class="flex justify-center">
  <VPLink :href="formatOpenGL()" target="_self">
    Format OpenGL in Pika
  </VPLink>
</div>

### Format OKLCH

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'formatOklch' : 'pika' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pika.'}}formatOklch()
```

<div class="flex justify-center">
  <VPLink :href="formatOklch()" target="_self">
    Format OKLCH in Pika
  </VPLink>
</div>

## History

### Show History

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'showHistory' : 'pika' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pika.'}}showHistory()
```

<div class="flex justify-center">
  <VPLink :href="showHistory()" target="_self">
    Show History in Pika
  </VPLink>
</div>

### Hide History

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'hideHistory' : 'pika' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pika.'}}hideHistory()
```

<div class="flex justify-center">
  <VPLink :href="hideHistory()" target="_self">
    Hide History in Pika
  </VPLink>
</div>

### Toggle History

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'toggleHistory' : 'pika' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pika.'}}toggleHistory()
```

<div class="flex justify-center">
  <VPLink :href="toggleHistory()" target="_self">
    Toggle History in Pika
  </VPLink>
</div>

## Pick

### Pick Foreground

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'pickForeground' : 'pika' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pika.'}}pickForeground({
  type: 'hex',
})
```

<div class="flex justify-center">
  <VPLink :href="pickForeground(pickForegroundParams)" target="_self">
    Pick Foreground in Pika
  </VPLink>
</div>

### Pick Background

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'pickBackground' : 'pika' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pika.'}}pickBackground({
  type: 'rgb',
})
```

<div class="flex justify-center">
  <VPLink :href="pickBackground(pickBackgroundParams)" target="_self">
    Pick Background in Pika
  </VPLink>
</div>

## Set Color

### Set Foreground

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'setForeground' : 'pika' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pika.'}}setForeground({
  hex: 'fbbf24',
})
```

<div class="flex justify-center">
  <VPLink :href="setForeground(setForegroundParams)" target="_self">
    Set Foreground in Pika
  </VPLink>
</div>

### Set Background

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'setBackground' : 'pika' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pika.'}}setBackground({
  hex: 'e74661',
})
```

<div class="flex justify-center">
  <VPLink :href="setBackground(setBackgroundParams)" target="_self">
    Set Background in Pika
  </VPLink>
</div>

## System

### System Foreground

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'systemForeground' : 'pika' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pika.'}}systemForeground()
```

<div class="flex justify-center">
  <VPLink :href="systemForeground()" target="_self">
    System Foreground in Pika
  </VPLink>
</div>

### System Background

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'systemBackground' : 'pika' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pika.'}}systemBackground()
```

<div class="flex justify-center">
  <VPLink :href="systemBackground()" target="_self">
    System Background in Pika
  </VPLink>
</div>

## Window

### About

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'about' : 'pika' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pika.'}}about()
```

<div class="flex justify-center">
  <VPLink :href="about()" target="_self">
    About Pika
  </VPLink>
</div>

### Help

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'help' : 'pika' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pika.'}}help()
```

<div class="flex justify-center">
  <VPLink :href="help()" target="_self">
    Help in Pika
  </VPLink>
</div>

### Preferences

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'preferences' : 'pika' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pika.'}}preferences()
```

<div class="flex justify-center">
  <VPLink :href="preferences()" target="_self">
    Preferences in Pika
  </VPLink>
</div>

### Resize

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'resize' : 'pika' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pika.'}}resize({
  width: 480,
  height: 300,
})
```

<div class="flex justify-center">
  <VPLink :href="resize(resizeParams)" target="_self">
    Resize Window in Pika
  </VPLink>
</div>
