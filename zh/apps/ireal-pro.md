---
url: /protocol-launcher/zh/apps/ireal-pro.md
---

# iReal Pro

[iReal Pro](https://www.irealpro.com/) 是一款用于和弦谱与伴奏练习的音乐应用。**Protocol Launcher** 允许你生成 iReal Pro URL scheme 链接。

## 使用

有两种方式使用此库：

* On-Demand 从子路径导入，有利于 tree-shaking 并保持包体积较小。
* Full Import 从根包导入，写起来更方便，但会包含所有应用模块。

生产构建建议使用 On-Demand；快速脚本或演示可以使用 Full Import。

## 说明

iReal Pro 官方文档记录了 `irealb://search?<title>`，用于打开歌曲搜索窗口。它还记录了 `irealbook://` 自定义和弦谱协议，包含六个组件：歌曲标题、作曲者、风格、调号、固定的 `n` 组件，以及和弦进行。

官方开发文档也提到过不透明的 `irealb://...` 导出歌曲和播放列表链接。由于 iReal Pro 没有公开这个导出格式的内部语法，本模块不会添加 `importSong()` 或 `importPlaylist()` 这类猜测式 helper。请直接使用从 iReal Pro 复制出来的导出 URL。

### Search

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'search' : 'iRealPro' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'iRealPro.'}}search({
  title: 'Song Title',
})
```

### Custom Chord Chart

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'customChordChart' : 'iRealPro' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'iRealPro.'}}customChordChart({
  title: 'Song Title',
  composer: 'LastName FirstName',
  style: 'Style',
  key: 'Ab',
  chordProgression: 'T44*A{C^7 |A-7 |D-9 |G7#5 }',
})
```

### Custom Chord Chart Playlist

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'customChordChartPlaylist' : 'iRealPro' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'iRealPro.'}}customChordChartPlaylist({
  songs: [
    {
      title: 'Song 1',
      composer: 'LastName FirstName',
      style: 'Style',
      key: 'Ab',
      chordProgression: 'T44*A{C^7 |A-7 |D-9 |G7#5 }',
    },
    {
      title: 'Song 2',
      composer: 'LastName FirstName',
      style: 'Style',
      key: 'Ab',
      chordProgression: 'T44*A{C^7 |A-7 |D-9 |G7#5 }',
    },
    {
      title: 'Song 3',
      composer: 'LastName FirstName',
      style: 'Style',
      key: 'Ab',
      chordProgression: 'T44*A{C^7 |A-7 |D-9 |G7#5 }',
    },
  ],
})
```

## 生成的 URL

```ts
search({ title: 'Song Title' })
// => 'irealb://search?Song%20Title'
```

```ts
customChordChart({
  title: 'Song Title',
  composer: 'LastName FirstName',
  style: 'Style',
  key: 'Ab',
  chordProgression: 'T44*A{C^7 |A-7 |D-9 |G7#5 }',
})
// => 'irealbook://Song%20Title%3DLastName%20FirstName%3DStyle%3DAb%3Dn%3DT44*A%7BC%5E7%20%7CA-7%20%7CD-9%20%7CG7%235%20%7D'
```

## 官方文档

* [iReal Pro Developer Docs](https://www.irealpro.com/developer-docs)
* [iReal Pro custom chord chart protocol](https://www.irealpro.com/ireal-pro-custom-chord-chart-protocol)
