---
url: /protocol-launcher/zh/apps/steam.md
---

# Steam

[Steam](https://store.steampowered.com/) 是由 Valve 公司开发的数字发行平台，用于购买和游玩视频游戏。**Protocol Launcher** 允许你生成深度链接以与 Steam 客户端交互，例如启动游戏、打开商店页面、管理好友等。

## 使用方式

有两种使用此库的方式：

* 按需导入（On-Demand）：从子路径导入支持 tree-shaking，保持较小的打包体积。
* 完整导入（Full Import）：从根包导入更方便，但会包含所有应用模块。

生产构建建议选择按需导入；快速脚本或演示可以使用完整导入。

### 打开 Steam

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'steam' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'steam.'}}open()
```

### 打开 URL

在系统默认浏览器中打开 URL。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openUrl' : 'steam' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'steam.'}}openUrl({
  url: 'https://store.steampowered.com/',
})
```

### 打开商店页面

打开应用的商店页面。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'store' : 'steam' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'steam.'}}store({
  id: 730,
})
```

### 启动游戏

运行应用程序。如果需要会自动安装。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'launch' : 'steam' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'steam.'}}launch({
  id: 730,
  args: '-windowed',
})
```

### 安装应用

安装应用程序。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'install' : 'steam' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'steam.'}}install({
  id: 8230,
})
```

### 卸载应用

删除指定应用的缓存文件。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'uninstall' : 'steam' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'steam.'}}uninstall({
  id: 8230,
})
```

### 验证本地文件

验证应用的本地文件。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'validate' : 'steam' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'steam.'}}validate({
  id: 730,
})
```

### 好友操作

打开好友窗口并执行可选操作。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'friends' : 'steam' }} } from '{{ importPath }}'

// 添加好友
const url = {{currentMethod === 'On-Demand' ? '' : 'steam.'}}friends({
  action: 'add',
  id: '12345678',
})
```

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'friends' : 'steam' }} } from '{{ importPath }}'

// 发送消息
const url = {{currentMethod === 'On-Demand' ? '' : 'steam.'}}friends({
  action: 'message',
  id: '12345678',
})
```

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'friends' : 'steam' }} } from '{{ importPath }}'

// 设置状态为在线
const url = {{currentMethod === 'On-Demand' ? '' : 'steam.'}}friends({
  action: 'status/online',
})
```

### 打开设置

打开 Steam 设置页面。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'settings' : 'steam' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'steam.'}}settings({
  page: 'downloads',
})
```

### 打开组件

打开 Steam 窗口/组件。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openComponent' : 'steam' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'steam.'}}openComponent({
  component: 'bigpicture',
})
```

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openComponent' : 'steam' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'steam.'}}openComponent({
  component: 'console',
})
```

### 导航

打开 Steam 导航窗口但不使其活动。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'nav' : 'steam' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'steam.'}}nav({
  component: 'downloads',
})
```

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'nav' : 'steam' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'steam.'}}nav({
  component: 'games/details',
  param: '730',
})
```

### 连接服务器

连接到 IP 指定的服务器。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'connect' : 'steam' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'steam.'}}connect({
  ip: '192.0.2.1',
  port: 27015,
})
```

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'connect' : 'steam' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'steam.'}}connect({
  ip: '192.0.2.1',
  port: 27015,
  password: 'secret',
})
```

[//]: # "### 添加非 Steam 游戏"

[//]: #

[//]: # "打开 Steam 清单菜单以添加非 Steam 游戏。"

[//]: #

[//]: # "```ts-vue [{{currentMethod}}]"

[//]: # "import { {{ currentMethod === 'On-Demand' ? 'addNonSteamGame' : 'steam' }} } from '{{ importPath }}'"

[//]: #

[//]: # "const url = {{currentMethod === 'On-Demand' ? '' : 'steam.'}}addNonSteamGame()"

[//]: # "```"

[//]: #

[//]: # "<div class=\"flex justify-center\">"

[//]: # "  <VPLink :href=\"addNonSteamGame()\" target=\"_self\">"

[//]: # "    添加非 Steam 游戏"

[//]: # "  </VPLink>"

[//]: # "</div>"

### 退出 Steam

退出 Steam 应用程序。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'exit' : 'steam' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'steam.'}}exit()
```

### 应用新闻

打开应用的新闻页面。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'appNews' : 'steam' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'steam.'}}appNews({
  id: 730,
})
```

### 游戏属性

打开指定游戏的属性。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'gameProperties' : 'steam' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'steam.'}}gameProperties({
  id: 730,
})
```

### 控制器配置

打开指定游戏的控制器配置器（Steam Input）。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'controllerConfig' : 'steam' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'steam.'}}controllerConfig({
  id: 730,
})
```

### 备份

打开备份向导并检查指定的应用程序。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'backup' : 'steam' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'steam.'}}backup({
  id: 730,
})
```

### 支持

启动 Steam 支持工具。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'support' : 'steam' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'steam.'}}support({
  params: '730',
})
```

### 命名页面

打开 Steam 中的特殊命名网页。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'url' : 'steam' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'steam.'}}url({
  page: 'Store',
})
```

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'url' : 'steam' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'steam.'}}url({
  page: 'SteamWorkshop',
})
```

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'url' : 'steam' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'steam.'}}url({
  page: 'StoreAppPage',
  param: '730',
})
```
