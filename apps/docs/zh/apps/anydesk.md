---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import { SelectInstallationMethod } from '../../.vitepress/components';
import {
  connectParams,
  customClientParams,
  customClientMsiParams,
  registerLicenseParams,
  registerLicenseSilentParams,
  registerLicenseCustomClientParams,
  registerLicenseCustomClientMsiParams,
} from '../../.vitepress/constants/anydesk';

const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/anydesk' : 'protocol-launcher');
</script>

# AnyDesk

[AnyDesk](https://anydesk.com) 是一款用于连接远程设备的远程桌面应用。**Protocol Launcher** 允许你生成 AnyDesk 的远程会话和许可证注册 URL Handler。

## 使用

提供两种使用方式：

- 按需加载（通过子路径导入），支持 Tree Shaking，体积更小。
- 全量导入（从根包导入），使用简单，但会包含所有应用模块。

生产环境建议使用按需加载以减小体积；快速脚本或演示可选择全量导入。

<SelectInstallationMethod v-model="currentMethod" />

### 连接

AnyDesk 官方文档给出的标准远程会话 URL 是 `anydesk:<anydesk-id-or-alias>`。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'connect' : 'anydesk' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'anydesk.'}}connect({
  idOrAlias: '{{ connectParams.idOrAlias }}',
})
```

### 连接自定义客户端

AnyDesk 官方文档给出的非 MSI 自定义客户端格式是 `anydesk-<prefix>:<anydesk-id-or-alias>`。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'connectCustomClient' : 'anydesk' }} } from '{{ importPath }}'

const nonMsiUrl = {{currentMethod === 'On-Demand' ? '' : 'anydesk.'}}connectCustomClient({
  prefix: '{{ customClientParams.prefix }}',
  idOrAlias: '{{ customClientParams.idOrAlias }}',
})
```

### 连接 MSI 自定义客户端

AnyDesk 官方文档给出的 MSI 自定义客户端格式是 `anydesk:AnyDesk-<prefix>_msi:<anydesk-id-or-alias>`。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'connectCustomClientMsi' : 'anydesk' }} } from '{{ importPath }}'

const msiUrl = {{currentMethod === 'On-Demand' ? '' : 'anydesk.'}}connectCustomClientMsi({
  prefix: '{{ customClientMsiParams.prefix }}',
  idOrAlias: '{{ customClientMsiParams.idOrAlias }}',
})
```

### 注册许可证

AnyDesk 官方文档给出的许可证注册网址是 `anydesk://register-license?key=LICENSE-KEY`。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'registerLicense' : 'anydesk' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'anydesk.'}}registerLicense({
  key: '{{ registerLicenseParams.key }}',
})

const silentUrl = {{currentMethod === 'On-Demand' ? '' : 'anydesk.'}}registerLicense({
  key: '{{ registerLicenseSilentParams.key }}',
  silent: {{ registerLicenseSilentParams.silent }},
})
```

### 注册自定义客户端许可证

AnyDesk 官方文档给出的非 MSI 自定义客户端许可证注册网址是 `anydesk-<prefix>://register-license?key=LICENSE-KEY`。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'registerLicenseCustomClient' : 'anydesk' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'anydesk.'}}registerLicenseCustomClient({
  prefix: '{{ registerLicenseCustomClientParams.prefix }}',
  key: '{{ registerLicenseCustomClientParams.key }}',
})
```

### 注册 MSI 自定义客户端许可证

AnyDesk 官方文档给出的 MSI 自定义客户端许可证注册网址是 `anydesk:AnyDesk-<prefix>_msi://register-license?key=LICENSE-KEY`。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'registerLicenseCustomClientMsi' : 'anydesk' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'anydesk.'}}registerLicenseCustomClientMsi({
  prefix: '{{ registerLicenseCustomClientMsiParams.prefix }}',
  key: '{{ registerLicenseCustomClientMsiParams.key }}',
})
```

许可证注册网址可以通过传入 `silent: true` 追加 `&silent`。这些示例不会渲染可直接点击的启动按钮，因为官方 Handler 会发起远程会话或提交许可证密钥。详见 [AnyDesk 官方 URL Handler 文档](https://support.anydesk.com/docs/url-handler)。
