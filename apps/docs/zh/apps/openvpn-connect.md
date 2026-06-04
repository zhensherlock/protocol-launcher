---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import { SelectInstallationMethod } from '../../.vitepress/components';

const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/openvpn-connect' : 'protocol-launcher');
</script>

# OpenVPN Connect

[OpenVPN Connect](https://openvpn.net/client/) 是 OpenVPN 官方 VPN 客户端。**Protocol Launcher** 允许你生成 OpenVPN Connect URL scheme 链接。

## 使用

有两种方式使用此库：

- On-Demand 从子路径导入，有利于 tree-shaking 并保持包体积较小。
- Full Import 从根包导入，写起来更方便，但会包含所有应用模块。

生产构建建议使用 On-Demand；快速脚本或演示可以使用 Full Import。

<SelectInstallationMethod v-model="currentMethod" />

## 说明

OpenVPN 的 Access Server token URL 文档把 token URL 定义为带有连接配置认证 token 的 HTTPS URL。要触发 OpenVPN Connect 的导入流程，需要在 token URL 前加上 `openvpn://import-profile/` 前缀。这些 helper 接收原始的 `https://` token URL，并且只添加这个前缀。

官方文档说明，此客户端导入流程需要 Access Server 2.11.0 或更新版本，以及 OpenVPN Connect 3.3.6 或更新版本。OpenVPN Connect FAQ 还说明应用会安装 `openvpn://` 和 `openvpn-connect://` URL scheme 用于检测是否安装，但没有记录 `openvpn-connect://` 的 action 格式。因此本模块只暴露官方文档记录的 token URL 导入格式。

示例与测试使用占位值。不要公开真实 token URL、凭据、服务器名称或 profile token。

### 导入 Profile

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'importProfile' : 'openvpnConnect' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'openvpnConnect.'}}importProfile({
  url: 'https://vpn.example.com/rest/GetProfileViaToken?token=REPLACE_WITH_TOKEN',
})
```

### 导入 Profile Token URL

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'importProfileTokenUrl' : 'openvpnConnect' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'openvpnConnect.'}}importProfileTokenUrl({
  url: 'https://vpn.example.com/rest/GetProfileViaToken?token=REPLACE_WITH_TOKEN',
})
```

## 生成的 URL

```ts
importProfile({
  url: 'https://vpn.example.com/rest/GetProfileViaToken?token=REPLACE_WITH_TOKEN',
})
// => 'openvpn://import-profile/https://vpn.example.com/rest/GetProfileViaToken?token=REPLACE_WITH_TOKEN'

importProfileTokenUrl({
  url: 'https://vpn.example.com/rest/GetProfileViaToken?token=REPLACE_WITH_TOKEN',
})
// => 'openvpn://import-profile/https://vpn.example.com/rest/GetProfileViaToken?token=REPLACE_WITH_TOKEN'
```

## 参考资料

- [Access Server's Token URL Feature](https://openvpn.net/as-docs/token-url.html)
- [Tutorial: Manage Token URLs from the Command-line Interface](https://openvpn.net/as-docs/tutorials/tutorial--token-url-cli.html)
- [Troubleshooting FAQs for OpenVPN Connect](https://openvpn.net/connect-docs/troubleshooting-faqs.html)
