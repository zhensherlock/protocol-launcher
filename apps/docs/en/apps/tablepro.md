---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { connect, openTable, openQuery } from 'protocol-launcher/tablepro';
import { SelectInstallationMethod } from '../../.vitepress/components';
import {
  connectParams,
  openTableParams,
  openQueryParams,
} from '../../.vitepress/constants/tablepro';

const currentMethod = ref('On-Demand');
const importPath = computed(() =>
  currentMethod.value === 'On-Demand' ? 'protocol-launcher/tablepro' : 'protocol-launcher',
);
</script>

# TablePro

[TablePro](https://tablepro.app/) is a database client for browsing, querying, and managing databases. **Protocol Launcher** allows you to generate TablePro URL scheme links.

## Usage

There are two ways to use this library:

- On-Demand import from subpaths enables tree-shaking and keeps bundles small.
- Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

<SelectInstallationMethod v-model="currentMethod" />

## Notes

TablePro documents the `tablepro://` scheme for GUI navigation and integration bootstrap flows. The scheme covers navigating to a connection, table, or query tab, plus MCP pairing and integration bootstrapping. Data exchange is not part of the URL scheme.

Connection paths use the connection UUID, not the display name. TablePro removed older `tablepro://connect/<name>/...` paths in version 0.37, so this module only generates UUID-keyed URLs.

The query URL opens a new query tab with SQL pre-filled; TablePro shows a confirmation dialog and does not auto-execute the SQL. TablePro documents a 51,200-character cap for SQL passed through the URL scheme. Connection import URLs never accept passwords.

### Connect

Open a saved TablePro connection by UUID.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'connect' : 'tablepro' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'tablepro.'}}connect({
  connectionId: '9f1f0c3e-2e3d-4b14-9c3a-1d2f4ad1f6f1',
})
```

<div class="flex justify-center">
  <VPLink :href="connect(connectParams)" target="_self">
    Open TablePro Connection
  </VPLink>
</div>

### Open Table

Open a table in the current database, in a specific database, or in a specific database and schema.

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

<div class="flex justify-center">
  <VPLink :href="openTable(openTableParams)" target="_self">
    Open Table in TablePro
  </VPLink>
</div>

### Open Query

Open a new query tab with SQL pre-filled.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openQuery' : 'tablepro' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'tablepro.'}}openQuery({
  connectionId: '9f1f0c3e-2e3d-4b14-9c3a-1d2f4ad1f6f1',
  sql: 'SELECT * FROM users LIMIT 10',
})
```

<div class="flex justify-center">
  <VPLink :href="openQuery(openQueryParams)" target="_self">
    Open Query in TablePro
  </VPLink>
</div>

### Pair

Start a TablePro MCP pairing flow. TablePro returns a one-time code via the `redirect` URL after user approval. The requested `scopes` values documented by TablePro are `readOnly`, `readWrite`, and `fullAccess`. If omitted, `scopes` defaults to `readOnly` and `connection-ids` defaults to all. The query parameters are a request, not a grant.

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

### Start MCP

Lazy-start the TablePro MCP server. TablePro starts the server on a free port in the `51000-52000` range and writes a handshake file at `~/Library/Application Support/TablePro/mcp-handshake.json`.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'startMCP' : 'tablepro' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'tablepro.'}}startMCP()
```

### Import Connection

Create a saved connection from URL parameters and open TablePro's connection editor for review. Required parameters are `name`, `host`, and `type`.

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

Core parameters from the official URL scheme are `port`, `username`, `database`, `color`, `tagName`, `groupName`, `safeModeLevel`, and `aiPolicy`. `safeModeLevel` accepts `silent`, `alert`, `alertFull`, `safeMode`, `safeModeFull`, or `readOnly`. `aiPolicy` accepts `useDefault`, `alwaysAllow`, `askEachTime`, or `never`.

SSH parameters from the official URL scheme are `sshHost`, `sshPort`, `sshUsername`, `sshAuthMethod`, `sshPrivateKeyPath`, `sshUseSSHConfig`, `sshAgentSocketPath`, `sshJumpHosts`, and `sshTotpMode`. Set `ssh=1` to enable SSH tunneling. `sshAuthMethod` accepts `password`, `privateKey`, `agent`, or `keyboardInteractive`.

SSL parameters from the official URL scheme are `sslMode`, `sslCaCertPath`, `sslClientCertPath`, and `sslClientKeyPath`. `sslMode` accepts `disabled`, `preferred`, `required`, `verify-ca`, or `verify-full`.

Plugin-specific fields use the official `af_` prefix. For example, `af_replicaSet=myrs` passes `replicaSet` to the MongoDB plugin.

## Official Documentation

- [TablePro URL Scheme](https://docs.tablepro.app/external-api/url-scheme)
