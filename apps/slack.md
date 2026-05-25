---
url: /protocol-launcher/apps/slack.md
---

# Slack

[Slack](https://slack.com/) is a collaboration platform for team communication, channels, messages, files, and apps. **Protocol Launcher** allows you to generate deep links to open Slack workspaces, channels, users, apps, and files.

## Usage

There are two ways to use this library:

* On-Demand import from subpaths enables tree-shaking and keeps bundles small.
* Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

## Notes

Slack's `slack://` URI templates use Slack IDs for workspaces, channels, users, apps, and files. They do not support workspace subdomains, channel names, user names, or filenames. Use Slack's `app_redirect` URL when you need the official channel-name redirect form.

### Open Slack

Open the native Slack client. Passing `team` switches to a specific workspace.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'slack' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'slack.'}}open({
  team: '{{ openParams.team }}',
})
```

### App Redirect

Create a Slack `app_redirect` URL that opens a direct message with an app or bot.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'appRedirect' : 'slack' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'slack.'}}appRedirect({
  app: '{{ appRedirectParams.app }}',
  team: '{{ appRedirectParams.team }}',
})
```

### Channel Redirect

Create a Slack `app_redirect` URL that opens a channel by ID or by name.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'channelRedirect' : 'slack' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'slack.'}}channelRedirect({
  channel: '{{ channelRedirectParams.channel }}',
  team: '{{ channelRedirectParams.team }}',
})
```

### Open App Home

Open a Slack App Home by workspace ID and app ID. The optional `tab` value can be `home`, `about`, or `messages`.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openApp' : 'slack' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'slack.'}}openApp({
  team: '{{ openAppParams.team }}',
  id: '{{ openAppParams.id }}',
  tab: '{{ openAppParams.tab }}',
})
```

### Open Channel

Open a Slack channel by workspace ID and channel ID.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openChannel' : 'slack' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'slack.'}}openChannel({
  team: '{{ openChannelParams.team }}',
  id: '{{ openChannelParams.id }}',
})
```

### Open Direct Message

Open a direct message with a Slack user by workspace ID and user ID.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openUser' : 'slack' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'slack.'}}openUser({
  team: '{{ openUserParams.team }}',
  id: '{{ openUserParams.id }}',
})
```

### Open File

Open a Slack file by workspace ID and file ID.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openFile' : 'slack' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'slack.'}}openFile({
  team: '{{ openFileParams.team }}',
  id: '{{ openFileParams.id }}',
})
```

### Share File

Open Slack's file sharing dialog by workspace ID and file ID.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'shareFile' : 'slack' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'slack.'}}shareFile({
  team: '{{ shareFileParams.team }}',
  id: '{{ shareFileParams.id }}',
})
```

## Official Documentation

* [Slack Deep Linking](https://docs.slack.dev/interactivity/deep-linking/)
