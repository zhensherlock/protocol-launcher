---
url: /protocol-launcher/zh/apps/itsycal.md
---

# Itsycal

[Itsycal](https://www.mowglii.com/itsycal/) 是 Mac 的一款小型菜单栏日历应用。**Protocol Launcher** 允许您生成深度链接以打开 Itsycal 并导航到特定日期。

## 使用方式

有两种使用此库的方式：

* 按需导入（On-Demand）：从子路径导入支持 tree-shaking，保持较小的打包体积。
* 完整导入（Full Import）：从根包导入更方便，但会包含所有应用模块。

生产构建建议选择按需导入；快速脚本或演示可以使用完整导入。

### 打开 Itsycal

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'itsycal' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'itsycal.'}}open()
```

### 打开特定日期

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openDate' : 'itsycal' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'itsycal.'}}openDate({
  date: '2024-01-10',
})
```

### 打开今天

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openDate' : 'itsycal' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'itsycal.'}}openDate()
```
