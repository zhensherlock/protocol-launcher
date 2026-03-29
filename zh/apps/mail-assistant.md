---
url: /protocol-launcher/zh/apps/mail-assistant.md
---

# Mail Assistant

[Mail Assistant](https://docs.getdrafts.com/misc/mail-assistant) 是一款 Mac 辅助应用，可通过 Mail 应用发送 HTML 邮件。**Protocol Launcher** 允许您生成深度链接以在 Mail Assistant 中撰写和发送邮件。

## 使用方式

有两种使用此库的方式：

* 按需导入（On-Demand）：从子路径导入支持 tree-shaking，保持较小的打包体积。
* 完整导入（Full Import）：从根包导入更方便，但会包含所有应用模块。

生产构建建议选择按需导入；快速脚本或演示可以使用完整导入。

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
