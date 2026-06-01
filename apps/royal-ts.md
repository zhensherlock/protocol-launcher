---
url: /protocol-launcher/apps/royal-ts.md
---

# Royal TS

[Royal TS](https://www.royalapps.com/ts/win/features) is a remote desktop and server management app. **Protocol Launcher** allows you to generate official Royal TS URL scheme links.

## Usage

There are two ways to use this library:

* On-Demand import from subpaths enables tree-shaking and keeps bundles small.
* Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

## Notes

Royal Apps documents `rtscli://local/<scope>/<command>?...` for executing Royal TS CLI commands. The `connect` helper is limited to the documented `rtscli.exe action connect` value options. Use `cliCommand` only for the documented `action connect`, `document open`, and `document close` command shapes. Flag-only CLI options are intentionally not exposed because the URI page does not document their URI serialization.

Royal TS V6 also documents the legacy `rtsx://` scheme for connection actions. These examples do not render live launch buttons because the generated links can start or disconnect remote sessions.

### CLI Command

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'cliCommand' : 'royalTs' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'royalTs.'}}cliCommand({
  scope: '{{ cliCommandParams.scope }}',
  command: '{{ cliCommandParams.command }}',
  options: {
    '-n': '{{ cliCommandParams.name }}',
  },
})
```

### Connect

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'connect' : 'royalTs' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'royalTs.'}}connect({
  name: '{{ connectParams.name }}',
})
```

### Legacy Connect By URI

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'legacyConnect' : 'royalTs' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'royalTs.'}}legacyConnect({
  protocolIdentifier: '{{ legacyConnectParams.protocolIdentifier }}',
  uri: '{{ legacyConnectParams.uri }}',
  using: '{{ legacyConnectParams.using }}',
})
```

### Legacy Connect By Name

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'legacyConnect' : 'royalTs' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'royalTs.'}}legacyConnect({
  protocolIdentifier: '{{ legacyCredentialParams.protocolIdentifier }}',
  auth: {
    username: '{{ legacyCredentialParams.auth.username }}',
  },
  uri: '{{ legacyCredentialParams.uri }}',
  using: '{{ legacyCredentialParams.using }}',
})
```

### Legacy Disconnect

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'legacyDisconnect' : 'royalTs' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'royalTs.'}}legacyDisconnect({
  protocolIdentifier: '{{ legacyDisconnectParams.protocolIdentifier }}',
  uri: '{{ legacyDisconnectParams.uri }}',
  using: '{{ legacyDisconnectParams.using }}',
})
```

### Legacy Ad Hoc Properties

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'legacyConnect' : 'royalTs' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'royalTs.'}}legacyConnect({
  protocolIdentifier: '{{ legacyAdHocParams.protocolIdentifier }}',
  uri: '{{ legacyAdHocParams.uri }}',
  using: '{{ legacyAdHocParams.using }}',
  action: '{{ legacyAdHocParams.action }}',
  properties: {
    Description: '{{ legacyAdHocParams.properties.Description }}',
    ColorDepth: {{ legacyAdHocParams.properties.ColorDepth }},
  },
})
```

## Generated URLs

```ts
cliCommand({
  scope: 'action',
  command: 'connect',
  options: { '-n': 'QNAP (SSH)' },
})
// => 'rtscli://local/action/connect?-n=QNAP+(SSH)'

connect({ name: 'QNAP (SSH)' })
// => 'rtscli://local/action/connect?-n=QNAP+(SSH)'

legacyConnect({ protocolIdentifier: 'rdp', uri: '192.168.5.16', using: 'uri' })
// => 'rtsx://rdp%3a%2f%2f192.168.5.16?using=uri'

legacyConnect({
  protocolIdentifier: 'rdp',
  auth: { username: 'admin' },
  uri: 'Web Server 1',
  using: 'name',
})
// => 'rtsx://rdp%3a%2f%2fadmin@Web%20Server%201?using=name'

legacyDisconnect({ protocolIdentifier: 'rdp', uri: 'Web Server 1', using: 'name' })
// => 'rtsx://rdp%3a%2f%2fWeb%20Server%201?using=name&action=disconnect'

legacyConnect({
  protocolIdentifier: 'rdp',
  uri: '192.168.5.16',
  using: 'adhoc',
  action: 'connect',
  properties: {
    Description: 'Connected using URI',
    ColorDepth: 8,
  },
})
// => 'rtsx://rdp%3a%2f%2f192.168.5.16?using=adhoc&action=connect&property_Description=Connected%20using%20URI&property_ColorDepth=8'
```

## Official Documentation

* [Royal TS URI Scheme](https://docs.royalapps.com/r2023/royalts/advanced/uri.html)
* [Royal TS Command Line](https://docs.royalapps.com/r2023/royalts/advanced/cli.html)
