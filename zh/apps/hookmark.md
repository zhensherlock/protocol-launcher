---
url: /protocol-launcher/zh/apps/hookmark.md
---

# Hookmark

[Hookmark](https://hookproductivity.com/) 是一款 macOS 应用程序，可让您在文件、电子邮件、网页等之间创建上下文书签和双向链接。**Protocol Launcher** 允许您生成深度链接以在 Hookmark 中打开资源。

## 使用方式

有两种使用此库的方式：

* 按需导入（On-Demand）：从子路径导入支持 tree-shaking，保持较小的打包体积。
* 完整导入（Full Import）：从根包导入更方便，但会包含所有应用模块。

生产构建建议选择按需导入；快速脚本或演示可以使用完整导入。

### 打开 Hookmark

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'hookmark' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'hookmark.'}}open()
```

### 打开通讯录

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openAddressBook' : 'hookmark' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'hookmark.'}}openAddressBook()
```

### 打开电子邮件

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openEmail' : 'hookmark' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'hookmark.'}}openEmail({
  id: '<CABc123xyz@mail.gmail.com>',
})
```

### 打开文件

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openFile' : 'hookmark' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'hookmark.'}}openFile({
  path: '/Applications',
  name: 'Applications',
})
```

### 打开备忘录

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openNotes' : 'hookmark' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'hookmark.'}}openNotes()
```

### 打开搜索

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openSearch' : 'hookmark' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'hookmark.'}}openSearch({
  query: 'project',
})
```

### 打开 Spotify

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openSpotify' : 'hookmark' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'hookmark.'}}openSpotify()
```
