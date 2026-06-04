---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import { SelectInstallationMethod } from '../../.vitepress/components';

const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/onsong' : 'protocol-launcher');
</script>

# OnSong

[OnSong](https://onsongapp.com/) 是一款面向音乐人的数字歌本和 chord chart 应用。**Protocol Launcher** 允许你生成 OnSong URL scheme 链接。

## 使用

有两种方式使用此库：

- On-Demand 从子路径导入，有利于 tree-shaking 并保持包体积较小。
- Full Import 从根包导入，写起来更方便，但会包含所有应用模块。

生产构建建议使用 On-Demand；快速脚本或演示可以使用 Full Import。

<SelectInstallationMethod v-model="currentMethod" />

## 说明

下面的 helper 与 OnSong 官方开发者文档中关于导入内容、打开歌曲、导出歌曲数据和执行 action 的 URL scheme 保持一致。这里只暴露官方记录的 `onsong://`、`onsong://ImportData/...`、`onsong://open/songs`、`onsong://export/songs`、`onsong://action/list` 和 `onsong://action/<value>` URL 形状。

OnSong 的 Open Song 和 Actions URL API 需要 OnSong 2020.8 或更高版本。`importUrl()` 接收 `http://` 文件 URL，因为官方导入文档说明要把 `http://` 部分替换成 `onsong://`；如果文件托管在 SSL 地址，官方说明应重定向到 `https://` 位置。`importData()` 接收 Base64 编码后的文件数据，文件名扩展名很重要，因为 OnSong 会用它判断文件类型。

当前公开的 Open Song 页面提到导出结果可以包含额外 properties，但没有给出 query 参数名或完整 URL 语法。因此本模块不暴露 `properties` payload。

示例与测试使用合成的 song title、identifier、set name 和短 Base64 样例。不要公开受版权保护的歌词、完整乐谱内容，或真实用户曲库标识符。

### 打开

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'onsong' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'onsong.'}}open()
```

### 导入 URL

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'importUrl' : 'onsong' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'onsong.'}}importUrl({
  url: 'http://my.domain.com/files/go/here/Song%20Title.txt',
})
```

### 导入数据

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'importData' : 'onsong' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'onsong.'}}importData({
  filename: 'My Song Title.pdf',
  base64Data: 'BASE_64_ENCODED_DATA_HERE',
})
```

### 打开歌曲

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openSong' : 'onsong' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'onsong.'}}openSong({
  song: 'be-still',
})
```

### 打开歌曲列表

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openSongs' : 'onsong' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'onsong.'}}openSongs({
  song: ['be-still', 'beautiful-life', 'changes'],
  index: 1,
})
```

### 导出歌曲

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'exportSongs' : 'onsong' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'onsong.'}}exportSongs({
  collection: 'current',
  returnURL: 'http://mywebsite.com/receive?data=',
})
```

### 列出 Actions

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'listActions' : 'onsong' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'onsong.'}}listActions({
  returnURL: 'myapp://retrieve-actions/?data=',
})
```

### 执行 Action

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'performAction' : 'onsong' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'onsong.'}}performAction({
  action: 'SongSectionWasPressed',
  parameters: {
    sectionID: 'Chorus',
  },
})
```

## 生成的 URL

```ts
open()
// => 'onsong://'

importUrl({
  url: 'http://my.domain.com/files/go/here/Song%20Title.txt',
})
// => 'onsong://my.domain.com/files/go/here/Song%20Title.txt'

importData({
  filename: 'My Song Title.pdf',
  base64Data: 'BASE_64_ENCODED_DATA_HERE',
})
// => 'onsong://ImportData/My%20Song%20Title.pdf?BASE_64_ENCODED_DATA_HERE'

openSong({ song: 'be-still' })
// => 'onsong://open/songs?song=be-still'

openSongs({
  song: ['be-still', 'beautiful-life', 'changes'],
  index: 1,
})
// => 'onsong://open/songs/?song=be-still&song=beautiful-life&song=changes&index=1'

exportSongs({
  collection: 'current',
  returnURL: 'http://mywebsite.com/receive?data=',
})
// => 'onsong://export/songs?collection=current&returnURL=http%3A%2F%2Fmywebsite%2Ecom%2Freceive%3Fdata%3D'

listActions()
// => 'onsong://action/list'

performAction({ action: 'PositionWasAdjusted', amount: 0.5 })
// => 'onsong://action/PositionWasAdjusted?amount=0.5'
```

## 参考资料

- [OnSong Import Into OnSong](https://onsongapp.com/developers/import/)
- [OnSong Open Song](https://onsongapp.com/developers/open-song/)
- [OnSong Actions](https://onsongapp.com/developers/actions/)
