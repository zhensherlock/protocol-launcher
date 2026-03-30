---
url: /protocol-launcher/zh/apps/ipgmail.md
---

# iPGMail

[iPGMail](https://ipgmail.com/) 是一款适用于 iOS 和 macOS 的 OpenPGP 加密工具。**Protocol Launcher** 允许您生成深度链接以在 iPGMail 中加密、解密、签名和撰写加密邮件。

## 使用方式

有两种使用此库的方式：

* 按需导入（On-Demand）：从子路径导入支持 tree-shaking，保持较小的打包体积。
* 完整导入（Full Import）：从根包导入更方便，但会包含所有应用模块。

生产构建建议选择按需导入；快速脚本或演示可以使用完整导入。

### 撰写邮件

直接在 iPGMail 中撰写新的加密邮件。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'compose' : 'ipgmail' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'ipgmail.'}}compose({
  text: 'This is a test...',
})
```

### 解密

解密 PGP 消息并将状态返回给调用者。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'decrypt' : 'ipgmail' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'ipgmail.'}}decrypt({
  pgpmsg: 'clipboard',
  result: 'clipboard',
})
```

### 加密

加密一段纯文本，并将其保存到文件或返回给请求的应用程序。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'encrypt' : 'ipgmail' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'ipgmail.'}}encrypt({
  datasource: 'clipboard',
  keyid: '47E3234C',
  result: 'clipboard',
})
```

### 签名

对一段纯文本进行签名，并将其保存到文件或返回给请求的应用程序。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'sign' : 'ipgmail' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'ipgmail.'}}sign({
  datasource: 'clipboard',
  signkey: '47E3234C',
  result: 'clipboard',
})
```
