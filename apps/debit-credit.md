---
url: /protocol-launcher/apps/debit-credit.md
---

# Debit & Credit

[Debit & Credit](https://debitandcredit.app/) is a personal finance app. **Protocol Launcher** allows you to generate Debit & Credit URLs for creating expense, income, and transfer transactions.

## Usage

There are two ways to use this library:

* On-Demand import from subpaths enables tree-shaking and keeps bundles small.
* Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

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

## Official Documentation

* [Debit & Credit URL Schemes](https://debitandcredit.app/help/advanced-features-url-schemes.html)
