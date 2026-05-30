---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { compose } from 'protocol-launcher/airmail';
import { SelectInstallationMethod } from '../../.vitepress/components';
import { composeParams } from '../../.vitepress/constants/airmail';

const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/airmail' : 'protocol-launcher');
</script>

# Airmail

[Airmail](https://airmailapp.com/) 是一款邮件客户端。**Protocol Launcher** 允许您生成官方 Airmail iOS URL scheme 链接，用于撰写和发送邮件。

## 使用方式

有两种使用此库的方式：

- 按需导入（On-Demand）：从子路径导入支持 tree-shaking，保持较小的打包体积。
- 完整导入（Full Import）：从根包导入更方便，但会包含所有应用模块。

生产构建建议选择按需导入；快速脚本或演示可以使用完整导入。

<SelectInstallationMethod v-model="currentMethod" />

### 撰写邮件

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'compose' : 'airmail' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'airmail.'}}compose({
  subject: 'Message subject',
  to: 'joe@example.com',
  plainBody: 'Message body',
})
```

<div class="flex justify-center">
  <VPLink :href="compose(composeParams)" target="_self">
    在 Airmail 中撰写
  </VPLink>
</div>

### 发送邮件

Airmail 将 `send` 记录为 x-callback-url 端点，包含 `from`、`subject`、`to`、`plainBody` 和 x-callback 参数。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'send' : 'airmail' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'airmail.'}}send({
  from: 'info@email.com',
  subject: 'subj',
  to: 'infoto@email.com',
  plainBody: 'hello',
  xSource: 'sourceapp',
  xSuccess: 'sourceapp://success',
  xError: 'sourceapp://error',
  xCancel: 'sourceapp://cancelled',
})
```
