---
url: /protocol-launcher/zh/apps/evernote.md
---

# Evernote

[Evernote](https://evernote.com/) 是一款强大的笔记记录和组织应用，帮助您捕捉创意、管理任务和存储信息。使用 Evernote，您可以创建笔记、组织笔记本，并在所有设备间同步。**Protocol Launcher** 允许您生成深度链接以打开 Evernote 和查看特定笔记。

## 使用方法

有两种方式使用这个库：

* 按需从子路径导入支持 tree-shaking，保持打包体积小巧。
* 从根包完整导入比较方便，但会包含所有应用模块。

生产构建建议选择按需导入；快速脚本或演示使用完整导入即可。

### 打开 Evernote

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'evernote' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'evernote.'}}open()
```

### 查看笔记

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'viewNote' : 'evernote' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'evernote.'}}viewNote({
  userId: '123456',
  shardId: 's29',
  noteGuid: 'abcd-efgh-ijkl-mnop',
})
```
