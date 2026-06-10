---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import { SelectInstallationMethod } from '../../.vitepress/components';
import {
  avdConnectParams,
  legacyRdpParams,
  subscribeParams,
} from '../../.vitepress/constants/microsoft-remote-desktop';

const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/microsoft-remote-desktop' : 'protocol-launcher');
</script>

# Microsoft Remote Desktop

[Microsoft Remote Desktop](https://learn.microsoft.com/en-us/windows-server/remote/remote-desktop-services/clients/remote-desktop-clients) 是 Microsoft 的远程桌面客户端。**Protocol Launcher** 允许你生成 Microsoft Remote Desktop URI scheme 链接。

## 使用

有两种方式使用这个库：

- 按需从子路径导入，支持 tree-shaking 并保持 bundle 更小。
- 从根包完整导入，适合快速脚本或 demo，但会包含所有 app 模块。

生产构建建议使用按需导入；完整导入适合快速脚本或演示。

<SelectInstallationMethod v-model="currentMethod" />

## 说明

本模块只封装 Microsoft 文档记录的 URI 格式：用于启动 Remote Desktop 客户端的 `ms-rd:`，用于工作区订阅的 `ms-rd:subscribe`，用于 macOS、iOS 和 Android 客户端的 legacy `rdp://` 属性 URL，以及用于 Azure Virtual Desktop 资源的 `ms-avd:connect`。

对于 `ms-avd:connect`，Microsoft 文档说明已发布资源 ID 与用户 UPN 在 Remote Desktop client 和 Windows App 中都是必填。官方示例将它们序列化为 `resourceid` 和 `username`，因此本模块跟随该 URI 形状。`workspaceId` 和 `version` 在 Remote Desktop client 中必填，但 Windows App 不支持。可选的 `env`、`launchpartnerid`、`peeractivityid` 和 `usemultimon` 按官方文档原样暴露。

示例使用保留主机、假 GUID 和占位用户。不要公开真实主机、用户名、资源 ID、工作区 ID、凭据或租户信息。

## URL 方法

### 打开

使用官方记录的 `ms-rd:` URI 打开 Remote Desktop 客户端。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'microsoftRemoteDesktop' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'microsoftRemoteDesktop.'}}open()
```

### 订阅

启动 Remote Desktop，并开始工作区订阅流程。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'subscribe' : 'microsoftRemoteDesktop' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'microsoftRemoteDesktop.'}}subscribe({
  url: '{{ subscribeParams.url }}',
})
```

### Legacy RDP

使用 Microsoft 为 macOS、iOS 和 Android 客户端列出的 RDP 属性构造 legacy `rdp://` URI。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'legacyRdp' : 'microsoftRemoteDesktop' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'microsoftRemoteDesktop.'}}legacyRdp({
  attributes: [
    { name: 'full address', value: '192.0.2.10:3389' },
    { name: 'audiomode', value: 2 },
    { name: 'disable themes', value: 1 },
  ],
})
```

### AVD Connect

连接到 Azure Virtual Desktop 桌面或 RemoteApp 资源。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'avdConnect' : 'microsoftRemoteDesktop' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'microsoftRemoteDesktop.'}}avdConnect({
  workspaceId: '{{ avdConnectParams.workspaceId }}',
  resourceid: '{{ avdConnectParams.resourceid }}',
  username: '{{ avdConnectParams.username }}',
  version: {{ avdConnectParams.version }},
})
```

## 生成的 URL

```ts
open()
// => 'ms-rd:'

subscribe(subscribeParams)
// => 'ms-rd:subscribe?url=https://rdweb.wvd.microsoft.com'

legacyRdp(legacyRdpParams)
// => 'rdp://full%20address=s:192.0.2.10:3389&audiomode=i:2&disable%20themes=i:1'

avdConnect(avdConnectParams)
// => 'ms-avd:connect?workspaceId=1638e073-63b2-46d8-bd84-ea02ea905467&resourceid=a0a0a0a0-bbbb-cccc-dddd-e1e1e1e1e1e1&username=user@contoso.com&version=0'
```

这些示例不会渲染可直接点击的启动按钮，因为官方 handler 可能会启动 Remote Desktop 订阅或连接流程。

## 官方文档

- [Remote Desktop URI scheme](https://learn.microsoft.com/en-us/windows-server/remote/remote-desktop-services/remote-desktop-uri)
- [URI schemes with the Remote Desktop client for Azure Virtual Desktop](https://learn.microsoft.com/en-us/azure/virtual-desktop/uri-scheme)
