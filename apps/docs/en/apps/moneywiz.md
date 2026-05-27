---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { expense, income, transfer, updateHolding } from 'protocol-launcher/moneywiz';
import { SelectInstallationMethod } from '../../.vitepress/components';
import {
  expenseParams,
  incomeParams,
  transferParams,
  updateHoldingParams,
} from '../../.vitepress/constants/moneywiz';

const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/moneywiz' : 'protocol-launcher');
</script>

# MoneyWiz

[MoneyWiz](https://wiz.money/) is a personal finance app for tracking accounts, budgets, transactions, and investments. **Protocol Launcher** allows you to generate MoneyWiz deep links for transaction templates and holding price updates.

## Usage

There are two ways to use this library:

- On-Demand import from subpaths enables tree-shaking and keeps bundles small.
- Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

<SelectInstallationMethod v-model="currentMethod" />

## URL Methods

The helpers below mirror MoneyWiz's official [URL Schemas](https://help.wiz.money/en/articles/4525440-automate-transaction-management-with-url-schemas) documentation. Only the documented `expense`, `income`, `transfer`, and `updateholding` operations are exposed. Account names should be provided without spaces.

### Expense

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

<div class="flex justify-center">
  <VPLink :href="expense(expenseParams)" target="_self">
    Create Expense
  </VPLink>
</div>

### Income

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

<div class="flex justify-center">
  <VPLink :href="income(incomeParams)" target="_self">
    Create Income
  </VPLink>
</div>

### Transfer

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'transfer' : 'moneywiz' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'moneywiz.'}}transfer({
  account: 'Checking',
  toAccount: 'Savings',
  amount: '250.00',
  save: false,
})
```

<div class="flex justify-center">
  <VPLink :href="transfer(transferParams)" target="_self">
    Create Transfer
  </VPLink>
</div>

### Update Holding

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'updateHolding' : 'moneywiz' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'moneywiz.'}}updateHolding({
  symbol: 'AAPL',
  price: 189.98,
  date: '20260527',
  currency: 'USD',
})
```

## Generated URLs

```ts-vue
expense(expenseParams)
// moneywiz://expense?amount=5.99&account=Wallet&currency=EUR&category=Other&save=false

income(incomeParams)
// moneywiz://income?amount=1200.00&account=Checking&currency=USD&payee=Acme%20Payroll&category=Salary&save=false

transfer(transferParams)
// moneywiz://transfer?account=Checking&toAccount=Savings&amount=250.00&save=false

updateHolding(updateHoldingParams)
// moneywiz://updateholding?symbol=AAPL&price=189.98&date=20260527&currency=USD
```
