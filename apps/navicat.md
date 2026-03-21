---
url: /protocol-launcher/apps/navicat.md
---

# Navicat

[Navicat Premium](https://www.navicat.com/en/products/navicat-premium) is a robust, all-in-one database development and management tool that supports MySQL, PostgreSQL, MongoDB, MariaDB, SQL Server, Oracle, SQLite, Redis, and Snowflake. **Protocol Launcher** allows you to generate deep links to open database connections in Navicat.

## Usage

There are two ways to use this library:

* On-Demand import from subpaths enables tree-shaking and keeps bundles small.
* Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

### Open Connection

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'conn' : 'navicat' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'navicat.'}}conn({
  protocol: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  name: 'My Database',
})
```
