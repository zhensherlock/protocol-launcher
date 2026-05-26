---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { open, openScript, runScript, exec } from 'protocol-launcher/pythonista';
import { SelectInstallationMethod } from '../../.vitepress/components';
import {
  execParams,
  openICloudPathScriptParams,
  openICloudScriptParams,
  openPythonista2Params,
  openPythonista3Params,
  openScriptParams,
  runICloudScriptParams,
  runScriptParams,
  runScriptWithArgsParams,
  runScriptWithArgvParams,
  runScriptWithPyParams,
  runScriptWithVersionParams,
} from '../../.vitepress/constants/pythonista';

const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/pythonista' : 'protocol-launcher');
</script>

# Pythonista

[Pythonista](https://omz-software.com/pythonista/) 是一款 iOS 上的 Python 开发环境。**Protocol Launcher** 允许你生成深度链接，用来打开 Pythonista、编辑或运行脚本、传入命令行参数、选择 Python 解释器版本，以及执行内联代码。

## 使用方式

提供两种使用方式：

- 按需加载（通过子路径导入），支持 Tree Shaking，体积更小。
- 全量导入（从根包导入），使用简单，但会包含所有应用模块。

生产环境建议使用按需加载以减小体积；快速脚本或演示可选择全量导入。

<SelectInstallationMethod v-model="currentMethod" />

### 打开应用

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'pythonista' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pythonista.'}}open()
```

<div class="flex justify-center">
  <VPLink :href="open()" target="_self">
    打开 Pythonista
  </VPLink>
</div>

### 打开 Pythonista 3

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'pythonista' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pythonista.'}}open({
  scheme: 'pythonista3',
})
```

<div class="flex justify-center">
  <VPLink :href="open(openPythonista3Params)" target="_self">
    打开 Pythonista 3
  </VPLink>
</div>

### 打开 Pythonista 2

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'pythonista' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pythonista.'}}open({
  scheme: 'pythonista2',
})
```

<div class="flex justify-center">
  <VPLink :href="open(openPythonista2Params)" target="_self">
    打开 Pythonista 2
  </VPLink>
</div>

### 打开脚本

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openScript' : 'pythonista' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pythonista.'}}openScript({
  path: 'MyScript.py',
})
```

<div class="flex justify-center">
  <VPLink :href="openScript(openScriptParams)" target="_self">
    在 Pythonista 中打开脚本
  </VPLink>
</div>

### 打开 iCloud 脚本

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openScript' : 'pythonista' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pythonista.'}}openScript({
  path: 'MyScript.py',
  root: 'icloud',
})
```

<div class="flex justify-center">
  <VPLink :href="openScript(openICloudScriptParams)" target="_self">
    打开 iCloud 脚本
  </VPLink>
</div>

### 通过路径打开 iCloud 脚本

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openScript' : 'pythonista' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pythonista.'}}openScript({
  path: 'iCloud/MyScript.py',
})
```

<div class="flex justify-center">
  <VPLink :href="openScript(openICloudPathScriptParams)" target="_self">
    通过路径打开 iCloud 脚本
  </VPLink>
</div>

### 运行脚本

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'runScript' : 'pythonista' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pythonista.'}}runScript({
  path: 'MyScript.py',
})
```

<div class="flex justify-center">
  <VPLink :href="runScript(runScriptParams)" target="_self">
    运行脚本
  </VPLink>
</div>

### 运行 iCloud 脚本

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'runScript' : 'pythonista' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pythonista.'}}runScript({
  path: 'MyScript.py',
  root: 'icloud',
})
```

<div class="flex justify-center">
  <VPLink :href="runScript(runICloudScriptParams)" target="_self">
    运行 iCloud 脚本
  </VPLink>
</div>

### 使用 args 运行脚本

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'runScript' : 'pythonista' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pythonista.'}}runScript({
  path: 'MyScript',
  args: 'foo bar',
})
```

<div class="flex justify-center">
  <VPLink :href="runScript(runScriptWithArgsParams)" target="_self">
    使用 args 运行脚本
  </VPLink>
</div>

### 使用 argv 运行脚本

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'runScript' : 'pythonista' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pythonista.'}}runScript({
  path: 'MyScript',
  argv: ['foo', 'bar'],
})
```

<div class="flex justify-center">
  <VPLink :href="runScript(runScriptWithArgvParams)" target="_self">
    使用 argv 运行脚本
  </VPLink>
</div>

### 使用 version 运行脚本

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'runScript' : 'pythonista' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pythonista.'}}runScript({
  path: 'MyScript.py',
  version: 3,
})
```

<div class="flex justify-center">
  <VPLink :href="runScript(runScriptWithVersionParams)" target="_self">
    使用 version 运行脚本
  </VPLink>
</div>

### 使用 py 运行脚本

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'runScript' : 'pythonista' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pythonista.'}}runScript({
  path: 'MyScript.py',
  py: 3,
})
```

<div class="flex justify-center">
  <VPLink :href="runScript(runScriptWithPyParams)" target="_self">
    使用 py 运行脚本
  </VPLink>
</div>

### 执行代码

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'exec' : 'pythonista' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pythonista.'}}exec({
  code: 'print("Hello from Pythonista")',
})
```

<div class="flex justify-center">
  <VPLink :href="exec(execParams)" target="_self">
    在 Pythonista 中执行代码
  </VPLink>
</div>
