---
url: /protocol-launcher/zh/apps/nova.md
---

# Nova

[Nova](https://nova.app/) 是一款专为 macOS 设计的快速、灵活且功能强大的原生文本编辑器。**Protocol Launcher** 允许你生成深度链接，用于在 Nova 中打开文件、文件夹、克隆仓库等。

## 使用

提供两种使用方式：

* 按需加载（通过子路径导入），支持 Tree Shaking，体积更小。
* 全量导入（从根包导入），使用简单，但会包含所有应用模块。

生产环境建议使用按需加载以减小体积；快速脚本或演示可选择全量导入。

### 打开编辑器

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'nova' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'nova.'}}open()
```

### 打开文件

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openFile' : 'nova' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'nova.'}}openFile({
  path: '/etc/hosts',
  line: 1,
  column: 2,
})
```

### 打开文件夹

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openFolder' : 'nova' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'nova.'}}openFolder({
  path: '/etc',
})
```

### 克隆项目

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'cloneProject' : 'nova' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'nova.'}}cloneProject({
  url: 'https://github.com/zhensherlock/protocol-launcher.git',
})
```

### 打开扩展

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openExtension' : 'nova' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'nova.'}}openExtension({
  id: 'com.panic.Playdate',
})
```

### 注册 Nova

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'register' : 'nova' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'nova.'}}register({
  serial: 'NOVA-XXXX-XXXX-XXXX-XXXX-XXXX-X',
})
```
