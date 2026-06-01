---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import {
  help,
  pause,
  resume,
  startBreak,
  startWork,
  stop,
  xCallbackPause,
  xCallbackStartWork,
} from 'protocol-launcher/tadam';
import { SelectInstallationMethod } from '../../.vitepress/components';

const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/tadam' : 'protocol-launcher');
</script>

# Tadam

[Tadam](https://tadamapp.com/) is a macOS Pomodoro timer app. **Protocol Launcher** allows you to generate official URL scheme links for Tadam.

## Usage

There are two ways to use this library:

- On-Demand import from subpaths enables tree-shaking and keeps bundles small.
- Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

<SelectInstallationMethod v-model="currentMethod" />

## Notes

Tadam documents `time` using the same format as the app, with examples such as `10`, `10:30`, `1h`, and `2h5min20sec`. The official page also says `open` and `mini` are enabled when set to `true` or `1`.

Tadam partially supports x-callback-url. Use the `xCallback...` helpers for the documented `tadam://x-callback-url/` prefix, or pass `xSuccess` to the regular helpers when you need the documented `x-success` parameter. `x-error` and other x-callback-url parameters are not supported.

### Start Work Timer

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'startWork' : 'tadam' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'tadam.'}}startWork({
  time: '10min',
})
```

<div class="flex justify-center">
  <VPLink :href="startWork({ time: '10min' })" target="_self">
    Start Work Timer
  </VPLink>
</div>

### Start Work Timer and Open UI

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'startWork' : 'tadam' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'tadam.'}}startWork({
  time: '5:30',
  open: true,
})
```

<div class="flex justify-center">
  <VPLink :href="startWork({ time: '5:30', open: true })" target="_self">
    Start and Open UI
  </VPLink>
</div>

### Start Break Timer

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'startBreak' : 'tadam' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'tadam.'}}startBreak({
  time: '5',
})
```

<div class="flex justify-center">
  <VPLink :href="startBreak({ time: '5' })" target="_self">
    Start Break Timer
  </VPLink>
</div>

### Start Break Timer in Mini UI

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'startBreak' : 'tadam' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'tadam.'}}startBreak({
  time: '10min',
  mini: true,
})
```

<div class="flex justify-center">
  <VPLink :href="startBreak({ time: '10min', mini: true })" target="_self">
    Start Mini Break
  </VPLink>
</div>

### Control Timer

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'pause, resume, stop' : 'tadam' }} } from '{{ importPath }}'

const pauseUrl = {{currentMethod === 'On-Demand' ? '' : 'tadam.'}}pause()
const resumeUrl = {{currentMethod === 'On-Demand' ? '' : 'tadam.'}}resume()
const stopUrl = {{currentMethod === 'On-Demand' ? '' : 'tadam.'}}stop()
```

<div class="flex justify-center gap-3">
  <VPLink :href="pause()" target="_self">Pause</VPLink>
  <VPLink :href="resume()" target="_self">Resume</VPLink>
  <VPLink :href="stop()" target="_self">Stop</VPLink>
</div>

### Open Timer UI and Help

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'help, startBreak, startWork' : 'tadam' }} } from '{{ importPath }}'

const startWorkUiUrl = {{currentMethod === 'On-Demand' ? '' : 'tadam.'}}startWork()
const breakUiUrl = {{currentMethod === 'On-Demand' ? '' : 'tadam.'}}startBreak()
const helpUrl = {{currentMethod === 'On-Demand' ? '' : 'tadam.'}}help()
```

<div class="flex justify-center gap-3">
  <VPLink :href="startWork()" target="_self">Work UI</VPLink>
  <VPLink :href="startBreak()" target="_self">Break UI</VPLink>
  <VPLink :href="help()" target="_self">Help</VPLink>
</div>

### x-callback-url

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'xCallbackStartWork' : 'tadam' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'tadam.'}}xCallbackStartWork({
  time: '10min',
})
```

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'xCallbackPause' : 'tadam' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'tadam.'}}xCallbackPause({
  xSuccess: 'shortcuts://callback',
})
```

## Generated URLs

```ts
startWork({ time: '10min' })
// => 'tadam://start?time=10min'

startWork({ time: '5:30', open: true })
// => 'tadam://start?time=5:30&open=true'

startBreak({ time: '5' })
// => 'tadam://break?time=5'

startBreak({ time: '10min', mini: true })
// => 'tadam://break?time=10min&mini=true'

pause()
// => 'tadam://pause'

resume()
// => 'tadam://resume'

stop()
// => 'tadam://stop'

help()
// => 'tadam://help'

xCallbackStartWork({ time: '10min' })
// => 'tadam://x-callback-url/start?time=10min'

xCallbackPause({ xSuccess: 'shortcuts://callback' })
// => 'tadam://x-callback-url/pause?x-success=shortcuts%3A%2F%2Fcallback'
```

## Official Documentation

- [Tadam URL Schemes](https://tadamapp.com/url-schemes/)
