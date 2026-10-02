---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import { SelectInstallationMethod } from '../../.vitepress/components';

const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/surge' : 'protocol-launcher');
</script>

# Surge

[Surge](https://nssurge.com/) 是一款网络工具箱。**Protocol Launcher** 允许你生成 Surge URL scheme 链接。

## 使用

有两种方式使用此库：

- On-Demand 从子路径导入，有利于 tree-shaking 并保持包体积较小。
- Full Import 从根包导入，写起来更方便，但会包含所有应用模块。

生产构建建议使用 On-Demand；快速脚本或演示可以使用 Full Import。

<SelectInstallationMethod v-model="currentMethod" />

## 说明

start/stop/toggle 仅支持 iOS。配置/模块安装和许可证激活在 iOS、macOS 上使用 surge；surgeconfig 为 macOS 兼容 scheme（Mac 6.7.0+）。autoclose 仅支持 iOS，不能用于 install-config。iOS 激活许可证要求没有有效的非试用许可证；macOS 上须先打开激活窗口。当前参考列出 start/stop/toggle 的回调支持。

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


### 安装模块

通过 URL 安装模块，地址会进行百分号编码；macOS 兼容入口可以指定 scheme: surgeconfig。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'installModule' : 'surge' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'surge.'}}installModule({
  'url': 'https://example.com/example.sgmodule'
})
```

### 激活邮箱许可证

预填邮箱许可证激活信息。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'emailLicense' : 'surge' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'surge.'}}emailLicense({
  'email': 'name@example.com',
  'key': 'REPLACE_WITH_LICENSE_KEY'
})
```

### 激活团队许可证

预填团队许可证激活信息。enterprise-license 是标准入口；team-license 是应用端接受的别名。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'enterpriseLicense' : 'surge' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'surge.'}}enterpriseLicense({
  'companyID': 'REPLACE_WITH_COMPANY_ID',
  'userID': 'REPLACE_WITH_USER_ID',
  'passcode': 'REPLACE_WITH_PASSCODE'
})
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

- [Surge URL Scheme](https://manual.nssurge.com/tools/url-scheme.html)

## 官方文档

- [URL scheme](https://manual.nssurge.com/tools/url-scheme.html)
