---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue'
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue'
import { open, add, project } from 'protocol-launcher/story-planner'
import { SelectInstallationMethod } from '../../.vitepress/components'
import { addParams, projectParams } from '../../.vitepress/constants/story-planner'

const currentMethod = ref('On-Demand')
const importPath = computed(() =>
  currentMethod.value === 'On-Demand' ? 'protocol-launcher/story-planner' : 'protocol-launcher',
)
</script>

# Story Planner

[Story Planner](https://www.storyplanner.app/) 是一款面向作家的强大规划应用，用于构思故事和组织写作项目。**Protocol Launcher** 允许您生成深度链接以打开 Story Planner 并管理您的写作项目。

## 使用方式

有两种使用此库的方式：

- 按需导入（On-Demand）：从子路径导入支持 tree-shaking，保持较小的打包体积。
- 完整导入（Full Import）：从根包导入更方便，但会包含所有应用模块。

生产构建建议选择按需导入；快速脚本或演示可以使用完整导入。

<SelectInstallationMethod v-model="currentMethod" />

### 打开应用

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'storyPlanner' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'storyPlanner.'}}open()
```

<div class="flex justify-center">
  <VPLink :href="open()" target="_self">
    <Button Text>
  </VPLink>
</div>

### 添加项目

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'add' : 'storyPlanner' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'storyPlanner.'}}add({
  title: 'The Master Cat',
})
```

<div class="flex justify-center">
  <VPLink :href="add(addParams)" target="_self">
    <Button Text>
  </VPLink>
</div>

### 打开项目

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'project' : 'storyPlanner' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'storyPlanner.'}}project({
  title: 'My Novel',
  tab: 'characters',
})
```

<div class="flex justify-center">
  <VPLink :href="project(projectParams)" target="_self">
    <Button Text>
  </VPLink>
</div>
