<p align="center">
  <a href="https://zhensherlock.github.io/protocol-launcher/" target="_blank" rel="noopener noreferrer">
    <img width="300" src="https://zhensherlock.github.io/protocol-launcher/logo.svg" alt="protocol-launcher">
  </a>
</p>

# Quick Launch URL

One-click launch URL generator for protocol-based apps.

[![][npm-release-shield]][npm-release-link]
[![][codecov-shield]][codecov-link]
[![][github-release-date-shield]][github-release-date-link]
[![][github-action-build-shield]][github-action-build-link]
[![][github-license-shield]][github-license-link]

## Features

- 🛡️️ Type-Safe
- 🌍 Multi-App Ready
- 🌿 On-Demand / Tree-shakable
- 🔐 Secure Encoding
- ⚙️ Zero Runtime Dependencies
- 📦 ESM First

## Installation

```bash
npm install protocol-launcher
```

or

```bash
yarn install protocol-launcher
```

or

```bash
pnpm install protocol-launcher
```

## Usage

### On-Demand Import (Recommended)

```ts
// Cherry Studio
import { installMCP, installProvider } from 'protocol-launcher/cherry-studio'

// Cursor
import { installMCP as installCursorMCP } from 'protocol-launcher/cursor'
```

### Full Import

```ts
import { cherryStudio, cursor } from 'protocol-launcher'
```

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
[codecov-link]: https://coveralls.io/github/zhensherlock/protocol-launcher?branch=main
[codecov-shield]: https://img.shields.io/coverallsCoverage/github/zhensherlock/protocol-launcher?color=1677FF&labelColor=black&style=flat-square&logo=codecov&logoColor=white
[github-release-date-link]: https://github.com/zhensherlock/protocol-launcher/releases
[github-release-date-shield]: https://img.shields.io/github/release-date/zhensherlock/protocol-launcher?color=1677FF&labelColor=black&style=flat-square
[github-action-build-link]: https://github.com/zhensherlock/protocol-launcher/actions/workflows/build.yml
[github-action-build-shield]: https://img.shields.io/github/actions/workflow/status/zhensherlock/protocol-launcher/build.yml?branch=main&color=1677FF&label=build&labelColor=black&logo=githubactions&logoColor=white&style=flat-square
[github-license-link]: https://github.com/zhensherlock/protocol-launcher/blob/main/LICENSE
[github-license-shield]: https://img.shields.io/github/license/zhensherlock/protocol-launcher?color=1677FF&labelColor=black&style=flat-square
