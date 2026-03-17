---
url: /protocol-launcher/apps/macos.md
---

# macOS

[macOS](https://www.apple.com/macos/) is a graphical operating system developed by Apple Inc. As the first commercially successful graphical user interface system, it is designed specifically for the Macintosh series of computers, featuring an XNU hybrid kernel architecture and inheriting UNIX system characteristics. **Protocol Launcher** allows you to generate deep links to open and interact with built-in macOS apps like Calendar, FaceTime, Find My, Mail, SMS, and Wallet.

## Usage

There are two ways to use this library:

* On-Demand import from subpaths enables tree-shaking and keeps bundles small.
* Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

### Open Calendar

Open the Calendar app, optionally with a webcal subscription link.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'calendar' : 'macos' }} } from '{{ importPath }}'

// Open Calendar app
const url = {{currentMethod === 'On-Demand' ? '' : 'macos.'}}calendar()

// Open Calendar with webcal subscription
const url = {{currentMethod === 'On-Demand' ? '' : 'macos.'}}calendar({
  link: 'https://p10-calendars.icloud.com/holiday/CN_zh.ics',
})
```

### Open FaceTime

Open the FaceTime app, optionally with a phone number.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'facetime' : 'macos' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'macos.'}}facetime({
  phone: '1234567890',
})
```

### Open Find My

Open the Find My app, optionally specifying a tab (devices, items, or friends).

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'findMy' : 'macos' }} } from '{{ importPath }}'

// Open Find My app
const url = {{currentMethod === 'On-Demand' ? '' : 'macos.'}}findMy()

// Open Devices tab
const url = {{currentMethod === 'On-Demand' ? '' : 'macos.'}}findMy({
  tab: 'devices',
})

// Open Items tab
const url = {{currentMethod === 'On-Demand' ? '' : 'macos.'}}findMy({
  tab: 'items',
})

// Open Friends tab
const url = {{currentMethod === 'On-Demand' ? '' : 'macos.'}}findMy({
  tab: 'friends',
})
```

### Open Mail

Open the Mail app.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'mail' : 'macos' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'macos.'}}mail()
```

### Open SMS

Open the SMS app, optionally with a phone number.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'sms' : 'macos' }} } from '{{ importPath }}'

// Open SMS app
const url = {{currentMethod === 'On-Demand' ? '' : 'macos.'}}sms()

// Open SMS with phone number
const url = {{currentMethod === 'On-Demand' ? '' : 'macos.'}}sms({
  phone: '1234567890',
})
```

### Open Wallet

Open the Wallet app.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'wallet' : 'macos' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'macos.'}}wallet()
```

### Open Address Book

Open the Address Book app.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'addressbook' : 'macos' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'macos.'}}addressbook()
```

### Open Feedback

Open the Feedback Assistant app, optionally to submit new feedback.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'feedback' : 'macos' }} } from '{{ importPath }}'

// Open Feedback Assistant
const url = {{currentMethod === 'On-Demand' ? '' : 'macos.'}}feedback()

// Open Feedback Assistant to submit new feedback
const url = {{currentMethod === 'On-Demand' ? '' : 'macos.'}}feedback({
  type: 'new',
})
```

### Open Notes

Open the Notes app.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'notes' : 'macos' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'macos.'}}notes()
```

### Open Reminders

Open the Reminders app.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'reminders' : 'macos' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'macos.'}}reminders()
```

### Open Stocks

Open the Stocks app, optionally with a stock symbol.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'stocks' : 'macos' }} } from '{{ importPath }}'

// Open Stocks app
const url = {{currentMethod === 'On-Demand' ? '' : 'macos.'}}stocks()

// Open Stocks with symbol
const url = {{currentMethod === 'On-Demand' ? '' : 'macos.'}}stocks({
  symbol: 'GE',
})
```

### Open Videos

Open the Videos app.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'videos' : 'macos' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'macos.'}}videos()
```

### Open Weather

Open the Weather app.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'weather' : 'macos' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'macos.'}}weather()
```

### Open Books

Open the Books app.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'books' : 'macos' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'macos.'}}books()
```

### Open Music

Open the Music app.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'music' : 'macos' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'macos.'}}music()
```

### Open Photos

Open the Photos app.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'photos' : 'macos' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'macos.'}}photos()
```

### Open Podcasts

Open the Podcasts app.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'podcasts' : 'macos' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'macos.'}}podcasts()
```

### Open System Preferences

Open the System Preferences (Settings) app, optionally with a specific preference pane.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'systemPreferences' : 'macos' }} } from '{{ importPath }}'

// Open System Preferences
const url = {{currentMethod === 'On-Demand' ? '' : 'macos.'}}systemPreferences()

// Open Security & Privacy pane
const url = {{currentMethod === 'On-Demand' ? '' : 'macos.'}}systemPreferences({
  pane: 'com.apple.preference.security',
})

// Open Software Update pane
const url = {{currentMethod === 'On-Demand' ? '' : 'macos.'}}systemPreferences({
  pane: 'com.apple.preferences.softwareupdate',
})
```
