---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { calendar, facetime, findMy, mail, sms, wallet } from 'protocol-launcher/macos';
import { SelectInstallationMethod } from '../../.vitepress/components';
import { useAppStore } from '../../.vitepress/stores/app';
import {
  calendarParams,
  calendarWithLinkParams,
  facetimeParams,
  findMyParams,
  findMyDevicesParams,
  findMyItemsParams,
  findMyFriendsParams,
  mailParams,
  smsParams,
  smsWithPhoneParams,
  walletParams,
} from '../../.vitepress/constants/macos';

const appStore = useAppStore();
const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/macos' : 'protocol-launcher');
</script>

# macOS

[macOS](https://www.apple.com/macos/) 是由苹果公司开发的图形化操作系统，作为首个在商用领域成功的图形用户界面系统，专为 Macintosh 系列电脑设计，采用 XNU 混合内核架构并继承 UNIX 系统特性。**Protocol Launcher** 允许你生成深度链接，用于打开并与 macOS 内置应用程序（如日历、FaceTime、查找、邮件、短信和钱包）进行交互。

## 使用

提供两种使用方式：

- 按需加载（通过子路径导入），支持 Tree Shaking，体积更小。
- 全量导入（从根包导入），使用简单，但会包含所有应用模块。

生产环境建议使用按需加载以减小体积；快速脚本或演示可选择全量导入。

<SelectInstallationMethod v-model="currentMethod" />

### 打开日历

打开日历应用程序，可选择带 webcal 订阅链接。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'calendar' : 'macos' }} } from '{{ importPath }}'

// 打开日历应用
const url = {{currentMethod === 'On-Demand' ? '' : 'macos.'}}calendar()

// 打开带 webcal 订阅的日历
const url = {{currentMethod === 'On-Demand' ? '' : 'macos.'}}calendar({
  link: 'https://p10-calendars.icloud.com/holiday/CN_zh.ics',
})
```

<div class="flex flex-col gap-4 items-center">
  <VPLink :href="calendar(calendarParams)" target="_self">
    打开日历
  </VPLink>
  <VPLink :href="calendar(calendarWithLinkParams)" target="_self">
    打开带订阅的日历
  </VPLink>
</div>

### 打开 FaceTime

打开 FaceTime 应用程序，可选择带电话号码。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'facetime' : 'macos' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'macos.'}}facetime({
  phone: '1234567890',
})
```

<div class="flex justify-center">
  <VPLink :href="facetime(facetimeParams)" target="_self">
    打开 FaceTime
  </VPLink>
</div>

### 打开查找

打开查找应用程序，可选择指定标签页（设备、物品或联系人）。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'findMy' : 'macos' }} } from '{{ importPath }}'

// 打开查找应用
const url = {{currentMethod === 'On-Demand' ? '' : 'macos.'}}findMy()

// 打开设备标签页
const url = {{currentMethod === 'On-Demand' ? '' : 'macos.'}}findMy({
  tab: 'devices',
})

// 打开物品标签页
const url = {{currentMethod === 'On-Demand' ? '' : 'macos.'}}findMy({
  tab: 'items',
})

// 打开联系人标签页
const url = {{currentMethod === 'On-Demand' ? '' : 'macos.'}}findMy({
  tab: 'friends',
})
```

<div class="flex flex-col gap-4 items-center">
  <VPLink :href="findMy(findMyParams)" target="_self">
    打开查找
  </VPLink>
  <VPLink :href="findMy(findMyDevicesParams)" target="_self">
    打开设备标签页
  </VPLink>
  <VPLink :href="findMy(findMyItemsParams)" target="_self">
    打开物品标签页
  </VPLink>
  <VPLink :href="findMy(findMyFriendsParams)" target="_self">
    打开联系人标签页
  </VPLink>
</div>

### 打开邮件

打开邮件应用程序。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'mail' : 'macos' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'macos.'}}mail()
```

<div class="flex justify-center">
  <VPLink :href="mail(mailParams)" target="_self">
    打开邮件
  </VPLink>
</div>

### 打开短信

打开短信应用程序，可选择带电话号码。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'sms' : 'macos' }} } from '{{ importPath }}'

// 打开短信应用
const url = {{currentMethod === 'On-Demand' ? '' : 'macos.'}}sms()

// 打开带电话号码的短信
const url = {{currentMethod === 'On-Demand' ? '' : 'macos.'}}sms({
  phone: '1234567890',
})
```

<div class="flex flex-col gap-4 items-center">
  <VPLink :href="sms(smsParams)" target="_self">
    打开短信
  </VPLink>
  <VPLink :href="sms(smsWithPhoneParams)" target="_self">
    打开带电话号码的短信
  </VPLink>
</div>

### 打开钱包

打开钱包应用程序。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'wallet' : 'macos' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'macos.'}}wallet()
```

<div class="flex justify-center">
  <VPLink :href="wallet(walletParams)" target="_self">
    打开钱包
  </VPLink>
</div>
