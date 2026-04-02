---
url: /protocol-launcher/zh/apps/todoist.md
---

# Todoist

[Todoist](https://www.todoist.com/) 是一款待办事项和任务管理应用程序。**Protocol Launcher** 允许您生成深度链接以在 Todoist 中打开视图和添加任务。

## 使用方式

有两种使用此库的方式：

* 按需导入（On-Demand）：从子路径导入支持 tree-shaking，保持较小的打包体积。
* 完整导入（Full Import）：从根包导入更方便，但会包含所有应用模块。

生产构建建议选择按需导入；快速脚本或演示可以使用完整导入。

### 打开应用

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'todoist' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'todoist.'}}open()
```

### 添加任务

向 Todoist 添加任务（仅限移动端）。这会打开并预填表单，但不会自动提交。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'addTask' : 'todoist' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'todoist.'}}addTask({
  content: 'Buy Milk',
  date: 'Tomorrow @ 14:00',
  priority: 4,
})
```

### 打开快速添加

打开全局快速添加面板（仅限桌面端，9.2.0+）。这会打开并预填面板，但不会自动提交。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openQuickAdd' : 'todoist' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'todoist.'}}openQuickAdd({
  content: 'My Task',
  description: 'This is a description',
})
```

### 搜索

在 Todoist 中搜索（Android 移动端和桌面端 9.10.0+）。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'search' : 'todoist' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'todoist.'}}search({
  query: 'Test & Today',
})
```

### 打开收件箱

打开 Todoist 的收件箱视图。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openInbox' : 'todoist' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'todoist.'}}openInbox()
```

### 打开今天

打开 Todoist 的今天视图。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openToday' : 'todoist' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'todoist.'}}openToday()
```

### 打开即将到期

打开 Todoist 的即将到期视图。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openUpcoming' : 'todoist' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'todoist.'}}openUpcoming()
```

### 打开项目

通过 ID 打开特定项目。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openProject' : 'todoist' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'todoist.'}}openProject({
  id: '128501470',
})
```

### 打开项目列表

打开项目列表视图。在桌面端，您可以选择按工作区 ID 过滤。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openProjects' : 'todoist' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'todoist.'}}openProjects({
  workspaceId: '1234',
})
```

### 打开标签

打开特定标签。在移动端使用标签名称，在桌面端使用标签 ID。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openLabel' : 'todoist' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'todoist.'}}openLabel({
  name: 'Urgent',
})
```

### 打开标签列表

打开标签列表视图（仅限移动端）。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openLabels' : 'todoist' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'todoist.'}}openLabels()
```

### 打开过滤器

通过 ID 打开特定过滤器。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openFilter' : 'todoist' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'todoist.'}}openFilter({
  id: '9',
})
```

### 打开过滤器列表

打开过滤器列表视图（仅限移动端）。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openFilters' : 'todoist' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'todoist.'}}openFilters()
```

### 打开过滤器和标签

打开过滤器和标签视图（仅限桌面端）。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openFiltersLabels' : 'todoist' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'todoist.'}}openFiltersLabels()
```

### 打开任务

通过 ID 打开特定任务。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openTask' : 'todoist' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'todoist.'}}openTask({
  id: '12345',
})
```

### 打开团队收件箱

打开团队收件箱视图（仅限移动端，企业账户）。非企业账户将被重定向到普通收件箱。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openTeaminbox' : 'todoist' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'todoist.'}}openTeaminbox()
```

### 打开模板

打开模板视图（仅限桌面端）。您可以选择通过 ID 打开特定模板。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openTemplates' : 'todoist' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'todoist.'}}openTemplates({
  id: '123',
})
```

### 打开通知

打开 Todoist 的通知视图。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openNotifications' : 'todoist' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'todoist.'}}openNotifications()
```

### 打开个人资料

打开个人资料视图（仅限移动端）。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openProfile' : 'todoist' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'todoist.'}}openProfile()
```
