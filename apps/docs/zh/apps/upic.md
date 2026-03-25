---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { open, uploadFile } from 'protocol-launcher/upic';
import { SelectInstallationMethod } from '../../.vitepress/components';
import { useAppStore } from '../../.vitepress/stores/app';
import { uploadFileParams } from '../../.vitepress/constants/upic';

const appStore = useAppStore();
const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/upic' : 'protocol-launcher');
</script>

# uPic

[uPic](https://blog.svend.cc/upic/) 是一款简洁的 Mac 图床客户端。**Protocol Launcher** 允许您生成深度链接以在 uPic 中上传文件。

## 使用方式

有两种使用此库的方式：

- 按需导入（On-Demand）：从子路径导入支持 tree-shaking，保持较小的打包体积。
- 完整导入（Full Import）：从根包导入更方便，但会包含所有应用模块。

生产构建建议选择按需导入；快速脚本或演示可以使用完整导入。

<SelectInstallationMethod v-model="currentMethod" />

### 打开 uPic

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'upic' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'upic.'}}open()
```

<div class="flex justify-center">
  <VPLink :href="open()" target="_self">
    打开 uPic
  </VPLink>
</div>

### 上传文件

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'uploadFile' : 'upic' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'upic.'}}uploadFile({
  filePath: '{{ appStore.isWindows ? 'C:\\Users\\Public\\Pictures\\test.png' : '/Users/Public/Pictures/test.png' }}',
})
```

<div class="flex justify-center">
  <VPLink :href="uploadFile(uploadFileParams(appStore.isWindows))" target="_self">
    在 uPic 中上传文件
  </VPLink>
</div>
