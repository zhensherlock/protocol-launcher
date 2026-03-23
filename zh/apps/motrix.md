---
url: /protocol-launcher/zh/apps/motrix.md
---

# Motrix

[Motrix](https://motrix.app) 是一款全功能的下载管理器，支持 HTTP、FTP、BitTorrent、磁力链等多种下载协议。**Protocol Launcher** 允许您生成深度链接以创建下载任务和控制 Motrix。

## 使用方式

有两种使用此库的方式：

* 按需导入（On-Demand）：从子路径导入支持 tree-shaking，保持较小的打包体积。
* 完整导入（Full Import）：从根包导入更方便，但会包含所有应用模块。

生产构建建议选择按需导入；快速脚本或演示可以使用完整导入。

### 打开 Motrix

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'motrix' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'motrix.'}}open()
```

### 新建下载任务

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'newTask' : 'motrix' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'motrix.'}}newTask({
  uri: 'https://example.com/file.dmg',
  out: 'myfile.dmg',
})
```

### 新建 BitTorrent 任务

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'newBtTask' : 'motrix' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'motrix.'}}newBtTask()
```

### 打开任务列表

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openTaskList' : 'motrix' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'motrix.'}}openTaskList()
```

### 暂停所有任务

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'pauseAllTask' : 'motrix' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'motrix.'}}pauseAllTask()
```

### 恢复所有任务

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'resumeAllTask' : 'motrix' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'motrix.'}}resumeAllTask()
```

### 打开偏好设置

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'preferences' : 'motrix' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'motrix.'}}preferences()
```

### 打开关于页面

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'about' : 'motrix' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'motrix.'}}about()
```
