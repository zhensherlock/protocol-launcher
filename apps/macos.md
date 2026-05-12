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
import { {{ currentMethod === 'On-Demand' ? 'calendar' : 'macOS' }} } from '{{ importPath }}'

// Open Calendar app
const url = {{currentMethod === 'On-Demand' ? '' : 'macOS.'}}calendar()

// Open Calendar with webcal subscription
const url = {{currentMethod === 'On-Demand' ? '' : 'macOS.'}}calendar({
  link: 'https://p10-calendars.icloud.com/holiday/CN_zh.ics',
})
```

### Open FaceTime

Open the FaceTime app, optionally with a phone number.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'facetime' : 'macOS' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'macOS.'}}facetime({
  phone: '1234567890',
})
```

### Open Find My

Open the Find My app, optionally specifying a tab (devices, items, or friends).

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'findMy' : 'macOS' }} } from '{{ importPath }}'

// Open Find My app
const url = {{currentMethod === 'On-Demand' ? '' : 'macOS.'}}findMy()

// Open Devices tab
const url = {{currentMethod === 'On-Demand' ? '' : 'macOS.'}}findMy({
  tab: 'devices',
})

// Open Items tab
const url = {{currentMethod === 'On-Demand' ? '' : 'macOS.'}}findMy({
  tab: 'items',
})

// Open Friends tab
const url = {{currentMethod === 'On-Demand' ? '' : 'macOS.'}}findMy({
  tab: 'friends',
})
```

### Open Mail

Open the Mail app.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'mail' : 'macOS' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'macOS.'}}mail()
```

### Open SMS

Open the SMS app, optionally with a phone number.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'sms' : 'macOS' }} } from '{{ importPath }}'

// Open SMS app
const url = {{currentMethod === 'On-Demand' ? '' : 'macOS.'}}sms()

// Open SMS with phone number
const url = {{currentMethod === 'On-Demand' ? '' : 'macOS.'}}sms({
  phone: '1234567890',
})
```

### Open Wallet

Open the Wallet app.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'wallet' : 'macOS' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'macOS.'}}wallet()
```

### Open Address Book

Open the Address Book app.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'addressbook' : 'macOS' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'macOS.'}}addressbook()
```

### Open Feedback

Open the Feedback Assistant app, optionally to submit new feedback.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'feedback' : 'macOS' }} } from '{{ importPath }}'

// Open Feedback Assistant
const url = {{currentMethod === 'On-Demand' ? '' : 'macOS.'}}feedback()

// Open Feedback Assistant to submit new feedback
const url = {{currentMethod === 'On-Demand' ? '' : 'macOS.'}}feedback({
  type: 'new',
})
```

### Open Notes

Open the Notes app.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'notes' : 'macOS' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'macOS.'}}notes()
```

### Open Reminders

Open the Reminders app.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'reminders' : 'macOS' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'macOS.'}}reminders()
```

### Open Stocks

Open the Stocks app, optionally with a stock symbol.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'stocks' : 'macOS' }} } from '{{ importPath }}'

// Open Stocks app
const url = {{currentMethod === 'On-Demand' ? '' : 'macOS.'}}stocks()

// Open Stocks with symbol
const url = {{currentMethod === 'On-Demand' ? '' : 'macOS.'}}stocks({
  symbol: 'GE',
})
```

### Open Videos

Open the Videos app.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'videos' : 'macOS' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'macOS.'}}videos()
```

### Open Weather

Open the Weather app.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'weather' : 'macOS' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'macOS.'}}weather()
```

### Open Books

Open the Books app.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'books' : 'macOS' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'macOS.'}}books()
```

### Open Music

Open the Music app.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'music' : 'macOS' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'macOS.'}}music()
```

### Open Photos

Open the Photos app.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'photos' : 'macOS' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'macOS.'}}photos()
```

### Open Podcasts

Open the Podcasts app.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'podcasts' : 'macOS' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'macOS.'}}podcasts()
```

### Open System Preferences

Open the System Preferences (Settings) app, optionally with a specific preference pane.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'systemPreferences' : 'macOS' }} } from '{{ importPath }}'

// Open System Preferences
const url = {{currentMethod === 'On-Demand' ? '' : 'macOS.'}}systemPreferences()

// Open Security & Privacy pane
const url = {{currentMethod === 'On-Demand' ? '' : 'macOS.'}}systemPreferences({
  pane: 'com.apple.preference.security',
})

// Open Software Update pane
const url = {{currentMethod === 'On-Demand' ? '' : 'macOS.'}}systemPreferences({
  pane: 'com.apple.preferences.softwareupdate',
})
```

### Open Airport Utility

Open the Airport Utility app.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'airport' : 'macOS' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'macOS.'}}airport()
```

### Open Dictionary

Search dictionaries for a term.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'dictionary' : 'macOS' }} } from '{{ importPath }}'

// Search dictionary
const url = {{currentMethod === 'On-Demand' ? '' : 'macOS.'}}dictionary()

// Search dictionary with term
const url = {{currentMethod === 'On-Demand' ? '' : 'macOS.'}}dictionary({
  term: 'hello',
})
```

### Open Freeform

Open the Freeform app.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'freeform' : 'macOS' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'macOS.'}}freeform()
```

### Open Help Viewer

Open the Help Viewer app, optionally with a specific collection.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'helpViewer' : 'macOS' }} } from '{{ importPath }}'

// Open Help Viewer
const url = {{currentMethod === 'On-Demand' ? '' : 'macOS.'}}helpViewer()

// Open Help Viewer with collection
const url = {{currentMethod === 'On-Demand' ? '' : 'macOS.'}}helpViewer({
  collection: 'WelcomeToMac',
})
```

### Open Printer Settings

Add a printer, optionally with a hostname or IP address.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'printer' : 'macOS' }} } from '{{ importPath }}'

// Add printer
const url = {{currentMethod === 'On-Demand' ? '' : 'macOS.'}}printer()

// Add printer with host
const url = {{currentMethod === 'On-Demand' ? '' : 'macOS.'}}printer({
  host: '192.168.1.100',
})
```

### Open Apple Password (OTP Auth)

Open the Apple Password (OTP Auth) app.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'appleOtpauth' : 'macOS' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'macOS.'}}appleOtpauth()
```

### Open Font Book

Open the Font Book app.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'fontbook' : 'macOS' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'macOS.'}}fontbook()
```

### Open Keynote

Open the Keynote app.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'keynote' : 'macOS' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'macOS.'}}keynote()
```

### Open Numbers

Open the Numbers app.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'numbers' : 'macOS' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'macOS.'}}numbers()
```

### Open Pages

Open the Pages app.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'pages' : 'macOS' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'macOS.'}}pages()
```
