---
url: /protocol-launcher/zh/apps/screens.md
---

# Screens

[Screens](https://edovia.com/en/screens/) 是 Edovia 的远程桌面应用，可连接 Mac、PC、Linux PC 和 Raspberry Pi 设备。**Protocol Launcher** 允许你生成用于已保存 Screen、VNC 连接和 SSH 安全连接的深度链接。

## 使用

提供两种使用方式：

* 按需加载（通过子路径导入），支持 Tree Shaking，体积更小。
* 全量导入（从根包导入），使用简单，但会包含所有应用模块。

生产环境建议使用按需加载以减小体积；快速脚本或演示可选择全量导入。

### 打开已保存的 Screen

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openSavedScreen' : 'screens' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'screens.'}}openSavedScreen({
  target: 'Johns-MacBook-Pro.local',
  guest: true,
})
```

### 通过 VNC 连接

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'vnc' : 'screens' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'screens.'}}vnc({
  host: '192.168.1.14',
  port: 5900,
  username: 'john',
  observe: true,
})
```

### 通过 SSH 连接

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'ssh' : 'screens' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'screens.'}}ssh({
  host: 'server.example.com',
  username: 'john',
  port: 22,
  sshKey: 'My Work Key',
})
```

这里仅暴露 Edovia 官方文档列出的参数：`ssh://` URL 的 `ssh-key`，以及 `screens://`、`vnc://`、`ssh://` 都支持的 `guest=true` / `observe=true`。请参考 [Screens 官方 URL Schemes 文档](https://help.edovia.com/en/screens-5/features/url-schemes)。
