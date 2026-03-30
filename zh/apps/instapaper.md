---
url: /protocol-launcher/zh/apps/instapaper.md
---

# Instapaper

[Instapaper](https://instapaper.com/) 是一项稍后阅读服务，允许您保存网页和文章以供以后阅读。**Protocol Launcher** 允许您使用 x-callback-url 标准生成深度链接以将 URL 添加到 Instapaper。

## 使用方式

有两种使用此库的方式：

* 按需导入（On-Demand）：从子路径导入支持 tree-shaking，保持较小的打包体积。
* 完整导入（Full Import）：从根包导入更方便，但会包含所有应用模块。

生产构建建议选择按需导入；快速脚本或演示可以使用完整导入。

### 添加 URL

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'add' : 'instapaper' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'instapaper.'}}add({
  url: 'https://example.com/article',
  xSource: 'MyReader',
  xSuccess: 'myapp://success',
})
```
