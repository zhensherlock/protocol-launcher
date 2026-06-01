---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import { SelectInstallationMethod } from '../../.vitepress/components';
import {
  cliCommandParams,
  connectParams,
  legacyAdHocParams,
  legacyConnectParams,
  legacyCredentialParams,
  legacyDisconnectParams,
} from '../../.vitepress/constants/royal-ts';

const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/royal-ts' : 'protocol-launcher');
</script>

# Royal TS

[Royal TS](https://www.royalapps.com/ts/win/features) 是一款远程桌面和服务器管理应用。**Protocol Launcher** 允许你生成 Royal TS 官方 URL Scheme 链接。

## 使用

提供两种使用方式：

- 按需加载（通过子路径导入），支持 Tree Shaking，体积更小。
- 全量导入（从根包导入），使用简单，但会包含所有应用模块。

生产环境建议使用按需加载以减小体积；快速脚本或演示可选择全量导入。

<SelectInstallationMethod v-model="currentMethod" />

## 说明

Royal Apps 官方文档公开了 `rtscli://local/<scope>/<command>?...`，用于执行 Royal TS CLI 命令。`connect` helper 仅覆盖已公开的 `rtscli.exe action connect` 带值参数。`cliCommand` 也只覆盖文档中出现的 `action connect`、`document open` 和 `document close` 命令形态。由于 URI 页面没有公开纯 flag 选项在 URI 中的序列化方式，这里不会暴露这类参数。

Royal TS V6 也公开了 legacy `rtsx://` scheme，用于连接动作。这些示例不会渲染可点击的启动按钮，因为生成的链接可能会发起或断开远程会话。

### CLI 命令

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'cliCommand' : 'royalTs' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'royalTs.'}}cliCommand({
  scope: '{{ cliCommandParams.scope }}',
  command: '{{ cliCommandParams.command }}',
  options: {
    '-n': '{{ cliCommandParams.name }}',
  },
})
```

### 连接

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'connect' : 'royalTs' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'royalTs.'}}connect({
  name: '{{ connectParams.name }}',
})
```

### Legacy 按 URI 连接

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'legacyConnect' : 'royalTs' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'royalTs.'}}legacyConnect({
  protocolIdentifier: '{{ legacyConnectParams.protocolIdentifier }}',
  uri: '{{ legacyConnectParams.uri }}',
  using: '{{ legacyConnectParams.using }}',
})
```

### Legacy 按名称连接

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'legacyConnect' : 'royalTs' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'royalTs.'}}legacyConnect({
  protocolIdentifier: '{{ legacyCredentialParams.protocolIdentifier }}',
  auth: {
    username: '{{ legacyCredentialParams.auth.username }}',
  },
  uri: '{{ legacyCredentialParams.uri }}',
  using: '{{ legacyCredentialParams.using }}',
})
```

### Legacy 断开连接

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'legacyDisconnect' : 'royalTs' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'royalTs.'}}legacyDisconnect({
  protocolIdentifier: '{{ legacyDisconnectParams.protocolIdentifier }}',
  uri: '{{ legacyDisconnectParams.uri }}',
  using: '{{ legacyDisconnectParams.using }}',
})
```

### Legacy Ad Hoc 属性

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'legacyConnect' : 'royalTs' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'royalTs.'}}legacyConnect({
  protocolIdentifier: '{{ legacyAdHocParams.protocolIdentifier }}',
  uri: '{{ legacyAdHocParams.uri }}',
  using: '{{ legacyAdHocParams.using }}',
  action: '{{ legacyAdHocParams.action }}',
  properties: {
    Description: '{{ legacyAdHocParams.properties.Description }}',
    ColorDepth: {{ legacyAdHocParams.properties.ColorDepth }},
  },
})
```

## 生成的 URL

```ts
cliCommand({
  scope: 'action',
  command: 'connect',
  options: { '-n': 'QNAP (SSH)' },
})
// => 'rtscli://local/action/connect?-n=QNAP+(SSH)'

connect({ name: 'QNAP (SSH)' })
// => 'rtscli://local/action/connect?-n=QNAP+(SSH)'

legacyConnect({ protocolIdentifier: 'rdp', uri: '192.168.5.16', using: 'uri' })
// => 'rtsx://rdp%3a%2f%2f192.168.5.16?using=uri'

legacyConnect({
  protocolIdentifier: 'rdp',
  auth: { username: 'admin' },
  uri: 'Web Server 1',
  using: 'name',
})
// => 'rtsx://rdp%3a%2f%2fadmin@Web%20Server%201?using=name'

legacyDisconnect({ protocolIdentifier: 'rdp', uri: 'Web Server 1', using: 'name' })
// => 'rtsx://rdp%3a%2f%2fWeb%20Server%201?using=name&action=disconnect'

legacyConnect({
  protocolIdentifier: 'rdp',
  uri: '192.168.5.16',
  using: 'adhoc',
  action: 'connect',
  properties: {
    Description: 'Connected using URI',
    ColorDepth: 8,
  },
})
// => 'rtsx://rdp%3a%2f%2f192.168.5.16?using=adhoc&action=connect&property_Description=Connected%20using%20URI&property_ColorDepth=8'
```

## 官方文档

- [Royal TS URI Scheme](https://docs.royalapps.com/r2023/royalts/advanced/uri.html)
- [Royal TS Command Line](https://docs.royalapps.com/r2023/royalts/advanced/cli.html)
