---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { searchApp, searchClipboard, searchFile, translate } from 'protocol-launcher/hapigo';
import { SelectInstallationMethod } from '../../.vitepress/components';
import { searchAppParams, searchClipboardParams, searchFileParams, translateParams } from '../../.vitepress/constants/hapigo';

const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/hapigo' : 'protocol-launcher');
</script>

# HapiGo

[HapiGo](https://www.hapigo.com/) 是一款 macOS 启动器，可用于快速打开应用和文件。**Protocol Launcher** 可以生成 HapiGo URL scheme 链接。

## 使用

有两种方式可以使用此库：

- 按需从子路径导入，支持 Tree Shaking 并保持包体积较小。
- 从根包完整导入更适合快速脚本或示例，但会包含全部应用模块。

生产构建建议使用按需导入；快速演示可以使用完整导入。

<SelectInstallationMethod v-model="currentMethod" />

## 说明

HapiGo 官方 URL scheme 是 `hapigo://open?extensionID={id}&query={query}`。官方文档说明 `query` 是关键词变量，`extensionID` 是扩展的 id，并且目前开放了四个内置扩展 ID：`APP`、`FILE`、`CLIPBOARD` 和 `TRANSLATE`。本模块只提供这些已文档化 ID 对应的 helper。

当 HapiGo 搜索模式为“混合搜索”时，HapiGo 文档说明 `APP` 和 `FILE` 效果相同，均为发送文本至主搜索。

### 应用搜索

发送文本至 HapiGo 应用搜索。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'searchApp' : 'hapigo' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'hapigo.'}}searchApp({
  query: 'hapigo',
})
```

<div class="flex justify-center">
  <VPLink :href="searchApp(searchAppParams)" target="_self">
    应用搜索
  </VPLink>
</div>

### 文件搜索

发送文本至 HapiGo 文件搜索。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'searchFile' : 'hapigo' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'hapigo.'}}searchFile({
  query: 'pdf',
})
```

<div class="flex justify-center">
  <VPLink :href="searchFile(searchFileParams)" target="_self">
    文件搜索
  </VPLink>
</div>

### 剪贴板搜索

发送文本至 HapiGo 剪贴板搜索。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'searchClipboard' : 'hapigo' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'hapigo.'}}searchClipboard({
  query: 'request',
})
```

<div class="flex justify-center">
  <VPLink :href="searchClipboard(searchClipboardParams)" target="_self">
    剪贴板搜索
  </VPLink>
</div>

### 翻译

发送文本至 HapiGo 翻译。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'translate' : 'hapigo' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'hapigo.'}}translate({
  query: 'app',
})
```

<div class="flex justify-center">
  <VPLink :href="translate(translateParams)" target="_self">
    翻译
  </VPLink>
</div>

## 生成的 URL

```ts
searchApp({ query: 'hapigo' })
// => 'hapigo://open?extensionID=APP&query=hapigo'

searchFile({ query: 'pdf' })
// => 'hapigo://open?extensionID=FILE&query=pdf'

searchClipboard({ query: 'request' })
// => 'hapigo://open?extensionID=CLIPBOARD&query=request'

translate({ query: 'app' })
// => 'hapigo://open?extensionID=TRANSLATE&query=app'
```

## 官方文档

- [HapiGo API & PopClip 插件](https://docs-cn.hapigo.com/adv/urlscheme)
