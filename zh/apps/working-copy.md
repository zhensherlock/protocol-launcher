---
url: /protocol-launcher/zh/apps/working-copy.md
---

# Working Copy

[Working Copy](https://workingcopyapp.com/) 是一款功能强大的 iOS Git 客户端，支持克隆、编辑、提交、推送等操作。**Protocol Launcher** 允许您生成深度链接以在 Working Copy 中执行 Git 操作。

## 使用方式

有两种使用此库的方式：

* **按需导入（On-Demand）**：从子路径导入支持 tree-shaking，保持较小的打包体积。
* **完整导入（Full Import）**：从根包导入更方便，但会包含所有应用模块。

生产构建建议选择**按需导入**；快速脚本或演示可以使用**完整导入**。

## 简单命令

### 打开

打开 Working Copy 应用。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'workingCopy' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'workingCopy.'}}open()
```

### 克隆

让 Working Copy 打开克隆对话框并指定 URL。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'clone' : 'workingCopy' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'workingCopy.'}}clone({
  remote: 'https://github.com/zhensherlock/watermark-js-plus.git',
})
```

### 显示

在 Working Copy 中显示远程仓库，必要时会自动克隆。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'show' : 'workingCopy' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'workingCopy.'}}show({
  remote: 'https://github.com/zhensherlock/watermark-js-plus.git',
})
```

### 打开屏幕

在 Working Copy 中打开特定屏幕。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openScreen' : 'workingCopy' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'workingCopy.'}}openScreen({
  repo: 'my project',
  path: 'README.md',
  mode: 'content',
})
```

### 导入日志

导入并显示 Working Copy 中的日志文件。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'importLog' : 'workingCopy' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'workingCopy.'}}importLog({
  lines: 'first line\nsecond line',
})
```

## X-Callback-URL 命令

### 切换分支

在 Working Copy 中切换分支。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'checkout' : 'workingCopy' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'workingCopy.'}}checkout({
  key: '123ABC',
  repo: 'my repo',
  branch: 'develop',
})
```

### 提交

在 Working Copy 中提交更改。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'commit' : 'workingCopy' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'workingCopy.'}}commit({
  key: '123ABC',
  repo: 'my repo',
  path: '',
  limit: 999,
  message: 'fix',
})
```

### 推送

将提交推送到远程仓库。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'push' : 'workingCopy' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'workingCopy.'}}push({
  key: '123ABC',
  repo: 'my repo',
})
```

### 拉取

从远程仓库拉取（获取并合并）。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'pull' : 'workingCopy' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'workingCopy.'}}pull({
  key: '123ABC',
  repo: 'my repo',
})
```

### 获取

从远程仓库获取。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'fetch' : 'workingCopy' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'workingCopy.'}}fetch({
  key: '123ABC',
  repo: 'my repo',
})
```

### 状态

列出 Working Copy 中的文件状态。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'status' : 'workingCopy' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'workingCopy.'}}status({
  key: '123ABC',
  repo: 'my repo',
  unchanged: true,
})
```

### 日志

获取 Working Copy 中的提交日志。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'log' : 'workingCopy' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'workingCopy.'}}log({
  key: '123ABC',
  repo: 'my repo',
})
```

### 分支

列出仓库中的所有本地和远程分支。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'branches' : 'workingCopy' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'workingCopy.'}}branches({
  key: '123ABC',
  repo: 'my repo',
})
```

### 合并

在 Working Copy 中合并分支。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'merge' : 'workingCopy' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'workingCopy.'}}merge({
  key: '123ABC',
  repo: 'my repo',
  branch: 'develop',
})
```

### 删除分支

删除 Working Copy 中的分支。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'deleteBranch' : 'workingCopy' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'workingCopy.'}}deleteBranch({
  key: '123ABC',
  repo: 'my repo',
  branch: 'develop',
})
```

### 初始化

初始化一个新的空仓库。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'init' : 'workingCopy' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'workingCopy.'}}init({
  key: '123ABC',
  name: 'new repository',
})
```

### 仓库列表

列出 Working Copy 中的所有仓库。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'repos' : 'workingCopy' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'workingCopy.'}}repos({
  key: '123ABC',
})
```

### 移动

在仓库内移动或重命名文件。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'move' : 'workingCopy' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'workingCopy.'}}move({
  key: '123ABC',
  repo: 'my repo',
  source: 'from.txt',
  destination: 'to.txt',
})
```

### 读取

从 Working Copy 读取文本文件内容。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'read' : 'workingCopy' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'workingCopy.'}}read({
  key: '123ABC',
  xSuccess: 'app://x-callback-url/read?text=',
  repo: 'my repo',
  path: 'README.md',
})
```

### 写入

写入到 Working Copy 中的现有或新文件。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'write' : 'workingCopy' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'workingCopy.'}}write({
  key: '123ABC',
  repo: 'my repo',
  path: 'README.md',
  text: 'hello there',
})
```

### 压缩

将多个文件归档为 base64 编码的 zip 文件。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'zip' : 'workingCopy' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'workingCopy.'}}zip({
  key: '123ABC',
  xSuccess: 'my-app://x-callback-url/read?path=/',
  repo: 'my repo',
})
```

### SSH 命令

在远程服务器上运行安全 shell 命令。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'sshCommand' : 'workingCopy' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'workingCopy.'}}sshCommand({
  key: '123ABC',
  server: 'remote.server.net',
  cmd: 'run tests',
})
```

### WebDAV

启动或停止内部 WebDAV 服务器。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'webdav' : 'workingCopy' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'workingCopy.'}}webdav({
  key: '123ABC',
  cmd: 'start',
})
```

### 链式命令

将多个 x-callback-url 命令链接在一起执行。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'chain' : 'workingCopy' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'workingCopy.'}}chain({
  key: '123ABC',
  repo: 'my repo',
  commands: [
    { command: 'commit', params: { message: 'fix' } },
    { command: 'push' },
  ],
})
```
