---
url: /protocol-launcher/apps/ok-json.md
---

# OK JSON

[OK JSON](https://okjson.app/) is a JSON viewer. **Protocol Launcher** allows you to generate OK JSON URL scheme links.

## Usage

There are two ways to use this library:

* On-Demand import from subpaths enables tree-shaking and keeps bundles small.
* Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

## Notes

OK JSON's official URL Schemes page documents five actions: `okjson://paste`, `okjson://new?content=...`, `okjson://history`, `okjson://scripts-panel`, and `okjson://script/...`. This module only exposes helpers for those documented actions.

`newJson()` accepts a raw JSON string and serializes it as the official URL-encoded `content` query parameter. `runScript()` accepts the custom script file name without the `.js` extension, matching the official script URL format.

### View JSON String from Pasteboard

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'paste' : 'okJson' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'okJson.'}}paste()
```

### View JSON String

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'newJson' : 'okJson' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'okJson.'}}newJson({
  content: '{"hello":"world"}',
})
```

### Show History Window

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'history' : 'okJson' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'okJson.'}}history()
```

### Show Scripts Panel Window

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'scriptsPanel' : 'okJson' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'okJson.'}}scriptsPanel()
```

### Run Script

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'runScript' : 'okJson' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'okJson.'}}runScript({
  scriptFileNameWithoutJsExtension: 'copy-minified-json',
})
```

## Generated URLs

```ts
paste()
// => 'okjson://paste'

newJson({
  content: '{"hello":"world"}',
})
// => 'okjson://new?content=%7B%22hello%22%3A%22world%22%7D'

history()
// => 'okjson://history'

scriptsPanel()
// => 'okjson://scripts-panel'

runScript({
  scriptFileNameWithoutJsExtension: 'copy-minified-json',
})
// => 'okjson://script/copy-minified-json'
```

## Official Documentation

* [OK JSON URL Schemes](https://docs.okjson.app/url-schemes)
