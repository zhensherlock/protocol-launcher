---
url: /protocol-launcher/zh/apps/apple-map.md
---

# Apple 地图

[Apple 地图](https://www.apple.com.cn/maps/) 是苹果公司开发的网络地图服务。它提供路线指引、预计到达时间和日常通勤服务。**Protocol Launcher** 允许你生成深度链接来打开 Apple 地图、搜索位置、获取路线和探索地点。

## 使用方式

有两种使用此库的方式：

* 按需从子路径导入支持 tree-shaking，保持打包体积小巧。
* 从根包完整导入比较方便，但会包含所有应用模块。

生产构建请选择按需导入；完整导入适合快速脚本或演示。

### 打开地图

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'appleMap' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'appleMap.'}}open()
```

### 搜索地点

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'appleMap' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'appleMap.'}}open({
  q: '美食',
})
```

### 指定位置搜索

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'appleMap' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'appleMap.'}}open({
  q: '美食',
  sll: '31.2989,120.5853',
})
```

### 附近搜索

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'appleMap' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'appleMap.'}}open({
  q: '美食',
  near: '31.2989,120.5853',
})
```

### 居中地图

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'appleMap' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'appleMap.'}}open({
  ll: '31.2989,120.5853',
})
```

### 居中地图并缩放

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'appleMap' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'appleMap.'}}open({
  ll: '31.2989,120.5853',
  z: 15,
})
```

### 创建标记

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'appleMap' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'appleMap.'}}open({
  q: '苏州园林',
  ll: '31.3201,120.6195',
})
```

### 卫星视图

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'appleMap' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'appleMap.'}}open({
  t: 'k',
  ll: '31.2989,120.5853',
})
```

### 显示地址

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'appleMap' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'appleMap.'}}open({
  address: '江苏省苏州市工业园区月亮湾路 10 号',
})
```

### 驾车路线

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'appleMap' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'appleMap.'}}open({
  daddr: '金鸡湖',
  dirflg: 'd',
})
```

### 步行路线

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'appleMap' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'appleMap.'}}open({
  daddr: '平江路',
  dirflg: 'w',
})
```

### 公共交通路线

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'appleMap' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'appleMap.'}}open({
  daddr: '拙政园',
  dirflg: 'r',
})
```

### 完整路线

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'appleMap' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'appleMap.'}}open({
  saddr: '苏州火车站',
  daddr: '金鸡湖',
  dirflg: 'd',
})
```
