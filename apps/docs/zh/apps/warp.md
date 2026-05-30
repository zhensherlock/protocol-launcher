---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { launchConfiguration, newTab, newWindow, tabConfig } from 'protocol-launcher/warp';
import { SelectInstallationMethod } from '../../.vitepress/components';
import {
  launchConfigurationParams,
  newTabParams,
  newWindowParams,
  tabConfigNewWindowParams,
} from '../../.vitepress/constants/warp';

const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/warp' : 'protocol-launcher');
</script>

# Warp

[Warp](https://www.warp.dev/) 是一款面向开发者的现代终端。**Protocol Launcher** 允许你生成深度链接，用于打开新的 Warp 窗口、标签页、Launch Configuration 和 Tab Config。

## 使用

提供两种使用方式：

- 按需加载（通过子路径导入），支持 Tree Shaking，体积更小。
- 全量导入（从根包导入），使用简单，但会包含所有应用模块。

生产环境建议使用按需加载以减小体积；快速脚本或演示可选择全量导入。

<SelectInstallationMethod v-model="currentMethod" />

### 打开新窗口

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'newWindow' : 'warp' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'warp.'}}newWindow({
  path: 'path_to_folder',
})
```

<div class="flex justify-center">
  <VPLink :href="newWindow(newWindowParams)" target="_self">
    打开新的 Warp 窗口
  </VPLink>
</div>

### 打开新标签页

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'newTab' : 'warp' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'warp.'}}newTab({
  path: 'path_to_folder',
})
```

<div class="flex justify-center">
  <VPLink :href="newTab(newTabParams)" target="_self">
    打开新的 Warp 标签页
  </VPLink>
</div>

### 打开 Launch Configuration

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'launchConfiguration' : 'warp' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'warp.'}}launchConfiguration({
  path: 'launch_configuration_path',
})
```

<div class="flex justify-center">
  <VPLink :href="launchConfiguration(launchConfigurationParams)" target="_self">
    打开 Launch Configuration
  </VPLink>
</div>

### 打开 Tab Config

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'tabConfig' : 'warp' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'warp.'}}tabConfig({
  name: 'my_tab',
  newWindow: true,
})
```

<div class="flex justify-center">
  <VPLink :href="tabConfig(tabConfigNewWindowParams)" target="_self">
    打开 Tab Config
  </VPLink>
</div>

### Warp Preview

Warp 官方 URI scheme 文档说明 Warp Preview 使用 `warppreview://` scheme。传入 `scheme: 'warppreview'` 即可让同一组 helper 指向 Warp Preview。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'newTab' : 'warp' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'warp.'}}newTab({
  path: 'path_to_folder',
  scheme: 'warppreview',
})
```

[Warp URI Scheme 官方文档](https://docs.warp.dev/terminal/more-features/uri-scheme)
