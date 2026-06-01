---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { search, searchGroup, searchInLocation } from 'protocol-launcher/tembo';
import { SelectInstallationMethod } from '../../.vitepress/components';
import {
  searchAlfredParams,
  searchGroupParams,
  searchInLocationParams,
  searchMultipleLocationsParams,
  searchParams,
} from '../../.vitepress/constants/tembo';

const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/tembo' : 'protocol-launcher');
</script>

# Tembo

[Tembo](https://houdah.com/tembo/) 是一款 macOS 文件搜索应用。**Protocol Launcher** 允许您生成 Tembo URL scheme 链接。

## 使用方式

有两种使用此库的方式：

- 按需导入（On-Demand）：从子路径导入支持 tree-shaking，保持较小的打包体积。
- 完整导入（Full Import）：从根包导入更方便，但会包含所有应用模块。

生产构建建议选择按需导入；快速脚本或演示可以使用完整导入。

<SelectInstallationMethod v-model="currentMethod" />

## 说明

Houdah 的 Tembo 官方文章记录的 URL 格式是 `tembo2://search?query=[QUERY]&location=[LOCATION]&group=[GROUP]`。`location` 和 `group` 是附加到搜索查询上的可选参数，`location` 参数可以重复，用于在 Tembo 的位置菜单中显示多个路径。

`group` 只能使用 Tembo 官方值：`APPLICATIONS`、`BOOKMARKS`、`CONTACTS`、`DIRECTORIES`、`CALENDAR`、`EVERNOTE`、`FONTS`、`IMAGES`、`MESSAGES`、`MOVIES`、`MUSIC`、`PDF`、`SOURCE`、`SYSTEM_PREFS` 和 `XML`。

同一篇官方文章也把 Alfred 自定义搜索 URL 写为 `tembo2://search?q={query}`。只有在需要这个文档中的短参数时，才传入 `q` 而不是 `query`。

### 搜索

使用查询文本启动 Tembo 搜索。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'search' : 'tembo' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'tembo.'}}search({
  query: 'Houdah Software',
})
```

<div class="flex justify-center">
  <VPLink :href="search(searchParams)" target="_self">
    搜索
  </VPLink>
</div>

### 在指定位置搜索

使用指定位置启动 Tembo 搜索。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'searchInLocation' : 'tembo' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'tembo.'}}searchInLocation({
  query: 'Houdah Software',
  location: '~/Documents',
})
```

<div class="flex justify-center">
  <VPLink :href="searchInLocation(searchInLocationParams)" target="_self">
    在指定位置搜索
  </VPLink>
</div>

### 在多个位置搜索

传入数组即可重复 Tembo 文档中的 `location` 参数。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'searchInLocation' : 'tembo' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'tembo.'}}searchInLocation({
  query: 'Houdah Software',
  location: ['~/Documents', '~/Desktop'],
  group: 'PDF',
})
```

<div class="flex justify-center">
  <VPLink :href="searchInLocation(searchMultipleLocationsParams)" target="_self">
    在多个位置搜索
  </VPLink>
</div>

### 按分组搜索

在官方分组中启动 Tembo 搜索。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'searchGroup' : 'tembo' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'tembo.'}}searchGroup({
  query: 'Houdah Software',
  group: 'PDF',
})
```

<div class="flex justify-center">
  <VPLink :href="searchGroup(searchGroupParams)" target="_self">
    按分组搜索
  </VPLink>
</div>

### Alfred 短查询参数

生成官方 Alfred 自定义搜索形式中的 `q` 参数。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'search' : 'tembo' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'tembo.'}}search({
  q: 'Houdah Software',
})
```

<div class="flex justify-center">
  <VPLink :href="search(searchAlfredParams)" target="_self">
    Alfred 搜索
  </VPLink>
</div>

## 生成的 URL

```ts
search({ query: 'Houdah Software' })
// => 'tembo2://search?query=Houdah%20Software'

search({
  query: 'Houdah Software',
  location: '~/Documents',
  group: 'PDF',
})
// => 'tembo2://search?query=Houdah%20Software&location=~/Documents&group=PDF'

searchInLocation({
  query: 'Houdah Software',
  location: '~/Documents',
})
// => 'tembo2://search?query=Houdah%20Software&location=~/Documents'

searchInLocation({
  query: 'Houdah Software',
  location: ['~/Documents', '~/Desktop'],
  group: 'PDF',
})
// => 'tembo2://search?query=Houdah%20Software&location=~/Documents&location=~/Desktop&group=PDF'

searchGroup({
  query: 'Houdah Software',
  group: 'PDF',
})
// => 'tembo2://search?query=Houdah%20Software&group=PDF'

search({ q: 'Houdah Software' })
// => 'tembo2://search?q=Houdah%20Software'
```

## 官方文档

- [Start a Tembo File Search from Alfred, Butler or LaunchBar](https://blog.houdah.com/2015/10/start-a-tembo-file-search-from-alfred-butler-or-launchbar/)
