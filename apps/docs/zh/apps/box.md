---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import {
  openEmmFile,
  openEmmFolder,
  openEmmSharedLink,
  openFile,
  openFolder,
  openSharedLink,
} from 'protocol-launcher/box';
import { SelectInstallationMethod } from '../../.vitepress/components';

const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/box' : 'protocol-launcher');
</script>

# Box

[Box](https://www.box.com/) 是一款云端文件共享和内容管理应用。**Protocol Launcher** 允许你生成移动端链接，用来打开 Box folder、file 和 shared link。

## 使用

有两种方式可以使用此库：

- 按需从子路径导入，支持 Tree Shaking 并保持包体积较小。
- 从根包完整导入更适合快速脚本或示例，但会包含全部应用模块。

生产构建建议使用按需导入；快速演示可以使用完整导入。

<SelectInstallationMethod v-model="currentMethod" />

## URL 方法

Box 官方移动端 deep linking 文档列出了 Box 和 Box for EMM 中打开 folder、file、shared link 对象的链接。本模块只暴露这些官方记录的形式。

### 打开 Folder

生成官方记录的 URL，在 Box 移动端 app 中打开一个 folder 对象。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openFolder' : 'box' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'box.'}}openFolder({
  id: '123456789',
})
```

<div class="flex justify-center">
  <VPLink :href="openFolder({ id: '123456789' })" target="_self">
    打开 Box Folder
  </VPLink>
</div>

### 打开 File

生成官方记录的 URL，在 Box 移动端 app 中打开一个 file 对象。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openFile' : 'box' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'box.'}}openFile({
  id: '987654321',
})
```

<div class="flex justify-center">
  <VPLink :href="openFile({ id: '987654321' })" target="_self">
    打开 Box File
  </VPLink>
</div>

### 打开 Shared Link

生成官方记录的 URL，在 Box 移动端 app 中打开一个 shared link。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openSharedLink' : 'box' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'box.'}}openSharedLink({
  url: 'https://app.box.com/s/shared-link-id',
})
```

<div class="flex justify-center">
  <VPLink :href="openSharedLink({ url: 'https://app.box.com/s/shared-link-id' })" target="_self">
    打开 Box Shared Link
  </VPLink>
</div>

### 打开 EMM Folder

生成官方记录的 URL，在 Box for EMM 中打开一个 folder 对象。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openEmmFolder' : 'box' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'box.'}}openEmmFolder({
  id: '123456789',
})
```

<div class="flex justify-center">
  <VPLink :href="openEmmFolder({ id: '123456789' })" target="_self">
    打开 Box for EMM Folder
  </VPLink>
</div>

### 打开 EMM File

生成官方记录的 URL，在 Box for EMM 中打开一个 file 对象。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openEmmFile' : 'box' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'box.'}}openEmmFile({
  id: '987654321',
})
```

<div class="flex justify-center">
  <VPLink :href="openEmmFile({ id: '987654321' })" target="_self">
    打开 Box for EMM File
  </VPLink>
</div>

### 打开 EMM Shared Link

生成官方记录的 URL，在 Box for EMM 中打开一个 shared link。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openEmmSharedLink' : 'box' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'box.'}}openEmmSharedLink({
  url: 'https://app.box.com/s/shared-link-id',
})
```

<div class="flex justify-center">
  <VPLink :href="openEmmSharedLink({ url: 'https://app.box.com/s/shared-link-id' })" target="_self">
    打开 Box for EMM Shared Link
  </VPLink>
</div>

## 生成的 URL

```ts
openFolder({ id: '123456789' })
// => 'boxapp://folder?id=123456789'

openFile({ id: '987654321' })
// => 'boxapp://file?id=987654321'

openSharedLink({ url: 'https://app.box.com/s/shared-link-id' })
// => 'boxapp://sharedlink?url=https%3A%2F%2Fapp.box.com%2Fs%2Fshared-link-id'

openEmmFolder({ id: '123456789' })
// => 'boxemm://folder?id=123456789'

openEmmFile({ id: '987654321' })
// => 'boxemm://file?id=987654321'

openEmmSharedLink({ url: 'https://app.box.com/s/shared-link-id' })
// => 'boxemm://sharedlink?url=https%3A%2F%2Fapp.box.com%2Fs%2Fshared-link-id'
```

## 官方文档

- [Box mobile deep linking](https://developer.box.com/guides/mobile/mobile-deep-linking/)
