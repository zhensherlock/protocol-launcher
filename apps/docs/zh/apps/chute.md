---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import { SelectInstallationMethod } from '../../.vitepress/components';

const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/chute' : 'protocol-launcher');
</script>

# Chute

[Chute](https://www.chute.life/) 是一款高级网络工具箱。**Protocol Launcher** 允许你生成用于启动、停止和切换 Chute 的 URL scheme 链接。

## 使用

有两种方式使用此库：

- On-Demand 从子路径导入，有利于 tree-shaking 并保持包体积较小。
- Full Import 从根包导入，写起来更方便，但会包含所有应用模块。

生产构建建议使用 On-Demand；快速脚本或演示可以使用 Full Import。

<SelectInstallationMethod v-model="currentMethod" />

## 说明

Chute 官方手册记录了从 1.0.2 起支持的三组 iOS URL scheme action：`start | connect | on`、`stop | disconnect | off` 和 `toggle | switch`。Protocol Launcher 为每组中的第一个 action 暴露 helper：`start`、`stop` 和 `toggle`。

官方记录的唯一选项是 `autoclose=true`，用于在 action 完成后自动关闭 Chute。

Chute 还记录了 x-callback-url 支持，scheme 为 `chute`，并且只有 `start`、`stop`、`toggle` 三个 action。官方示例使用 `x-success` 和 `x-error`，因此本模块只暴露这两个 callback query 参数。

### 启动

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'start' : 'chute' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'chute.'}}start()
```

### 启动并自动关闭

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'start' : 'chute' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'chute.'}}start({
  autoclose: true,
})
```

### 停止

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'stop' : 'chute' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'chute.'}}stop()
```

### 切换

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'toggle' : 'chute' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'chute.'}}toggle({
  autoclose: true,
})
```

### X-Callback 启动

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'xCallbackStart' : 'chute' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'chute.'}}xCallbackStart({
  xSuccess: 'sms://',
  xError: 'tel://',
})
```

### X-Callback 停止

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'xCallbackStop' : 'chute' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'chute.'}}xCallbackStop({
  xSuccess: 'sms://',
  xError: 'tel://',
})
```

### X-Callback 切换

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'xCallbackToggle' : 'chute' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'chute.'}}xCallbackToggle({
  xSuccess: 'sms://',
  xError: 'tel://',
})
```

## 生成的 URL

```ts
start()
// => 'chute:///start'

start({ autoclose: true })
// => 'chute:///start?autoclose=true'

stop()
// => 'chute:///stop'

stop({ autoclose: true })
// => 'chute:///stop?autoclose=true'

toggle({ autoclose: true })
// => 'chute:///toggle?autoclose=true'

xCallbackStart({
  xSuccess: 'sms://',
  xError: 'tel://',
})
// => 'chute://x-callback-url/start?x-success=sms%3A%2F%2F&x-error=tel%3A%2F%2F'

xCallbackStop()
// => 'chute://x-callback-url/stop'

xCallbackToggle()
// => 'chute://x-callback-url/toggle'
```

## 官方文档

- [Chute URL Scheme](https://manual.chute.life/other/url-scheme.html)
