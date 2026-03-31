---
url: /protocol-launcher/zh/apps/trello.md
---

# Trello

[Trello](https://trello.com/) 是一款协作工具，可将您的项目组织成看板。**Protocol Launcher** 允许您生成深度链接以在 Trello 中创建看板和卡片，并导航到特定内容。

## 使用方式

有两种使用此库的方式：

* 按需导入（On-Demand）：从子路径导入支持 tree-shaking，保持较小的打包体积。
* 完整导入（Full Import）：从根包导入更方便，但会包含所有应用模块。

生产构建建议选择按需导入；快速脚本或演示可以使用完整导入。

### 打开 Trello

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'trello' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'trello.'}}open()
```

### 创建看板

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'createBoard' : 'trello' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'trello.'}}createBoard({
  name: 'My New Board',
  organization: 'My Organization',
  permission: 'private',
  xSuccess: 'myapp://success',
  xError: 'myapp://failure',
})
```

### 创建卡片

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'createCard' : 'trello' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'trello.'}}createCard({
  shortlink: '81QRDHnt',
  name: 'MyCardName',
  description: 'MyCardDescription',
  listId: '526e7338ffa7dfb94d0084a7',
})
```

### 显示看板

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'showBoard' : 'trello' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'trello.'}}showBoard({
  shortlink: '81QRDHnt',
  xSource: 'MyTestApp',
})
```

### 显示卡片

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'showCard' : 'trello' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'trello.'}}showCard({
  id: '526e7338ffa7dfb94d0084a6',
  xSource: 'MyTestApp',
})
```
