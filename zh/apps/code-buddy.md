---
url: /protocol-launcher/zh/apps/code-buddy.md
---

# CodeBuddy

[CodeBuddy](https://codebuddy.ai) 是一款轻量但功能强大的代码编辑器。**Protocol Launcher** 允许您生成深度链接，以便在 CodeBuddy 中打开和配置资源。

## 使用

提供两种使用方式：

* 按需加载（通过子路径导入），支持 Tree Shaking，体积更小。
* 全量导入（从根包导入），使用简单，但会包含所有应用模块。

生产环境建议使用按需加载以减小体积；快速脚本或演示可选择全量导入。

### 打开编辑器

```ts-vue [{{currentMethodDesc}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'codeBuddy' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'codeBuddy.'}}open()
```

### 打开文件

```ts-vue [{{currentMethodDesc}}]
import { {{ currentMethod === 'On-Demand' ? 'openFile' : 'codeBuddy' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'codeBuddy.'}}openFile({
  path: '{{ appStore.isWindows ? 'C:\\Windows\\System32\\drivers\\etc\\hosts' : '/etc/hosts' }}',
  line: 1,
  column: 2,
  openInNewWindow: true,
})
```

### 打开目录

```ts-vue [{{currentMethodDesc}}]
import { {{ currentMethod === 'On-Demand' ? 'openFolder' : 'codeBuddy' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'codeBuddy.'}}openFolder({
  path: '{{ appStore.isWindows ? 'C:\\Windows\\System32\\drivers\\etc' : '/etc' }}',
  openInNewWindow: true,
})
```

### 远程开发

```ts-vue [{{currentMethodDesc}}]
import { {{ currentMethod === 'On-Demand' ? 'openRemote' : 'codeBuddy' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'codeBuddy.'}}openRemote({
  type: 'ssh-remote',
  host: 'root@172.18.105.209:22',
  path: '/code/my-project',
})
```

### 克隆项目

```ts-vue [{{currentMethodDesc}}]
import { {{ currentMethod === 'On-Demand' ? 'cloneProject' : 'codeBuddy' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'codeBuddy.'}}cloneProject({
  repo: 'https://github.com/zhensherlock/protocol-launcher',
})
```

### 打开扩展

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openExtension' : 'codeBuddy' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'codeBuddy.'}}openExtension({
  id: 'esbenp.prettier-vscode',
})
```

### 打开设置

```ts-vue [{{currentMethodDesc}}]
import { {{ currentMethod === 'On-Demand' ? 'openSettings' : 'codeBuddy' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'codeBuddy.'}}openSettings({
  path: 'terminal.integrated.suggest.enabled',
})
```
