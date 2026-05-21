---
url: /protocol-launcher/zh/apps/anybox.md
---

# Anybox

[Anybox](https://anybox.app/) 是一个用于保存、查找和整理链接的书签与链接管理应用。**Protocol Launcher** 基于官方 URL Schemes 文档生成 Anybox URL，包括 save、paste、Quick Find、macOS 工具、iOS 照片动作，以及 x-callback-url save/paste 动作。

## 使用方式

有两种使用此库的方式：

* 按需导入（On-Demand）：从子路径导入支持 tree-shaking，保持较小的打包体积。
* 完整导入（Full Import）：从根包导入更方便，但会包含所有应用模块。

生产构建建议选择按需导入；快速脚本或演示可以使用完整导入。

### 显示 Anybox

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'show' : 'anybox' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'anybox.'}}show()
```

### 粘贴剪贴板内容

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'paste' : 'anybox' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'anybox.'}}paste({
  tag: 'Reading',
  starred: 'yes',
})
```

### 保存文本内容

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'save' : 'anybox' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'anybox.'}}save({
  text: 'https://example.com/article',
  tag: 'Reading',
  starred: 'yes',
  archive: 'webarchive',
})
```

### 下载 URL（macOS）

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'download' : 'anybox' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'anybox.'}}download({
  url: 'https://example.com/file.pdf',
  tag: 'Reading',
})
```

### 保存当前标签页（macOS）

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'saveTab' : 'anybox' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'anybox.'}}saveTab({
  tag: 'Reading',
  starred: 'yes',
  archive: 'pdf',
})
```

### 从剪贴板打开链接

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openLinkFromPasteboard' : 'anybox' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'anybox.'}}openLinkFromPasteboard()
```

### 将剪贴板链接复制为 Markdown（macOS）

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'copyPasteboardLinkAsMarkdown' : 'anybox' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'anybox.'}}copyPasteboardLinkAsMarkdown()
```

### Quick Find

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'quickFind' : 'anybox' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'anybox.'}}quickFind({
  q: 'research',
})
```

### Quick Save（macOS）

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'quickSave' : 'anybox' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'anybox.'}}quickSave()
```

### Stash Box（macOS）

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'stashBox' : 'anybox' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'anybox.'}}stashBox()
```

### 切换 Anydock（macOS）

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'toggleAnydock' : 'anybox' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'anybox.'}}toggleAnydock()
```

### 新建笔记（iOS）

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'newNote' : 'anybox' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'anybox.'}}newNote()
```

### 最新照片（iOS）

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'latestPhoto' : 'anybox' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'anybox.'}}latestPhoto()
```

### 照片（iOS）

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'photos' : 'anybox' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'anybox.'}}photos()
```

### x-callback-url 保存

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'xCallbackSave' : 'anybox' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'anybox.'}}xCallbackSave({
  text: 'helloWorld',
  xSuccess: 'successURL',
  xError: 'errorURL',
})
```

### x-callback-url 粘贴

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'xCallbackPaste' : 'anybox' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'anybox.'}}xCallbackPaste({
  xSuccess: 'successURL',
  xError: 'errorURL',
})
```
