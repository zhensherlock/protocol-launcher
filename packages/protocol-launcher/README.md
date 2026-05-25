<p align="center">
  <a href="https://zhensherlock.github.io/protocol-launcher/" target="_blank" rel="noopener noreferrer">
    <img width="900" src="https://zhensherlock.github.io/protocol-launcher/readme-preview.png" alt="Protocol Launcher one-click launch URL generator preview">
  </a>
</p>

# Protocol Launcher

One-click launch URL generator for protocol-based apps.

[![][npm-release-shield]][npm-release-link]
[![][codecov-shield]][codecov-link]
[![][github-release-date-shield]][github-release-date-link]
[![][github-action-build-shield]][github-action-build-link]
[![][github-license-shield]][github-license-link]

`protocol-launcher` helps you generate typed deep links and URL scheme links for desktop, mobile, productivity, AI, and developer tools. Use it to open apps, jump to files or projects, install MCP servers, import provider settings, and create safe one-click launch links for websites, docs, CLIs, and automation flows.

## Why Protocol Launcher?

- Type-safe builders for supported protocol payloads.
- On-demand imports such as `protocol-launcher/vscode` and `protocol-launcher/cherry-studio`.
- Safe query-string and base64 payload encoding, including Unicode payloads.
- Broad protocol coverage across AI tools, editors, productivity apps, native macOS apps, and utilities.
- ESM-first output for Node.js and modern bundlers.
- Zero third-party runtime dependencies.

## Installation

```bash
pnpm add protocol-launcher
```

```bash
npm install protocol-launcher
```

```bash
yarn add protocol-launcher
```

```bash
bun add protocol-launcher
```

## Usage

### On-Demand Import

Use direct subpath imports when you only need one app integration.

```ts
import { installMCP } from 'protocol-launcher/cursor'

const url = installMCP({
  name: 'server-everything',
  type: 'stdio',
  command: 'npx',
  args: ['-y', '@modelcontextprotocol/server-everything'],
  openInNewWindow: true,
})
```

```ts
import { installProvider } from 'protocol-launcher/cherry-studio'

const url = installProvider({
  id: 'new-api',
  baseUrl: 'https://open.cherryin.ai',
  apiKey: 'sk-xxxx',
})
```

```ts
import { openFile } from 'protocol-launcher/vscode'

const url = openFile({
  path: '/code/protocol-launcher/README.md',
  line: 1,
  column: 1,
})
```

### Full Import

The root entry exports each protocol as a namespace.

```ts
import { cherryStudio, cursor, vscode } from 'protocol-launcher'

const settingsUrl = vscode.openSettings({
  path: 'terminal.integrated.suggest.enabled',
})

const folderUrl = cursor.openFolder({
  path: '/code/protocol-launcher',
})

const providerUrl = cherryStudio.installProvider({
  id: 'openai',
  baseUrl: 'https://api.openai.com/v1',
  apiKey: 'sk-xxxx',
})
```

Prefer subpath imports for production bundles when possible.

## Popular Integrations

```ts
import { openThread } from 'protocol-launcher/codex'
import { installMCP } from 'protocol-launcher/cursor'
import { open } from 'protocol-launcher/telegram'
import { openSettings } from 'protocol-launcher/vscode'
```

Examples of supported app categories:

- AI and coding tools: `antigravity`, `cherry-studio`, `code-buddy`, `codex`, `cursor`, `kiro`, `lingma`, `opencode`, `qoder`, `trae`, `vscode`, `windsurf`, `zed`
- Editors and IDEs: `bbedit`, `code-runner`, `goland`, `idea`, `macvim`, `nova`, `phpstorm`, `pycharm`, `rustrover`, `textastic`, `textmate`, `webstorm`, `xcode`
- Productivity and notes: `agenda`, `bear`, `craft`, `drafts`, `evernote`, `fsnotes`, `obsidian`, `things`, `todoist`, `trello`, `ulysses`, `working-copy`
- Platform and utilities: `app-store`, `apple-map`, `macos`, `microsoft-edge`, `shortcuts`, `steam`, `telegram`, `thunder`, `wemeet`

See the [documentation site](https://zhensherlock.github.io/protocol-launcher/) for the full app list and exact API examples.

## Docs

Full guides and examples: https://zhensherlock.github.io/protocol-launcher/

## Contributing

Feel free to dive in! [Open an issue](https://github.com/zhensherlock/protocol-launcher/issues/new/choose) or submit PRs.

Standard Readme follows the [Contributor Covenant](http://contributor-covenant.org/version/1/3/0/) Code of Conduct.

### Contributors

This project exists thanks to all the people who contribute.

<a href="https://github.com/zhensherlock/protocol-launcher/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=zhensherlock/protocol-launcher" />
</a>

## License

[MIT](LICENSE) © MichaelSun

[npm-release-link]: https://www.npmjs.com/package/protocol-launcher
[npm-release-shield]: https://img.shields.io/npm/v/protocol-launcher?color=1677FF&labelColor=black&logo=npm&logoColor=white&style=flat-square
[codecov-link]: http://app.codecov.io/gh/zhensherlock/protocol-launcher
[codecov-shield]: https://img.shields.io/codecov/c/github/zhensherlock/protocol-launcher?color=1677FF&labelColor=black&style=flat-square&logo=codecov&logoColor=white
[github-release-date-link]: https://github.com/zhensherlock/protocol-launcher/releases
[github-release-date-shield]: https://img.shields.io/github/release-date/zhensherlock/protocol-launcher?color=1677FF&labelColor=black&style=flat-square
[github-action-build-link]: https://github.com/zhensherlock/protocol-launcher/actions/workflows/build.yml
[github-action-build-shield]: https://img.shields.io/github/actions/workflow/status/zhensherlock/protocol-launcher/build.yml?branch=main&color=1677FF&label=build&labelColor=black&logo=githubactions&logoColor=white&style=flat-square
[github-license-link]: https://github.com/zhensherlock/protocol-launcher/blob/main/LICENSE
[github-license-shield]: https://img.shields.io/github/license/zhensherlock/protocol-launcher?color=1677FF&labelColor=black&style=flat-square
