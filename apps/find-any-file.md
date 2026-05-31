---
url: /protocol-launcher/apps/find-any-file.md
---

# Find Any File

[Find Any File](https://findanyfile.app/) is a macOS file search app. **Protocol Launcher** allows you to generate Find Any File URL scheme links.

## Usage

There are two ways to use this library:

* On-Demand import from subpaths enables tree-shaking and keeps bundles small.
* Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

## Notes

Find Any File's official URL scheme documentation defines `fafapp://find?...` for query-parameter searches and `fafapp://findjson/jsondata` or `fafapp://findjson/jsondata/wmode` for JSON search rules. This module exposes only those documented forms.

For `find()`, `findInLocation()`, and `findWithTemplate()`, the payload uses FAF's documented parameter names: `inp`, `loc`, `win`, `root`, `run`, `norun`, and `tpl`. A string `inp` is serialized as `inp`; an array is serialized as `inp1`, `inp2`, and so on. A string `loc` is serialized as `loc`; an array is serialized as `loc1`, `loc2`, and so on.

### Find

Open Find Any File and search with the first input field.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'find' : 'findAnyFile' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'findAnyFile.'}}find({
  inp: 'invoice',
})
```

### Find In Location

Search inside a specific Find Any File location such as `~`, a POSIX path, a file URL, an HFS path, or one of FAF's documented special `#` locations.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'findInLocation' : 'findAnyFile' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'findAnyFile.'}}findInLocation({
  loc: '~',
  inp: 'invoice',
})
```

### Find With Template

Use a saved Search Template name without the `.faf` extension.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'findWithTemplate' : 'findAnyFile' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'findAnyFile.'}}findWithTemplate({
  tpl: 'LastWeek',
  inp: 'invoice',
})
```

### Find JSON

Use JSON search rules copied from a saved Find Any File search. When `jsondata` is an object, string values are percent-encoded and the JSON punctuation is kept in the same form as FAF's official example. When `jsondata` is a string, it is used unchanged. `wmode` appends the optional documented window-mode path segment.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'findJson' : 'findAnyFile' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'findAnyFile.'}}findJson({
  jsondata: {
    specs: [{ verb: 9, val: 'report 2021', subj: 0 }],
    title: 'Name contains report 2021',
    autoStart: true,
    sources: ['/'],
  },
})
```

## Generated URLs

```ts
find({ inp: 'invoice' })
// => 'fafapp://find?inp=invoice'

findInLocation({
  loc: '~',
  inp: 'invoice',
})
// => 'fafapp://find?inp=invoice&loc=~'

findWithTemplate({
  tpl: 'LastWeek',
  inp: 'invoice',
})
// => 'fafapp://find?inp=invoice&tpl=LastWeek'

findJson({
  jsondata: {
    specs: [{ verb: 9, val: 'report 2021', subj: 0 }],
    title: 'Name contains report 2021',
    autoStart: true,
    sources: ['/'],
  },
})
// => 'fafapp://findjson/{"specs":[{"verb":9,"val":"report%202021","subj":0}],"title":"Name%20contains%20report%202021","autoStart":true,"sources":["%2F"]}'
```

## Official Documentation

* [Find Any File URL scheme](https://findanyfile.app/url-scheme.html)
