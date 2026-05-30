---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import { SelectInstallationMethod } from '../../.vitepress/components';

const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/hiddify' : 'protocol-launcher');
</script>

# Hiddify

[Hiddify](https://hiddify.com/) 是一款代理与 VPN 客户端。**Protocol Launcher** 允许你生成 Hiddify URL scheme 链接。

## 使用

有两种方式使用此库：

- On-Demand 从子路径导入，有利于 tree-shaking 并保持包体积较小。
- Full Import 从根包导入，写起来更方便，但会包含所有应用模块。

生产构建建议使用 On-Demand；快速脚本或演示可以使用 Full Import。

<SelectInstallationMethod v-model="currentMethod" />

## 说明

Hiddify 官方文档记录的当前 URL scheme 是 `hiddify://import/<sublink>#name`。`<sublink>` 可以是 Clash link、Singbox link、v2ray sublink，或单个代理链接。旧的 `install-sub`、`install-config` 和 `install-proxy` URL 形式已在 Hiddify 文档中标记为 deprecated，因此本模块不提供这些 helper。

Hiddify 的 Profile Title 部分把 URL fragment，也就是 `#` 后面的内容，列为导入配置标题的来源之一。示例与测试应使用占位或合成值。不要公开真实订阅 token、代理密码或私有服务器名称。

### 导入配置

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'importConfig' : 'hiddify' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'hiddify.'}}importConfig({
  sublink: 'https://hiddify.com/autosub',
  name: 'name',
})
```

### 导入订阅 URL

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'importSubscriptionUrl' : 'hiddify' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'hiddify.'}}importSubscriptionUrl({
  sublink: 'https://example.com/subscriptions/v2ray.txt',
})
```

### 导入代理 URL

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'importProxyUrl' : 'hiddify' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'hiddify.'}}importProxyUrl({
  sublink: 'trojan://REPLACE_WITH_PASSWORD@example.com:443#name',
})
```

## 生成的 URL

```ts
importConfig({
  sublink: 'https://hiddify.com/autosub',
  name: 'name',
})
// => 'hiddify://import/https://hiddify.com/autosub#name'

importSubscriptionUrl({
  sublink: 'https://example.com/subscriptions/v2ray.txt',
})
// => 'hiddify://import/https://example.com/subscriptions/v2ray.txt'

importProxyUrl({
  sublink: 'trojan://REPLACE_WITH_PASSWORD@example.com:443#name',
})
// => 'hiddify://import/trojan://REPLACE_WITH_PASSWORD@example.com:443#name'
```

## 参考资料

- [Hiddify URL Scheme](https://hiddify.com/app/URL-Scheme/)
