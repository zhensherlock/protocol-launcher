---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import {
  call,
  dial,
  open,
  openCallTab,
  openHistory,
  openSettings,
  openSmsTab,
  openTab,
  openVoicemailTab,
  quickSetting,
  sms,
  smsRecipient,
} from 'protocol-launcher/gv-connect';
import { SelectInstallationMethod } from '../../.vitepress/components';

const currentMethod = ref('On-Demand');
const importPath = computed(() =>
  currentMethod.value === 'On-Demand' ? 'protocol-launcher/gv-connect' : 'protocol-launcher',
);
</script>

# GV Connect

[GV Connect](https://gvconnect.com/) 是一款适用于 iPhone、iPod touch 和 iPad 的 Google Voice 客户端。**Protocol Launcher** 可以生成官方 GV Connect URL scheme 链接。

GV Connect 文档说明这些 handlers 区分大小写，并且都需要正确 URL 编码。多数 handlers 还可以添加可选的 `account` 参数，以便在多账号配置中指定账号。

对于 SMS 群发收件人，GV Connect 文档限定最多五个号码，并用逗号分隔。

## 使用方式

有两种使用此库的方式：

- 按需导入（On-Demand）：从子路径导入支持 tree-shaking，保持较小的打包体积。
- 完整导入（Full Import）：从根包导入更方便，但会包含所有应用模块。

生产构建建议选择按需导入；快速脚本或演示可以使用完整导入。

<SelectInstallationMethod v-model="currentMethod" />

### 打开 GV Connect

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'gvConnect' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'gvConnect.'}}open()
```

<div class="flex justify-center">
  <VPLink :href="open()" target="_self">
    打开 GV Connect
  </VPLink>
</div>

### 打开标签页

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openTab, openCallTab, openSmsTab, openVoicemailTab, openHistory, openSettings' : 'gvConnect' }} } from '{{ importPath }}'

const historyUrl = {{currentMethod === 'On-Demand' ? '' : 'gvConnect.'}}openTab({
  tab: 'history',
})

const callTabUrl = {{currentMethod === 'On-Demand' ? '' : 'gvConnect.'}}openCallTab()
const smsTabUrl = {{currentMethod === 'On-Demand' ? '' : 'gvConnect.'}}openSmsTab()
const voicemailUrl = {{currentMethod === 'On-Demand' ? '' : 'gvConnect.'}}openVoicemailTab()
const recentHistoryUrl = {{currentMethod === 'On-Demand' ? '' : 'gvConnect.'}}openHistory()

const settingsUrl = {{currentMethod === 'On-Demand' ? '' : 'gvConnect.'}}openSettings({
  account: 'Work Voice',
})
```

<div class="flex justify-center">
  <VPLink :href="openSettings()" target="_self">
    打开 GV Connect Settings
  </VPLink>
</div>

### 填入拨号号码

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'dial' : 'gvConnect' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'gvConnect.'}}dial({
  number: '+15551234567',
})

const favoritesUrl = {{currentMethod === 'On-Demand' ? '' : 'gvConnect.'}}dial({
  number: 'FAVORITES',
})
```

### 发起呼叫

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'call' : 'gvConnect' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'gvConnect.'}}call({
  number: '+15551234567',
  callMethod: 'DirectCall',
})
```

### 编写 SMS

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'sms, smsRecipient' : 'gvConnect' }} } from '{{ importPath }}'

const recipientOnlyUrl = {{currentMethod === 'On-Demand' ? '' : 'gvConnect.'}}smsRecipient({
  number: '+15551234567',
})

const url = {{currentMethod === 'On-Demand' ? '' : 'gvConnect.'}}sms({
  number: ['+15551234567', '+15557654321'],
  message: 'On my way',
})
```

### Quick Setting

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'quickSetting' : 'gvConnect' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'gvConnect.'}}quickSetting({
  name: 'Office',
  account: 'Work Voice',
})
```

## 生成的 URL

```ts
open()
// => 'gvconnect://'

openTab({ tab: 'history' })
// => 'gvconnect://history'

openCallTab()
// => 'gvconnect://call'

openSmsTab()
// => 'gvconnect://sms'

openVoicemailTab()
// => 'gvconnect://vm'

openHistory()
// => 'gvconnect://history'

openSettings({ account: 'Work Voice' })
// => 'gvconnect://settings?account=Work%20Voice'

dial({ number: '+15551234567' })
// => 'gvconnect://call?%2B15551234567'

call({ number: '+15551234567', callMethod: 'DirectCall' })
// => 'gvconnect://call?number=%2B15551234567&callmethod=DirectCall'

smsRecipient({ number: ['+15551234567', '+15557654321'] })
// => 'gvconnect://sms?%2B15551234567%2C%2B15557654321'

sms({ number: '+15551234567', message: 'On my way' })
// => 'gvconnect://sms?number=%2B15551234567&message=On%20my%20way'

quickSetting({ name: 'Office' })
// => 'gvconnect://quicksetting?Office'
```

## 官方文档

- [GV Connect URL handlers](https://gvconnect.com/#Push)
