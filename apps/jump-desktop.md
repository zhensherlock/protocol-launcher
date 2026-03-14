---
url: /protocol-launcher/apps/jump-desktop.md
---

# Jump Desktop

[Jump Desktop](https://jumpdesktop.com) is a fast, secure remote desktop platform that enables you to seamlessly connect to any computer, anywhere in the world. It supports RDP, VNC, and Jump's proprietary Fluid protocol for optimal performance. **Protocol Launcher** allows you to generate deep links to connect to remote machines using Jump Desktop.

## Usage

There are two ways to use this library:

* On-Demand import from subpaths enables tree-shaking and keeps bundles small.
* Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

### Open Jump Desktop

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'jumpDesktop' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'jumpDesktop.'}}open()
```

### Connect via RDP

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'connect' : 'jumpDesktop' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'jumpDesktop.'}}connect({
  host: '192.168.1.100',
  protocol: 'rdp',
  port: 3389,
  username: 'admin',
  password: 'password',
})
```

### Connect via VNC

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'connect' : 'jumpDesktop' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'jumpDesktop.'}}connect({
  host: 'server.company.com',
  protocol: 'vnc',
  port: 5903,
  depth: 16,
})
```

### Connect via Fluid

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'connect' : 'jumpDesktop' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'jumpDesktop.'}}connect({
  host: 'mycomputer.jumpdesktop.com',
  protocol: 'fluid',
})
```
