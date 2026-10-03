---
url: /protocol-launcher/zh/apps/zed.md
---

# Zed

[Zed](https://zed.dev) 是一款极简代码编辑器，专为速度和人机协作而设计。**Protocol Launcher** 允许你生成深度链接，用于在 Zed 中打开并配置资源。。

## 使用

提供两种使用方式：

* 按需加载（通过子路径导入），支持 Tree Shaking，体积更小。
* 全量导入（从根包导入），使用简单，但会包含所有应用模块。

生产环境建议使用按需加载以减小体积；快速脚本或演示可选择全量导入。

### 打开文件

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openFile' : 'zed' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'zed.'}}openFile({
  path: '{{ appStore.isWindows ? 'C:\Windows\System32\drivers\etc\hosts' : '/etc/hosts' }}',
  line: 1,
  column: 2,
})
```

### 打开文件夹

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openFolder' : 'zed' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'zed.'}}openFolder({
  path: '{{ appStore.isWindows ? 'C:\Windows\System32\drivers\etc' : '/etc' }}',
})
```

### 远程开发

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openRemote' : 'zed' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'zed.'}}openRemote({
  host: 'root@172.18.105.209:22',
  path: '/code/my-project',
})
```

### 克隆项目

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'cloneProject' : 'zed' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'zed.'}}cloneProject({
  repo: 'https://github.com/zhensherlock/protocol-launcher',
})
```

### 打开 Git 提交

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openGitCommit' : 'zed' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'zed.'}}openGitCommit({
  sha: '739420c',
  path: '/Users/dev/Documents/protocol-launcher',
})
```

### 打开扩展

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openExtension' : 'zed' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'zed.'}}openExtension({
  id: 'html',
})
```

### 打开智能体

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openAgent' : 'zed' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'zed.'}}openAgent({
  prompt: 'Hello World',
})
```

### 加入智能体

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'joinAgent' : 'zed' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'zed.'}}joinAgent({
  id: '12345',
})
```

### 打开设置

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openSettings' : 'zed' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'zed.'}}openSettings({
  path: 'autosave',
})
```

### 分享技能

将完整 SKILL.md 文件按 UTF-8 编码为不带填充的 base64url。Zed 会打开创建技能表单，由接收者检查内容并保存。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'installSkill' : 'zed' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'zed.'}}installSkill({
  content: '---\nname: review\ndescription: Review code changes\n---\n\nReview the current changes.'
})
```

## 官方文档

* [URL scheme 官方说明](https://zed.dev/docs/ai/skills#sharing-skills)
