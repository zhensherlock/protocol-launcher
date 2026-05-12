---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { addressbook, airport, appleOtpauth, books, calendar, dictionary, facetime, feedback, findMy, fontbook, freeform, helpViewer, keynote, mail, music, notes, numbers, pages, photos, podcasts, printer, reminders, sms, stocks, systemPreferences, videos, wallet, weather } from 'protocol-launcher/macos';
import { SelectInstallationMethod } from '../../.vitepress/components';
import { useAppStore } from '../../.vitepress/stores/app';
import {
  addressBookParams,
  airportParams,
  appleOtpauthParams,
  booksParams,
  calendarParams,
  calendarWithLinkParams,
  dictionaryParams,
  dictionaryWithTermParams,
  facetimeParams,
  feedbackParams,
  feedbackWithNewParams,
  findMyParams,
  findMyDevicesParams,
  findMyItemsParams,
  findMyFriendsParams,
  fontbookParams,
  freeformParams,
  helpViewerParams,
  helpViewerWithCollectionParams,
  keynoteParams,
  mailParams,
  musicParams,
  notesParams,
  numbersParams,
  pagesParams,
  photosParams,
  podcastsParams,
  printerParams,
  printerWithHostParams,
  remindersParams,
  smsParams,
  smsWithPhoneParams,
  stocksParams,
  stocksWithSymbolParams,
  systemPreferencesParams,
  systemPreferencesWithSecurityPaneParams,
  systemPreferencesWithSoftwareUpdatePaneParams,
  videosParams,
  walletParams,
  weatherParams,
} from '../../.vitepress/constants/macos';

const appStore = useAppStore();
const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/macos' : 'protocol-launcher');
</script>

# macOS

[macOS](https://www.apple.com/macos/) is a graphical operating system developed by Apple Inc. As the first commercially successful graphical user interface system, it is designed specifically for the Macintosh series of computers, featuring an XNU hybrid kernel architecture and inheriting UNIX system characteristics. **Protocol Launcher** allows you to generate deep links to open and interact with built-in macOS apps like Calendar, FaceTime, Find My, Mail, SMS, and Wallet.

## Usage

There are two ways to use this library:

- On-Demand import from subpaths enables tree-shaking and keeps bundles small.
- Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

<SelectInstallationMethod v-model="currentMethod" />

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

<div class="flex flex-col gap-4 items-center">
  <VPLink :href="calendar(calendarParams)" target="_self">
    Open Calendar
  </VPLink>
  <VPLink :href="calendar(calendarWithLinkParams)" target="_self">
    Open Calendar with Subscription
  </VPLink>
</div>

### Open FaceTime

Open the FaceTime app, optionally with a phone number.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'facetime' : 'macOS' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'macOS.'}}facetime({
  phone: '1234567890',
})
```

<div class="flex justify-center">
  <VPLink :href="facetime(facetimeParams)" target="_self">
    Open FaceTime
  </VPLink>
</div>

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

<div class="flex flex-col gap-4 items-center">
  <VPLink :href="findMy(findMyParams)" target="_self">
    Open Find My
  </VPLink>
  <VPLink :href="findMy(findMyDevicesParams)" target="_self">
    Open Devices Tab
  </VPLink>
  <VPLink :href="findMy(findMyItemsParams)" target="_self">
    Open Items Tab
  </VPLink>
  <VPLink :href="findMy(findMyFriendsParams)" target="_self">
    Open Friends Tab
  </VPLink>
</div>

### Open Mail

Open the Mail app.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'mail' : 'macOS' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'macOS.'}}mail()
```

<div class="flex justify-center">
  <VPLink :href="mail(mailParams)" target="_self">
    Open Mail
  </VPLink>
</div>

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

<div class="flex flex-col gap-4 items-center">
  <VPLink :href="sms(smsParams)" target="_self">
    Open SMS
  </VPLink>
  <VPLink :href="sms(smsWithPhoneParams)" target="_self">
    Open SMS with Phone
  </VPLink>
</div>

### Open Wallet

Open the Wallet app.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'wallet' : 'macOS' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'macOS.'}}wallet()
```

<div class="flex justify-center">
  <VPLink :href="wallet(walletParams)" target="_self">
    Open Wallet
  </VPLink>
</div>

### Open Address Book

Open the Address Book app.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'addressbook' : 'macOS' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'macOS.'}}addressbook()
```

<div class="flex justify-center">
  <VPLink :href="addressbook(addressBookParams)" target="_self">
    Open Address Book
  </VPLink>
</div>

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

<div class="flex flex-col gap-4 items-center">
  <VPLink :href="feedback(feedbackParams)" target="_self">
    Open Feedback Assistant
  </VPLink>
  <VPLink :href="feedback(feedbackWithNewParams)" target="_self">
    Submit New Feedback
  </VPLink>
</div>

### Open Notes

Open the Notes app.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'notes' : 'macOS' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'macOS.'}}notes()
```

<div class="flex justify-center">
  <VPLink :href="notes(notesParams)" target="_self">
    Open Notes
  </VPLink>
</div>

### Open Reminders

Open the Reminders app.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'reminders' : 'macOS' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'macOS.'}}reminders()
```

