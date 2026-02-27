---
url: /protocol-launcher/zh/apps/pearai.md
---

# PearAI

[PearAI](https://www.trypear.ai/) 是基于 VSCode 的开源 AI 代码编辑器。**Protocol Launcher** 允许你生成深度链接，用于在 PearAI 中打开并配置资源。

## 使用

提供两种使用方式：

* 按需加载（通过子路径导入），支持 Tree Shaking，体积更小。
* 全量导入（从根包导入），使用简单，但会包含所有应用模块。

生产环境建议使用按需加载以减小体积；快速脚本或演示可选择全量导入。

### 打开编辑器

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'pearai' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pearai.'}}open()
```

### 打开文件

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openFile' : 'pearai' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pearai.'}}openFile({
  path: '{{ appStore.isWindows ? 'C:\Windows\System32\drivers\etc\hosts' : '/etc/hosts' }}',
  line: 1,
  column: 2,
  openInNewWindow: true,
})
```

### 打开文件夹

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openFolder' : 'pearai' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pearai.'}}openFolder({
  path: '{{ appStore.isWindows ? 'C:\Windows\System32\drivers\etc' : '/etc' }}',
  openInNewWindow: true,
})
```

### 远程开发

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openRemote' : 'pearai' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pearai.'}}openRemote({
  type: 'ssh-remote',
  host: 'root@172.18.105.209:22',
  path: '/code/my-project',
})
```

### 克隆项目

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'cloneProject' : 'pearai' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pearai.'}}cloneProject({
  repo: 'https://github.com/zhensherlock/protocol-launcher',
})
```

### 打开设置

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openSettings' : 'pearai' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pearai.'}}openSettings()
```
