---
url: /protocol-launcher/zh/apps/telegram.md
---

# Telegram

[Telegram](https://telegram.org) 是一款基于云的即时通讯平台。**Protocol Launcher** 允许你生成深度链接，用于在 Telegram 中打开并配置资源。

## 使用

提供两种使用方式：

* 按需加载（通过子路径导入），支持 Tree Shaking，体积更小。
* 全量导入（从根包导入），使用简单，但会包含所有应用模块。

生产环境建议使用按需加载以减小体积；快速脚本或演示可选择全量导入。

### 打开 Telegram

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'telegram' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'telegram.'}}open()
```
