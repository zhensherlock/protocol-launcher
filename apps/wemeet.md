---
url: /protocol-launcher/apps/wemeet.md
---

# WeMeet

[WeMeet](https://meeting.tencent.com/) is a cloud video conferencing service provided by Tencent. **Protocol Launcher** allows you to generate deep links to open WeMeet and join meetings.

## Usage

There are two ways to use this library:

* On-Demand import from subpaths enables tree-shaking and keeps bundles small.
* Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

### Open WeMeet

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'wemeet' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'wemeet.'}}open()
```

### Join Meeting

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'joinMeeting' : 'wemeet' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'wemeet.'}}joinMeeting({
  meetingCode: '123456789',
})
```
