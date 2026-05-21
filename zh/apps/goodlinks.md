---
url: /protocol-launcher/zh/apps/goodlinks.md
---

# GoodLinks

[GoodLinks](https://goodlinks.app/) 是一个用于保存和阅读链接的稍后阅读应用。**Protocol Launcher** 允许您完全基于官方 URL scheme 生成 GoodLinks x-callback-url 动作：save、open、pick、last、random、unread、starred、untagged、read 和 tag。

GoodLinks 支持 `x-success`、`x-error` 和 `x-cancel` 回调 URL。需要时可分别通过 `xSuccess`、`xError` 和 `xCancel` 传入。

## 使用方式

有两种使用此库的方式：

* 按需导入（On-Demand）：从子路径导入支持 tree-shaking，保持较小的打包体积。
* 完整导入（Full Import）：从根包导入更方便，但会包含所有应用模块。

生产构建建议选择按需导入；快速脚本或演示可以使用完整导入。

### 保存链接

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'save' : 'goodlinks' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'goodlinks.'}}save({
  url: 'https://apple.com',
  starred: '1',
  tags: 'apple ios',
})
```

### 打开链接

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'goodlinks' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'goodlinks.'}}open({
  url: 'https://example.com/article',
})
```

### 选择链接详情

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'pick' : 'goodlinks' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'goodlinks.'}}pick({
  urlParam: 'link',
  titleParam: 'name',
  summaryParam: 'description',
})
```

### 打开最后一个未读链接

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'last' : 'goodlinks' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'goodlinks.'}}last()
```

### 打开随机未读链接

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'random' : 'goodlinks' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'goodlinks.'}}random()
```

### 显示未读列表

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'unread' : 'goodlinks' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'goodlinks.'}}unread()
```

### 显示星标列表

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'starred' : 'goodlinks' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'goodlinks.'}}starred()
```

### 显示未标记列表

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'untagged' : 'goodlinks' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'goodlinks.'}}untagged()
```

### 显示已读列表

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'read' : 'goodlinks' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'goodlinks.'}}read()
```

### 显示带标签的链接

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'tag' : 'goodlinks' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'goodlinks.'}}tag({
  name: 'apple',
})
```
