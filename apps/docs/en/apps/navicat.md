---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { conn } from 'protocol-launcher/navicat';
import { SelectInstallationMethod } from '../../.vitepress/components';
import { connParams } from '../../.vitepress/constants/navicat';

const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/navicat' : 'protocol-launcher');
</script>

# Navicat

[Navicat Premium](https://www.navicat.com/en/products/navicat-premium) is a robust, all-in-one database development and management tool that supports MySQL, PostgreSQL, MongoDB, MariaDB, SQL Server, Oracle, SQLite, Redis, and Snowflake. **Protocol Launcher** allows you to generate deep links to open database connections in Navicat.

## Usage

There are two ways to use this library:

- On-Demand import from subpaths enables tree-shaking and keeps bundles small.
- Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

<SelectInstallationMethod v-model="currentMethod" />

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

<div class="flex justify-center">
  <VPLink :href="conn(connParams)" target="_self">
    Open Connection in Navicat
  </VPLink>
</div>
