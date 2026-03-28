---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import {
  open,
  openUrl,
  store,
  launch,
  install,
  uninstall,
  validate,
  friends,
  settings,
  openComponent,
  nav,
  connect,
  addNonSteamGame,
  exit,
  appNews,
  gameProperties,
  controllerConfig,
  backup,
  support,
  url,
} from 'protocol-launcher/steam';
import { SelectInstallationMethod } from '../../.vitepress/components';
import {
  openUrlParams,
  storeParams,
  launchParams,
  installParams,
  uninstallParams,
  validateParams,
  friendsAddParams,
  friendsMessageParams,
  friendsStatusParams,
  settingsParams,
  openComponentParams,
  openConsoleComponentParams,
  navParams,
  navWithParamParams,
  connectParams,
  connectWithPasswordParams,
  appNewsParams,
  gamePropertiesParams,
  controllerConfigParams,
  backupParams,
  supportParams,
  urlStoreParams,
  urlWorkshopParams,
  urlStoreAppPageParams,
} from '../../.vitepress/constants/steam';

const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/steam' : 'protocol-launcher');
</script>

# Steam

[Steam](https://store.steampowered.com/) is a digital distribution platform developed by Valve Corporation for purchasing and playing video games. **Protocol Launcher** allows you to generate deep links to interact with Steam client, such as launching games, opening store pages, managing friends, and more.

## Usage

There are two ways to use this library:

- On-Demand import from subpaths enables tree-shaking and keeps bundles small.
- Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

<SelectInstallationMethod v-model="currentMethod" />

### Open Steam

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'steam' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'steam.'}}open()
```

<div class="flex justify-center">
  <VPLink :href="open()" target="_self">
    Open Steam
  </VPLink>
</div>

### Open URL

Opens URL in the system's default web browser.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openUrl' : 'steam' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'steam.'}}openUrl({
  url: 'https://store.steampowered.com/',
})
```

<div class="flex justify-center">
  <VPLink :href="openUrl(openUrlParams)" target="_self">
    Open URL in Browser
  </VPLink>
</div>

### Open Store Page

Opens up the store for an app.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'store' : 'steam' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'steam.'}}store({
  id: 730,
})
```

<div class="flex justify-center">
  <VPLink :href="store(storeParams)" target="_self">
    Open CS:GO Store Page
  </VPLink>
</div>

### Launch Game

Runs an application. It will be installed if necessary.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'launch' : 'steam' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'steam.'}}launch({
  id: 730,
  args: '-windowed',
})
```

<div class="flex justify-center">
  <VPLink :href="launch(launchParams)" target="_self">
    Launch CS:GO
  </VPLink>
</div>

### Install Application

Installs an application.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'install' : 'steam' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'steam.'}}install({
  id: 8230,
})
```

<div class="flex justify-center">
  <VPLink :href="install(installParams)" target="_self">
    Install Application
  </VPLink>
</div>

### Uninstall Application

Deletes the specified app's cache files.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'uninstall' : 'steam' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'steam.'}}uninstall({
  id: 8230,
})
```

<div class="flex justify-center">
  <VPLink :href="uninstall(uninstallParams)" target="_self">
    Uninstall Application
  </VPLink>
</div>

### Validate Local Files

Validates the local files of an app.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'validate' : 'steam' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'steam.'}}validate({
  id: 730,
})
```

<div class="flex justify-center">
  <VPLink :href="validate(validateParams)" target="_self">
    Validate CS:GO Files
  </VPLink>
</div>

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

<div class="flex justify-center">
  <VPLink :href="friends(friendsAddParams)" target="_self">
    Add Friend
  </VPLink>
</div>

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'friends' : 'steam' }} } from '{{ importPath }}'

// Send a message
const url = {{currentMethod === 'On-Demand' ? '' : 'steam.'}}friends({
  action: 'message',
  id: '12345678',
})
```

<div class="flex justify-center">
  <VPLink :href="friends(friendsMessageParams)" target="_self">
    Send Message
  </VPLink>
</div>

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'friends' : 'steam' }} } from '{{ importPath }}'

// Set status to online
const url = {{currentMethod === 'On-Demand' ? '' : 'steam.'}}friends({
  action: 'status/online',
})
```

<div class="flex justify-center">
  <VPLink :href="friends(friendsStatusParams)" target="_self">
    Set Status Online
  </VPLink>
</div>

### Open Settings

Opens Steam settings page.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'settings' : 'steam' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'steam.'}}settings({
  page: 'downloads',
})
```

<div class="flex justify-center">
  <VPLink :href="settings(settingsParams)" target="_self">
    Open Downloads Settings
  </VPLink>
</div>

### Open Component

Opens a Steam window/component.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openComponent' : 'steam' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'steam.'}}openComponent({
  component: 'bigpicture',
})
```

<div class="flex justify-center">
  <VPLink :href="openComponent(openComponentParams)" target="_self">
    Open Big Picture
  </VPLink>
</div>

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openComponent' : 'steam' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'steam.'}}openComponent({
  component: 'console',
})
```

