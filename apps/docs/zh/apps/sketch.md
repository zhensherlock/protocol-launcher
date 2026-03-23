---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { open, openFile, addLibrary, runPlugin } from 'protocol-launcher/sketch';
import { SelectInstallationMethod } from '../../.vitepress/components';
import { openFileParams, openFileWithLayerParams, addLibraryParams, runPluginParams, runPluginWithQueryParams } from '../../.vitepress/constants/sketch';

const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/sketch' : 'protocol-launcher');
</script>

# Sketch

[Sketch](https://www.sketch.com/) 是一款专为 macOS 设计的矢量图形编辑器，主要用于用户界面和图标设计。**Protocol Launcher** 允许您生成深度链接以在 Sketch 中打开文件、添加库和运行插件。

## 使用方式

有两种使用此库的方式：

- 按需导入（On-Demand）：从子路径导入支持 tree-shaking，保持较小的打包体积。
- 完整导入（Full Import）：从根包导入更方便，但会包含所有应用模块。

生产构建建议选择按需导入；快速脚本或演示可以使用完整导入。

<SelectInstallationMethod v-model="currentMethod" />

### 打开 Sketch

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'sketch' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'sketch.'}}open()
```

<div class="flex justify-center">
  <VPLink :href="open()" target="_self">
    打开 Sketch
  </VPLink>
</div>

### 打开文件

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openFile' : 'sketch' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'sketch.'}}openFile({
  path: '/Users/name/Documents/design.sketch',
})
```

<div class="flex justify-center">
  <VPLink :href="openFile(openFileParams)" target="_self">
    在 Sketch 中打开文件
  </VPLink>
</div>

### 打开文件并聚焦图层和缩放

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openFile' : 'sketch' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'sketch.'}}openFile({
  path: '/Users/name/Documents/design.sketch',
  centerOnLayer: 'layer-123',
  zoom: 2,
})
```

<div class="flex justify-center">
  <VPLink :href="openFile(openFileWithLayerParams)" target="_self">
    在 Sketch 中打开文件并聚焦图层
  </VPLink>
</div>

### 添加库

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'addLibrary' : 'sketch' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'sketch.'}}addLibrary({
  url: 'https://developer.apple.com/design/downloads/sketch.rss',
})
```

<div class="flex justify-center">
  <VPLink :href="addLibrary(addLibraryParams)" target="_self">
    添加库到 Sketch
  </VPLink>
</div>

### 运行插件

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'runPlugin' : 'sketch' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'sketch.'}}runPlugin({
  pluginId: 'com.example.sketch.messenger',
  commandId: 'message.show',
})
```

<div class="flex justify-center">
  <VPLink :href="runPlugin(runPluginParams)" target="_self">
    在 Sketch 中运行插件
  </VPLink>
</div>

### 运行插件并传递参数

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'runPlugin' : 'sketch' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'sketch.'}}runPlugin({
  pluginId: 'com.example.sketch.messenger',
  commandId: 'message.show',
  query: { msg: 'Hello World' },
})
```

<div class="flex justify-center">
  <VPLink :href="runPlugin(runPluginWithQueryParams)" target="_self">
    在 Sketch 中运行插件并传递参数
  </VPLink>
</div>
