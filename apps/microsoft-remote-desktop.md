---
url: /protocol-launcher/apps/microsoft-remote-desktop.md
---

# Microsoft Remote Desktop

[Microsoft Remote Desktop](https://learn.microsoft.com/en-us/windows-server/remote/remote-desktop-services/clients/remote-desktop-clients) is Microsoft's remote desktop client. **Protocol Launcher** allows you to generate Microsoft Remote Desktop URI scheme links.

## Usage

There are two ways to use this library:

* On-Demand import from subpaths enables tree-shaking and keeps bundles small.
* Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

## Notes

This module only wraps Microsoft-documented URI formats: `ms-rd:` for launching the Remote Desktop client, `ms-rd:subscribe` for workspace subscription, legacy `rdp://` attribute URLs for macOS, iOS, and Android clients, and `ms-avd:connect` for Azure Virtual Desktop resources.

For `ms-avd:connect`, Microsoft marks the published resource ID and user UPN as required in both Remote Desktop client and Windows App. The official example serializes those as `resourceid` and `username`, so this module follows that URI shape. `workspaceId` and `version` are required in Remote Desktop client but not supported in Windows App. Optional `env`, `launchpartnerid`, `peeractivityid`, and `usemultimon` are exposed exactly as documented.

These examples intentionally use reserved hosts, fake GUIDs, and placeholder users. Do not publish real hosts, user names, resource IDs, workspace IDs, credentials, or tenant details.

## URL Methods

### Open

Open the Remote Desktop client with the documented `ms-rd:` URI.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'microsoftRemoteDesktop' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'microsoftRemoteDesktop.'}}open()
```

### Subscribe

Launch Remote Desktop and start the workspace subscription process.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'subscribe' : 'microsoftRemoteDesktop' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'microsoftRemoteDesktop.'}}subscribe({
  url: '{{ subscribeParams.url }}',
})
```

### Legacy RDP

Build a legacy `rdp://` URI with the RDP attributes Microsoft lists for macOS, iOS, and Android clients.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'legacyRdp' : 'microsoftRemoteDesktop' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'microsoftRemoteDesktop.'}}legacyRdp({
  attributes: [
    { name: 'full address', value: '192.0.2.10:3389' },
    { name: 'audiomode', value: 2 },
    { name: 'disable themes', value: 1 },
  ],
})
```

### AVD Connect

Connect to an Azure Virtual Desktop desktop or RemoteApp resource.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'avdConnect' : 'microsoftRemoteDesktop' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'microsoftRemoteDesktop.'}}avdConnect({
  workspaceId: '{{ avdConnectParams.workspaceId }}',
  resourceid: '{{ avdConnectParams.resourceid }}',
  username: '{{ avdConnectParams.username }}',
  version: {{ avdConnectParams.version }},
})
```

## Generated URLs

```ts
open()
// => 'ms-rd:'

subscribe(subscribeParams)
// => 'ms-rd:subscribe?url=https://rdweb.wvd.microsoft.com'

legacyRdp(legacyRdpParams)
// => 'rdp://full%20address=s:192.0.2.10:3389&audiomode=i:2&disable%20themes=i:1'

avdConnect(avdConnectParams)
// => 'ms-avd:connect?workspaceId=1638e073-63b2-46d8-bd84-ea02ea905467&resourceid=a0a0a0a0-bbbb-cccc-dddd-e1e1e1e1e1e1&username=user@contoso.com&version=0'
```

These examples do not render live launch buttons because the official handlers can start a Remote Desktop subscription or connection flow.

## Official Documentation

* [Remote Desktop URI scheme](https://learn.microsoft.com/en-us/windows-server/remote/remote-desktop-services/remote-desktop-uri)
* [URI schemes with the Remote Desktop client for Azure Virtual Desktop](https://learn.microsoft.com/en-us/azure/virtual-desktop/uri-scheme)
