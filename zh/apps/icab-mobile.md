---
url: /protocol-launcher/zh/apps/icab-mobile.md
---

# iCab Mobile

[iCab Mobile](http://www.icab-mobile.de/index.html) 是一款专为 iPhone、iPad 和 Apple Watch 设计的网页浏览器。**Protocol Launcher** 允许您生成深度链接以在 iCab Mobile 中打开 URL、添加书签和搜索。

## 使用方式

有两种使用此库的方式：

* 按需导入（On-Demand）：从子路径导入支持 tree-shaking，保持较小的打包体积。
* 完整导入（Full Import）：从根包导入更方便，但会包含所有应用模块。

生产构建建议选择按需导入；快速脚本或演示可以使用完整导入。

### 打开浏览器

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'icabMobile' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'icabMobile.'}}open()
```

### 打开 URL

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openUrl' : 'icabMobile' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'icabMobile.'}}openUrl({
  url: 'https://www.example.com/',
})
```

### 添加书签

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'addBookmark' : 'icabMobile' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'icabMobile.'}}addBookmark({
  url: 'https://www.example.com/',
  title: 'Example',
})
```

### 添加到指定文件夹

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'addBookmark' : 'icabMobile' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'icabMobile.'}}addBookmark({
  url: 'https://www.example.com/',
  title: 'Example',
  folder: 'Favorites',
})
```

### 搜索

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'search' : 'icabMobile' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'icabMobile.'}}search({
  query: 'hello world',
})
```
