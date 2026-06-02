---
url: /protocol-launcher/apps/gv-connect.md
---

# GV Connect

[GV Connect](https://gvconnect.com/) is a Google Voice client for iPhone, iPod touch, and iPad. **Protocol Launcher** allows you to generate official GV Connect URL scheme links.

GV Connect documents these handlers as case-sensitive and requiring proper URL encoding. Most handlers also accept an optional `account` parameter for multi-account setups.

For SMS group recipients, GV Connect documents a maximum of five numbers separated by commas.

## Usage

There are two ways to use this library:

* On-Demand import from subpaths enables tree-shaking and keeps bundles small.
* Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

### Open GV Connect

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'gvConnect' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'gvConnect.'}}open()
```

### Open Tab

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

### Dial Number

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'dial' : 'gvConnect' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'gvConnect.'}}dial({
  number: '+15551234567',
})

const favoritesUrl = {{currentMethod === 'On-Demand' ? '' : 'gvConnect.'}}dial({
  number: 'FAVORITES',
})
```

### Start Call

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'call' : 'gvConnect' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'gvConnect.'}}call({
  number: '+15551234567',
  callMethod: 'DirectCall',
})
```

### Compose SMS

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

## Generated URLs

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

## Official Documentation

* [GV Connect URL handlers](https://gvconnect.com/#Push)
