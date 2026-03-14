---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { open, connect } from 'protocol-launcher/jump-desktop';
import { SelectInstallationMethod } from '../../.vitepress/components';
import {
  connectParams,
  connectVNCParams,
  connectFluidParams,
} from '../../.vitepress/constants/jump-desktop';

const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/jump-desktop' : 'protocol-launcher');
</script>

# Jump Desktop

[Jump Desktop](https://jumpdesktop.com) 是一款快速、安全的远程桌面平台，让你可以随时随地无缝连接到任何计算机。它支持 RDP、VNC 和 Jump 专有的 Fluid 协议，以实现最佳性能。**Protocol Launcher** 允许你生成深度链接，使用 Jump Desktop 连接到远程计算机。

## 使用

提供两种使用方式：

- 按需加载（通过子路径导入），支持 Tree Shaking，体积更小。
- 全量导入（从根包导入），使用简单，但会包含所有应用模块。

生产环境建议使用按需加载以减小体积；快速脚本或演示可选择全量导入。

<SelectInstallationMethod v-model="currentMethod" />

### 打开 Jump Desktop

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'jumpDesktop' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'jumpDesktop.'}}open()
```

<div class="flex justify-center">
  <VPLink :href="open()" target="_self">
    打开 Jump Desktop
  </VPLink>
</div>

### 通过 RDP 连接

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'connect' : 'jumpDesktop' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'jumpDesktop.'}}connect({
  host: '192.168.1.100',
  protocol: 'rdp',
  port: 3389,
  username: 'admin',
  password: 'password',
})
```

<div class="flex justify-center">
  <VPLink :href="connect(connectParams)" target="_self">
    通过 RDP 连接
  </VPLink>
</div>

### 通过 VNC 连接

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'connect' : 'jumpDesktop' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'jumpDesktop.'}}connect({
  host: 'server.company.com',
  protocol: 'vnc',
  port: 5903,
  depth: 16,
})
```

<div class="flex justify-center">
  <VPLink :href="connect(connectVNCParams)" target="_self">
    通过 VNC 连接
  </VPLink>
</div>

### 通过 Fluid 连接

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'connect' : 'jumpDesktop' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'jumpDesktop.'}}connect({
  host: 'mycomputer.jumpdesktop.com',
  protocol: 'fluid',
})
```

<div class="flex justify-center">
  <VPLink :href="connect(connectFluidParams)" target="_self">
    通过 Fluid 连接
  </VPLink>
</div>
