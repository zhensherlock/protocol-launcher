---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import { SelectInstallationMethod } from '../../.vitepress/components';
import {
  connectByMacParams,
  connectSosParams,
} from '../../.vitepress/constants/splashtop-business';

const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/splashtop-business' : 'protocol-launcher');
</script>

# Splashtop Business

[Splashtop Business](https://www.splashtop.com/products/business-access) 是 Splashtop 的远程访问和远程支持应用。**Protocol Launcher** 允许你生成 Splashtop Business URI 链接。

## 使用

有两种方式使用此库：

- On-Demand 从子路径导入，有利于 tree-shaking 并保持包体积较小。
- Full Import 从根包导入，写起来更方便，但会包含所有应用模块。

生产构建建议使用 On-Demand；快速脚本或演示可以使用 Full Import。

<SelectInstallationMethod v-model="currentMethod" />

## 说明

Splashtop 官方文档记录的 Business app URI 是 `st-business://com.splashtop.business`，并搭配 `account` 以及 `mac`（远程/主机电脑）或 `sos`（SOS 会话代码）使用。

Splashtop 的桌面快捷方式文章也提到了 Remote Command 和 File Transfer 快捷方式类型，但没有公开用于构造这些会话的 URI 参数。因此本模块不暴露这两类 helper。

示例与测试使用占位值。不要公开真实 Splashtop 账号、MAC 地址、会话代码、凭据或许可证数据。

### 通过 MAC 地址连接

启动 Splashtop Business，并连接到由 MAC 地址标识的远程电脑。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'connectByMac' : 'splashtopBusiness' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'splashtopBusiness.'}}connectByMac({
  account: '{{ connectByMacParams.account }}',
  mac: '{{ connectByMacParams.mac }}',
})
```

### 连接 SOS

使用 SOS 会话代码启动 Splashtop Business。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'connectSos' : 'splashtopBusiness' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'splashtopBusiness.'}}connectSos({
  account: '{{ connectSosParams.account }}',
  sos: '{{ connectSosParams.sos }}',
})
```

## 生成的 URL

```ts
connectByMac({
  account: 'email@example.com',
  mac: 'C04A001C72EC',
})
// => 'st-business://com.splashtop.business?account=email@example.com&mac=C04A001C72EC'

connectSos({
  account: 'url.launch@splashtop',
  sos: '123456789',
})
// => 'st-business://com.splashtop.business?account=url.launch@splashtop&sos=123456789'
```

这些示例不会渲染可直接点击的启动按钮，因为官方 Handler 会启动远程访问或有人值守支持会话。

## 参考资料

- [Splashtop 桌面快捷方式](https://support-splashtopbusiness.splashtop.com/hc/en-us/articles/115001482866-How-to-create-a-desktop-shortcut-to-always-connect-to-a-specific-computer)
- [Splashtop RMM URI 启动](https://support-splashtopbusiness.splashtop.com/hc/en-us/articles/115001642066-Other-RMMs)
- [Splashtop SOS UI 对比](https://support-splashtopbusiness.splashtop.com/hc/en-us/articles/36936249788955-Comparison-of-Legacy-and-New-UI-in-Splashtop-SOS)
