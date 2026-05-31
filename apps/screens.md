---
url: /protocol-launcher/apps/screens.md
---

# Screens

[Screens](https://edovia.com/en/screens/) is a remote desktop app by Edovia for connecting to Macs, PCs, Linux PCs, and Raspberry Pi devices. **Protocol Launcher** allows you to generate deep links for saved screens, VNC connections, and SSH-secured Screens sessions.

## Usage

There are two ways to use this library:

* On-Demand import from subpaths enables tree-shaking and keeps bundles small.
* Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

### Open Saved Screen

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openSavedScreen' : 'screens' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'screens.'}}openSavedScreen({
  target: 'Johns-MacBook-Pro.local',
  guest: true,
})
```

### Connect via VNC

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'vnc' : 'screens' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'screens.'}}vnc({
  host: '192.168.1.14',
  port: 5900,
  username: 'john',
  observe: true,
})
```

### Connect via SSH

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'ssh' : 'screens' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'screens.'}}ssh({
  host: 'server.example.com',
  username: 'john',
  port: 22,
  sshKey: 'My Work Key',
})
```

Only the parameters documented by Edovia are exposed: `ssh-key` for `ssh://` URLs, and `guest=true` / `observe=true` for `screens://`, `vnc://`, and `ssh://` URLs. See the [official Screens URL Schemes documentation](https://help.edovia.com/en/screens-5/features/url-schemes).
