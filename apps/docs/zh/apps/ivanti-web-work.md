---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { openFullScreenHttpUrl, openFullScreenHttpsUrl, openHttpUrl, openHttpsUrl } from 'protocol-launcher/ivanti-web-work';
import { SelectInstallationMethod } from '../../.vitepress/components';
import { openFullScreenHttpUrlParams, openFullScreenHttpsUrlParams, openHttpUrlParams, openHttpsUrlParams } from '../../.vitepress/constants/ivanti-web-work';

const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/ivanti-web-work' : 'protocol-launcher');
</script>

# Ivanti Web@Work

[Ivanti Web@Work](https://www.ivanti.com/en-gb/products/productivity-apps/web-work) 是 Ivanti 的安全移动浏览器。**Protocol Launcher** 允许你生成 Web@Work URL scheme 链接。

## 使用

有两种方式使用此库：

- On-Demand 从子路径导入，有利于 tree-shaking 并保持包体积较小。
- Full Import 从根包导入，写起来更方便，但会包含所有应用模块。

生产构建建议使用 On-Demand；快速脚本或演示可以使用 Full Import。

<SelectInstallationMethod v-model="currentMethod" />

## 说明

Ivanti 的 Web@Work for iOS 官方指南记录了四个 scheme：`mibrowser://` 用于 HTTP 连接，`mibrowsers://` 用于 HTTPS 连接，`mibrowserf://` 用于使用 HTTP 的全屏 web clip，`mibrowsersf://` 用于使用 HTTPS 的全屏 web clip。

本模块只替换与所选连接类型匹配的标准 URL 前缀，不添加参数，也不暴露未在官方文档中记录的 Web@Work 动作。

### 打开 HTTP URL

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openHttpUrl' : 'ivantiWebWork' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'ivantiWebWork.'}}openHttpUrl({
  url: 'http://www.example.com/intranet',
})
```

<div class="flex justify-center">
  <VPLink :href="openHttpUrl(openHttpUrlParams)" target="_self">
    在 Ivanti Web@Work 中打开 HTTP URL
  </VPLink>
</div>

### 打开 HTTPS URL

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openHttpsUrl' : 'ivantiWebWork' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'ivantiWebWork.'}}openHttpsUrl({
  url: 'https://www.example.com/secure',
})
```

<div class="flex justify-center">
  <VPLink :href="openHttpsUrl(openHttpsUrlParams)" target="_self">
    在 Ivanti Web@Work 中打开 HTTPS URL
  </VPLink>
</div>

### 打开全屏 HTTP URL

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openFullScreenHttpUrl' : 'ivantiWebWork' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'ivantiWebWork.'}}openFullScreenHttpUrl({
  url: 'http://www.example.com/app',
})
```

<div class="flex justify-center">
  <VPLink :href="openFullScreenHttpUrl(openFullScreenHttpUrlParams)" target="_self">
    在 Ivanti Web@Work 中打开全屏 HTTP URL
  </VPLink>
</div>

### 打开全屏 HTTPS URL

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openFullScreenHttpsUrl' : 'ivantiWebWork' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'ivantiWebWork.'}}openFullScreenHttpsUrl({
  url: 'https://www.example.com/app',
})
```

<div class="flex justify-center">
  <VPLink :href="openFullScreenHttpsUrl(openFullScreenHttpsUrlParams)" target="_self">
    在 Ivanti Web@Work 中打开全屏 HTTPS URL
  </VPLink>
</div>

## 生成的 URL

```ts
openHttpUrl({
  url: 'http://www.example.com/intranet',
})
// => 'mibrowser://www.example.com/intranet'

openHttpsUrl({
  url: 'https://www.example.com/secure',
})
// => 'mibrowsers://www.example.com/secure'

openFullScreenHttpUrl({
  url: 'http://www.example.com/app',
})
// => 'mibrowserf://www.example.com/app'

openFullScreenHttpsUrl({
  url: 'https://www.example.com/app',
})
// => 'mibrowsersf://www.example.com/app'
```

## 参考资料

- [Ivanti Web@Work URL schemes](https://help.ivanti.com/mi/help/en_US/WW/2.x.x/gdi/WebAtWorkForiOS/Website_authentication_u.htm)
