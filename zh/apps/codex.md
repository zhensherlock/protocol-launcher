---
url: /protocol-launcher/zh/apps/codex.md
---

# Codex

Codex 是一款为工程研发工作打造的 AI 编码工具，可以稳定完成功能开发、代码重构、系统迁移等各类任务。**Protocol Launcher** 允许你生成深度链接来与 Codex 进行交互。

## 使用

提供两种使用方式：

* 按需加载（通过子路径导入），支持 Tree Shaking，体积更小。
* 全量导入（从根包导入），使用简单，但会包含所有应用模块。

生产环境建议使用按需加载以减小体积；快速脚本或演示可选择全量导入。

### 打开 Codex

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'codex' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'codex.'}}open()
```

### 打开线程

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openThread' : 'codex' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'codex.'}}openThread()
```

### 打开设置

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openSettings' : 'codex' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'codex.'}}openSettings()
```
