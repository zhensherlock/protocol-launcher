---
url: /protocol-launcher/zh/apps/tablepro.md
---

# TablePro

[TablePro](https://tablepro.app/) 是一款用于浏览、查询和管理数据库的数据库客户端。**Protocol Launcher** 可以生成 TablePro URL scheme 链接。

## 用法

有两种方式使用此库：

* On-Demand 从子路径导入，有利于 tree-shaking 并保持包体积较小。
* Full Import 从根包导入，写起来更方便，但会包含所有应用模块。

生产构建建议使用 On-Demand；快速脚本或演示可以使用 Full Import。

## 说明

TablePro 官方文档将 `tablepro://` scheme 用于 GUI 导航和集成启动流程。该 scheme 覆盖打开连接、数据表或查询标签页，以及 MCP 配对和集成启动。数据交换不属于 URL scheme。

连接路径使用 connection UUID，而不是显示名称。TablePro 在 0.37 版本移除了旧的 `tablepro://connect/<name>/...` 路径，所以本模块只生成基于 UUID 的 URL。

查询 URL 会打开一个新的查询标签页并预填 SQL；TablePro 会显示确认对话框，且不会自动执行 SQL。TablePro 官方文档说明通过 URL scheme 传入的 SQL 上限是 51,200 个字符。连接导入 URL 不接受密码。

### Connect

通过 UUID 打开已保存的 TablePro 连接。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'connect' : 'tablepro' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'tablepro.'}}connect({
  connectionId: '9f1f0c3e-2e3d-4b14-9c3a-1d2f4ad1f6f1',
})
```

### 打开数据表

在当前数据库、指定数据库，或指定数据库和 schema 中打开数据表。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openTable' : 'tablepro' }} } from '{{ importPath }}'

const currentDatabaseUrl = {{currentMethod === 'On-Demand' ? '' : 'tablepro.'}}openTable({
  connectionId: '9f1f0c3e-2e3d-4b14-9c3a-1d2f4ad1f6f1',
  table: 'users',
})

const databaseUrl = {{currentMethod === 'On-Demand' ? '' : 'tablepro.'}}openTable({
  connectionId: '9f1f0c3e-2e3d-4b14-9c3a-1d2f4ad1f6f1',
  database: 'analytics',
  table: 'events',
})

const schemaUrl = {{currentMethod === 'On-Demand' ? '' : 'tablepro.'}}openTable({
  connectionId: '9f1f0c3e-2e3d-4b14-9c3a-1d2f4ad1f6f1',
  database: 'app',
  schema: 'reporting',
  table: 'daily_events',
})
```

### 打开查询

打开一个新查询标签页，并预填 SQL。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openQuery' : 'tablepro' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'tablepro.'}}openQuery({
  connectionId: '9f1f0c3e-2e3d-4b14-9c3a-1d2f4ad1f6f1',
  sql: 'SELECT * FROM users LIMIT 10',
})
```

### 配对

启动 TablePro MCP 配对流程。用户批准后，TablePro 会通过 `redirect` URL 返回一次性 code。TablePro 文档列出的 `scopes` 值是 `readOnly`、`readWrite` 和 `fullAccess`。省略时，`scopes` 默认为 `readOnly`，`connection-ids` 默认为全部连接。query 参数是请求，不是授权结果。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'pair' : 'tablepro' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'tablepro.'}}pair({
  client: 'Raycast on macbook-pro',
  challenge: 'REPLACE_WITH_PKCE_CHALLENGE',
  redirect: 'raycast://extensions/ngoquocdat/tablepro/pair-callback',
  scopes: ['readOnly', 'readWrite'],
  connectionIds: ['9f1f0c3e-2e3d-4b14-9c3a-1d2f4ad1f6f1'],
})
```

### 启动 MCP

懒启动 TablePro MCP server。TablePro 会在 `51000-52000` 范围内选择空闲端口启动 server，并在 `~/Library/Application Support/TablePro/mcp-handshake.json` 写入 handshake 文件。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'startMCP' : 'tablepro' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'tablepro.'}}startMCP()
```

### 导入连接

通过 URL 参数创建已保存连接，并打开 TablePro 的连接编辑器供用户确认。必填参数是 `name`、`host` 和 `type`。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'importConnection' : 'tablepro' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'tablepro.'}}importConnection({
  name: 'Staging',
  host: 'db.example.com',
  port: 5432,
  type: 'postgresql',
  username: 'admin',
  database: 'mydb',
  safeModeLevel: 'readOnly',
  aiPolicy: 'askEachTime',
  ssh: 1,
  sshHost: 'bastion.example.com',
  sshAuthMethod: 'privateKey',
  sshPrivateKeyPath: '/Users/me/.ssh/id_ed25519',
  sslMode: 'verify-full',
  sslCaCertPath: '/Users/me/certs/ca.pem',
  af_replicaSet: 'myrs',
})
```

官方 URL scheme 的 core 参数包括 `port`、`username`、`database`、`color`、`tagName`、`groupName`、`safeModeLevel` 和 `aiPolicy`。`safeModeLevel` 接受 `silent`、`alert`、`alertFull`、`safeMode`、`safeModeFull` 或 `readOnly`。`aiPolicy` 接受 `useDefault`、`alwaysAllow`、`askEachTime` 或 `never`。

官方 URL scheme 的 SSH 参数包括 `sshHost`、`sshPort`、`sshUsername`、`sshAuthMethod`、`sshPrivateKeyPath`、`sshUseSSHConfig`、`sshAgentSocketPath`、`sshJumpHosts` 和 `sshTotpMode`。设置 `ssh=1` 启用 SSH tunneling。`sshAuthMethod` 接受 `password`、`privateKey`、`agent` 或 `keyboardInteractive`。

官方 URL scheme 的 SSL 参数包括 `sslMode`、`sslCaCertPath`、`sslClientCertPath` 和 `sslClientKeyPath`。`sslMode` 接受 `disabled`、`preferred`、`required`、`verify-ca` 或 `verify-full`。

插件专用字段使用官方 `af_` 前缀。例如，`af_replicaSet=myrs` 会把 `replicaSet` 传给 MongoDB plugin。

## 官方文档

* [TablePro URL Scheme](https://docs.tablepro.app/external-api/url-scheme)