<div class="flex justify-center">
  <VPLink :href="reminders(remindersParams)" target="_self">
    Open Reminders
  </VPLink>
</div>

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

<div class="flex flex-col gap-4 items-center">
  <VPLink :href="stocks(stocksParams)" target="_self">
    Open Stocks
  </VPLink>
  <VPLink :href="stocks(stocksWithSymbolParams)" target="_self">
    Open Stocks with Symbol
  </VPLink>
</div>

### Open Videos

Open the Videos app.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'videos' : 'macOS' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'macOS.'}}videos()
```

<div class="flex justify-center">
  <VPLink :href="videos(videosParams)" target="_self">
    Open Videos
  </VPLink>
</div>

### Open Weather

Open the Weather app.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'weather' : 'macOS' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'macOS.'}}weather()
```

<div class="flex justify-center">
  <VPLink :href="weather(weatherParams)" target="_self">
    Open Weather
  </VPLink>
</div>

### Open Books

Open the Books app.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'books' : 'macOS' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'macOS.'}}books()
```

<div class="flex justify-center">
  <VPLink :href="books(booksParams)" target="_self">
    Open Books
  </VPLink>
</div>

### Open Music

Open the Music app.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'music' : 'macOS' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'macOS.'}}music()
```

<div class="flex justify-center">
  <VPLink :href="music(musicParams)" target="_self">
    Open Music
  </VPLink>
</div>

### Open Photos

Open the Photos app.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'photos' : 'macOS' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'macOS.'}}photos()
```

<div class="flex justify-center">
  <VPLink :href="photos(photosParams)" target="_self">
    Open Photos
  </VPLink>
</div>

### Open Podcasts

Open the Podcasts app.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'podcasts' : 'macOS' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'macOS.'}}podcasts()
```

<div class="flex justify-center">
  <VPLink :href="podcasts(podcastsParams)" target="_self">
    Open Podcasts
  </VPLink>
</div>

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

<div class="flex flex-col gap-4 items-center">
  <VPLink :href="systemPreferences(systemPreferencesParams)" target="_self">
    Open System Preferences
  </VPLink>
  <VPLink :href="systemPreferences(systemPreferencesWithSecurityPaneParams)" target="_self">
    Open Security & Privacy
  </VPLink>
  <VPLink :href="systemPreferences(systemPreferencesWithSoftwareUpdatePaneParams)" target="_self">
    Open Software Update
  </VPLink>
</div>

### Open Airport Utility

Open the Airport Utility app.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'airport' : 'macOS' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'macOS.'}}airport()
```

<div class="flex justify-center">
  <VPLink :href="airport(airportParams)" target="_self">
    Open Airport Utility
  </VPLink>
</div>

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

<div class="flex flex-col gap-4 items-center">
  <VPLink :href="dictionary(dictionaryParams)" target="_self">
    Search Dictionary
  </VPLink>
  <VPLink :href="dictionary(dictionaryWithTermParams)" target="_self">
    Search for Term
  </VPLink>
</div>

### Open Freeform

Open the Freeform app.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'freeform' : 'macOS' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'macOS.'}}freeform()
```

<div class="flex justify-center">
  <VPLink :href="freeform(freeformParams)" target="_self">
    Open Freeform
  </VPLink>
</div>

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

<div class="flex flex-col gap-4 items-center">
  <VPLink :href="helpViewer(helpViewerParams)" target="_self">
    Open Help Viewer
  </VPLink>
  <VPLink :href="helpViewer(helpViewerWithCollectionParams)" target="_self">
    Open Specific Collection
  </VPLink>
</div>

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

<div class="flex flex-col gap-4 items-center">
  <VPLink :href="printer(printerParams)" target="_self">
    Add Printer
  </VPLink>
  <VPLink :href="printer(printerWithHostParams)" target="_self">
    Add Printer with Host
  </VPLink>
</div>

### Open Apple Password (OTP Auth)

Open the Apple Password (OTP Auth) app.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'appleOtpauth' : 'macOS' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'macOS.'}}appleOtpauth()
```

<div class="flex justify-center">
  <VPLink :href="appleOtpauth(appleOtpauthParams)" target="_self">
    Open Apple Password
  </VPLink>
</div>

### Open Font Book

Open the Font Book app.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'fontbook' : 'macOS' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'macOS.'}}fontbook()
```

<div class="flex justify-center">
  <VPLink :href="fontbook(fontbookParams)" target="_self">
    Open Font Book
  </VPLink>
</div>

### Open Keynote

Open the Keynote app.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'keynote' : 'macOS' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'macOS.'}}keynote()
```

<div class="flex justify-center">
  <VPLink :href="keynote(keynoteParams)" target="_self">
    Open Keynote
  </VPLink>
</div>

### Open Numbers

Open the Numbers app.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'numbers' : 'macOS' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'macOS.'}}numbers()
```

<div class="flex justify-center">
  <VPLink :href="numbers(numbersParams)" target="_self">
    Open Numbers
  </VPLink>
</div>

### Open Pages

Open the Pages app.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'pages' : 'macOS' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'macOS.'}}pages()
```

<div class="flex justify-center">
  <VPLink :href="pages(pagesParams)" target="_self">
    Open Pages
  </VPLink>
</div>
