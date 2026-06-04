---
url: /protocol-launcher/zh/apps/locus-map.md
---

# Locus Map

[Locus Map](https://www.locusmap.app/) 是一款户外导航与地图应用。**Protocol Launcher** 允许你生成 Locus Map URL scheme 链接。

## 使用

有两种方式使用此库：

* On-Demand 从子路径导入，有利于 tree-shaking 并保持包体积较小。
* Full Import 从根包导入，写起来更方便，但会包含所有应用模块。

生产构建建议使用 On-Demand；快速脚本或演示可以使用 Full Import。

## 说明

Locus Actions 官方文档定义了 `locus-actions://` URL，用来让 Locus Map 读取一个托管在服务器上的 XML 文件。这个 XML 文档描述 Locus Map 要执行的操作。

本模块只暴露 Locus Map 官方文档记录的 action：`download` 和 `event`。没有出现在官方 Locus Actions 页面中的地图搜索、导航、创建点位等能力，本模块不会添加。

`actions()` 接收 `https://` XML 文件 URL，并转换为官方记录的 `locus-actions://https/<host>/<path>` 形式。`downloadAction()` 和 `eventAction()` 返回只包含一个 action 的完整 XML 文档。

### Actions URL

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'actions' : 'locusMap' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'locusMap.'}}actions({
  url: 'https://example.com/path/to/actions.xml',
})
```

### Download Action

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'downloadAction' : 'locusMap' }} } from '{{ importPath }}'

const xml = {{currentMethod === 'On-Demand' ? '' : 'locusMap.'}}downloadAction({
  source: {
    url: 'http://example.com/maps/map.tar',
    size: 22075830,
    date: '2012-06-29_19-11-54',
  },
  dest: '/maps/map.tar',
  after: 'refreshMap',
})
```

`after` 字段只支持官方值：`refreshMap`、`importData`、`displayData`、`extract` 和 `deleteSource`。传入数组时会生成官方示例中的管道分隔组合，例如 `extract|deleteSource|refreshMap`。

### Event Action

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'eventAction' : 'locusMap' }} } from '{{ importPath }}'

const xml = {{currentMethod === 'On-Demand' ? '' : 'locusMap.'}}eventAction({
  key: 'setMapVector',
  value: '/mapsVector/DownloadedMap.map',
})
```

`key` 字段只支持官方值：`setMapVector` 和 `setMapVectorTheme`。

## 生成的 URL 和 XML

```ts
actions({
  url: 'https://example.com/path/to/actions.xml',
})
// => 'locus-actions://https/example.com/path/to/actions.xml'
```

```xml
<?xml version="1.0" encoding="utf-8"?>
<locusActions>
  <download>
    <source size="22075830" date="2012-06-29_19-11-54">
      <![CDATA[http://example.com/maps/map.tar]]>
    </source>
    <dest><![CDATA[/maps/map.tar]]></dest>
    <after>refreshMap</after>
  </download>
</locusActions>
```

```xml
<?xml version="1.0" encoding="utf-8"?>
<locusActions>
  <event>
    <key>setMapVector</key>
    <value><![CDATA[/mapsVector/DownloadedMap.map]]></value>
  </event>
</locusActions>
```

## 官方文档

* [Locus Actions](https://docs.locusmap.app/doku.php?id=manual%3Aadvanced%3Acustomization%3Aactions)
