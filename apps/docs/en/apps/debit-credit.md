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

[Debit & Credit](https://debitandcredit.app/) is a personal finance app. **Protocol Launcher** allows you to generate Debit & Credit URLs for creating expense, income, and transfer transactions.

## Usage

There are two ways to use this library:

- On-Demand import from subpaths enables tree-shaking and keeps bundles small.
- Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

<SelectInstallationMethod v-model="currentMethod" />

## URL Methods

The helpers below mirror Debit & Credit's official [URL Schemes](https://debitandcredit.app/help/advanced-features-url-schemes.html) documentation. Only the documented `expense`, `income`, and `transfer` actions are exposed. The official query parameters must be URL-encoded; `qs()` handles that for generated links.

### Expense

Create an expense with required `amount` and `account`. Debit & Credit documents optional `description`, `category`, `payee`, `tag`, and `notes` fields for this action.

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
    Create Expense
  </VPLink>
</div>

### Income

Create income with the same arguments documented for the expense action.

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
    Create Income
  </VPLink>
</div>

### Transfer

Create a transfer with required `amount`, `source_account`, and `destination_account`.

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
    Create Transfer
  </VPLink>
</div>

## Official Documentation

- [Debit & Credit URL Schemes](https://debitandcredit.app/help/advanced-features-url-schemes.html)
