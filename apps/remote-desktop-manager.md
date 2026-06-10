---
url: /protocol-launcher/apps/remote-desktop-manager.md
---

# Remote Desktop Manager

[Remote Desktop Manager](https://devolutions.net/remote-desktop-manager/) is a remote desktop and connection management app. **Protocol Launcher** allows you to generate official Remote Desktop Manager `rdm://` protocol handler URLs.

## Usage

There are two ways to use this library:

* On-Demand import from subpaths enables tree-shaking and keeps bundles small.
* Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

## Notes

This module only wraps the actions and parameters documented by Devolutions for the Remote Desktop Manager protocol handler: `open`, `find`, `edit`, `view`, `OpenWithMacro`, and `select`, with `DataSource`, `Session`, `Template`, `Host`, `Port`, `Username`, `Password`, `Domain`, `Title`, `Filter`, and `Tabpage` parameters.

Devolutions states that an action and at least one parameter are required. `DataSource` and `Session` are enough to open a connection. `Template` requires `Host`. `Tabpage` is documented as available only with the `Select` action, with the listed values `Overview`, `Documentation`, `Macros/Scripts/Tools`, `Management Tools`, `Information`, `Attachments`, `Logs`, and `Recordings`; this module also keeps Devolutions' exact `rdm://open?Filter=RDP&Tabpage=Dashboard` example.

These examples intentionally use fake IDs, a reserved host, and placeholder credentials. Do not publish real workspace IDs, session IDs, template IDs, hostnames, usernames, passwords, domains, or license-sensitive information.

## URL Methods

### Open

Open Remote Desktop Manager with the Search field populated, matching the official example.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'remoteDesktopManager' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'remoteDesktopManager.'}}open({
  filter: '{{ openSearchParams.filter }}',
  tabpage: '{{ openSearchParams.tabpage }}',
})
```

Open a specific session with `DataSource` and `Session`.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'remoteDesktopManager' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'remoteDesktopManager.'}}open({
  dataSource: '{{ openSessionParams.dataSource }}',
  session: '{{ openSessionParams.session }}',
})
```

Open with a template and host, plus documented connection overrides.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'remoteDesktopManager' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'remoteDesktopManager.'}}open({
  template: '{{ openTemplateParams.template }}',
  host: '{{ openTemplateParams.host }}',
  port: {{ openTemplateParams.port }},
  username: '{{ openTemplateParams.username }}',
  domain: '{{ openTemplateParams.domain }}',
  title: '{{ openTemplateParams.title }}',
})
```

### Find

Find sessions by host.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'find' : 'remoteDesktopManager' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'remoteDesktopManager.'}}find({
  host: '{{ findParams.host }}',
})
```

### Edit

Edit the specified connection.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'edit' : 'remoteDesktopManager' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'remoteDesktopManager.'}}edit({
  session: '{{ editParams.session }}',
})
```

### View

View the password of the specified entry.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'view' : 'remoteDesktopManager' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'remoteDesktopManager.'}}view({
  session: '{{ viewParams.session }}',
})
```

### Open With Macro

Open the specified entry with a macro.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openWithMacro' : 'remoteDesktopManager' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'remoteDesktopManager.'}}openWithMacro({
  session: '{{ openWithMacroParams.session }}',
})
```

### Select

Select a connection in the navigation pane and focus a dashboard tab.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'select' : 'remoteDesktopManager' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'remoteDesktopManager.'}}select({
  session: '{{ selectParams.session }}',
  tabpage: '{{ selectParams.tabpage }}',
})
```

## Generated URLs

```ts
open(openSearchParams)
// => 'rdm://open?Filter=RDP&Tabpage=Dashboard'

open(openSessionParams)
// => 'rdm://open?DataSource=d4cb6537-0471-4c07-a91b-43a5e1f1f007&Session=f368d57a-d6ac-4b84-a79e-6e4f6cb3d2e1'

open(openTemplateParams)
// => 'rdm://open?Template=b32e4f20-7c1e-4872-b5cb-c893cc2fc272&Host=server.example.com&Port=3389&Username=admin&Domain=EXAMPLE&Title=Support%20Session'

find(findParams)
// => 'rdm://find?Host=server.example.com'

edit(editParams)
// => 'rdm://edit?Session=f368d57a-d6ac-4b84-a79e-6e4f6cb3d2e1'

view(viewParams)
// => 'rdm://view?Session=f368d57a-d6ac-4b84-a79e-6e4f6cb3d2e1'

openWithMacro(openWithMacroParams)
// => 'rdm://OpenWithMacro?Session=f368d57a-d6ac-4b84-a79e-6e4f6cb3d2e1'

select(selectParams)
// => 'rdm://select?Session=f368d57a-d6ac-4b84-a79e-6e4f6cb3d2e1&Tabpage=Overview'
```

These examples do not render live launch buttons because the official handler can open sessions, show passwords, or start macro-driven workflows.

## Official Documentation

* [Remote Desktop Manager protocol handler](https://docs.devolutions.net/rdm/kb/knowledge-base/protocol-handler/)
