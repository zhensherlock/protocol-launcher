---
url: /protocol-launcher/apps/airmail.md
---

# Airmail

[Airmail](https://airmailapp.com/) is an email client. **Protocol Launcher** allows you to generate official Airmail iOS URL scheme links to compose and send messages.

## Usage

There are two ways to use this library:

* On-Demand import from subpaths enables tree-shaking and keeps bundles small.
* Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

### Compose

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'compose' : 'airmail' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'airmail.'}}compose({
  subject: 'Message subject',
  to: 'joe@example.com',
  plainBody: 'Message body',
})
```

### Send

Airmail documents `send` as an x-callback-url endpoint with `from`, `subject`, `to`, `plainBody`, and x-callback parameters.

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
