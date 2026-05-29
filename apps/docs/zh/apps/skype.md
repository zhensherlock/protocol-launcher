---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { open, implicitCall, call, videoCall, chat } from 'protocol-launcher/skype';
import { SelectInstallationMethod } from '../../.vitepress/components';
import {
  implicitCallParams,
  callParams,
  videoCallParams,
  chatParams,
} from '../../.vitepress/constants/skype';

const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/skype' : 'protocol-launcher');
</script>

# Skype

[Skype](https://www.skype.com/) 是一款通话和消息应用。**Protocol Launcher** 可以生成 Skype URI 链接，用于打开 Skype、发起通话和打开聊天。

## 用法

有两种方式使用此库：

- On-Demand 从子路径导入，有利于 tree-shaking 并保持包体积较小。
- Full Import 从根包导入，写起来更方便，但会包含所有应用模块。

生产构建建议使用 On-Demand；快速脚本或演示可以使用 Full Import。

<SelectInstallationMethod v-model="currentMethod" />

## 说明

Microsoft 文档中的 Skype URI 使用 `skype:` scheme。多个通话或聊天参与者使用分号分隔。音频通话参与者可以是 Skype Name 或电话号码；视频通话和聊天使用 Skype Name。

官方 `topic` 参数仅用于会议通话和多人聊天，本库会对该参数进行 URL 编码。

### 打开 Skype

启动 Skype 或切换焦点到 Skype 客户端。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'skype' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'skype.'}}open()
```

<div class="flex justify-center">
  <VPLink :href="open()" target="_self">
    打开 Skype
  </VPLink>
</div>

### 隐式音频通话

使用隐式 Skype URI 形式发起音频通话。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'implicitCall' : 'skype' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'skype.'}}implicitCall({
  participants: 'skype.test.user.1',
})
```

<div class="flex justify-center">
  <VPLink :href="implicitCall(implicitCallParams)" target="_self">
    发起隐式音频通话
  </VPLink>
</div>

### 音频通话

发起显式音频通话。官方 `topic` 参数仅适用于会议通话。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'call' : 'skype' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'skype.'}}call({
  participants: ['skype.test.user.1', 'skype.test.user.2', '+16505550123'],
  topic: 'Geek Conspiracy',
})
```

<div class="flex justify-center">
  <VPLink :href="call(callParams)" target="_self">
    发起音频通话
  </VPLink>
</div>

### 视频通话

发起 Skype 通话并开启视频。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'videoCall' : 'skype' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'skype.'}}videoCall({
  participants: 'skype.test.user.1',
})
```

<div class="flex justify-center">
  <VPLink :href="videoCall(videoCallParams)" target="_self">
    发起视频通话
  </VPLink>
</div>

### 聊天

打开或创建 Skype 聊天。官方 `topic` 参数仅适用于多人聊天。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'chat' : 'skype' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'skype.'}}chat({
  participants: ['skype.test.user.1', 'skype.test.user.2'],
  topic: 'Quantum Mechanics 101',
})
```

<div class="flex justify-center">
  <VPLink :href="chat(chatParams)" target="_self">
    在 Skype 中打开聊天
  </VPLink>
</div>

## 官方文档

- [Skype URI API reference](https://learn.microsoft.com/en-us/skype-sdk/skypeuris/skypeuriapireference)
