---
url: /protocol-launcher/zh/apps/surge.md
---

# Surge

[Surge](https://nssurge.com/) 是一款网络工具箱。**Protocol Launcher** 允许你生成 Surge URL scheme 链接。

## 使用

有两种方式使用此库：

* On-Demand 从子路径导入，有利于 tree-shaking 并保持包体积较小。
* Full Import 从根包导入，写起来更方便，但会包含所有应用模块。

生产构建建议使用 On-Demand；快速脚本或演示可以使用 Full Import。

## 说明

Surge 官方手册记录了四个 iOS URL scheme action：`surge:///start`、`surge:///stop`、`surge:///toggle` 和 `surge:///install-config?url=x`。`install-config` 的 `url` 值必须进行 percent encoding，因此 `installConfig()` 接收原始配置 URL，并序列化为官方的 `url` query 参数。

官方记录的唯一选项是 `autoclose=true`，可用于 `start`、`stop` 和 `toggle`，但不能用于 `install-config`。

Surge 还记录了 v3.4 起支持 x-callback-url，scheme 为 `surge`，并且只有 `start`、`stop`、`toggle` 三个 action。因此本模块只暴露这三个 x-callback action URL，不添加 Surge 页面未列出的 callback query 参数。

### 启动

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'start' : 'surge' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'surge.'}}start()
```

### 启动并自动关闭

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'start' : 'surge' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'surge.'}}start({
  autoclose: true,
})
```

### 停止

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'stop' : 'surge' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'surge.'}}stop()
```

### 切换

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'toggle' : 'surge' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'surge.'}}toggle({
  autoclose: true,
})
```

### 安装配置

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'installConfig' : 'surge' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'surge.'}}installConfig({
  url: 'https://example.com/surge.conf',
})
```

### X-Callback 启动

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'xCallbackStart' : 'surge' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'surge.'}}xCallbackStart()
```

### X-Callback 停止

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'xCallbackStop' : 'surge' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'surge.'}}xCallbackStop()
```

### X-Callback 切换

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'xCallbackToggle' : 'surge' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'surge.'}}xCallbackToggle()
```

## 生成的 URL

```ts
start()
// => 'surge:///start'

start({ autoclose: true })
// => 'surge:///start?autoclose=true'

stop()
// => 'surge:///stop'

toggle({ autoclose: true })
// => 'surge:///toggle?autoclose=true'

installConfig({
  url: 'https://example.com/surge.conf',
})
// => 'surge:///install-config?url=https%3A%2F%2Fexample.com%2Fsurge.conf'

xCallbackStart()
// => 'surge://x-callback-url/start'

xCallbackStop()
// => 'surge://x-callback-url/stop'

xCallbackToggle()
// => 'surge://x-callback-url/toggle'
```

## 官方文档

* [Surge URL Scheme](https://manual.nssurge.com/others/url-scheme.html)
