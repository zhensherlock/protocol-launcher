---
url: /protocol-launcher/zh/apps/agenda.md
---

# Agenda

[Agenda](https://agenda.community/) 是一款专为创意人士和专业人士设计的笔记应用，让您能够按日期组织想法。**Protocol Launcher** 允许您生成深度链接，以在 Agenda 中创建和管理笔记、项目和分类。

## 使用方式

有两种使用此库的方式：

* 按需导入（On-Demand）：从子路径导入支持 tree-shaking，保持较小的打包体积。
* 完整导入（Full Import）：从根包导入更方便，但会包含所有应用模块。

生产构建建议选择按需导入；快速脚本或演示可以使用完整导入。

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

### 创建分类

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'createCategory' : 'agenda' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'agenda.'}}createCategory({
  title: '新分类',
})
```

### 打开笔记

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openNote' : 'agenda' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'agenda.'}}openNote({
  title: '与 Peta 的会议',
  projectTitle: '工作',
})
```

### 打开项目

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openProject' : 'agenda' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'agenda.'}}openProject({
  title: '工作项目',
})
```

### 打开概览

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openOverview' : 'agenda' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'agenda.'}}openOverview({
  title: '本周',
})
```

### 打开搜索

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openSearch' : 'agenda' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'agenda.'}}openSearch({
  query: '#重要',
})
```

### 追加到笔记

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'appendToNote' : 'agenda' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'agenda.'}}appendToNote({
  title: '某些笔记',
  text: '更多文本',
  onTheAgenda: true,
})
```

### 替换笔记

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'replaceNote' : 'agenda' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'agenda.'}}replaceNote({
  title: '某些笔记',
  text: '新内容',
})
```

### 获取标识符

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'getIdentifier' : 'agenda' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'agenda.'}}getIdentifier({
  projectTitle: '欢迎',
  title: '尝试事项',
})
```

### 获取选择

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'getSelection' : 'agenda' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'agenda.'}}getSelection()
```

### 获取选中的笔记

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'getSelectedNote' : 'agenda' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'agenda.'}}getSelectedNote()
```

### 获取选中的项目

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'getSelectedProject' : 'agenda' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'agenda.'}}getSelectedProject()
```

### 今天

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'today' : 'agenda' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'agenda.'}}today()
```

### 在议程上

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'onTheAgenda' : 'agenda' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'agenda.'}}onTheAgenda()
```
