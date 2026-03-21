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

[Navicat Premium](https://www.navicat.com/en/products/navicat-premium) 是一款功能强大的数据库开发和管理工具，支持 MySQL、PostgreSQL、MongoDB、MariaDB、SQL Server、Oracle、SQLite、Redis 和 Snowflake。**Protocol Launcher** 允许您生成深度链接以在 Navicat 中打开数据库连接。

## 使用方式

有两种使用此库的方式：

- 按需导入（On-Demand）：从子路径导入支持 tree-shaking，保持较小的打包体积。
- 完整导入（Full Import）：从根包导入更方便，但会包含所有应用模块。

生产构建建议选择按需导入；快速脚本或演示可以使用完整导入。

<SelectInstallationMethod v-model="currentMethod" />

### 打开连接

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
    在 Navicat 中打开连接
  </VPLink>
</div>
