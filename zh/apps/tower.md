---
url: /protocol-launcher/zh/apps/tower.md
---

# Tower

[Tower](https://www.git-tower.com/mac/) 是一款适用于 Mac 和 Windows 的 Git 客户端。**Protocol Launcher** 允许你生成 Tower 官方文档中的自定义 URL Scheme，用于打开 Tower 并提示克隆远程仓库。

## 使用

提供两种使用方式：

* 按需加载（通过子路径导入），支持 Tree Shaking，体积更小。
* 全量导入（从根包导入），使用简单，但会包含所有应用模块。

生产环境建议使用按需加载以减小体积；快速脚本或演示可选择全量导入。

### 打开仓库

Tower 官方文档给出的 URL 格式是 `gittower://openRepo/<remote-repository-URL>`。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openRepo' : 'tower' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'tower.'}}openRepo({
  remoteRepositoryUrl: 'git@example.beanstalkapp.com:/project.git',
})
```
