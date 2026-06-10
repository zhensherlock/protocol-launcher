---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import { SelectInstallationMethod } from '../../.vitepress/components';
import {
  editParams,
  findParams,
  openSearchParams,
  openSessionParams,
  openTemplateParams,
  openWithMacroParams,
  selectParams,
  viewParams,
} from '../../.vitepress/constants/remote-desktop-manager';

const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/remote-desktop-manager' : 'protocol-launcher');
</script>

# Remote Desktop Manager

[Remote Desktop Manager](https://devolutions.net/remote-desktop-manager/) 是一款远程桌面和连接管理应用。**Protocol Launcher** 允许你生成官方 Remote Desktop Manager `rdm://` protocol handler URL。

## 使用

有两种方式使用这个库：

- 按需从子路径导入，支持 tree-shaking 并保持 bundle 更小。
- 从根包完整导入，适合快速脚本或 demo，但会包含所有 app 模块。

生产构建建议使用按需导入；完整导入适合快速脚本或演示。

<SelectInstallationMethod v-model="currentMethod" />

## 说明

本模块只封装 Devolutions 为 Remote Desktop Manager protocol handler 记录的 action 和参数：`open`、`find`、`edit`、`view`、`OpenWithMacro`、`select`，以及 `DataSource`、`Session`、`Template`、`Host`、`Port`、`Username`、`Password`、`Domain`、`Title`、`Filter`、`Tabpage` 参数。

Devolutions 文档说明 URL 需要 action 和至少一个参数。`DataSource` 与 `Session` 足以打开连接。使用 `Template` 时需要 `Host`。`Tabpage` 在文档中标注为仅适用于 `Select` action，列出的取值是 `Overview`、`Documentation`、`Macros/Scripts/Tools`、`Management Tools`、`Information`、`Attachments`、`Logs` 和 `Recordings`；本模块同时保留 Devolutions 精确给出的 `rdm://open?Filter=RDP&Tabpage=Dashboard` 示例。

示例使用假 ID、保留主机和占位凭据。不要公开真实 workspace ID、session ID、template ID、主机名、用户名、密码、域名或涉及许可证的敏感信息。

## URL 方法

### 打开

打开 Remote Desktop Manager 并填充 Search 字段，与官方示例一致。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'remoteDesktopManager' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'remoteDesktopManager.'}}open({
  filter: '{{ openSearchParams.filter }}',
  tabpage: '{{ openSearchParams.tabpage }}',
})
```

使用 `DataSource` 与 `Session` 打开指定 session。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'remoteDesktopManager' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'remoteDesktopManager.'}}open({
  dataSource: '{{ openSessionParams.dataSource }}',
  session: '{{ openSessionParams.session }}',
})
```

使用 template 和 host 打开，并附带官方记录的连接覆盖参数。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'remoteDesktopManager' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'remoteDesktopManager.'}}open({
  template: '{{ openTemplateParams.template }}',
  host: '{{ openTemplateParams.host }}',
  port: {{ openTemplateParams.port }},
  username: '{{ openTemplateParams.username }}',
  domain: '{{ openTemplateParams.domain }}',
  title: '{{ openTemplateParams.title }}',
})
```

### 查找

按 host 查找 sessions。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'find' : 'remoteDesktopManager' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'remoteDesktopManager.'}}find({
  host: '{{ findParams.host }}',
})
```

### 编辑

编辑指定连接。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'edit' : 'remoteDesktopManager' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'remoteDesktopManager.'}}edit({
  session: '{{ editParams.session }}',
})
```

### 查看

查看指定 entry 的密码。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'view' : 'remoteDesktopManager' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'remoteDesktopManager.'}}view({
  session: '{{ viewParams.session }}',
})
```

### Open With Macro

使用 macro 打开指定 entry。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openWithMacro' : 'remoteDesktopManager' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'remoteDesktopManager.'}}openWithMacro({
  session: '{{ openWithMacroParams.session }}',
})
```

### 选择

在 navigation pane 中选择连接，并聚焦 dashboard tab。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'select' : 'remoteDesktopManager' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'remoteDesktopManager.'}}select({
  session: '{{ selectParams.session }}',
  tabpage: '{{ selectParams.tabpage }}',
})
```

## 生成的 URL

```ts
open(openSearchParams)
// => 'rdm://open?Filter=RDP&Tabpage=Dashboard'

open(openSessionParams)
// => 'rdm://open?DataSource=d4cb6537-0471-4c07-a91b-43a5e1f1f007&Session=f368d57a-d6ac-4b84-a79e-6e4f6cb3d2e1'

open(openTemplateParams)
// => 'rdm://open?Template=b32e4f20-7c1e-4872-b5cb-c893cc2fc272&Host=server.example.com&Port=3389&Username=admin&Domain=EXAMPLE&Title=Support%20Session'

find(findParams)
// => 'rdm://find?Host=server.example.com'

edit(editParams)
// => 'rdm://edit?Session=f368d57a-d6ac-4b84-a79e-6e4f6cb3d2e1'

view(viewParams)
// => 'rdm://view?Session=f368d57a-d6ac-4b84-a79e-6e4f6cb3d2e1'

openWithMacro(openWithMacroParams)
// => 'rdm://OpenWithMacro?Session=f368d57a-d6ac-4b84-a79e-6e4f6cb3d2e1'

select(selectParams)
// => 'rdm://select?Session=f368d57a-d6ac-4b84-a79e-6e4f6cb3d2e1&Tabpage=Overview'
```

这些示例不会渲染可直接点击的启动按钮，因为官方 handler 可能打开 sessions、显示密码或启动 macro 驱动的工作流。

## 官方文档

- [Remote Desktop Manager protocol handler](https://docs.devolutions.net/rdm/kb/knowledge-base/protocol-handler/)
