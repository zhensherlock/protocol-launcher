---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { newContact, openContact, selectFilter, show } from 'protocol-launcher/busycontacts';
import { SelectInstallationMethod } from '../../.vitepress/components';
import {
  newContactParams,
  openContactParams,
  selectFilterParams,
  showContactParams,
} from '../../.vitepress/constants/busycontacts';

const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/busycontacts' : 'protocol-launcher');
</script>

# BusyContacts

[BusyContacts](https://www.busymac.com/busycontacts/) 是一款 macOS 联系人应用。**Protocol Launcher** 可以生成官方 BusyContacts URL handler 链接。

## 使用

这个库有两种使用方式：

- 从子路径按需导入，支持 Tree Shaking 并保持较小的包体积。
- 从根包完整导入更适合快速脚本或演示，但会包含所有应用模块。

生产构建建议选择按需导入；完整导入适合快速脚本或演示。

<SelectInstallationMethod v-model="currentMethod" />

BusyMac 官方文档列出了 `busycontacts://show/`、`busycontacts://open/`、`busycontacts://new/`、`busycontacts://filter/` 和 `busycontacts://backup`。本模块只覆盖这些已记录的 handler。

### 显示联系人

通过 UID、X-ABUID 或邮箱地址显示联系人。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'show' : 'busycontacts' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'busycontacts.'}}show({
  identifier: 'test@apple.com',
})
```

<div class="flex justify-center">
  <VPLink :href="show(showContactParams)" target="_self">
    显示联系人
  </VPLink>
</div>

### 打开联系人窗口

在单独的浮动窗口中打开联系人。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openContact' : 'busycontacts' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'busycontacts.'}}openContact({
  identifier: 'B8FB81A6-659D-4E66-B1B7-97A95A144C83:ABPerson',
})
```

<div class="flex justify-center">
  <VPLink :href="openContact(openContactParams)" target="_self">
    打开联系人窗口
  </VPLink>
</div>

### 新建联系人

使用 BusyContacts 的自然语言字符串创建新联系人。需要通讯录提示时，将官方记录的 ` /Hint` 后缀包含在同一个字符串里。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'newContact' : 'busycontacts' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'busycontacts.'}}newContact({
  text: 'Bob Jones 555-1212',
})
```

<div class="flex justify-center">
  <VPLink :href="newContact(newContactParams)" target="_self">
    新建联系人
  </VPLink>
</div>

### 选择筛选器

按精确名称选择 BusyContacts Smart Filter。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'selectFilter' : 'busycontacts' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'busycontacts.'}}selectFilter({
  name: 'friends',
})
```

<div class="flex justify-center">
  <VPLink :href="selectFilter(selectFilterParams)" target="_self">
    选择筛选器
  </VPLink>
</div>

### 备份

在 BusyContacts 配置的默认备份位置创建备份。由于该 URL 会触发后台备份，这里只展示生成的字符串，不提供启动按钮。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'backup' : 'busycontacts' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'busycontacts.'}}backup()
```

## 生成的 URL

```ts
show({ identifier: 'test@apple.com' })
// => 'busycontacts://show/test@apple.com'

show({ identifier: 'f90221ac-84a8-4f40-a699-5930b59a24d1' })
// => 'busycontacts://show/f90221ac-84a8-4f40-a699-5930b59a24d1'

openContact({ identifier: 'B8FB81A6-659D-4E66-B1B7-97A95A144C83:ABPerson' })
// => 'busycontacts://open/B8FB81A6-659D-4E66-B1B7-97A95A144C83:ABPerson'

newContact({ text: 'Bob Jones 555-1212' })
// => 'busycontacts://new/Bob%20Jones%20555-1212'

newContact({ text: 'Bob Jones 123 Main Street, Anytown USA /iCloud' })
// => 'busycontacts://new/Bob%20Jones%20123%20Main%20Street,%20Anytown%20USA%20/iCloud'

selectFilter({ name: 'friends' })
// => 'busycontacts://filter/friends'

selectFilter({ name: 'Team Contacts' })
// => 'busycontacts://filter/Team%20Contacts'

backup()
// => 'busycontacts://backup'
```

## 官方文档

- [BusyContacts URL Handler](https://www.busymac.com/docs/busycontacts/56235-url-handler)
