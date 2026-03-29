---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { sendMail } from 'protocol-launcher/mail-assistant';
import { SelectInstallationMethod } from '../../.vitepress/components';
import { sendMailParams } from '../../.vitepress/constants/mail-assistant';

const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/mail-assistant' : 'protocol-launcher');
</script>

# Mail Assistant

[Mail Assistant](https://docs.getdrafts.com/misc/mail-assistant) 是一款 Mac 辅助应用，可通过 Mail 应用发送 HTML 邮件。**Protocol Launcher** 允许您生成深度链接以在 Mail Assistant 中撰写和发送邮件。

## 使用方式

有两种使用此库的方式：

- 按需导入（On-Demand）：从子路径导入支持 tree-shaking，保持较小的打包体积。
- 完整导入（Full Import）：从根包导入更方便，但会包含所有应用模块。

生产构建建议选择按需导入；快速脚本或演示可以使用完整导入。

<SelectInstallationMethod v-model="currentMethod" />

### 发送邮件

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'sendMail' : 'mailAssistant' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'mailAssistant.'}}sendMail({
  to: 'john@example.com',
  cc: 'jane@example.com',
  subject: 'Meeting Notes',
  body: '<h1>Meeting Notes</h1><p>Here are the notes...</p>',
  html: true,
})
```

<div class="flex justify-center">
  <VPLink :href="sendMail(sendMailParams)" target="_self">
    通过 Mail Assistant 发送邮件
  </VPLink>
</div>
