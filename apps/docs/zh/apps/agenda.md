---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { 
  appendToNote, 
  createCategory, 
  createNote, 
  createProject, 
  getIdentifier, 
  getSelectedNote, 
  getSelectedProject, 
  getSelection, 
  onTheAgenda, 
  openNote, 
  openOverview, 
  openProject, 
  openSearch, 
  replaceNote, 
  today 
} from 'protocol-launcher/agenda';
import { SelectInstallationMethod } from '../../.vitepress/components';
import {
  createNoteParams,
  createProjectParams,
  createCategoryParams,
  openNoteParams,
  openProjectParams,
  openOverviewParams,
  appendToNoteParams,
  replaceNoteParams,
} from '../../.vitepress/constants/agenda';

const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/agenda' : 'protocol-launcher');
</script>

# Agenda

[Agenda](https://agenda.community/) 是一款专为创意人士和专业人士设计的笔记应用，让您能够按日期组织想法。**Protocol Launcher** 允许您生成深度链接，以在 Agenda 中创建和管理笔记、项目和分类。

## 使用方式

有两种使用此库的方式：

- 按需导入（On-Demand）：从子路径导入支持 tree-shaking，保持较小的打包体积。
- 完整导入（Full Import）：从根包导入更方便，但会包含所有应用模块。

生产构建建议选择按需导入；快速脚本或演示可以使用完整导入。

<SelectInstallationMethod v-model="currentMethod" />

### 创建笔记

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'createNote' : 'agenda' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'agenda.'}}createNote({
  title: '会议记录',
  text: '讨论项目路线图',
  projectTitle: '工作',
  onTheAgenda: true,
  date: '2024-01-15',
})
```

<div class="flex justify-center">
  <VPLink :href="createNote(createNoteParams)" target="_self">
    在 Agenda 中创建笔记
  </VPLink>
</div>

### 创建项目

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'createProject' : 'agenda' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'agenda.'}}createProject({
  title: '新项目',
  categoryTitle: '工作',
  select: true,
  sortOrder: 'newest-first',
})
```

<div class="flex justify-center">
  <VPLink :href="createProject(createProjectParams)" target="_self">
    在 Agenda 中创建项目
  </VPLink>
</div>

### 创建分类

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'createCategory' : 'agenda' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'agenda.'}}createCategory({
  title: '新分类',
})
```

<div class="flex justify-center">
  <VPLink :href="createCategory(createCategoryParams)" target="_self">
    在 Agenda 中创建分类
  </VPLink>
</div>

### 打开笔记

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openNote' : 'agenda' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'agenda.'}}openNote({
  title: '与 Peta 的会议',
  projectTitle: '工作',
})
```

<div class="flex justify-center">
  <VPLink :href="openNote(openNoteParams)" target="_self">
    在 Agenda 中打开笔记
  </VPLink>
</div>

### 打开项目

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openProject' : 'agenda' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'agenda.'}}openProject({
  title: '工作项目',
})
```

<div class="flex justify-center">
  <VPLink :href="openProject(openProjectParams)" target="_self">
    在 Agenda 中打开项目
  </VPLink>
</div>

### 打开概览

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openOverview' : 'agenda' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'agenda.'}}openOverview({
  title: '本周',
})
```

<div class="flex justify-center">
  <VPLink :href="openOverview(openOverviewParams)" target="_self">
    在 Agenda 中打开概览
  </VPLink>
</div>

### 打开搜索

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openSearch' : 'agenda' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'agenda.'}}openSearch({
  query: '#重要',
})
```

<div class="flex justify-center">
  <VPLink :href="openSearch({ query: '#重要' })" target="_self">
    在 Agenda 中打开搜索
  </VPLink>
</div>

### 追加到笔记

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'appendToNote' : 'agenda' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'agenda.'}}appendToNote({
  title: '某些笔记',
  text: '更多文本',
  onTheAgenda: true,
})
```

<div class="flex justify-center">
  <VPLink :href="appendToNote(appendToNoteParams)" target="_self">
    追加到 Agenda 笔记
  </VPLink>
</div>

### 替换笔记

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'replaceNote' : 'agenda' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'agenda.'}}replaceNote({
  title: '某些笔记',
  text: '新内容',
})
```

<div class="flex justify-center">
  <VPLink :href="replaceNote(replaceNoteParams)" target="_self">
    替换 Agenda 笔记
  </VPLink>
</div>

### 获取标识符

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'getIdentifier' : 'agenda' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'agenda.'}}getIdentifier({
  projectTitle: '欢迎',
  title: '尝试事项',
})
```

<div class="flex justify-center">
  <VPLink :href="getIdentifier({ projectTitle: '欢迎', title: '尝试事项' })" target="_self">
    在 Agenda 中获取标识符
  </VPLink>
</div>

### 获取选择

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'getSelection' : 'agenda' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'agenda.'}}getSelection()
```

<div class="flex justify-center">
  <VPLink :href="getSelection()" target="_self">
    在 Agenda 中获取选择
  </VPLink>
</div>

### 获取选中的笔记

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'getSelectedNote' : 'agenda' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'agenda.'}}getSelectedNote()
```

<div class="flex justify-center">
  <VPLink :href="getSelectedNote()" target="_self">
    在 Agenda 中获取选中的笔记
  </VPLink>
</div>

### 获取选中的项目

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'getSelectedProject' : 'agenda' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'agenda.'}}getSelectedProject()
```

<div class="flex justify-center">
  <VPLink :href="getSelectedProject()" target="_self">
    在 Agenda 中获取选中的项目
  </VPLink>
</div>

### 今天

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'today' : 'agenda' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'agenda.'}}today()
```

<div class="flex justify-center">
  <VPLink :href="today()" target="_self">
    在 Agenda 中打开今天
  </VPLink>
</div>

### 在议程上

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'onTheAgenda' : 'agenda' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'agenda.'}}onTheAgenda()
```

<div class="flex justify-center">
  <VPLink :href="onTheAgenda()" target="_self">
    在 Agenda 中打开在议程上
  </VPLink>
</div>
