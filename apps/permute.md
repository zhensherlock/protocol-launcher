---
url: /protocol-launcher/apps/permute.md
---

# Permute

[Permute](https://software.charliemonroe.net/permute/) is a macOS media converter. **Protocol Launcher** allows you to generate Permute URL scheme links.

## Usage

There are two ways to use this library:

* On-Demand import from subpaths enables tree-shaking and keeps bundles small.
* Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

## URL Methods

Charlie Monroe Software documents the `permute://` scheme for advanced workflows. This module exposes only the documented `convert` and `stitch` actions and their documented query parameters.

### Convert

Generate a `permute://` URL that adds a file to Permute with the `convert` action. Use the visible Permute preset name as `preset`.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'convert' : 'permute' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'permute.'}}convert({
  filePath: '/Users/example/Downloads/file.mp4',
  preset: 'MP4',
  source: 'MyScript',
})

const urlWithOptions = {{currentMethod === 'On-Demand' ? '' : 'permute.'}}convert({
  filePath: '/Users/example/Downloads/source file.mp4',
  preset: 'MP4',
  callback: 'myapp://7452d66e-9260-43f0-97cb-d0467a1143a7',
  destination: '/Users/example/Movies/Converted',
  custom_group: 'Batch 1',
  trim: '10:90',
  crop: '0;0;1280;720',
})
```

### Stitch

Generate a `permute://` URL that adds a stitching conversion. Permute requires the folder path containing all input files, the stitched output `name`, and numbered files generated from the `files` array.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'stitch' : 'permute' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'permute.'}}stitch({
  folderPath: '/Users/example/Downloads/',
  preset: 'MP4',
  source: 'MyScript',
  name: 'foo.mp4',
  files: ['File1.mp4', 'File2.mp4'],
})
```

## Generated URLs

```ts
convert({
  filePath: '/Users/example/Downloads/file.mp4',
  preset: 'MP4',
  source: 'MyScript',
})
// => 'permute:///Users/example/Downloads/file.mp4?action=convert&preset=MP4&source=MyScript'

convert({
  filePath: '/Users/example/Downloads/source file.mp4',
  preset: 'MP4',
  callback: 'myapp://7452d66e-9260-43f0-97cb-d0467a1143a7',
  destination: '/Users/example/Movies/Converted',
  custom_group: 'Batch 1',
  trim: '10:90',
  crop: '0;0;1280;720',
})
// => 'permute:///Users/example/Downloads/source%20file.mp4?action=convert&preset=MP4&callback=myapp%3A%2F%2F7452d66e-9260-43f0-97cb-d0467a1143a7&destination=%2FUsers%2Fexample%2FMovies%2FConverted&custom_group=Batch%201&trim=10%3A90&crop=0%3B0%3B1280%3B720'

stitch({
  folderPath: '/Users/example/Downloads/',
  preset: 'MP4',
  source: 'MyScript',
  name: 'foo.mp4',
  files: ['File1.mp4', 'File2.mp4'],
})
// => 'permute:///Users/example/Downloads/?action=stitch&preset=MP4&source=MyScript&name=foo.mp4&file1=File1.mp4&file2=File2.mp4'
```

## Query Parameters

* `preset` is the name of the Permute preset to use.
* `source` is optional and is used by Permute for grouping conversions.
* `callback` is optional; Permute calls it asynchronously when conversion finishes.
* `destination` is an optional output folder path.
* `remove_original: true` emits `remove_original=true`, asking Permute to move the input file to Trash when done.
* `custom_group` emits the documented `custom_group` parameter.
* `trim` uses Permute's `start:stop` seconds format, such as `:10`, `10:`, or `10:90`.
* `crop` uses Permute's `x;y;width;height` rectangle format.

## Official Documentation

* [Permute Automation](https://software.charliemonroe.net/help/permute/?article=automation)
