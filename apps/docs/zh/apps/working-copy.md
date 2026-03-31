---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue'
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue'
import {
  open,
  branches,
  chain,
  checkout,
  clone,
  commit,
  deleteBranch,
  fetch,
  importLog,
  init,
  log,
  merge,
  move,
  openScreen,
  pull,
  push,
  read,
  repos,
  show,
  sshCommand,
  status,
  webdav,
  write,
  zip,
} from 'protocol-launcher/working-copy'
import { SelectInstallationMethod } from '../../.vitepress/components'
import * as constants from '../../.vitepress/constants/working-copy'

const currentMethod = ref('On-Demand')
const importPath = computed(() =>
  currentMethod.value === 'On-Demand' ? 'protocol-launcher/working-copy' : 'protocol-launcher',
)
</script>

# Working Copy

[Working Copy](https://workingcopyapp.com/) 是一款功能强大的 iOS Git 客户端，支持克隆、编辑、提交、推送等操作。**Protocol Launcher** 允许您生成深度链接以在 Working Copy 中执行 Git 操作。

## 使用方式

有两种使用此库的方式：

- **按需导入（On-Demand）**：从子路径导入支持 tree-shaking，保持较小的打包体积。
- **完整导入（Full Import）**：从根包导入更方便，但会包含所有应用模块。

生产构建建议选择**按需导入**；快速脚本或演示可以使用**完整导入**。

<SelectInstallationMethod v-model="currentMethod" />

## 简单命令

### 打开

打开 Working Copy 应用。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'workingCopy' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'workingCopy.'}}open()
```

<div class="flex justify-center">
  <VPLink :href="open()" target="_self">
    打开 Working Copy
  </VPLink>
</div>

### 克隆

让 Working Copy 打开克隆对话框并指定 URL。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'clone' : 'workingCopy' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'workingCopy.'}}clone({
  remote: 'https://github.com/zhensherlock/watermark-js-plus.git',
})
```

<div class="flex justify-center">
  <VPLink :href="clone(constants.cloneParams)" target="_self">
    克隆仓库
  </VPLink>
</div>

### 显示

在 Working Copy 中显示远程仓库，必要时会自动克隆。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'show' : 'workingCopy' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'workingCopy.'}}show({
  remote: 'https://github.com/zhensherlock/watermark-js-plus.git',
})
```

<div class="flex justify-center">
  <VPLink :href="show(constants.showParams)" target="_self">
    显示仓库
  </VPLink>
</div>

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

<div class="flex justify-center">
  <VPLink :href="openScreen(constants.openScreenParams)" target="_self">
    打开屏幕
  </VPLink>
</div>

### 导入日志

导入并显示 Working Copy 中的日志文件。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'importLog' : 'workingCopy' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'workingCopy.'}}importLog({
  lines: 'first line\nsecond line',
})
```

<div class="flex justify-center">
  <VPLink :href="importLog(constants.importLogParams)" target="_self">
    导入日志
  </VPLink>
</div>

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

<div class="flex justify-center">
  <VPLink :href="checkout(constants.checkoutParams)" target="_self">
    切换分支
  </VPLink>
</div>

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

<div class="flex justify-center">
  <VPLink :href="commit(constants.commitParams)" target="_self">
    提交更改
  </VPLink>
</div>

### 推送

将提交推送到远程仓库。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'push' : 'workingCopy' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'workingCopy.'}}push({
  key: '123ABC',
  repo: 'my repo',
})
```

<div class="flex justify-center">
  <VPLink :href="push(constants.pushParams)" target="_self">
    推送提交
  </VPLink>
</div>

### 拉取

从远程仓库拉取（获取并合并）。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'pull' : 'workingCopy' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'workingCopy.'}}pull({
  key: '123ABC',
  repo: 'my repo',
})
```

<div class="flex justify-center">
  <VPLink :href="pull(constants.pullParams)" target="_self">
    拉取更改
  </VPLink>
</div>

### 获取

从远程仓库获取。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'fetch' : 'workingCopy' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'workingCopy.'}}fetch({
  key: '123ABC',
  repo: 'my repo',
})
```

<div class="flex justify-center">
  <VPLink :href="fetch(constants.fetchParams)" target="_self">
    获取远程
  </VPLink>
</div>

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

<div class="flex justify-center">
  <VPLink :href="status(constants.statusParams)" target="_self">
    检查状态
  </VPLink>
</div>

### 日志

获取 Working Copy 中的提交日志。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'log' : 'workingCopy' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'workingCopy.'}}log({
  key: '123ABC',
  repo: 'my repo',
})
```

<div class="flex justify-center">
  <VPLink :href="log(constants.logParams)" target="_self">
    查看提交日志
  </VPLink>
</div>

### 分支

列出仓库中的所有本地和远程分支。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'branches' : 'workingCopy' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'workingCopy.'}}branches({
  key: '123ABC',
  repo: 'my repo',
})
```

<div class="flex justify-center">
  <VPLink :href="branches(constants.branchesParams)" target="_self">
    列出分支
  </VPLink>
</div>

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

<div class="flex justify-center">
  <VPLink :href="merge(constants.mergeParams)" target="_self">
    合并分支
  </VPLink>
</div>

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

<div class="flex justify-center">
  <VPLink :href="deleteBranch(constants.deleteBranchParams)" target="_self">
    删除分支
  </VPLink>
</div>

### 初始化

初始化一个新的空仓库。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'init' : 'workingCopy' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'workingCopy.'}}init({
  key: '123ABC',
  name: 'new repository',
})
```

<div class="flex justify-center">
  <VPLink :href="init(constants.initParams)" target="_self">
    初始化仓库
  </VPLink>
</div>

### 仓库列表

列出 Working Copy 中的所有仓库。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'repos' : 'workingCopy' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'workingCopy.'}}repos({
  key: '123ABC',
})
```

<div class="flex justify-center">
  <VPLink :href="repos(constants.reposParams)" target="_self">
    列出仓库
  </VPLink>
</div>

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

<div class="flex justify-center">
  <VPLink :href="move(constants.moveParams)" target="_self">
    移动文件
  </VPLink>
</div>

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

<div class="flex justify-center">
  <VPLink :href="read(constants.readParams)" target="_self">
    读取文件
  </VPLink>
</div>

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

<div class="flex justify-center">
  <VPLink :href="write(constants.writeParams)" target="_self">
    写入文件
  </VPLink>
</div>

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

<div class="flex justify-center">
  <VPLink :href="zip(constants.zipParams)" target="_self">
    创建 Zip 压缩包
  </VPLink>
</div>

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

<div class="flex justify-center">
  <VPLink :href="sshCommand(constants.sshCommandParams)" target="_self">
    运行 SSH 命令
  </VPLink>
</div>

### WebDAV

启动或停止内部 WebDAV 服务器。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'webdav' : 'workingCopy' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'workingCopy.'}}webdav({
  key: '123ABC',
  cmd: 'start',
})
```

<div class="flex justify-center">
  <VPLink :href="webdav(constants.webdavParams)" target="_self">
    切换 WebDAV
  </VPLink>
</div>

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

<div class="flex justify-center">
  <VPLink :href="chain(constants.chainParams)" target="_self">
    链式命令
  </VPLink>
</div>
