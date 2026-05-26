---
url: /protocol-launcher/zh/apps/bunch.md
---

# Bunch

[Bunch](https://bunchapp.co/) 是一款 macOS 工作区自动化应用。**Protocol Launcher** 可以为 Bunch 生成深度链接。

## 使用方式

提供两种使用方式：

* 按需加载（通过子路径导入），支持 Tree Shaking，体积更小。
* 全量导入（从根包导入），使用简单，但会包含所有应用模块。

生产环境建议使用按需加载以减小体积；快速脚本或演示可选择全量导入。

## URL 方法

以下 helper 在适用时都支持 Bunch 文档中的 `x-callback-url` 路径格式，以及官方的 `x-source`、`x-success`、`x-delay` 和 `x-bunch-beta` URL 值。

### 打开 Bunch

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'bunch' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'bunch.'}}open({
  bunch: 'Comms',
})

const shortcutUrl = {{currentMethod === 'On-Demand' ? '' : 'bunch.'}}open({
  bunch: 'Comms',
  syntax: 'shortcut',
})

const pathUrl = {{currentMethod === 'On-Demand' ? '' : 'bunch.'}}open({
  bunch: 'WorkBunch',
  syntax: 'path',
})
```

### 使用 Bunch Beta 打开

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'bunch' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'bunch.'}}open({
  bunch: 'Comms',
  scheme: 'x-bunch-beta',
})
```

### 带 Frontmatter 值打开

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'bunch' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'bunch.'}}open({
  bunch: 'Default',
  variables: {
    launch: 'TextEdit',
  },
})
```

### 带 Callback 参数打开

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'bunch' }} } from '{{ importPath }}'

const callbackUrl = {{currentMethod === 'On-Demand' ? '' : 'bunch.'}}open({
  bunch: 'Comms',
  xCallback: true,
  'x-source': 'com.googlecode.iterm2',
})

const successUrl = {{currentMethod === 'On-Demand' ? '' : 'bunch.'}}open({
  bunch: 'Comms',
  'x-success': 'com.brettterpstra.marked2',
  'x-delay': 15,
})
```

### 关闭 Bunch

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'close' : 'bunch' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'bunch.'}}close({
  bunch: 'Comms',
})

const pathUrl = {{currentMethod === 'On-Demand' ? '' : 'bunch.'}}close({
  bunch: 'Comms',
  syntax: 'path',
})
```

### 切换 Bunch

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'toggle' : 'bunch' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'bunch.'}}toggle({
  bunch: 'Comms',
})

const pathUrl = {{currentMethod === 'On-Demand' ? '' : 'bunch.'}}toggle({
  bunch: 'Comms',
  syntax: 'path',
})
```

### 切换带标签的 Bunch

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'toggle' : 'bunch' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'bunch.'}}toggle({
  tag: 'Tag1+Tag2',
})
```

### 编辑 Bunch

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'edit' : 'bunch' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'bunch.'}}edit({
  bunch: 'Example',
})

const pathUrl = {{currentMethod === 'On-Demand' ? '' : 'bunch.'}}edit({
  bunch: 'Example',
  syntax: 'path',
})
```

### 运行原始 Bunch 文本或文件

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'raw' : 'bunch' }} } from '{{ importPath }}'

const fileUrl = {{currentMethod === 'On-Demand' ? '' : 'bunch.'}}raw({
  file: '~/MiscBunch.bunch',
})

const textUrl = {{currentMethod === 'On-Demand' ? '' : 'bunch.'}}raw({
  txt: '(dnd on)',
})
```

### 刷新 Bunch 文件

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'refresh' : 'bunch' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'bunch.'}}refresh()
```

### 在 Finder 中显示 Bunch 文件夹

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'reveal' : 'bunch' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'bunch.'}}reveal()
```

### 设置偏好

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'setPref' : 'bunch' }} } from '{{ importPath }}'

const toggleUrl = {{currentMethod === 'On-Demand' ? '' : 'bunch.'}}setPref({
  toggleBunches: 1,
})

const folderUrl = {{currentMethod === 'On-Demand' ? '' : 'bunch.'}}setPref({
  configDir: '~/Dropbox/Sync/Bunches',
})
```

### 运行 Snippet

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'snippet' : 'bunch' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'bunch.'}}snippet({
  file: 'useful.snippets',
  fragment: 'Music',
  variables: {
    playlist: 'spotify:playlist:3cSpIL4Q0H3uqdBMbT6c9x',
  },
})

const pathUrl = {{currentMethod === 'On-Demand' ? '' : 'bunch.'}}snippet({
  file: 'useful.snippets',
  fragment: 'Speak',
  syntax: 'path',
  variables: {
    var1: 'foo',
    var2: 'bar baz',
  },
})
```

### 打开偏好设置

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'prefs' : 'bunch' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'bunch.'}}prefs()
```

## 官方文档

* [The Bunch URL Handler](https://bunchapp.co/docs/integration/url-handler/)
