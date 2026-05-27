---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { openContact, openContactCallback, openWebContact } from 'protocol-launcher/cloze';
import { SelectInstallationMethod } from '../../.vitepress/components';
import {
  callbackContactParams,
  emailContactParams,
  socialContactParams,
  webFullContactParams,
  webPathContactParams,
} from '../../.vitepress/constants/cloze';

const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/cloze' : 'protocol-launcher');
</script>

# Cloze

[Cloze](https://www.cloze.com/) 是一款关系管理和 CRM 应用。**Protocol Launcher** 允许你为 Cloze 生成深度链接。

## 使用方式

提供两种使用方式：

- 按需加载（通过子路径导入），支持 Tree Shaking，体积更小。
- 全量导入（从根包导入），使用简单，但会包含所有应用模块。

生产环境建议使用按需加载以减小体积；快速脚本或演示可选择全量导入。

<SelectInstallationMethod v-model="currentMethod" />

## URL 方法

以下 helper 对应 Cloze 官方 URL scheme 文档中通过 identifier 打开个人或公司资料的形式。Cloze 官方文档列出的 identifier 包括邮箱、电话号码、公司域名、`twitter:cloze` 这类社交账号，以及 `lead.salesforce.com:9425897598` 这类第三方应用 ID。

### 打开联系人

使用简化的 iOS URL 形式 `cloze://contact/<identifier>` 打开联系人资料。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openContact' : 'cloze' }} } from '{{ importPath }}'

const emailUrl = {{currentMethod === 'On-Demand' ? '' : 'cloze.'}}openContact({
  identifier: 'someone@company.com',
})

const socialUrl = {{currentMethod === 'On-Demand' ? '' : 'cloze.'}}openContact({
  identifier: 'twitter:cloze',
})
```

<div class="flex justify-center">
  <VPLink :href="openContact(emailContactParams)" target="_self">
    在 Cloze 中打开联系人
  </VPLink>
</div>

### 通过 x-callback-url 打开联系人

使用 Cloze 的 x-callback-url 形式 `cloze://x-callback-url/contact/<identifier>` 打开联系人资料。Cloze 官方文档只列出可选的 `x-success` 回调 URL；此 helper 使用 `xSuccess` 接收，并序列化为 `x-success`。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openContactCallback' : 'cloze' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'cloze.'}}openContactCallback({
  identifier: 'someone@company.com',
  xSuccess: 'myapp://back',
})
```

<div class="flex justify-center">
  <VPLink :href="openContactCallback(callbackContactParams)" target="_self">
    使用回调打开联系人
  </VPLink>
</div>

### 打开网页版联系人

使用 Cloze 官方文档中的 web URL 形式打开资料。默认生成 hash 形式。Cloze 也在邮箱和电话号码查询示例中列出了 `/in/contact/<identifier>` 形式；需要该形式时使用 `syntax: 'path'`。`full` 对应 Cloze 的 `full` 标记，`back` 对应全屏资料页上的返回按钮 URL。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openWebContact' : 'cloze' }} } from '{{ importPath }}'

const webUrl = {{currentMethod === 'On-Demand' ? '' : 'cloze.'}}openWebContact({
  identifier: 'someone@company.com',
})

const pathUrl = {{currentMethod === 'On-Demand' ? '' : 'cloze.'}}openWebContact({
  identifier: 'someone@company.com',
  syntax: 'path',
})

const fullScreenUrl = {{currentMethod === 'On-Demand' ? '' : 'cloze.'}}openWebContact({
  identifier: 'someone@company.com',
  full: true,
  back: 'http://www.evernote.com',
})
```

<div class="flex flex-col gap-4 items-center">
  <VPLink :href="openWebContact(socialContactParams)" target="_self">
    打开网页版资料
  </VPLink>
  <VPLink :href="openWebContact(webPathContactParams)" target="_self">
    打开网页版路径资料
  </VPLink>
  <VPLink :href="openWebContact(webFullContactParams)" target="_self">
    打开全屏网页版资料
  </VPLink>
</div>

## 官方文档

- [Cloze URL Scheme and x-callback URLs](https://help.cloze.com/article/2197-cloze-url-scheme-x-callback-urls)
