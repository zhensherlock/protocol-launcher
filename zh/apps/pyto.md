---
url: /protocol-launcher/zh/apps/pyto.md
---

# Pyto

[Pyto](https://pyto.readthedocs.io/) 是一款开源应用，可在 iPad 或 iPhone 上本地编写和运行 Python 代码。**Protocol Launcher** 允许你使用 x-callback URL 生成深度链接，以便在 Pyto 中运行 Python 代码。

## 使用方式

提供两种使用方式：

* 按需加载（通过子路径导入），支持 Tree Shaking，体积更小。
* 全量导入（从根包导入），使用简单，但会包含所有应用模块。

生产环境建议使用按需加载以减小体积；快速脚本或演示可选择全量导入。

### 打开应用

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'pyto' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pyto.'}}open()
```

### 运行代码

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'runCode' : 'pyto' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pyto.'}}runCode({
  code: 'import sys; print(sys.version)',
})
```

### 运行代码带回调

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'runCode' : 'pyto' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pyto.'}}runCode({
  code: 'import sys; print(sys.version)',
  xSuccess: 'shortcuts://run-shortcut?name=HandleResult',
})
```
