---
url: /protocol-launcher/zh/apps/pushcut.md
---

# Pushcut

[Pushcut](https://www.pushcut.io/) 是一款自动化应用。**Protocol Launcher** 可以生成官方 Pushcut URL scheme 链接，用于打开 Pushcut 及其文档列出的视图。

Pushcut 官方 URL scheme 以 `pushcut://` 开头。文档列出的打开形式是 `pushcut://open/` 后接视图名：`notifications`、`triggers`、`widgets`、`server`、`account`、`runServer`、`monitorServer` 或 `notificationsLog`。

## 使用方式

有两种使用此库的方式：

* 按需导入（On-Demand）：从子路径导入支持 tree-shaking，保持较小的打包体积。
* 完整导入（Full Import）：从根包导入更方便，但会包含所有应用模块。

生产构建建议选择按需导入；快速脚本或演示可以使用完整导入。

### 打开 Pushcut

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'pushcut' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pushcut.'}}open()
```

### 打开视图

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openView' : 'pushcut' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pushcut.'}}openView({
  view: 'notifications',
})
```

### 打开 Notifications

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openNotifications' : 'pushcut' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pushcut.'}}openNotifications()
```

### 打开 Triggers

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openTriggers' : 'pushcut' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pushcut.'}}openTriggers()
```

### 打开 Widgets

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openWidgets' : 'pushcut' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pushcut.'}}openWidgets()
```

### 打开 Server

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openServer' : 'pushcut' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pushcut.'}}openServer()
```

### 打开 Account

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openAccount' : 'pushcut' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pushcut.'}}openAccount()
```

### Run Server

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'runServer' : 'pushcut' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pushcut.'}}runServer()
```

### Monitor Server

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'monitorServer' : 'pushcut' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pushcut.'}}monitorServer()
```

### 打开 Notifications Log

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openNotificationsLog' : 'pushcut' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pushcut.'}}openNotificationsLog()
```

## 参考资料

* [Pushcut URL Scheme](https://www.pushcut.io/support/url-scheme)