<div class="flex justify-center">
  <VPLink :href="openComponent(openConsoleComponentParams)" target="_self">
    Open Console
  </VPLink>
</div>

### Navigation

Opens a Steam navigation window without making it active.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'nav' : 'steam' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'steam.'}}nav({
  component: 'downloads',
})
```

<div class="flex justify-center">
  <VPLink :href="nav(navParams)" target="_self">
    Navigate to Downloads
  </VPLink>
</div>

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'nav' : 'steam' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'steam.'}}nav({
  component: 'games/details',
  param: '730',
})
```

<div class="flex justify-center">
  <VPLink :href="nav(navWithParamParams)" target="_self">
    Navigate to Game Details
  </VPLink>
</div>

### Connect to Server

Connects the user to the server specified by the IP.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'connect' : 'steam' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'steam.'}}connect({
  ip: '192.0.2.1',
  port: 27015,
})
```

<div class="flex justify-center">
  <VPLink :href="connect(connectParams)" target="_self">
    Connect to Server
  </VPLink>
</div>

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'connect' : 'steam' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'steam.'}}connect({
  ip: '192.0.2.1',
  port: 27015,
  password: 'secret',
})
```

<div class="flex justify-center">
  <VPLink :href="connect(connectWithPasswordParams)" target="_self">
    Connect to Server with Password
  </VPLink>
</div>

[//]: # (### Add Non-Steam Game)

[//]: # ()
[//]: # (Opens the Steam checklist menu to add non-Steam games.)

[//]: # ()
[//]: # (```ts-vue [{{currentMethod}}])

[//]: # (import { {{ currentMethod === 'On-Demand' ? 'addNonSteamGame' : 'steam' }} } from '{{ importPath }}')

[//]: # ()
[//]: # (const url = {{currentMethod === 'On-Demand' ? '' : 'steam.'}}addNonSteamGame&#40;&#41;)

[//]: # (```)

[//]: # ()
[//]: # (<div class="flex justify-center">)

[//]: # (  <VPLink :href="addNonSteamGame&#40;&#41;" target="_self">)

[//]: # (    Add Non-Steam Game)

[//]: # (  </VPLink>)

[//]: # (</div>)

### Exit Steam

Exits the Steam application.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'exit' : 'steam' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'steam.'}}exit()
```

<div class="flex justify-center">
  <VPLink :href="exit()" target="_self">
    Exit Steam
  </VPLink>
</div>

### App News

Opens up the news page for an app.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'appNews' : 'steam' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'steam.'}}appNews({
  id: 730,
})
```

<div class="flex justify-center">
  <VPLink :href="appNews(appNewsParams)" target="_self">
    View CS:GO News
  </VPLink>
</div>

### Game Properties

Opens the properties for the specified game.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'gameProperties' : 'steam' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'steam.'}}gameProperties({
  id: 730,
})
```

<div class="flex justify-center">
  <VPLink :href="gameProperties(gamePropertiesParams)" target="_self">
    Open Game Properties
  </VPLink>
</div>

### Controller Config

Opens the controller configurator (Steam Input) for the specified game.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'controllerConfig' : 'steam' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'steam.'}}controllerConfig({
  id: 730,
})
```

<div class="flex justify-center">
  <VPLink :href="controllerConfig(controllerConfigParams)" target="_self">
    Configure Controller
  </VPLink>
</div>

### Backup

Opens up the Backup Wizard and checks the specified application.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'backup' : 'steam' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'steam.'}}backup({
  id: 730,
})
```

<div class="flex justify-center">
  <VPLink :href="backup(backupParams)" target="_self">
    Backup Game
  </VPLink>
</div>

### Support

Launches the Steam Support utility.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'support' : 'steam' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'steam.'}}support({
  params: '730',
})
```

<div class="flex justify-center">
  <VPLink :href="support(supportParams)" target="_self">
    Open Support
  </VPLink>
</div>

### Named Pages

Opens a special, named web pages in Steam.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'url' : 'steam' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'steam.'}}url({
  page: 'Store',
})
```

<div class="flex justify-center">
  <VPLink :href="url(urlStoreParams)" target="_self">
    Open Store
  </VPLink>
</div>

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'url' : 'steam' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'steam.'}}url({
  page: 'SteamWorkshop',
})
```

<div class="flex justify-center">
  <VPLink :href="url(urlWorkshopParams)" target="_self">
    Open Steam Workshop
  </VPLink>
</div>

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'url' : 'steam' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'steam.'}}url({
  page: 'StoreAppPage',
  param: '730',
})
```

<div class="flex justify-center">
  <VPLink :href="url(urlStoreAppPageParams)" target="_self">
    Open Store App Page
  </VPLink>
</div>
