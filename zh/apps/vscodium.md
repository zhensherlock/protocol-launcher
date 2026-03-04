---
url: /protocol-launcher/zh/apps/vscodium.md
---

# VSCodium

[VSCodium](https://vscodium.com/) 是一个由社区驱动、可自由使用的 Microsoft VS Code 二进制发行版。它基于 MIT 许可构建，默认关闭遥测，并移除了 Microsoft 专有定制。**Protocol Launcher** 允许你生成深度链接，用于在 VSCodium 中打开并配置资源。

## 使用

提供两种使用方式：

* 按需加载（通过子路径导入），支持 Tree Shaking，体积更小。
* 全量导入（从根包导入），使用简单，但会包含所有应用模块。

生产环境建议使用按需加载以减小体积；快速脚本或演示可选择全量导入。

### 打开编辑器

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'vscodium' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'vscodium.'}}open()
```

### 打开文件

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openFile' : 'vscodium' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'vscodium.'}}openFile({
  path: '{{ appStore.isWindows ? 'C:\Windows\System32\drivers\etc\hosts' : '/etc/hosts' }}',
  line: 1,
  column: 2,
  openInNewWindow: true,
})
```

### 打开文件夹

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openFolder' : 'vscodium' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'vscodium.'}}openFolder({
  path: '{{ appStore.isWindows ? 'C:\Windows\System32\drivers\etc' : '/etc' }}',
  openInNewWindow: true,
})
```

### 远程开发

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openRemote' : 'vscodium' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'vscodium.'}}openRemote({
  type: 'ssh-remote',
  host: 'root@172.18.105.209:22',
  path: '/code/my-project',
})
```

### 克隆项目

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'cloneProject' : 'vscodium' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'vscodium.'}}cloneProject({
  repo: 'https://github.com/zhensherlock/protocol-launcher',
})
```

### 打开扩展

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openExtension' : 'vscodium' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'vscodium.'}}openExtension({
  id: 'esbenp.prettier-vscode',
})
```

### 打开设置

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openSettings' : 'vscodium' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'vscodium.'}}openSettings({ 
  path: 'terminal.integrated.suggest.enabled',
})
```
