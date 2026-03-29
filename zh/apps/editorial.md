---
url: /protocol-launcher/zh/apps/editorial.md
---

# Editorial

[Editorial](https://omz-software.com/editorial/) 是一款强大的 iOS 和 iPadOS 文本编辑器和自动化应用。它提供基于 Python 的脚本环境和工作流自动化功能。**Protocol Launcher** 允许您生成深度链接以在 Editorial 中打开文件、创建新文档、运行工作流和打开网页。

## 使用方式

有两种使用此库的方式：

* 按需导入（On-Demand）：从子路径导入支持 tree-shaking，保持较小的打包体积。
* 完整导入（Full Import）：从根包导入更方便，但会包含所有应用模块。

生产构建建议选择按需导入；快速脚本或演示可以使用完整导入。

### 打开 Editorial

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'back' : 'editorial' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'editorial.'}}back()
```

### 打开现有文件

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'editorial' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'editorial.'}}open({
  filename: 'myfile.txt',
})
```

### 从 Dropbox 打开文件

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'editorial' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'editorial.'}}open({
  filename: 'myfile.txt',
  root: 'dropbox',
})
```

### 打开文件并选中文本

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'editorial' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'editorial.'}}open({
  filename: 'myfile.txt',
  selection: '0-10',
})
```

### 打开文件并运行工作流

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'editorial' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'editorial.'}}open({
  filename: 'myfile.txt',
  command: 'My Workflow',
})
```

### 创建新文件

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'newFile' : 'editorial' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'editorial.'}}newFile({
  filename: 'newfile.txt',
})
```

### 在 Dropbox 中创建新文件

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'newFile' : 'editorial' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'editorial.'}}newFile({
  filename: 'newfile.txt',
  root: 'dropbox',
})
```

### 创建新文件并选中文本

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'newFile' : 'editorial' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'editorial.'}}newFile({
  filename: 'newfile.txt',
  selection: '0-10',
})
```

### 创建新文件并运行工作流

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'newFile' : 'editorial' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'editorial.'}}newFile({
  filename: 'newfile.txt',
  command: 'My Workflow',
})
```

### 打开网页 (HTTP)

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openWeb' : 'editorial' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'editorial.'}}openWeb({
  url: 'http://apple.com',
})
```

### 打开网页 (HTTPS)

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openWeb' : 'editorial' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'editorial.'}}openWeb({
  url: 'https://google.com',
})
```

### 运行工作流命令

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'command' : 'editorial' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'editorial.'}}command({
  command: 'My Workflow',
})
```

### 运行工作流并传入参数

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'command' : 'editorial' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'editorial.'}}command({
  command: 'My Workflow',
  input: 'some input',
})
```

### 运行工作流并设置成功回调

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'command' : 'editorial' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'editorial.'}}command({
  command: 'My Workflow',
  xSuccess: 'myapp://success',
})
```
