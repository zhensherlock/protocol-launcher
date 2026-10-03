---
url: /protocol-launcher/apps/pika.md
---

# Pika

[Pika](https://superhighfives.com/pika) is a native color picker for macOS. **Protocol Launcher** allows you to generate deep links to control Pika's color picking, formatting, and appearance settings.

## Usage

There are two ways to use this library:

* On-Demand import from subpaths enables tree-shaking and keeps bundles small.
* Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

`copyForeground` and `copyBackground` accept an optional `type` (hex, rgb, hsb, hsl, lab, opengl, oklch). Omitting it keeps the current output format.

## Actions

### Swap

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'swap' : 'pika' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pika.'}}swap()
```

### Undo

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'undo' : 'pika' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pika.'}}undo()
```

### Redo

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'redo' : 'pika' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pika.'}}redo()
```

## Appearance

### Light

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'light' : 'pika' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pika.'}}light()
```

### Dark

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'dark' : 'pika' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pika.'}}dark()
```

### System

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'system' : 'pika' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pika.'}}system()
```

## Copy

### Copy Foreground

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'copyForeground' : 'pika' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pika.'}}copyForeground()
```

### Copy Background

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'copyBackground' : 'pika' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pika.'}}copyBackground()
```

### Copy Text

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'copyText' : 'pika' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pika.'}}copyText()
```

### Copy JSON

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'copyJson' : 'pika' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pika.'}}copyJson()
```

## Format

### Format Hex

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'formatHex' : 'pika' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pika.'}}formatHex()
```

### Format RGB

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'formatRgb' : 'pika' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pika.'}}formatRgb()
```

### Format HSB

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'formatHsb' : 'pika' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pika.'}}formatHsb()
```

### Format HSL

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'formatHsl' : 'pika' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pika.'}}formatHsl()
```

### Format LAB

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'formatLab' : 'pika' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pika.'}}formatLab()
```

### Format OpenGL

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'formatOpenGL' : 'pika' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pika.'}}formatOpenGL()
```

### Format OKLCH

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'formatOklch' : 'pika' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pika.'}}formatOklch()
```

## History

### Show History

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'showHistory' : 'pika' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pika.'}}showHistory()
```

### Hide History

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'hideHistory' : 'pika' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pika.'}}hideHistory()
```

### Toggle History

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'toggleHistory' : 'pika' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pika.'}}toggleHistory()
```

## Pick

### Pick Foreground

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'pickForeground' : 'pika' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pika.'}}pickForeground({
  type: 'hex',
})
```

### Pick Background

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'pickBackground' : 'pika' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pika.'}}pickBackground({
  type: 'rgb',
})
```

## Set Color

### Set Foreground

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'setForeground' : 'pika' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pika.'}}setForeground({
  hex: 'fbbf24',
})
```

### Set Background

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'setBackground' : 'pika' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pika.'}}setBackground({
  hex: 'e74661',
})
```

## System

### System Foreground

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'systemForeground' : 'pika' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pika.'}}systemForeground()
```

### System Background

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'systemBackground' : 'pika' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pika.'}}systemBackground()
```

## Window

### About

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'about' : 'pika' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pika.'}}about()
```

### Help

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'help' : 'pika' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pika.'}}help()
```

### Preferences

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'preferences' : 'pika' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pika.'}}preferences()
```

### Resize

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'resize' : 'pika' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pika.'}}resize({
  width: 480,
  height: 300,
})
```

### Pick a contrasting color

Pick a contrasting color.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'pickContrast' : 'pika' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pika.'}}pickContrast()
```

### Show compliance information

Show compliance information.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'showCompliance' : 'pika' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pika.'}}showCompliance()
```

### Hide compliance information

Hide compliance information.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'hideCompliance' : 'pika' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pika.'}}hideCompliance()
```

### Toggle compliance information

Toggle compliance information.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'toggleCompliance' : 'pika' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pika.'}}toggleCompliance()
```

### Show the color preview

Show the color preview.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'showPreview' : 'pika' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pika.'}}showPreview()
```

### Hide the color preview

Hide the color preview.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'hidePreview' : 'pika' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pika.'}}hidePreview()
```

### Toggle the color preview

Toggle the color preview.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'togglePreview' : 'pika' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pika.'}}togglePreview()
```

### Open the splash window

Open the splash window.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'splash' : 'pika' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pika.'}}splash()
```

## Official Documentation

* [URL scheme documentation](https://github.com/superhighfives/pika/blob/1.9.0/Pika/Views/HelpData.swift)
