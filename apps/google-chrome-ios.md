---
url: /protocol-launcher/apps/google-chrome-ios.md
---

# Google Chrome iOS

[Google Chrome](https://www.google.com/chrome/) is a web browser developed by Google. **Protocol Launcher** allows you to generate deep links to open HTTP and HTTPS URLs in Chrome for iOS.

## Usage

There are two ways to use this library:

* On-Demand import from subpaths enables tree-shaking and keeps bundles small.
* Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

## Notes

This module follows Chrome for iOS's official [URL scheme documentation](https://chromium.googlesource.com/chromium/src/+/lkgr/docs/ios/opening_links.md): replace the URL scheme before the first `:`, so `http` becomes `googlechrome` and `https` becomes `googlechromes`.

### Open URL

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openUrl' : 'googleChromeIos' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'googleChromeIos.'}}openUrl({
  url: 'https://www.google.com/',
})
```
