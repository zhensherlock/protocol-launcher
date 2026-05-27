---
url: /protocol-launcher/zh/apps/filemaker.md
---

# Claris FileMaker

[Claris FileMaker](https://www.claris.com/filemaker/) 是一款数据库应用平台。**Protocol Launcher** 可以生成 FileMaker Pro URL，用于打开文件和运行脚本。

## 使用方式

提供两种使用方式：

* 按需加载（通过子路径导入），支持 Tree Shaking，体积更小。
* 全量导入（从根包导入），使用简单，但会包含所有应用模块。

生产环境建议使用按需加载以减小体积；快速脚本或演示可选择全量导入。

## URL 方法

以下 helper 对应 Claris 官方 [Opening FileMaker Pro files using a URL](https://help.claris.com/en/pro-help/content/opening-files-url.html) 文档。这里只暴露官方文件打开 URL 与脚本 URL 参数：`script`、`param`、`option` 和本地变量。

### 打开文件

打开共享或本地 FileMaker Pro 文件。官方 URL 格式支持用 `fmp` 交给最后安装的版本处理，也支持用 `fmpXX` 指定主版本号。`address` 可以是 DNS 名称或 IP 地址、表示用户 Documents 文件夹的 `~`，或表示文件已打开的 `$`。可选的 `credentials` payload 对应官方文档里的 `account:password@` URL 片段；示例中不放账号密码。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openFile' : 'filemaker' }} } from '{{ importPath }}'

const hostedUrl = {{currentMethod === 'On-Demand' ? '' : 'filemaker.'}}openFile({
  address: 'sales.example.com',
  filename: 'My Addresses.fmp12',
})

const documentsUrl = {{currentMethod === 'On-Demand' ? '' : 'filemaker.'}}openFile({
  address: '~',
  filename: 'Clients',
})

const versionedUrl = {{currentMethod === 'On-Demand' ? '' : 'filemaker.'}}openFile({
  version: 22,
  address: 'sales.example.com',
  filename: 'My Addresses',
})
```

### 运行脚本

在共享、本地或已打开的文件中运行 FileMaker 脚本。官方格式允许传入脚本参数、用于处理正在运行脚本的 option 值，以及多个本地变量。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'runScript' : 'filemaker' }} } from '{{ importPath }}'

const localUrl = {{currentMethod === 'On-Demand' ? '' : 'filemaker.'}}runScript({
  address: '~',
  filename: 'Clients',
  script: 'ListClients',
})

const parameterUrl = {{currentMethod === 'On-Demand' ? '' : 'filemaker.'}}runScript({
  address: 'sales.example.com',
  filename: 'Clients',
  script: 'ListClients',
  param: 'TopClients',
  option: 3,
  variables: [{ name: 'NumberToList', value: 10 }],
})

const openFileUrl = {{currentMethod === 'On-Demand' ? '' : 'filemaker.'}}runScript({
  address: '$',
  filename: 'Clients',
  script: 'ListClients',
})
```

## 官方文档

* [Opening FileMaker Pro files using a URL](https://help.claris.com/en/pro-help/content/opening-files-url.html)
