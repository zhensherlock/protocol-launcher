---
url: /protocol-launcher/zh/apps/permute.md
---

# Permute

[Permute](https://software.charliemonroe.net/permute/) 是一款 macOS 媒体转换工具。**Protocol Launcher** 允许您生成 Permute URL scheme 链接。

## 使用

有两种方式使用此库：

* 按需从子路径导入，支持 tree-shaking，让打包体积更小。
* 从根包全量导入更适合快速脚本或演示，但会包含所有应用模块。

生产构建建议使用按需导入；快速脚本或 demo 可以使用全量导入。

## URL 方法

Charlie Monroe Software 官方文档说明了用于高级工作流的 `permute://` scheme。本模块只暴露官方记录的 `convert` 和 `stitch` 动作，以及官方记录的查询参数。

### Convert

生成使用 `convert` 动作把文件加入 Permute 的 `permute://` URL。`preset` 请使用 Permute 中可见的预设名称。

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

生成添加拼接转换的 `permute://` URL。Permute 要求提供包含所有输入文件的文件夹路径、拼接输出文件名 `name`，以及从 `files` 数组生成的编号文件参数。

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

## 生成的 URL

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

## 查询参数

* `preset` 是要使用的 Permute 预设名称。
* `source` 是可选参数，Permute 会用它对转换任务分组。
* `callback` 是可选参数；转换结束后 Permute 会异步打开该回调 URL。
* `destination` 是可选输出文件夹路径。
* `remove_original: true` 会生成 `remove_original=true`，请求 Permute 在完成后把输入文件移到废纸篓。
* `custom_group` 会生成官方文档中的 `custom_group` 参数。
* `trim` 使用 Permute 的 `start:stop` 秒数格式，例如 `:10`、`10:` 或 `10:90`。
* `crop` 使用 Permute 的 `x;y;width;height` 矩形格式。

## 官方文档

* [Permute Automation](https://software.charliemonroe.net/help/permute/?article=automation)
