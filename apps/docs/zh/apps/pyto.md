---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { open, runCode } from 'protocol-launcher/pyto';
import { SelectInstallationMethod } from '../../.vitepress/components';
import { runCodeParams, runCodeWithXSuccessParams } from '../../.vitepress/constants/pyto';

const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/pyto' : 'protocol-launcher');
</script>

# Pyto

[Pyto](https://pyto.readthedocs.io/) 是一款开源应用，可在 iPad 或 iPhone 上本地编写和运行 Python 代码。**Protocol Launcher** 允许你使用 x-callback URL 生成深度链接，以便在 Pyto 中运行 Python 代码。

## 使用方式

提供两种使用方式：

- 按需加载（通过子路径导入），支持 Tree Shaking，体积更小。
- 全量导入（从根包导入），使用简单，但会包含所有应用模块。

生产环境建议使用按需加载以减小体积；快速脚本或演示可选择全量导入。

<SelectInstallationMethod v-model="currentMethod" />

### 打开应用

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'pyto' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pyto.'}}open()
```

<div class="flex justify-center">
  <VPLink :href="open()" target="_self">
    打开 Pyto
  </VPLink>
</div>

### 运行代码

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'runCode' : 'pyto' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pyto.'}}runCode({
  code: 'import sys; print(sys.version)',
})
```

<div class="flex justify-center">
  <VPLink :href="runCode(runCodeParams)" target="_self">
    在 Pyto 中运行 Python 代码
  </VPLink>
</div>

### 运行代码带回调

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'runCode' : 'pyto' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pyto.'}}runCode({
  code: 'import sys; print(sys.version)',
  xSuccess: 'shortcuts://run-shortcut?name=HandleResult',
})
```

<div class="flex justify-center">
  <VPLink :href="runCode(runCodeWithXSuccessParams)" target="_self">
    运行代码带成功回调
  </VPLink>
</div>
