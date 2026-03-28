---
url: /protocol-launcher/apps/steam.md
---

# Steam

[Steam](https://store.steampowered.com/) is a digital distribution platform developed by Valve Corporation for purchasing and playing video games. **Protocol Launcher** allows you to generate deep links to interact with Steam client, such as launching games, opening store pages, managing friends, and more.

## Usage

There are two ways to use this library:

* On-Demand import from subpaths enables tree-shaking and keeps bundles small.
* Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

### Open Steam

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'steam' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'steam.'}}open()
```

### Open URL

Opens URL in the system's default web browser.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openUrl' : 'steam' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'steam.'}}openUrl({
  url: 'https://store.steampowered.com/',
})
```

### Open Store Page

Opens up the store for an app.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'store' : 'steam' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'steam.'}}store({
  id: 730,
})
```

### Launch Game

Runs an application. It will be installed if necessary.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'launch' : 'steam' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'steam.'}}launch({
  id: 730,
  args: '-windowed',
})
```

### Install Application

Installs an application.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'install' : 'steam' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'steam.'}}install({
  id: 8230,
})
```

### Uninstall Application

Deletes the specified app's cache files.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'uninstall' : 'steam' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'steam.'}}uninstall({
  id: 8230,
})
```

### Validate Local Files

Validates the local files of an app.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'validate' : 'steam' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'steam.'}}validate({
  id: 730,
})
```

### Friends Actions

Opens Friends window with optional action.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'friends' : 'steam' }} } from '{{ importPath }}'

// Add a friend
const url = {{currentMethod === 'On-Demand' ? '' : 'steam.'}}friends({
  action: 'add',
  id: '12345678',
})
```

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'friends' : 'steam' }} } from '{{ importPath }}'

// Send a message
const url = {{currentMethod === 'On-Demand' ? '' : 'steam.'}}friends({
  action: 'message',
  id: '12345678',
})
```

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'friends' : 'steam' }} } from '{{ importPath }}'

// Set status to online
const url = {{currentMethod === 'On-Demand' ? '' : 'steam.'}}friends({
  action: 'status/online',
})
```

### Open Settings

Opens Steam settings page.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'settings' : 'steam' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'steam.'}}settings({
  page: 'downloads',
})
```

### Open Component

Opens a Steam window/component.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openComponent' : 'steam' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'steam.'}}openComponent({
  component: 'bigpicture',
})
```

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openComponent' : 'steam' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'steam.'}}openComponent({
  component: 'console',
})
```

### Navigation

Opens a Steam navigation window without making it active.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'nav' : 'steam' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'steam.'}}nav({
  component: 'downloads',
})
```

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'nav' : 'steam' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'steam.'}}nav({
  component: 'games/details',
  param: '730',
})
```

### Connect to Server

Connects the user to the server specified by the IP.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'connect' : 'steam' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'steam.'}}connect({
  ip: '192.0.2.1',
  port: 27015,
})
```

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'connect' : 'steam' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'steam.'}}connect({
  ip: '192.0.2.1',
  port: 27015,
  password: 'secret',
})
```

[//]: # "### Add Non-Steam Game"

[//]: #

[//]: # "Opens the Steam checklist menu to add non-Steam games."

[//]: #

[//]: # "```ts-vue [{{currentMethod}}]"

[//]: # "import { {{ currentMethod === 'On-Demand' ? 'addNonSteamGame' : 'steam' }} } from '{{ importPath }}'"

[//]: #

[//]: # "const url = {{currentMethod === 'On-Demand' ? '' : 'steam.'}}addNonSteamGame()"

[//]: # "```"

[//]: #

[//]: # "<div class=\"flex justify-center\">"

[//]: # "  <VPLink :href=\"addNonSteamGame()\" target=\"_self\">"

[//]: # "    Add Non-Steam Game"

[//]: # "  </VPLink>"

[//]: # "</div>"

### Exit Steam

Exits the Steam application.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'exit' : 'steam' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'steam.'}}exit()
```

### App News

Opens up the news page for an app.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'appNews' : 'steam' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'steam.'}}appNews({
  id: 730,
})
```

### Game Properties

Opens the properties for the specified game.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'gameProperties' : 'steam' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'steam.'}}gameProperties({
  id: 730,
})
```

### Controller Config

Opens the controller configurator (Steam Input) for the specified game.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'controllerConfig' : 'steam' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'steam.'}}controllerConfig({
  id: 730,
})
```

### Backup

Opens up the Backup Wizard and checks the specified application.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'backup' : 'steam' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'steam.'}}backup({
  id: 730,
})
```

### Support

Launches the Steam Support utility.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'support' : 'steam' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'steam.'}}support({
  params: '730',
})
```

### Named Pages

Opens a special, named web pages in Steam.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'url' : 'steam' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'steam.'}}url({
  page: 'Store',
})
```

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'url' : 'steam' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'steam.'}}url({
  page: 'SteamWorkshop',
})
```

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'url' : 'steam' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'steam.'}}url({
  page: 'StoreAppPage',
  param: '730',
})
```
