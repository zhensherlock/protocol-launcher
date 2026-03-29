---
url: /protocol-launcher/apps/mail-assistant.md
---

# Mail Assistant

[Mail Assistant](https://docs.getdrafts.com/misc/mail-assistant) is a helper app for Mac that enables sending HTML emails via the Mail app. **Protocol Launcher** allows you to generate deep links to compose and send emails in Mail Assistant.

## Usage

There are two ways to use this library:

* On-Demand import from subpaths enables tree-shaking and keeps bundles small.
* Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

### Send Mail

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
