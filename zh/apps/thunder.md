---
url: /protocol-launcher/zh/apps/thunder.md
---

# Thunder

[Thunder](https://www.xunlei.com/) 是一款流行的下载管理器。**Protocol Launcher** 允许你生成深度链接，以自动在 Thunder 中打开下载资源。

## 使用

提供两种使用方式：

* 按需加载（通过子路径导入），支持 Tree Shaking，体积更小。
* 全量导入（从根包导入），使用简单，但会包含所有应用模块。

生产环境建议使用按需加载以减小体积；快速脚本或演示可选择全量导入。

### 下载文件

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'downloadUrl' : 'thunder' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'thunder.'}}downloadUrl({
  url: 'https://raw.githubusercontent.com/zhensherlock/zhensherlock/main/profile-3d-contrib/profile-night-view.svg',
})
```
