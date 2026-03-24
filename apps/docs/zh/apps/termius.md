---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { open, appHostSharing } from 'protocol-launcher/termius';
import { SelectInstallationMethod } from '../../.vitepress/components';
import { appHostSharingParams } from '../../.vitepress/constants/termius';

const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/termius' : 'protocol-launcher');
</script>

# Termius

[Termius](https://termius.com/) 是一款现代化的 SSH 客户端，专为生产力和协作而设计，支持 macOS、Windows、Linux、iOS 和 Android 平台。**Protocol Launcher** 允许您生成深度链接以打开 Termius 并快速添加新的服务器主机。

## 使用方式

有两种使用此库的方式：

- 按需导入（On-Demand）：从子路径导入支持 tree-shaking，保持较小的打包体积。
- 完整导入（Full Import）：从根包导入更方便，但会包含所有应用模块。

生产构建建议选择按需导入；快速脚本或演示可以使用完整导入。

<SelectInstallationMethod v-model="currentMethod" />

### 打开 Termius

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'termius' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'termius.'}}open()
```

<div class="flex justify-center">
  <VPLink :href="open()" target="_self">
    打开 Termius
  </VPLink>
</div>

### 添加新主机

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'appHostSharing' : 'termius' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'termius.'}}appHostSharing({
  label: 'Production Database',
  ip: '192.168.1.100',
  port: 22,
  username: 'admin',
  os: 'linux',
})
```

<div class="flex justify-center">
  <VPLink :href="appHostSharing(appHostSharingParams)" target="_self">
    在 Termius 中添加新主机
  </VPLink>
</div>
