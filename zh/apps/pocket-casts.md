---
url: /protocol-launcher/zh/apps/pocket-casts.md
---

# Pocket Casts

[Pocket Casts](https://pocketcasts.com/) 是一款用于收听和关注节目的播客应用。**Protocol Launcher** 允许您生成 Pocket Casts iOS URL scheme 链接。

## 使用方式

有两种使用此库的方式：

* 按需导入（On-Demand）：从子路径导入支持 tree-shaking，保持较小的打包体积。
* 完整导入（Full Import）：从根包导入更方便，但会包含所有应用模块。

生产构建建议选择按需导入；快速脚本或演示可以使用完整导入。

### 打开应用

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'pocketCasts' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pocketCasts.'}}open()
```

### 播放已暂停的节目

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'play' : 'pocketCasts' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pocketCasts.'}}play()
```

### 暂停正在播放的节目

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'pause' : 'pocketCasts' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pocketCasts.'}}pause()
```

### 通过 Feed URL 关注播客

Pocket Casts 要求 feed URL 不带开头的 `http://`。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'subscribe' : 'pocketCasts' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pocketCasts.'}}subscribe({
  feedUrlWithoutHttp: 'example.com/podcast/rss',
})
```
