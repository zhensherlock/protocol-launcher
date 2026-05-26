---
url: /protocol-launcher/zh/apps/pythonista.md
---

# Pythonista

[Pythonista](https://omz-software.com/pythonista/) 是一款 iOS 上的 Python 开发环境。**Protocol Launcher** 允许你生成深度链接，用来打开 Pythonista、编辑或运行脚本、传入命令行参数、选择 Python 解释器版本，以及执行内联代码。

## 使用方式

提供两种使用方式：

* 按需加载（通过子路径导入），支持 Tree Shaking，体积更小。
* 全量导入（从根包导入），使用简单，但会包含所有应用模块。

生产环境建议使用按需加载以减小体积；快速脚本或演示可选择全量导入。

### 打开应用

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'pythonista' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pythonista.'}}open()
```

### 打开 Pythonista 3

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'pythonista' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pythonista.'}}open({
  scheme: 'pythonista3',
})
```

### 打开 Pythonista 2

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'pythonista' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pythonista.'}}open({
  scheme: 'pythonista2',
})
```

### 打开脚本

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openScript' : 'pythonista' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pythonista.'}}openScript({
  path: 'MyScript.py',
})
```

### 打开 iCloud 脚本

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openScript' : 'pythonista' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pythonista.'}}openScript({
  path: 'MyScript.py',
  root: 'icloud',
})
```

### 通过路径打开 iCloud 脚本

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openScript' : 'pythonista' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pythonista.'}}openScript({
  path: 'iCloud/MyScript.py',
})
```

### 运行脚本

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'runScript' : 'pythonista' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pythonista.'}}runScript({
  path: 'MyScript.py',
})
```

### 运行 iCloud 脚本

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'runScript' : 'pythonista' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pythonista.'}}runScript({
  path: 'MyScript.py',
  root: 'icloud',
})
```

### 使用 args 运行脚本

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'runScript' : 'pythonista' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pythonista.'}}runScript({
  path: 'MyScript',
  args: 'foo bar',
})
```

### 使用 argv 运行脚本

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'runScript' : 'pythonista' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pythonista.'}}runScript({
  path: 'MyScript',
  argv: ['foo', 'bar'],
})
```

### 使用 version 运行脚本

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'runScript' : 'pythonista' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pythonista.'}}runScript({
  path: 'MyScript.py',
  version: 3,
})
```

### 使用 py 运行脚本

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'runScript' : 'pythonista' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pythonista.'}}runScript({
  path: 'MyScript.py',
  py: 3,
})
```

### 执行代码

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'exec' : 'pythonista' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pythonista.'}}exec({
  code: 'print("Hello from Pythonista")',
})
```
