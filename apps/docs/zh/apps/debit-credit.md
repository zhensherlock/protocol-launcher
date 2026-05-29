---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { expense, income, transfer } from 'protocol-launcher/debit-credit';
import { SelectInstallationMethod } from '../../.vitepress/components';
import { expenseParams, incomeParams, transferParams } from '../../.vitepress/constants/debit-credit';

const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/debit-credit' : 'protocol-launcher');
</script>

# Debit & Credit

[Debit & Credit](https://debitandcredit.app/) 是一款个人财务应用。**Protocol Launcher** 可以生成 Debit & Credit URL，用于创建支出、收入和转账交易。

## 使用方式

提供两种使用方式：

- 按需加载（通过子路径导入），支持 Tree Shaking，体积更小。
- 全量导入（从根包导入），使用简单，但会包含所有应用模块。

生产环境建议使用按需加载以减小体积；快速脚本或演示可选择全量导入。

<SelectInstallationMethod v-model="currentMethod" />

## URL 方法

以下 helper 对应 Debit & Credit 官方 [URL Schemes](https://debitandcredit.app/help/advanced-features-url-schemes.html) 文档。这里只暴露官方列出的 `expense`、`income` 和 `transfer` action。官方要求 query 参数正确进行 URL 编码；生成链接时会由 `qs()` 处理。

### 支出

使用必填的 `amount` 和 `account` 创建支出。Debit & Credit 文档还为此 action 列出了可选的 `description`、`category`、`payee`、`tag` 和 `notes` 字段。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'expense' : 'debitCredit' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'debitCredit.'}}expense({
  amount: '500.34',
  account: 'Amex',
  category: 'Computers',
  payee: 'Apple Store',
})
```

<div class="flex justify-center">
  <VPLink :href="expense(expenseParams)" target="_self">
    创建支出
  </VPLink>
</div>

### 收入

使用与支出 action 相同的参数创建收入。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'income' : 'debitCredit' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'debitCredit.'}}income({
  amount: '1200',
  account: 'Citibank',
  category: 'Salary',
  payee: 'Work',
})
```

<div class="flex justify-center">
  <VPLink :href="income(incomeParams)" target="_self">
    创建收入
  </VPLink>
</div>

### 转账

使用必填的 `amount`、`source_account` 和 `destination_account` 创建转账。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'transfer' : 'debitCredit' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'debitCredit.'}}transfer({
  amount: '2000',
  source_account: 'Citibank',
  destination_account: 'Amex',
})
```

<div class="flex justify-center">
  <VPLink :href="transfer(transferParams)" target="_self">
    创建转账
  </VPLink>
</div>

## 官方文档

- [Debit & Credit URL Schemes](https://debitandcredit.app/help/advanced-features-url-schemes.html)
