---
url: /protocol-launcher/zh/apps/moneywiz.md
---

# MoneyWiz

[MoneyWiz](https://wiz.money/) 是一款个人财务管理应用，可用于跟踪账户、预算、交易和投资。**Protocol Launcher** 允许你生成 MoneyWiz 深度链接，用于交易模板和持仓价格更新。

## 使用方式

提供两种使用方式：

* 按需加载（通过子路径导入），支持 Tree Shaking，体积更小。
* 全量导入（从根包导入），使用简单，但会包含所有应用模块。

生产环境建议使用按需加载以减小体积；快速脚本或演示可选择全量导入。

## URL 方法

以下 helper 对应 MoneyWiz 官方 [URL Schemas](https://help.wiz.money/en/articles/4525440-automate-transaction-management-with-url-schemas) 文档。这里只暴露官方列出的 `expense`、`income`、`transfer` 和 `updateholding` 操作。账户名称应按官方要求去掉空格。

### 支出

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'expense' : 'moneywiz' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'moneywiz.'}}expense({
  account: 'Wallet',
  amount: 5.99,
  currency: 'EUR',
  category: 'Other',
  save: false,
})
```

### 收入

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'income' : 'moneywiz' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'moneywiz.'}}income({
  account: 'Checking',
  amount: '1200.00',
  currency: 'USD',
  payee: 'Acme Payroll',
  category: 'Salary',
  save: false,
})
```

### 转账

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'transfer' : 'moneywiz' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'moneywiz.'}}transfer({
  account: 'Checking',
  toAccount: 'Savings',
  amount: '250.00',
  save: false,
})
```

### 更新持仓

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'updateHolding' : 'moneywiz' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'moneywiz.'}}updateHolding({
  symbol: 'AAPL',
  price: 189.98,
  date: '20260527',
  currency: 'USD',
})
```
