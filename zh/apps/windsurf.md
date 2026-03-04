---
url: /protocol-launcher/zh/apps/windsurf.md
---

# Windsurf

[Windsurf](https://windsurf.com/) 是由 [Codeium](https://codeium.com/) 开发的首款智能体（agentic）IDE。它搭载了 **Cascade** 智能体，能够深度理解代码库并实时感知你的操作，在处理复杂开发任务的同时让你保持流畅。**Protocol Launcher** 允许你生成深度链接，用于在 Windsurf 中打开并配置资源。

## 使用

提供两种使用方式：

* 按需加载（通过子路径导入），支持 Tree Shaking，体积更小。
* 全量导入（从根包导入），使用简单，但会包含所有应用模块。

生产环境建议使用按需加载以减小体积；快速脚本或演示可选择全量导入。

### 打开编辑器

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'windsurf' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'windsurf.'}}open()
```

### 打开文件

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openFile' : 'windsurf' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'windsurf.'}}openFile({
  path: '{{ appStore.isWindows ? 'C:\Windows\System32\drivers\etc\hosts' : '/etc/hosts' }}',
  line: 1,
  column: 2,
  openInNewWindow: true,
})
```

### 打开文件夹

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openFolder' : 'windsurf' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'windsurf.'}}openFolder({
  path: '{{ appStore.isWindows ? 'C:\Windows\System32\drivers\etc' : '/etc' }}',
  openInNewWindow: true,
})
```

### 远程开发

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openRemote' : 'windsurf' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'windsurf.'}}openRemote({
  type: 'ssh-remote',
  host: 'root@172.18.105.209:22',
  path: '/code/my-project',
})
```

### 克隆项目

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'cloneProject' : 'windsurf' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'windsurf.'}}cloneProject({
  repo: 'https://github.com/zhensherlock/protocol-launcher',
})
```

### 打开扩展

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openExtension' : 'windsurf' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'windsurf.'}}openExtension({
  id: 'esbenp.prettier-vscode',
})
```

### 打开设置

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openSettings' : 'windsurf' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'windsurf.'}}openSettings({
  path: 'terminal.integrated.suggest.enabled',
})
```
